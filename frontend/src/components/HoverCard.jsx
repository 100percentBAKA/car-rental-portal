import React, { useState } from "react";
import { Box, Card, styled, IconButton } from "@mui/material";

import AttachmentIcon from "@mui/icons-material/Attachment";

import CustomH3 from "../components/CustomH3";

const CustomCard = styled(Card)(({ theme }) => ({
  width: "250px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

const ImageBox = styled(Box)(({ hover }) => ({
  transition: "width 0.3s, height 0.3s, top 0.3s, left 0.3s, transform 0.3s",
  zIndex: 5,

  position: "absolute",
  top: hover ? "50%" : "0%",
  width: hover ? "50%" : "100%",
  height: hover ? "50%" : "100%",
}));

export default function HoverCard({
  imgSrc,
  name = "John Doe",
  designation = "Designer",
}) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <CustomCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ImageBox hover={hover}>
        <img
          src={imgSrc}
          alt="Card img"
          style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageBox>

      <Box
        sx={{
          width: "100%",
          height: "50%",
          zIndex: 1,
          bgcolor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomH3 fontSize="1.4rem" color="white">
          {name}
        </CustomH3>
        <CustomH3 fontSize="0.8rem" fontWeight={500} color="#ff4d30;">
          {designation}
        </CustomH3>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "50%",
          zIndex: 1,
        }}
      >
        <Box sx={{ width: "50%", height: "100%" }}></Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
            columnGap: 1,
          }}
        >
          <IconButton>
            <AttachmentIcon />
          </IconButton>
        </Box>
      </Box>
    </CustomCard>
  );
}
