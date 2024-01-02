import appStrImg from "../assets/appstore.svg";
import playStrImg from "../assets/playstore.svg";
import downloadImg from "../assets/download-bg.png";

import CustomH3 from "../components/CustomH3";
import CustomText from "../components/CustomText";

import { Box, styled } from "@mui/material";

//? styled components
const StyledMainCtn = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundImage: `url(${downloadImg})`,
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "auto",
  padding: "12rem 0",
  width: "100%",
}));

const StyledBtnCtn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  columnGap: theme.spacing(2),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    rowGap: theme.spacing(2),
  },
}));

export default function Download() {
  return (
    <StyledMainCtn>
      <Box
        sx={{
          marginLeft: 1,
          padding: 3,
          maxWidth: "550px",
          display: "flex",
          flexDirection: "column",
          rowGap: 4,
        }}
      >
        <CustomH3 fontSize="2.6rem" fontWeight={700}>
          Download our app to get most out of it
        </CustomH3>
        <CustomText>
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </CustomText>
        <StyledBtnCtn>
          <img src={appStrImg} alt="App Store" style={{ maxWidth: "120px" }} />
          <img
            src={playStrImg}
            alt="Play Store"
            style={{ maxWidth: "120px" }}
          />
        </StyledBtnCtn>
      </Box>
    </StyledMainCtn>
  );
}
