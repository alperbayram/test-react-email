// index.ts
import express from "express";
import bodyParser from "body-parser";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { WomensDayEmail } from "./emails/wtm-email.js";
import React from "react";
import WomensDayEmailSponsor from "./emails/wtm-sponsor.js";

// __dirname ayarlaması (ESM için)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tiplemeler
interface EmailRecipient {
  email: string;
  name?: string;
  companyName?: string;
  subject?: string;
  attachmentUrl?: string;
  cc?: string[]; // CC için dizi eklendi
}

interface EmailResult {
  email: string;
  status: string;
  messageId?: string;
  message?: string;
}

// Çevre değişkenlerini yükle
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static dosyaları sunmak için
app.use(express.static(path.join(__dirname, "public")));
app.use("*", express.static(path.join(__dirname, "index.html")));

// Email gönderme fonksiyonu
async function sendEmail(
  to: string,
  name: string,
  companyName: string,
  subject: string,
  attachmentUrl?: string,
  cc?: string[] // CC parametresi eklendi
): Promise<any> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const emailHtml = await render(
    React.createElement(WomensDayEmailSponsor, {
      name: name,
      companyName: companyName,
      attachmentUrl:
        "https://drive.google.com/file/d/1_8PkSFFfhASj9pYbKYvIWbXlUQq8Rj7M/view?usp=sharing",
    })
  );

  const options = {
    from: process.env.EMAIL_FROM || "gdgantalya@gmail.com",
    to: to,
    // CC için null kontrolü ekledik
    ...(cc && cc.length > 0 ? { cc: cc } : {}),
    subject: subject || "GDG Antalya IWD'25 Etkinlik Daveti",
    html: emailHtml,
  };

  try {
    const info = await transporter.sendMail(options);
    console.log("E-posta başarıyla gönderildi:", info.messageId);
    console.log("CC Emails:", cc || "Hiç CC yok"); // CC loglaması
    return {
      ...info,
      ccCount: cc ? cc.length : 0,
    };
  } catch (error) {
    console.error("E-posta gönderilirken hata oluştu:", error);
    throw error;
  }
}

// Endpoint kısmında da küçük bir düzenleme
app.post("/send-email", async (req: any, res: any) => {
  try {
    const { to, name, companyName, subject, attachmentUrl, cc } = req.body;

    if (!to) {
      return res.status(400).json({
        status: "error",
        message: "Alıcı e-posta adresi gereklidir",
        error: "Alıcı e-posta adresi gereklidir",
      });
    }

    // CC için doğrulama ve işleme
    let ccEmails: string[] | undefined;
    if (cc && Array.isArray(cc)) {
      // E-posta formatını doğrula
      ccEmails = cc.filter((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    }

    console.log("CC Emails before sending:", ccEmails); // Ek log

    const info = await sendEmail(
      to,
      name || "İlgili Yetkili",
      companyName || "Şirket Adı",
      subject || "GDG Antalya IWD'25 Etkinlik Daveti",
      attachmentUrl,
      ccEmails // CC listesi eklendi
    );

    res.status(200).json({
      status: "success",
      message: "E-posta başarıyla gönderildi",
      data: {
        messageId: info.messageId,
        ccCount: info.ccCount || 0,
      },
    });
  } catch (error: any) {
    console.error("E-posta gönderme hatası:", error);
    res.status(500).json({
      status: "error",
      message: "E-posta gönderilirken bir hata oluştu",
      error: error.message,
    });
  }
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Email servisi http://localhost:${PORT} adresinde çalışıyor`);
});

export default app;
