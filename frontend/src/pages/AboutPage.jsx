import aImg2 from "../assets/about_page-2.jpg";

import aImgIcon1 from "../assets/about_page-icon-1.png";
import aImgIcon2 from "../assets/about_page-icon-2.png";
import aImgIcon3 from "../assets/about_page-icon-3.png";

import CustomH3 from "../components/CustomH3";
import CustomVBox from "../components/CustomVBox";
import SubContainer from "../components/SubContainer";
import CustomText from "../components/CustomText";
import HeroBanner from "../components/HeroBanner";

import Planner from "../sections/Planner";
import Banner from "../sections/Banner";

import { Box, styled } from "@mui/material";

//? styled components
const StyledCtnBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(35),
  display: "flex",
  flexDirection: "row",
  columnGap: theme.spacing(7),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    rowGap: theme.spacing(3),
  },

  marginBottom: theme.spacing(20),
}));

const StyledIconBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  columnGap: theme.spacing(4),
  justifyContent: "space-between",
  alignItems: "center",
}));

const StyledIconSubBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "Column",
  rowGap: theme.spacing(3),
}));

export default function AboutPage() {
  return (
    <Box>
      <HeroBanner />
      <Box sx={{ display: "flex", flexDirection: "column", padding: 6 }}>
        <CustomH3 fontSize="2rem" fontWeight={700} color="black">
          About
        </CustomH3>
        <CustomH3 fontSize="1.2rem" color="black">
          Home / About
        </CustomH3>
      </Box>

      <SubContainer>
        <StyledCtnBox>
          <img
            src={aImg2}
            alt="About us hero section "
            style={{ maxWidth: "100%" }}
          />
          <CustomVBox>
            <CustomH3 fontSize="1.6rem">About Company</CustomH3>
            <CustomH3 fontSize="2.4rem" fontWeight={700}>
              You start the engine and your adventure begins
            </CustomH3>
            <CustomText>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </CustomText>

            <StyledIconBox>
              <StyledIconSubBox>
                <img src={aImgIcon1} alt="Icon - 1" />
                <CustomH3 fontSize="3rem" fontWeight={700} color="black">
                  20
                </CustomH3>
              </StyledIconSubBox>
              <StyledIconSubBox>
                <img src={aImgIcon2} alt="Icon - 2" />
                <CustomH3 fontSize="3rem" fontWeight={700} color="black">
                  85
                </CustomH3>
              </StyledIconSubBox>
              <StyledIconSubBox>
                <img src={aImgIcon3} alt="Icon - 3" />
                <CustomH3 fontSize="3rem" fontWeight={700} color="black">
                  35
                </CustomH3>
              </StyledIconSubBox>
            </StyledIconBox>
          </CustomVBox>
        </StyledCtnBox>

        <Planner />
      </SubContainer>
      <Banner />
    </Box>
  );
}
