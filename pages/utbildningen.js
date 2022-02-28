import { Paper, Stack, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  width: 100%;
  //text-align: center;
  flex-direction: column;
  max-width: 1350px;
  border-radius: 135px;
  max-height: 1981px;
`;

const StyledPicture = styled(Paper)`
  width: 50px;
  height: 30px;
`;

export default function UtbildningenPage() {
  return (
    <Stack alignItems="center">
      <img
        src="/images/Trollface_non-free.png"
        layout="fill"
        width="40"
        height="50"
      />

      <StyledPaper>
        <Typography
          variant="h1"
          fontSize="96px"
          fontWeight="bold"
          allign="center"
        >
          UTBILDNINGEN
        </Typography>
        <Typography variant="h1" fontSize="30px" fontWeight="bold">
          ARKITEKTUR
        </Typography>
        <Typography fontSize="12px" fontWeight="bold" allign="right">
          På arkitektutbildningen lär vi oss att gestalta, förmedla och
          reflektera kring arkitektur. Centralt under utbildningen är arbetet i
          ateljén. Det är där den mest av skoltiden tillbringas och utrymmet för
          utbyte mellan oss studenter inom skolans ramar blir som störst. Under
          de två första åren på utbildningen delas ateljéerna över årskullarna,
          så att ettor arbetar jämte och tillsammans med tvåor och vice versa.
          Arbetet sker delvis individuellt och delvis i grupp. Detta gäller
          såväl för övergripande gestaltningskurser vilka äger rum till största
          del i den egna ateljén, som för kurser i teori- och historia, teknik
          och digitala verktyg. Utöver ateljéer har vi även generös tillgång
          till delade datorsalar, gemensamma verkstäder och ett eget bibliotek.
          <br></br>
          <br></br> Kärnan i undervisningen är att lära sig gestalta och förstå
          sig på byggnader, städer och rum. Framställningsformerna skiftar
          mellan skisser, modeller och ritningar, och texter, planscher och
          prototyper i skala 1:1. Skalan varierar mellan möbeln, det enskilda
          rummet och den byggda miljön i stort. Den rör sig mellan bostaden till
          stadens sammanhang och förutsättningarna för våra samhällen. Som en
          del av utbildningen ingår valbara studieresor till både när och
          fjärran, som finns till som ett sätt för oss att bekanta oss med
          arkitekturkontexter som skiljer sig från vår egen. Eftersom arkitektur
          växer fram utifrån plats, kultur, klimat och historia utgör detta en
          viktig del av utbildningen.
          <br></br>
          <br></br>I takt med utbildningens gång växer den individuella friheten
          att utforma den egna utbildningen efter fördjupningsintresse och
          utvecklingslust. Vidare tränas vi genom utbildningen i att utveckla
          våra egna uttryckssätt och att kritiskt förhålla oss till den byggda
          miljön i dess specifika ekonomiska, politiska och religiösa
          sammanhang. Likaså odlar vi genomgående vår förmåga i kommunikation
          och mottagande av konstruktiv kritik genom presentationer för olika
          personer som är yrkesverksamma inom det vida arbetsfält som kan
          rubriceras som branschen arkitektur. Ett mål med utbildningen är att
          vi efterhand ska lära oss att ta oss an framtidens samhällsutmaningar
          ifråga om den byggda miljön, och under lärandevägen bildar vi
          kontakter, gemenskaper och vänskapsband för livet.
        </Typography>

        <Typography variant="h1" fontSize="30px" fontWeight="bold">
          INDUSTRIDESIGN{" "}
        </Typography>

        <Typography fontSize="12px" fontWeight="bold" allign="right">
          På Industridesign lär vi oss att gå från en problemställning eller idé
          till lösning och färdig produkt. En väg som kan vara lång och varierad
          vilket kräver en stor bredd av verktyg. Vitränas bland annat i att
          skissa analogt och digitalt, tillverka prototyper i verkstaden och
          3D-modellera för att bättre förmedla våra
          idéer.[/bsf-info-box][bsf-info-box icon_size=”32″]En ständigt
          återkommande mening på industridesign är ”form follows function”.
          Uttrycket innebär att produktens form är en direkt konsekvens av dess
          användning och sammanhang. Därav blir det nödvändigt för oss blivande
          designers att kunna sätta oss in i och förstå nya sammanhang och
          användare. Därför utvecklar vi förmågan att arbeta gränsöverskridande,
          ta oss an nya vetenskapsområden och inte skrämmas av det okända.
          <br></br>
          <br></br>
          Det kan röra sig om ergonomi när man tillverkar ett förarsäte i en
          bil, livsmedelshantering när det gäller förpackningar, eller
          utvecklingspsykologi när det kommer till lekplatsdesign. Samma gäller
          för val av material och tillverkning; vi måste hela tiden göra val som
          grundar sig i estetiska, tekniska, industriella, ekonomiska, etiska
          och hållbara beslut. Valen kräver bred kunskap och det hjälper att
          vara nyfikenhet av sig! Vidare tränas vi i att dokumentera, presentera
          och diskutera det vi gör; ta emot och ge konstruktiv kritik. Vi
          arbetar enskilt, i grupp, med handledning av lärare och i kontakt med
          utomstående aktörer; tekniskt och konstnärligt. Med tiden blir höger
          och vänster hjärnhalva bästa vänner.[/bsf-info-box][bsf-info-box
          icon_size=”32″]”Kilen” som är ytan där vi har våra ritsalar, kaffe-,
          lunch- och pratstunder är en perfekt plats för att inspireras,
          brainstormaoch ta hjälp av varandra. Mängden utbytesstudenter och
          internationella lärare gör att erfarenhetsutbytet blir ännu större och
          arbetsplatsen mer spännande och verklighetsanknuten.
        </Typography>
        <Typography></Typography>
      </StyledPaper>
    </Stack>
  );
}
