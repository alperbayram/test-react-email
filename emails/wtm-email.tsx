import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WomensDayEmail = ({ name, companyName, attachmentUrl }: any) => (
  <Html>
    <Head />
    <Preview>
      GDG Antalya International Women's Day 2025 (IWD'25) Etkinlik Daveti
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          {/* Header Section */}
          <Section style={header}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <Img
                src={`https://raw.githubusercontent.com/alperbayram/test-react-email/refs/heads/main/emails/static/emaillogo.png`}
                alt="GDG Antalya Logo"
                style={{ width: "60px", height: "35px", marginRight: "10px" }}
              />
              <Text style={{ ...logo, margin: "0" }}>
                Google Developer Groups Antalya
              </Text>
            </div>
            <div style={headerContent}>
              <Text style={headline}>
                WTM Antalya <span style={blueText}>IWD'25</span>
              </Text>
              <Text style={subheadline}>International Women's Day 2025</Text>
            </div>
            <div style={illustration}>
              {/* This would be an actual image in production */}
              <Img
                src={`https://raw.githubusercontent.com/alperbayram/test-react-email/refs/heads/main/emails/static/email.png`}
                alt="Woman writing 'impossible to im possible'"
                width="1200"
                height="675"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Section>

          <Hr style={hr} />

          {/* Content Section */}
          <Section>
            <Text style={contentHeading}>
              IWD'25 Kadın Konuşmacı ve Sponsorluk Talebi
            </Text>

            <Text style={paragraph}>Selamlar {name},</Text>
            <Text style={paragraph}>
              Ben Alper Bayram, Yazılım Mühendisiyim ve Women Techmakers (WTM)
              Antalya organizasyon ekibinden yazıyorum. 19 Nisan Cumartesi günü
              Akdeniz Üniversitesi'nde düzenleyeceğimiz International Women's
              Day 2025 (IWD'25) etkinliğimiz için sizleri de aramızda görmekten
              mutluluk duyacağız.
            </Text>
            <Text style={paragraph}>
              WTM, Google tarafından desteklenen ve daha fazla kadının bilim,
              teknoloji, mühendislik ve benzeri sektörlerde yer almasını teşvik
              etmek amacıyla etkinlikler düzenleyen uluslararası bir
              topluluktur. 2017 yılında Google Developer Group (GDG) Antalya
              bünyesinde kurduğumuz WTM Antalya olarak, Türkiye'deki kadın
              girişimci, tasarımcı, geliştirici ve bilişimcileri bir araya
              getiriyoruz.
            </Text>
            <Text style={paragraph}>
              Bu yılki etkinliğimizde hem{" "}
              <span style={{ fontWeight: "bold", color: "#4285F4" }}>
                kadın konuşmacılarımız
              </span>{" "}
              yer alacak hem de teknoloji sektöründe daha çok kadının yer
              almasını destekleyen{" "}
              <span style={{ fontWeight: "bold", color: "#4285F4" }}>
                sponsor firmalara
              </span>{" "}
              ihtiyacımız bulunmaktadır.
            </Text>
            <Text style={paragraph}>
              <span style={{ fontWeight: "bold" }}>{companyName}</span> olarak,
              kadınların teknoloji alanındaki varlığını destekleyen bu önemli
              etkinlikte yanımızda olmanızı ve mümkünse{" "}
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                kadın çalışanlarınızdan konuşmacı{" "}
              </span>
              olarak katılım sağlayabilecek kişileri önermenizi rica ediyoruz.
            </Text>
            <Text style={paragraph}>
              Geçmiş etkinliklerimizde Google, Getir, Akdeniz Üniversitesi,
              Antalya Bilim Üniversitesi, Antalya Teknokent, WebRazzi, binbin,
              Tornet, Konyaaltı Belediyesi, Kodluyoruz, öğrenci kariyer,
              techcareer, Youthall, Coffetainer, Piksel Akademi gibi değerli
              markalar sponsorlarımız arasında yer aldı.
            </Text>
            <Text style={paragraph}>
              Size özel sponsorluk seçeneklerini detaylıca konuşmak için bir
              görüşme ayarlayabilir veya ek bilgi sağlayabiliriz. Etkinliğimize
              vereceğiniz destek, teknoloji alanında daha çok kadının yer alması
              için büyük önem taşımaktadır.
            </Text>
            <Text style={paragraph}>
              Geri dönüşlerinizi bekliyor, iyi çalışmalar diliyorum.
            </Text>
            <Text style={paragraph}>
              Saygılarımla,
              <br />
              Alper Bayram - GDG Antalya
            </Text>

            <div style={{ textAlign: "center", margin: "30px 0" }}>
              <Button
                style={button}
                className="dark-mode-button"
                href="https://calendly.com/gdgantalya/30min"
              >
                Görüşme Planla
              </Button>
            </div>
            <Text
              style={{
                ...paragraph,
                fontSize: "16px",
                marginTop: "15px",
                textAlign: "center" as const,
              }}
            >
              <Link
                style={{
                  ...anchor,
                  fontWeight: "bold",
                  textDecoration: "underline",
                  padding: "8px 0",
                }}
                href={attachmentUrl}
              >
                Ayrıntılı sponsorluk dosyamızı incelemek için tıklayınız.
              </Link>
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Social Media Section - Footer Style */}
          <Section style={socialSection}>
            <Text style={socialText}>Bizi takip edin</Text>

            {/* Instagram Link - Footer Style */}
            <Link
              style={footerSocialLink}
              href="https://www.instagram.com/gdgantalya"
            >
              @gdgantalya
            </Link>

            <Text
              style={{
                ...paragraph,
                textAlign: "center" as const,
                fontSize: "12px",
                marginTop: "15px",
              }}
            >
              © 2025 Google Developer Groups Antalya. Tüm hakları saklıdır.
            </Text>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WomensDayEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0 0 48px",
  marginBottom: "64px",
  maxWidth: "700px", // Genişliği artırdık
  width: "100%",
  border: "1px solid #e6ebf1",
  borderRadius: "5px",
  overflow: "hidden",
};

const box = {
  padding: "0 32px", // İçerideki içeriğin yanlardan iç kenar boşluğunu azalttık
  width: "100%",
};
const header = {
  backgroundColor: "#ffffff",
  padding: "20px 0 0",
  position: "relative" as const,
};

const logo = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#333",
  display: "block",
};

const headerContent = {
  padding: "20px 0",
};

const headline = {
  fontSize: "32px",
  fontWeight: "bold" as const,
  margin: "0",
  lineHeight: "1.2",
  color: "#333",
};

const blueText = {
  color: "#4285F4",
};

const subheadline = {
  fontSize: "16px",
  margin: "5px 0 0",
  color: "#525f7f",
};

const illustration = {
  width: "100%",
  height: "auto",
  backgroundColor: "#4285F4", // Blue background for the illustration
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative" as const,
  overflow: "hidden",
  marginTop: "20px",
  aspectRatio: "1200 / 675",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const contentHeading = {
  fontSize: "22px",
  fontWeight: "bold" as const,
  color: "#333",
  marginBottom: "15px",
};

const paragraph = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  margin: "10px 0",
};

const anchor = {
  color: "#4285F4", // Using Google blue for links
  textDecoration: "none",
};

const button = {
  backgroundColor: "#4285F4", // Google blue
  borderRadius: "5px",
  color: "#fff",
  fontSize: "18px", // Font boyutunu büyüttük
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 30px", // Padding'i artırdık
  margin: "0 auto", // Otomatik kenar boşluğu ile yatay merkezleme
  border: "none",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Hafif gölge ekledik
};

const socialSection = {
  textAlign: "center" as const,
  padding: "20px 0",
};

const socialText = {
  fontSize: "16px",
  color: "#525f7f",
  marginBottom: "15px",
};

// Footer tarzında Instagram link stili
const footerSocialLink = {
  color: "#81bdf4",
  fontSize: "14px",
  fontWeight: "bold" as const,
  textDecoration: "underline",
  display: "inline-block",
  margin: "5px auto",
};

const socialIcons = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
};

const socialLink = {
  textDecoration: "none",
  margin: "0 5px",
};

const socialImg = {
  border: "none",
};
