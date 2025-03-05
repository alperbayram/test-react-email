import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tailwind, Html, Container, Body, Section, Heading, Img, Text, Row, Column, } from "@react-email/components";
export default function Alperemail() {
    return (_jsx(Html, { lang: "en", dir: "ltr", children: _jsx(Tailwind, { config: {
                theme: {
                    extend: {
                        colors: {
                            brand: "#007291",
                        },
                    },
                },
            }, children: _jsx(Body, { className: "bg-white", children: _jsxs(Container, { className: "bg-[#f3e6d5] p-8", children: [_jsx(Section, { className: "flex justify-center", children: _jsx(Img, { src: `https://img.icons8.com/emoji/48/envelope-.png`, width: "56", height: "56", className: "p-4", alt: "Notion's Logo" }) }), _jsx(Section, { className: "bg-[#f97370]", children: _jsx(Heading, { className: "p-8 font-sans text-white", children: "Thank you for Subscribing to Alper bussines newsletters!" }) }), _jsxs(Section, { className: "bg-white", children: [_jsx(Text, { className: "text-gray-700 px-8 text-md font-sans", children: "Hello" }), _jsx(Text, { className: "text-gray-700 px-8 text-md font-sans", children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }), _jsx(Text, { className: "text-gray-700 px-8 text-md font-sans", children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }), _jsxs(Text, { className: "text-gray-700 px-8 text-md font-sans", children: ["Kind Regards,", _jsx("br", {}), "Alper Bayram"] })] }), _jsx(Section, { children: _jsx(Text, { className: "font-semibold font-sans text-md text-gray-700 text-center", children: "Follows Us On" }) }), _jsx(Section, { style: {
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                            }, children: _jsxs(Row, { children: [_jsx(Column, { style: { paddingRight: 10 }, children: _jsx(Section, { style: {
                                                borderWidth: 1,
                                                borderColor: "black",
                                                borderStyle: "solid",
                                                borderRadius: 50,
                                            }, children: _jsx(Img, { src: `https://img.icons8.com/ios-glyphs/60/facebook-f.png`, width: "16", height: "16", className: "p-1", alt: "Notion's Logo" }) }) }), _jsx(Column, { style: { paddingRight: 10 }, children: _jsx(Section, { style: {
                                                borderWidth: 1,
                                                borderColor: "black",
                                                borderStyle: "solid",
                                                borderRadius: 50,
                                            }, children: _jsx(Img, { src: `https://img.icons8.com/fluency-systems-filled/48/twitter.png`, width: "16", height: "16", className: "p-1", alt: "Notion's Logo" }) }) }), _jsx(Column, { style: { paddingRight: 10 }, children: _jsx(Section, { style: {
                                                borderWidth: 1,
                                                borderColor: "black",
                                                borderStyle: "solid",
                                                borderRadius: 50,
                                            }, children: _jsx(Img, { src: `https://img.icons8.com/ios-filled/50/linkedin-2--v1.png`, width: "16", height: "16", className: "p-1", alt: "Notion's Logo" }) }) }), _jsx(Column, { style: { paddingRight: 10 }, children: _jsx(Section, { style: {
                                                borderWidth: 1,
                                                borderColor: "black",
                                                borderStyle: "solid",
                                                borderRadius: 50,
                                            }, children: _jsx(Img, { src: `https://img.icons8.com/windows/32/pinterest-p.png`, width: "16", height: "16", className: "p-1", alt: "Notion's Logo" }) }) })] }) }), _jsx(Section, { children: _jsx(Text, { className: "font-sans text-sm text-gray-700 text-center", children: "You are receving this email as you signed up for our newsletters." }) })] }) }) }) }));
}
//# sourceMappingURL=alper-email.js.map