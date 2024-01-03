import CustomH3 from "../components/CustomH3";
import HeroBanner from "../components/HeroBanner";
import Testimonials from "../sections/Testimonials";
import Banner from "../sections/Banner2";

import { Box } from "@mui/material";

export default function TestimonialsPage() {
  return (
    <Box>
      <HeroBanner />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 6,
          marginBottom: 30,
        }}
      >
        <CustomH3 fontSize="2rem" fontWeight={700} color="black">
          Testimonials
        </CustomH3>
        <CustomH3 fontSize="1.2rem" color="black">
          Home / Testimonials
        </CustomH3>
      </Box>

      <Testimonials />
      <Banner />
    </Box>
  );
}
