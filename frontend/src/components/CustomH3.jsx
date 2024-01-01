import { Typography, styled } from "@mui/material";

const BannerText = styled(Typography)(({ theme, fontSize, fontWeight }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.secondary.main,
  fontSize: fontSize,
  fontWeight: fontWeight || 600,
}));

export default function CustomH3({ children, fontSize, fontWeight }) {
  return (
    <BannerText fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </BannerText>
  );
}
