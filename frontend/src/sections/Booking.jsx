import CustomH3 from "../components/CustomH3";
import locationData from "../data/location";
import ContainedButton from "../components/ContainedButton";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  styled,
} from "@mui/material";

//? styled component
const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(3),
}));

const StyledMainCtn = styled(Box)(({ theme }) => ({
  boxShadow: "0 10px 20px 0 rgba(0,0,0,.1)",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(20),
  padding: theme.spacing(5),

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(10),
  },
}));

export default function Booking() {
  const handleSubmit = () => {
    console.log("Hello 2024 nigga chan");
  };

  return (
    <StyledMainCtn>
      <StyledForm action="" onSubmit={handleSubmit}>
        <CustomH3 fontSize="1.8rem">Book A Car</CustomH3>
        <FormControl sx={{ marginBottom: 2 }}>
          <InputLabel htmlFor="p-location">Select Pickup Location</InputLabel>
          <Select label="Select Pickup Location" id="p-location">
            {locationData.map((location) => (
              <MenuItem value={location.place + "value"} key={location.id}>
                {location.place}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          id="pickup-date"
          label="Pickup Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginBottom: 2 }}
        />
        <ContainedButton padding="0.8rem 3rem">Search</ContainedButton>
      </StyledForm>
    </StyledMainCtn>
  );
}
