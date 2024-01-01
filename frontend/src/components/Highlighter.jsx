import { styled } from "@mui/material";

const StyledText = styled("span")(({ theme, fontSize }) => ({
  fontSize: fontSize,
  color: theme.palette.primary.main,
  fontWeight: 600,
}));

export default function CustomH3({ children, fontSize }) {
  return <StyledText fontSize={fontSize}>{children}</StyledText>;
}
