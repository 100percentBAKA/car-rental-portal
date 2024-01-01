import { Typography, styled } from "@mui/material";

const BannerText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: "#706f7b",
  fontSize: "1rem",
  fontWeight: 500,
}));

export default function CustomText({ children }) {
  return <BannerText>{children}</BannerText>;
}
