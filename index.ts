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
import { IWD26InviteEmail } from "./emails/iwd26-invite.js";

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

// Config
const PORT = process.env.PORT || 3000;
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
const SMTP_SECURE = process.env.SMTP_SECURE === "true";
const SMTP_USER = process.env.SMTP_USER!;
const SMTP_PASS = process.env.SMTP_PASS!;
const EMAIL_FROM = process.env.EMAIL_FROM || "gdgantalya@gmail.com";

const app = express();

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
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const emailHtml = await render(
    React.createElement(IWD26InviteEmail, {
      name: name,
    })
  );

  const options = {
    from: EMAIL_FROM,
    to: to,
    // CC için null kontrolü ekledik
    ...(cc && cc.length > 0 ? { cc: cc } : {}),
    subject: subject || "IWD'26 Antalya Etkinlik Daveti",
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
      subject || "IWD'26 Antalya Etkinlik Daveti",
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
