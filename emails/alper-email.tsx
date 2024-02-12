import React from "react";
import {
  Tailwind,
  Button,
  Head,
  Html,
  Container,
  Body,
  Section,
  Heading,
  Img,
  Text,
  Row,
  Column,
} from "@react-email/components";

export default function Alperemail() {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#007291",
              },
            },
          },
        }}
      >
        <Body className="bg-white">
          <Container className="bg-[#f3e6d5] p-8">
            <Section className="flex justify-center">
              <Img
                src={`https://img.icons8.com/emoji/48/envelope-.png`}
                width="56"
                height="56"
                className="p-4"
                alt="Notion's Logo"
              />
            </Section>
            <Section className="bg-[#f97370]">
              <Heading className="p-8 font-sans text-white">
                Thank you for Subscribing to Alper bussines newsletters!
              </Heading>
            </Section>
            <Section className="bg-white">
              <Text className="text-gray-700 px-8 text-md font-sans">
                Hello
              </Text>
              <Text className="text-gray-700 px-8 text-md font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
              <Text className="text-gray-700 px-8 text-md font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <Text className="text-gray-700 px-8 text-md font-sans">
                Kind Regards,
                <br />
                Alper Bayram
              </Text>
            </Section>
            <Section>
              <Text className="font-semibold font-sans text-md text-gray-700 text-center">
                Follows Us On
              </Text>
            </Section>
            <Section
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Row>
                <Column style={{ paddingRight: 10 }}>
                  <Section
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      borderStyle: "solid",
                      borderRadius: 50,
                    }}
                  >
                    <Img
                      src={`https://img.icons8.com/ios-glyphs/60/facebook-f.png`}
                      width="16"
                      height="16"
                      className="p-1"
                      alt="Notion's Logo"
                    />
                  </Section>
                </Column>
                <Column style={{ paddingRight: 10 }}>
                  <Section
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      borderStyle: "solid",
                      borderRadius: 50,
                    }}
                  >
                    <Img
                      src={`https://img.icons8.com/fluency-systems-filled/48/twitter.png`}
                      width="16"
                      height="16"
                      className="p-1"
                      alt="Notion's Logo"
                    />
                  </Section>
                </Column>
                <Column style={{ paddingRight: 10 }}>
                  <Section
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      borderStyle: "solid",
                      borderRadius: 50,
                    }}
                  >
                    <Img
                      src={`https://img.icons8.com/ios-filled/50/linkedin-2--v1.png`}
                      width="16"
                      height="16"
                      className="p-1"
                      alt="Notion's Logo"
                    />
                  </Section>
                </Column>
                <Column style={{ paddingRight: 10 }}>
                  <Section
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      borderStyle: "solid",
                      borderRadius: 50,
                    }}
                  >
                    <Img
                      src={`https://img.icons8.com/windows/32/pinterest-p.png`}
                      width="16"
                      height="16"
                      className="p-1"
                      alt="Notion's Logo"
                    />
                  </Section>
                </Column>
              </Row>
            </Section>
            <Section>
              <Text className="font-sans text-sm text-gray-700 text-center">
                You are receving this email as you signed up for our newsletters.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
