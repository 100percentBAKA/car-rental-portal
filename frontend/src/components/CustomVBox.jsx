import { Box, styled } from "@mui/material";

const StyledVBox = styled(Box)(({ theme, flex }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(3),
  flex: flex,
}));

export default function CustomVBox({ children, flex }) {
  return <StyledVBox flex={flex}>{children}</StyledVBox>;
}
