import { Avatar, Box, styled } from "@mui/material";

import CustomH3 from "../components/CustomH3";
import CustomText from "../components/CustomText";
import OutlinedCard from "../components/OutlinedCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import testimonialData from "../data/testimonial";

const StyledVBox = styled(Box)(({ theme }) => ({
  maxWidth: "80%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: theme.spacing(1),
  marginBottom: theme.spacing(8),
}));

const StyledSubCtn = styled(Box)(({ theme }) => ({
  width: "85%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const SwiperContainer = styled(Swiper)({
  width: "100%",
  padding: "1rem",
});

export default function Testimonials() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f8f8f8",
        paddingTop: 8,
        paddingBottom: 8,
      }}
    >
      <StyledSubCtn>
        <StyledVBox>
          <CustomH3 fontSize="1.4rem" fontWeight={500}>
            Reviewed by People
          </CustomH3>
          <CustomH3 fontSize="2.6rem" fontWeight={700}>
            Client's Testimonials
          </CustomH3>
          <CustomText>
            Discover the positive impact we've made on our clients by reading
            through their testimonials. Our clients have experienced our service
            and results, and they're eager to share their positive experiences
            with you.
          </CustomText>
        </StyledVBox>

        <SwiperContainer
          loop
          spaceBetween={20}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          centeredSlides
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          style={{ padding: "5px" }}
        >
          {testimonialData.map((test) => (
            <SwiperSlide key={test.id}>
              <OutlinedCard padding="3rem">
                <CustomH3 fontSize="1.4rem" fontWeight={500}>
                  {test.testimonial}
                </CustomH3>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      columnGap: 2,
                    }}
                  >
                    <Avatar
                      sx={{ width: 56, height: 56 }}
                      src={test.avatarImg}
                    />
                    <Box sx={{ textAlign: "left" }}>
                      <CustomH3 fontWeight={700}>{test.name}</CustomH3>
                      <CustomH3 fontSize="0.8rem" fontWeight={400}>
                        {test.location}
                      </CustomH3>
                    </Box>
                  </Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "#ff4d30" }}
                  >
                    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                  </svg>
                </Box>
              </OutlinedCard>
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </StyledSubCtn>
    </Box>
  );
}
