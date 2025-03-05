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

export const WomensDayEmail = ({
  name = "İlgili Yetkili",
  companyName = "Şirket Adı",
  attachmentUrl = "https://drive.google.com/file/d/1_8PkSFFfhASj9pYbKYvIWbXlUQq8Rj7M/view?usp=sharing",
}) => (
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
                src={`${baseUrl}/static/emaillogo.png`}
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
                src={`${baseUrl}/static/email.png`}
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
              Bu yılki etkinliğimizde hem kadın konuşmacılarımız yer alacak hem
              de teknoloji sektöründe daha çok kadının yer almasını destekleyen
              sponsor firmalara ihtiyacımız bulunmaktadır.
            </Text>
            <Text style={paragraph}>
              {companyName} olarak, kadınların teknoloji alanındaki varlığını
              destekleyen bu önemli etkinlikte yanımızda olmanızı ve mümkünse
              kadın çalışanlarınızdan konuşmacı olarak katılım sağlayabilecek
              kişileri önermenizi rica ediyoruz.
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
              Alper Bayram
              <br />
              WTM Antalya
            </Text>

            <Button style={button} href="https://calendly.com/gdgantalya/30min">
              Görüşme Planla
            </Button>
            <Text style={{ ...paragraph, fontSize: "14px", marginTop: "10px" }}>
              Ayrıntılı sponsorluk dosyamızı incelemek için{" "}
              <Link style={anchor} href={attachmentUrl}>
                tıklayınız.
              </Link>
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Social Media Section */}
          <Section style={socialSection}>
            <Text style={socialText}>Bizi takip edin</Text>
            <Section
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <div style={{ paddingRight: 10 }}>
                  <div
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      borderStyle: "solid",
                      borderRadius: 50,
                      width: 30,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link href="https://facebook.com/gdgantalya">
                      <Img
                        src="https://img.icons8.com/ios-glyphs/60/facebook-f.png"
                        width="16"
                        height="16"
                        alt="Facebook"
                      />
                    </Link>
                  </div>
                </div>
                <div style={{ paddingRight: 10 }}>
                  <div
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      borderStyle: "solid",
                      borderRadius: 50,
                      width: 30,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link href="https://twitter.com/gdgantalya">
                      <Img
                        src="https://img.icons8.com/fluency-systems-filled/48/twitter.png"
                        width="16"
                        height="16"
                        alt="Twitter"
                      />
                    </Link>
                  </div>
                </div>
                <div style={{ paddingRight: 10 }}>
                  <div
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      borderStyle: "solid",
                      borderRadius: 50,
                      width: 30,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link href="https://linkedin.com/company/gdg-antalya">
                      <Img
                        src="https://img.icons8.com/ios-filled/50/linkedin-2--v1.png"
                        width="16"
                        height="16"
                        alt="LinkedIn"
                      />
                    </Link>
                  </div>
                </div>
                <div style={{ paddingRight: 10 }}>
                  <div
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      borderStyle: "solid",
                      borderRadius: 50,
                      width: 30,
                      height: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link href="https://instagram.com/gdgantalya">
                      <Img
                        src="https://img.icons8.com/ios-filled/50/instagram-new.png"
                        width="16"
                        height="16"
                        alt="Instagram"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Section>
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
  border: "1px solid #e6ebf1",
  borderRadius: "5px",
  overflow: "hidden",
};

const box = {
  padding: "0 48px",
};

const header = {
  backgroundColor: "#ffffff",
  padding: "20px 0 0",
  position: "relative" as const,
};

const logo = {
  fontSize: "14px",
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
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "10px 20px",
  margin: "20px 0",
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
