import { Typography, styled } from "@mui/material";

const BannerText = styled(Typography)(({ theme, fontSize }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.secondary.main,
  fontSize: fontSize || "1.2rem",
  fontWeight: 600,
}));

export default function CustomBoldText({ children, fontSize }) {
  return <BannerText fontSize={fontSize}>{children}</BannerText>;
}
