import CustomH3 from "../components/CustomH3";
import Highlighter from "../components/Highlighter";

import { Box } from "@mui/material";

export default function Banner() {
  return (
    <Box
      sx={{
        bgcolor: "#2d2d2d",
        padding: 7,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        rowGap: 3,
        marginBottom: 15,
      }}
    >
      <CustomH3 fontSize="3.2rem" fontWeight={700} color="white">
        Save big with our cheap car rental!
      </CustomH3>

      <CustomH3 fontSize="1.6rem" fontWeight={500} color="white">
        Top Airports. Local Suppliers. <Highlighter>24/7</Highlighter> Support.
      </CustomH3>
    </Box>
  );
}
