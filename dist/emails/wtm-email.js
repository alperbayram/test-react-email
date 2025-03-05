import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Body, Button, Container, Head, Hr, Html, Img, Link, Preview, Section, Text, } from "@react-email/components";
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
export const WomensDayEmail = ({ name, companyName, attachmentUrl }) => (_jsxs(Html, { children: [_jsx(Head, {}), _jsx(Preview, { children: "GDG Antalya International Women's Day 2025 (IWD'25) Etkinlik Daveti" }), _jsx(Body, { style: main, children: _jsx(Container, { style: container, children: _jsxs(Section, { style: box, children: [_jsxs(Section, { style: header, children: [_jsxs("div", { style: {
                                        display: "flex",
                                        alignItems: "center",
                                        margin: "10px 0",
                                    }, children: [_jsx(Img, { src: `https://raw.githubusercontent.com/alperbayram/test-react-email/refs/heads/main/emails/static/emaillogo.png`, alt: "GDG Antalya Logo", style: { width: "60px", height: "35px", marginRight: "10px" } }), _jsx(Text, { style: { ...logo, margin: "0" }, children: "Google Developer Groups Antalya" })] }), _jsxs("div", { style: headerContent, children: [_jsxs(Text, { style: headline, children: ["WTM Antalya ", _jsx("span", { style: blueText, children: "IWD'25" })] }), _jsx(Text, { style: subheadline, children: "International Women's Day 2025" })] }), _jsx("div", { style: illustration, children: _jsx(Img, { src: `https://raw.githubusercontent.com/alperbayram/test-react-email/refs/heads/main/emails/static/email.png`, alt: "Woman writing 'impossible to im possible'", width: "1200", height: "675", style: { maxWidth: "100%", height: "auto" } }) })] }), _jsx(Hr, { style: hr }), _jsxs(Section, { children: [_jsx(Text, { style: contentHeading, children: "IWD'25 Kad\u0131n Konu\u015Fmac\u0131 ve Sponsorluk Talebi" }), _jsxs(Text, { style: paragraph, children: ["Selamlar ", name, ","] }), _jsx(Text, { style: paragraph, children: "Ben Alper Bayram, Yaz\u0131l\u0131m M\u00FChendisiyim ve Women Techmakers (WTM) Antalya organizasyon ekibinden yaz\u0131yorum. 19 Nisan Cumartesi g\u00FCn\u00FC Akdeniz \u00DCniversitesi'nde d\u00FCzenleyece\u011Fimiz International Women's Day 2025 (IWD'25) etkinli\u011Fimiz i\u00E7in sizleri de aram\u0131zda g\u00F6rmekten mutluluk duyaca\u011F\u0131z." }), _jsx(Text, { style: paragraph, children: "WTM, Google taraf\u0131ndan desteklenen ve daha fazla kad\u0131n\u0131n bilim, teknoloji, m\u00FChendislik ve benzeri sekt\u00F6rlerde yer almas\u0131n\u0131 te\u015Fvik etmek amac\u0131yla etkinlikler d\u00FCzenleyen uluslararas\u0131 bir topluluktur. 2017 y\u0131l\u0131nda Google Developer Group (GDG) Antalya b\u00FCnyesinde kurdu\u011Fumuz WTM Antalya olarak, T\u00FCrkiye'deki kad\u0131n giri\u015Fimci, tasar\u0131mc\u0131, geli\u015Ftirici ve bili\u015Fimcileri bir araya getiriyoruz." }), _jsxs(Text, { style: paragraph, children: ["Bu y\u0131lki etkinli\u011Fimizde hem", " ", _jsx("span", { style: { fontWeight: "bold", color: "#4285F4" }, children: "kad\u0131n konu\u015Fmac\u0131lar\u0131m\u0131z" }), " ", "yer alacak hem de teknoloji sekt\u00F6r\u00FCnde daha \u00E7ok kad\u0131n\u0131n yer almas\u0131n\u0131 destekleyen", " ", _jsx("span", { style: { fontWeight: "bold", color: "#4285F4" }, children: "sponsor firmalara" }), " ", "ihtiyac\u0131m\u0131z bulunmaktad\u0131r."] }), _jsxs(Text, { style: paragraph, children: [_jsx("span", { style: { fontWeight: "bold" }, children: companyName }), " olarak, kad\u0131nlar\u0131n teknoloji alan\u0131ndaki varl\u0131\u011F\u0131n\u0131 destekleyen bu \u00F6nemli etkinlikte yan\u0131m\u0131zda olman\u0131z\u0131 ve m\u00FCmk\u00FCnse", " ", _jsxs("span", { style: { fontWeight: "bold", textDecoration: "underline" }, children: ["kad\u0131n \u00E7al\u0131\u015Fanlar\u0131n\u0131zdan konu\u015Fmac\u0131", " "] }), "olarak kat\u0131l\u0131m sa\u011Flayabilecek ki\u015Fileri \u00F6nermenizi rica ediyoruz."] }), _jsx(Text, { style: paragraph, children: "Ge\u00E7mi\u015F etkinliklerimizde Google, Getir, Akdeniz \u00DCniversitesi, Antalya Bilim \u00DCniversitesi, Antalya Teknokent, WebRazzi, binbin, Tornet, Konyaalt\u0131 Belediyesi, Kodluyoruz, \u00F6\u011Frenci kariyer, techcareer, Youthall, Coffetainer, Piksel Akademi gibi de\u011Ferli markalar sponsorlar\u0131m\u0131z aras\u0131nda yer ald\u0131." }), _jsx(Text, { style: paragraph, children: "Size \u00F6zel sponsorluk se\u00E7eneklerini detayl\u0131ca konu\u015Fmak i\u00E7in bir g\u00F6r\u00FC\u015Fme ayarlayabilir veya ek bilgi sa\u011Flayabiliriz. Etkinli\u011Fimize verece\u011Finiz destek, teknoloji alan\u0131nda daha \u00E7ok kad\u0131n\u0131n yer almas\u0131 i\u00E7in b\u00FCy\u00FCk \u00F6nem ta\u015F\u0131maktad\u0131r." }), _jsx(Text, { style: paragraph, children: "Geri d\u00F6n\u00FC\u015Flerinizi bekliyor, iyi \u00E7al\u0131\u015Fmalar diliyorum." }), _jsxs(Text, { style: paragraph, children: ["Sayg\u0131lar\u0131mla,", _jsx("br", {}), "Alper Bayram - GDG Antalya"] }), _jsx("div", { style: { textAlign: "center", margin: "30px 0" }, children: _jsx(Button, { style: button, className: "dark-mode-button", href: "https://calendly.com/gdgantalya/30min", children: "G\u00F6r\u00FC\u015Fme Planla" }) }), _jsx(Text, { style: {
                                        ...paragraph,
                                        fontSize: "16px",
                                        marginTop: "15px",
                                        textAlign: "center",
                                    }, children: _jsx(Link, { style: {
                                            ...anchor,
                                            fontWeight: "bold",
                                            textDecoration: "underline",
                                            padding: "8px 0",
                                        }, href: attachmentUrl, children: "Ayr\u0131nt\u0131l\u0131 sponsorluk dosyam\u0131z\u0131 incelemek i\u00E7in t\u0131klay\u0131n\u0131z." }) })] }), _jsx(Hr, { style: hr }), _jsxs(Section, { style: socialSection, children: [_jsx(Text, { style: socialText, children: "Bizi takip edin" }), _jsx(Link, { style: footerSocialLink, href: "https://www.instagram.com/gdgantalya", children: "@gdgantalya" }), _jsx(Text, { style: {
                                        ...paragraph,
                                        textAlign: "center",
                                        fontSize: "12px",
                                        marginTop: "15px",
                                    }, children: "\u00A9 2025 Google Developer Groups Antalya. T\u00FCm haklar\u0131 sakl\u0131d\u0131r." })] })] }) }) })] }));
export default WomensDayEmail;
const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
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
    position: "relative",
};
const logo = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    display: "block",
};
const headerContent = {
    padding: "20px 0",
};
const headline = {
    fontSize: "32px",
    fontWeight: "bold",
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
    position: "relative",
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
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
};
const paragraph = {
    color: "#525f7f",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left",
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
    textAlign: "center",
    display: "inline-block",
    padding: "14px 30px", // Padding'i artırdık
    margin: "0 auto", // Otomatik kenar boşluğu ile yatay merkezleme
    border: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Hafif gölge ekledik
};
const socialSection = {
    textAlign: "center",
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
    fontWeight: "bold",
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
//# sourceMappingURL=wtm-email.js.map