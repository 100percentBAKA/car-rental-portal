import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import SubContainer from "../components/SubContainer";
import EmailIcon from "@mui/icons-material/Email";
import CustomH3 from "../components/CustomH3";
import ContainedButton from "../components/ContainedButton";

const CustomLinkBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  transition: "color 200ms ease-in-out",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const CustomBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  borderRadius: "3px",
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  boxShadow: "0 10px 15px 0 rgba(255,83,48,.35)",
  fontSize: "1rem",
  //   width: "fit-content",
  padding: "0.8rem 1.2rem",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#e63c1e",
  },

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export default function Footer() {
  return (
    <footer style={{ margin: "40px 0" }}>
      <SubContainer>
        <Grid container spacing={8} justifyContent="center">
          {/* Section 1 - About */}
          <Grid item xs={12} sm={6} xl={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <CustomH3 fontSize="1.4rem" fontWeight={500}>
                CAR Rental
              </CustomH3>
              <Typography>
                We offer a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <EmailIcon />
                <CustomLinkBox>carrental@gmail.com</CustomLinkBox>
              </Box>
            </Box>
          </Grid>

          {/* Section 2 - Company */}
          <Grid item xs={12} sm={6} xl={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <CustomH3 fontSize="1.4rem" fontWeight={600}>
                COMPANY
              </CustomH3>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <CustomLinkBox>Bangalore</CustomLinkBox>
                <CustomLinkBox>Careers</CustomLinkBox>
                <CustomLinkBox>Mobile</CustomLinkBox>
                <CustomLinkBox>Blog</CustomLinkBox>
              </Box>
            </Box>
          </Grid>

          {/* Section 3 - Working Hours */}
          <Grid item xs={12} sm={6} xl={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <CustomH3 fontSize="1.4rem" fontWeight={600}>
                WORKING HOURS
              </CustomH3>
              <Box>Mon - Fri: 9:00AM - 9:00PM</Box>
              <Box>Sat: 9:00AM - 19:00PM</Box>
              <Box>Sun: Closed</Box>
            </Box>
          </Grid>

          {/* Section 4 - Subscription */}
          <Grid item xs={12} sm={6} xl={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <CustomH3 fontSize="1.4rem" fontWeight={600}>
                SUBSCRIPTION
              </CustomH3>
              <Typography>
                Subscribe your Email address for latest news & updates.
              </Typography>
              <TextField id="outlined-basic" label="email" variant="outlined" />
              <CustomBtn>Submit</CustomBtn>
            </Box>
          </Grid>
        </Grid>
      </SubContainer>
    </footer>
  );
}
