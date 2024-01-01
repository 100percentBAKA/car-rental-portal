import React from "react";

import MainCar from "../assets/main-car.png";

import { Box, styled } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import SubContainer from "../components/SubContainer";
import CustomVBox from "../components/CustomVBox";
import CustomBoldText from "../components/CustomBoldText";
import CustomH3 from "../components/CustomH3";
import Highlighter from "../components/Highlighter";
import CustomText from "../components/CustomText";
import ContainedButton from "../components/ContainedButton";
import OutlinedButton from "../components/OutlinedButton";

//? styled components
const StyledCtn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(3),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  objectFit: "cover",
}));

export default function Hero() {
  return (
    <Box
      sx={{
        marginTop: 3,
        width: "100%",
        height: "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SubContainer>
        <StyledCtn>
          <CustomVBox flex={1}>
            <CustomBoldText>Plan your trip now</CustomBoldText>
            <CustomH3 fontSize="2.6rem">
              Save <Highlighter fontSize="2.6rem">big</Highlighter> with our car
              rental
            </CustomH3>
            <CustomText>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </CustomText>
            <Box sx={{ display: "flex", flexDirection: "row", columnGap: 2 }}>
              <ContainedButton padding="0.8rem 2rem">
                Book Ride &nbsp;
                <CheckCircleOutlineIcon />
              </ContainedButton>
              <OutlinedButton padding="0.8rem 2rem">
                Learn More &nbsp;
                <ChevronRightIcon />
              </OutlinedButton>
            </Box>
          </CustomVBox>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1.3,
            }}
          >
            <StyledImg src={MainCar} alt="Hero Main Car" />
          </Box>
        </StyledCtn>
      </SubContainer>
    </Box>
  );
}
