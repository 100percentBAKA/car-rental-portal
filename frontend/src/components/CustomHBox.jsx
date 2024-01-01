import { Box, styled } from "@mui/material";

const StyledHBox = styled(Box)(({ theme, flex }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  columnGap: theme.spacing(2),
  flex: flex,
  height: "180px",
}));

export default function CustomHBox({ children, flex }) {
  return <StyledHBox flex={flex}>{children}</StyledHBox>;
}
