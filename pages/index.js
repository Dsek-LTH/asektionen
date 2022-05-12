import { Stack, Typography, Paper } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";
import Business from "../components/VectorGraphics/Business";
import Searching from "../components/VectorGraphics/Searching";
import Studying from "../components/VectorGraphics/Studying";
import { KALENDER, NEWS } from "../src/mockData/mockData";

const BackgroundImageContainer = styled(Box)`
  position: absolute;
  bottom: -100px;
  left: 0;
  top: 160px;
  right: 0;
  img {
    object-fit: cover;
  }
`;

const BoxCheck = styled(Box)`
  box-sizing: border-box;

  width: 24px;
  height: 24px;

  background: #29233b;
  border: 2px solid #29233b;
  border-radius: 50px;

  /* Inside auto layout */

  flex: auto;
  order: 0;
`;

const TitleCard = styled(Stack)`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
`;

const Subtitle = styled(Typography)`
  position: relative;
  bottom: 0px;
  color: white;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  line-height: 130%;
  max-width: 1000px;
`;

const ContentStack = styled(Stack)`
  min-height: 300px;
  color: white;
  margin-top: calc(100vh - 50px);
`;

const InformationStack = styled(Stack)`
  text-align: center;
  align-items: center;
  max-width: 21rem;
`;

const Divider = styled(Box)`
  border: 2px solid #ffffff;
  width: 100%;
`;

const Divider2 = styled(Box)`
  width: 255px;
  height: 0px;
  left: 810px;
  bottom: 32px;

  border: 3px solid #ffffff;
  transform: rotate(90deg);
`;

const Socials = styled(Box)`
  position: relative;
  bottom: 0px;
  color: white;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  line-height: 130%;
  max-width: 1000px;
`;

export default function Index() {
  return (
    <>
      <BackgroundImageContainer>
        <Image src="/images/background.jpg" layout="fill" />
        <TitleCard marginTop={15}>
          <Image
            src="/images/lgoo.png"
            width={300}
            height={300}
            layout="fixed"
          />

          <Subtitle>SEKTIONEN FÖR ARKITEKTUR OCH INDUSTRIDESIGN</Subtitle>
          <Subtitle> </Subtitle>
          <Subtitle>LUNDS TEKNISKA HÖGSKOLA</Subtitle>
        </TitleCard>
      </BackgroundImageContainer>
      <ContentStack alignItems="center" padding="4rem" spacing={3}>
        <Stack direction="row" spacing="5rem">
          <InformationStack>
            <Searching />
            <Typography fontSize={24}>Sökande</Typography>
            <Typography fontSize={18}>
              Funderar du att söka dig till A-sektionen? Här hittar du all
              information du behöver för ditt val.
            </Typography>
          </InformationStack>
          <InformationStack>
            <Studying />
            <Typography fontSize={24}>Studerande</Typography>
            <Typography fontSize={18}>
              Här hittar du allt du som student på A-sektionen kan tänkas behöva
              veta.
            </Typography>
          </InformationStack>
          <InformationStack>
            <Business />
            <Typography fontSize={24}>Företag</Typography>
            <Typography fontSize={18}>
              Representerar du ett företag som är intresserad av arkitektur
              eller industridesign? Klicka här för att komma i kontakt med oss!
            </Typography>
          </InformationStack>
        </Stack>
        <Divider />
        <Stack direction="row" spacing={10}>
          <Paper
            style={{ borderRadius: "40px", padding: "2rem", paddingBottom: 0 }}
          >
            <Typography fontWeight={800} fontSize={36} color="background">
              Aktuellt
            </Typography>
            <Stack
              maxHeight="20rem"
              maxWidth="42rem"
              style={{ overflowY: "scroll" }}
            >
              {NEWS.map((newsItem) => (
                <Stack>
                  <Stack padding="1rem 0">
                    <Typography fontSize={24}>{newsItem.title}</Typography>
                    <Typography fontSize={18}>{newsItem.teaser}</Typography>
                  </Stack>
                  <Box style={{ border: "2px solid #29233B" }} />
                </Stack>
              ))}
            </Stack>
          </Paper>
          <Paper style={{ borderRadius: "40px", padding: "2rem" }}>
            <Typography fontWeight={800} fontSize={36} color="background">
              Kalendar
            </Typography>
            <Stack
              maxHeight="20rem"
              maxWidth="27rem"
              style={{ overflowY: "scroll" }}
            >
              {KALENDER.map((newsItem) => (
                <Stack direction="row" padding="1rem 0" alignItems="center">
                  <Stack margin="10px">
                    {" "}
                    <BoxCheck></BoxCheck>
                  </Stack>

                  <Stack>
                    <Typography direction="row" fontSize={24}>
                      {" "}
                      {newsItem.title}
                    </Typography>
                    <Typography fontSize={18}>{newsItem.teaser}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Stack>
        <Divider />
        <Stack direction="row" padding="px">
          <Stack>
            <Socials>Följ oss på våra socialamedier</Socials>
            <Stack margin="40px" direction="row">
              {" "}
              <Stack padding="10px" margin="60px">
                <Image
                  src="/images/Vector.png"
                  width={90}
                  height={90}
                  layout="fixed"
                />
              </Stack>
              <Stack padding="10px" margin="60px">
                <Image
                  src="/images/f.png"
                  width={50}
                  height={90}
                  layout="fixed"
                />
              </Stack>
              <Stack
                padding="10px"
                marginTop="60px"
                marginLeft="60px"
                marginBottom="60px"
                marginRight="0px"
              >
                <Image
                  src="/images/networking.png"
                  width={90}
                  height={90}
                  layout="fixed"
                />
              </Stack>
            </Stack>{" "}
          </Stack>
          <Stack marginTop="160px">
            <Divider2 />
          </Stack>
          <Stack>
            <Socials>Kontakta oss </Socials>

            <Stack margin="10px" marginTop="70px">
              {" "}
              <Image
                src="/images/mail.png"
                width={240}
                height={130}
                layout="fixed"
              />
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Typography fontSize={24} textAlign="center" maxWidth="70rem">
          Sektionen för Arkitektur och Industridesign, A-sektionen, är en ideell
          förening och har som ändamål att verka för sammanhållning och god
          anda, att främja sina medlemmars studier och utbildning samt att
          tillvarata deras gemensamma intressen och göra deras tid i Lund så bra
          som möjligt!
        </Typography>
        <Typography fontSize={24} textAlign="center" maxWidth="70rem">
          A-sektionen drivs av studenter på Arkitektur- respektive
          Industridesignutbildningen på Lunds Tekniska Högskola och är en del av
          Teknologkåren vid LTH.
        </Typography>
      </ContentStack>
      <Stack></Stack>
    </>
  );
}
