//? react-scroll
import { scroller } from "react-scroll";

import MainCar from "../assets/main-car.png";

import { Box, Button, styled } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import SubContainer from "../components/SubContainer";
import CustomVBox from "../components/CustomVBox";
import CustomBoldText from "../components/CustomBoldText";
import CustomH3 from "../components/CustomH3";
import Highlighter from "../components/Highlighter";
import CustomText from "../components/CustomText";
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

const StyledImgBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1.3,

  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(10),
  },
}));

export default function Hero() {
  const scrollToBookingSection = () => {
    scroller.scrollTo("booking", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -20,
    });
  };

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
              <Button
                onClick={scrollToBookingSection}
                sx={{
                  color: "white",
                  borderRadius: "3px",
                  textTransform: "none",
                  backgroundColor: "#ff4d30",
                  boxShadow: "0 10px 15px 0 rgba(255,83,48,.35)",
                  fontSize: "1rem",
                  width: "fit-content",
                  padding: "0.8rem 1.2rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#e63c1e",
                  },

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                Book Ride &nbsp;
                <CheckCircleOutlineIcon />
              </Button>
              <OutlinedButton padding="0.8rem 2rem">
                Learn More &nbsp;
                <ChevronRightIcon />
              </OutlinedButton>
            </Box>
          </CustomVBox>

          <StyledImgBox>
            <StyledImg src={MainCar} alt="Hero Main Car" />
          </StyledImgBox>
        </StyledCtn>
      </SubContainer>
    </Box>
  );
}
