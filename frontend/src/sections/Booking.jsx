import { useState } from "react";

import CustomH3 from "../components/CustomH3";
import CustomBoldText from "../components/CustomBoldText";
import Highlighter from "../components/Highlighter";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  IconButton,
  styled,
} from "@mui/material";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

//? styled component
const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(3),
}));

const StyledCtn = styled(Box)(({ theme, spacing = 3, flexDirection }) => ({
  display: "flex",
  flexDirection: flexDirection || "row",
  columnGap: theme.spacing(spacing),
  alignItems: "center",
}));

export default function Booking() {
  const handleSubmit = () => {
    console.log("Hello 2024 nigga chan");
  };

  return (
    <Box
      sx={{
        marginTop: 10,
        boxShadow: "0 10px 20px 0 rgba(0,0,0,.1)",
        marginLeft: 3,
        marginRight: 3,
        marginBottom: 20,
        padding: 5,
      }}
    >
      <StyledForm action="" onSubmit={handleSubmit}>
        <CustomH3 fontSize="1.5rem" fontWeight="700">
          Book A Car
        </CustomH3>
      </StyledForm>
    </Box>
  );
}
