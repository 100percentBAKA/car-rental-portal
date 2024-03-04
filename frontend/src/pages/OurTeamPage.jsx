import tImg1 from "../assets/team-1.jpg";
import tImg3 from "../assets/team-2.jpg";
import tImg4 from "../assets/team-4.jpeg";
import tImg5 from "../assets/team-5.jpeg";
import tImg6 from "../assets/Photo.jpg";

import { Box, styled } from "@mui/material";
import CustomH3 from "../components/CustomH3";

import HoverCard from "../components/HoverCard";
import HeroBanner from "../components/HeroBanner";
import FAQs from "../sections/FAQs";

//? styled components
const StyledMainCtn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "60%",
  margin: "auto",
  gap: theme.spacing(10),
}));

export default function OurTeam() {
  return (
    <Box>
      <HeroBanner />
      <Box sx={{ display: "flex", flexDirection: "column", padding: 6 }}>
        <CustomH3 fontSize="2rem" fontWeight={700} color="black">
          Team
        </CustomH3>
        <CustomH3 fontSize="1.2rem" color="black">
          Home / Team
        </CustomH3>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: 10,
        }}
      >
        <CustomH3 fontSize="3rem" fontWeight={700}>
          Our Team
        </CustomH3>
        <StyledMainCtn>
          <HoverCard imgSrc={tImg1}></HoverCard>
          <HoverCard imgSrc={tImg3}></HoverCard>
          <HoverCard imgSrc={tImg4}></HoverCard>
          <HoverCard imgSrc={tImg5}></HoverCard>
        </StyledMainCtn>
      </Box>
      <FAQs />
    </Box>
  );
}
