import HeroBG from "../assets/hero-bg.png";

import Hero from "../sections/Hero";
import Booking from "../sections/Booking";
import Planner from "../sections/Planner";
import Banner from "../sections/Banner";
import AboutUS from "../sections/AboutUS";
import Testimonials from "../sections/Testimonials";

import { Box, styled } from "@mui/material";
import Download from "../sections/Download";

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
      <Hero />
      <Booking />
      <Planner />
      <Banner />
      <AboutUS />
      <Testimonials />
      <Download />
    </Box>
  );
}
