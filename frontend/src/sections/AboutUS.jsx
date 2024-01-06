import aboutImg from "../assets/aboutus-cars.png";
import aboutData from "../data/about";

import { Box, IconButton, styled, Link } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import SubContainer from "../components/SubContainer";
import CustomVBox from "../components/CustomVBox";
import CustomH3 from "../components/CustomH3";
import CustomText from "../components/CustomText";
import ContainedButton from "../components/ContainedButton";

//? styled components
const StyledCtn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: theme.spacing(2),
  gap: theme.spacing(12),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const StyledSubCtn = styled(Box)(({ theme }) => ({
  flex: 1,

  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(5),
  },
}));

const StyledHBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  columnGap: theme.spacing(2),

  [theme.breakpoints.down("md")]: {
    height: "250px",
  },
}));

export default function AboutUS() {
  return (
    <Box sx={{ marginBottom: 12 }}>
      <SubContainer>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={aboutImg}
            alt="About us Main cars"
            style={{ maxWidth: "100%", alignSelf: "center" }}
          />
        </Box>

        <StyledCtn>
          <StyledSubCtn>
            <CustomVBox>
              <CustomH3 fontSize="1.4rem">Why Choose Us</CustomH3>
              <CustomH3 fontSize="2rem" fontWeight={700}>
                Best valued deals you will ever find
              </CustomH3>
              <CustomText>
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </CustomText>
              <ContainedButton padding="0.8rem 2rem" href="/about">
                Find Details &nbsp;
                <ChevronRightIcon />
              </ContainedButton>
            </CustomVBox>
          </StyledSubCtn>

          <CustomVBox flex={1}>
            {aboutData.map((about) => (
              <StyledHBox key={about.id}>
                <IconButton>
                  <img
                    src={about.imgSrc}
                    alt="about"
                    style={{ maxWidth: "100%" }}
                  />
                </IconButton>
                <Box>
                  {" "}
                  <CustomH3 fontSize="1.4rem">{about.title}</CustomH3>
                  <CustomText>{about.desc}</CustomText>
                </Box>
              </StyledHBox>
            ))}
          </CustomVBox>
        </StyledCtn>
      </SubContainer>
    </Box>
  );
}
