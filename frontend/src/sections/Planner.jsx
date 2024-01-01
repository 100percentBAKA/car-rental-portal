import plannerData from "../data/planner";

import { Box, styled } from "@mui/material";

import SubContainer from "../components/SubContainer";
import CustomBoldText from "../components/CustomBoldText";
import CustomH3 from "../components/CustomH3";
import CustomText from "../components/CustomText";

//? styled components
const StyledCtn = styled(Box)(({ theme, maxWidth }) => ({
  maxWidth: maxWidth,
  height: "500px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  rowGap: theme.spacing(3),
}));

const StyledSubCtn = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  columnGap: theme.spacing(15),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const StyledMainCtn = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(25),

  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(145),
  },
}));

export default function Planner() {
  return (
    <StyledMainCtn>
      <SubContainer>
        <StyledCtn>
          <CustomBoldText fontSize="1.5rem">Plan your trip now</CustomBoldText>
          <CustomH3 fontSize="2.2rem" fontWeight="700">
            Quick & easy car rental
          </CustomH3>

          <StyledSubCtn>
            {plannerData.map((plan) => (
              <StyledCtn maxWidth="200px" key={plan.id}>
                <img
                  src={plan.imgSrc}
                  alt={`planner - ${plan.id} Icon`}
                  style={{ maxWidth: "100%" }}
                />
                <CustomBoldText fontSize="1.5rem">{plan.title}</CustomBoldText>
                <CustomText>{plan.desc}</CustomText>
              </StyledCtn>
            ))}
          </StyledSubCtn>
        </StyledCtn>
      </SubContainer>
    </StyledMainCtn>
  );
}
