import aImg1 from "../assets/about_page-1.png";

//* MUI components
import { Box, styled } from "@mui/material";

//* styled components
const StyledMainBanner = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${aImg1})`,
  position: "absolute",
  top: "0%",
  left: "0%",
  width: "100%",
  height: "40rem",
  backgroundRepeat: "no-repeat",
  opacity: "15%",
}));

export default function HeroBanner() {
  return <StyledMainBanner></StyledMainBanner>;
}
