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
} from "@react-email/components";

export const IWD26InviteEmail = ({ name }: { name?: string }) => (
  <Html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>{`
        @media only screen and (max-width: 600px) {
          .email-container {
            width: 100% !important;
            border-radius: 0 !important;
            border-left: none !important;
            border-right: none !important;
          }
          .email-content {
            padding: 0 16px 24px !important;
          }
          .email-title {
            font-size: 20px !important;
            margin: 20px 0 16px !important;
          }
          .email-section-title {
            font-size: 18px !important;
          }
          .email-details-box {
            padding: 16px 18px !important;
            border-radius: 8px !important;
          }
          .email-details-title {
            font-size: 18px !important;
          }
          .email-details-row {
            font-size: 14px !important;
          }
          .email-details-button {
            display: block !important;
            text-align: center !important;
            padding: 12px 20px !important;
            font-size: 15px !important;
          }
          .email-cta-button {
            display: block !important;
            text-align: center !important;
            padding: 14px 20px !important;
            font-size: 16px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .email-paragraph {
            font-size: 14px !important;
            line-height: 24px !important;
          }
          .email-list-item {
            font-size: 14px !important;
            line-height: 20px !important;
          }
          .email-footer-logo {
            width: 220px !important;
          }
        }
      `}</style>
    </Head>
    <Preview>
      International Women's Day 2026 Etkinliğine Davetlisiniz!
    </Preview>
    <Body style={main}>
      <Container style={container} className="email-container">
        {/* Header Image */}
        <Img
          src="https://github.com/alperbayram/test-react-email/blob/main/emails/static/iwd26-header.png?raw=true"
          alt="Women Techmakers - Break The Pattern - IWD 2026"
          width="700"
          height="233"
          style={{ width: "100%", height: "auto", display: "block" }}
        />

        <Section style={content} className="email-content">
          {/* Title */}
          <Text style={title} className="email-title">
            International Women's Day 2026 Etkinliğine Davetlisiniz!
          </Text>

          <Text style={paragraph} className="email-paragraph">
            {name ? `Merhaba ${name},` : "Merhaba,"}
          </Text>

          <Text style={paragraph} className="email-paragraph">
            Google Developer Group Antalya ve Women Techmakers iş birliğiyle,
            International Women's Day 2026 etkinliğinde sizleri de aramızda
            görmekten mutluluk duyacağız!
          </Text>

          <Text style={paragraph} className="email-paragraph">
            <strong style={{ color: mintGreen }}>"Break the Pattern"</strong>{" "}
            temasıyla hazırladığımız bu özel günde; ilham veren konuşmalar,
            girişimcilik hikayeleri ve teknolojiyle şekillenen bir gelecek bizi
            bekliyor.
          </Text>

          {/* Etkinlik Detayları */}
          <Section style={detailsBox} className="email-details-box">
            <Text style={detailsTitle} className="email-details-title">Etkinlik Detayları</Text>
            <Text style={detailRow} className="email-details-row">📅 Tarih: 4 Nisan 2026, Cumartesi</Text>
            <Text style={detailRow} className="email-details-row">🕛 Saat: 12:30 - 16:00</Text>
            <Text style={detailRow} className="email-details-row">
              📍 Yer: Girişimcilik ve Kariyer Ofisi, Konyaaltı/Antalya https://maps.app.goo.gl/GV4Z4F1iKaesqxud6
            </Text>
            <Text style={detailRow} className="email-details-row">🎟️ Etkinlik ücretsizdir.</Text>
            <Button
              style={detailsButton}
              className="email-details-button"
              href="https://kommunity.com/gdg-antalya/events/iwd26-antalya-b7070600"
            >
              Kayıt Ol
            </Button>
          </Section>

          <Hr style={hr} />

          {/* Sizi Neler Bekliyor */}
          <Text style={sectionTitle} className="email-section-title">Sizi Neler Bekliyor?</Text>
          <Text style={listItem} className="email-list-item">
            ✦ İlham verici konuşmacılarla teknoloji sektöründe kadınların rolü
            üzerine söyleşiler
          </Text>
          <Text style={listItem} className="email-list-item">
            ✦ Teknik ve kişisel gelişim atölyeleri
          </Text>
          <Text style={listItem} className="email-list-item">
            ✦ Networking fırsatları ve yeni bağlantılar kurma imkanı
          </Text>
          <Text style={listItem} className="email-list-item">
            ✦ Başarı hikayeleri ve deneyim paylaşımları
          </Text>

          <Hr style={hr} />

          {/* Events Image */}
          <Img
            src="https://github.com/alperbayram/test-react-email/blob/main/emails/static/iwd26-events.jpg?raw=true"
            alt="IWD 2026 Antalya Etkinlik Afisi"
            width="636"
            height="636"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              margin: "10px 0",
            }}
          />

          {/* CTA Button */}
          <Section style={{ textAlign: "center" as const, margin: "30px 0" }}>
            <Button
              style={button}
              className="email-cta-button"
              href="https://kommunity.com/gdg-antalya/events/iwd26-antalya-b7070600"
            >
              Kayıt Ol
            </Button>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Img
              src="https://raw.githubusercontent.com/alperbayram/test-react-email/refs/heads/main/emails/static/gdg-antalya-logo.png"
              alt="Google Developer Group Antalya"
              width="300"
              height="80"
              className="email-footer-logo"
              style={{
                width: "300px",
                maxWidth: "100%",
                height: "auto",
                margin: "0 auto 16px",
              }}
            />
            <Link style={footerLink} href="https://www.instagram.com/gdgantalya">
              @gdgantalya
            </Link>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default IWD26InviteEmail;

// Colors
const mintGreen = "#3DFFC0";
const deepBlue = "#1a37c2";
const darkBlue = "#0f2180";
const white = "#ffffff";
const lightGray = "#f0f2f5";
const textColor = "#2d3748";
const subtextColor = "#525f7f";

// Styles
const main = {
  backgroundColor: lightGray,
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: white,
  margin: "0 auto",
  maxWidth: "700px",
  width: "100%",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  overflow: "hidden",
};

const content = {
  padding: "0 32px 32px",
};

const title = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: deepBlue,
  textAlign: "center" as const,
  lineHeight: "1.3",
  margin: "28px 0 20px",
};

const paragraph = {
  color: textColor,
  fontSize: "15px",
  lineHeight: "26px",
  margin: "12px 0",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "24px 0",
};

const sectionTitle = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: deepBlue,
  margin: "0 0 16px",
};

const listItem = {
  color: textColor,
  fontSize: "15px",
  lineHeight: "22px",
  margin: "8px 0",
  paddingLeft: "4px",
};


const detailsBox = {
  backgroundColor: deepBlue,
  borderRadius: "10px",
  padding: "24px 28px",
  margin: "10px 0",
};

const detailsTitle = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: mintGreen,
  margin: "0 0 16px",
};

const detailRow = {
  fontSize: "15px",
  color: white,
  margin: "8px 0",
  lineHeight: "22px",
};

const detailsButton = {
  backgroundColor: mintGreen,
  borderRadius: "8px",
  color: darkBlue,
  fontSize: "16px",
  fontWeight: "bold" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 32px",
  border: "none",
  marginTop: "16px",
};

const button = {
  backgroundColor: mintGreen,
  borderRadius: "8px",
  color: darkBlue,
  fontSize: "18px",
  fontWeight: "bold" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 40px",
  border: "none",
  boxShadow: "0 4px 12px rgba(26, 55, 194, 0.3)",
};

const footer = {
  textAlign: "center" as const,
  padding: "10px 0 0",
};

const footerText = {
  fontSize: "14px",
  color: subtextColor,
  margin: "0 0 8px",
  fontWeight: "bold" as const,
};

const footerLink = {
  color: deepBlue,
  fontSize: "13px",
  fontWeight: "bold" as const,
  textDecoration: "underline",
};

const copyright = {
  fontSize: "11px",
  color: "#a0aec0",
  margin: "16px 0 0",
};
