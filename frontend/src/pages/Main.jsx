import HeroBG from "../assets/hero-bg.png";

import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Booking from "../sections/Booking";
import Planner from "../sections/Planner";
import Banner from "../sections/Banner";

import { Box, styled } from "@mui/material";

//? styled component
const StyledAbsBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0%",
  right: "0%",
  zIndex: -1,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function Main() {
  return (
    <Box>
      <StyledAbsBox>
        <img src={HeroBG} alt="Hero BG" />
      </StyledAbsBox>
      <Navbar />
      <Hero />
      <Booking />
      <Planner />
      <Banner />
    </Box>
  );
}
