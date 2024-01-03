import bImg2 from "../assets/banner-2.png";

import CustomH3 from "../components/CustomH3";
import Highlighter from "../components/Highlighter";

import { Box, styled } from "@mui/material";

//? styled components
const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: 10,
  backgroundImage: `url(${bImg2})`,
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 20,

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    flexDirection: "column",
    rowGap: theme.spacing(3),
  },
}));

export default function Banner() {
  return (
    <StyledBox sx={{}}>
      <CustomH3 fontSize="2rem" fontWeight={700} color="white">
        Book a car by getting in touch with us
      </CustomH3>

      <CustomH3 fontSize="2rem" fontWeight={500} color="white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          style={{ color: "#ff4d30" }}
        >
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
        </svg>
        <Highlighter>(123) 456-7869</Highlighter>
      </CustomH3>
    </StyledBox>
  );
}
