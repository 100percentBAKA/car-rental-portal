//* MUI components import
import { Card, styled } from "@mui/material";

//* styled component
const CustomCard = styled(Card)(({ theme, padding }) => ({
  display: "flex",
  maxWidth: "400px",
  height: "280px",
  textAlign: "center",
  boxShadow: "0 0.5rem 1.5rem rgba(0, 0, 0, 0.1)",
  outline: "0.1rem solid rgba(0, 0, 0, 0.1)",
  outlineOffset: "-0.6rem",
  padding: padding,
  transition: "linear 0.2s",
  background: "#fff",
  "&:hover": {
    outlineOffset: 0,
    outline: `0.16rem solid ${theme.palette.common.black}`,
  },
  flexDirection: "column",
  justifyContent: "space-between",
  rowGap: theme.spacing(5),

  [theme.breakpoints.down("md")]: {
    height: "380px",
  },
}));

export default function OutlinedCard({ children, padding }) {
  return <CustomCard padding={padding}>{children}</CustomCard>;
}
