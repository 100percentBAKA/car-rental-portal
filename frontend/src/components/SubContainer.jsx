//* MUI components
import { Box, styled } from "@mui/material";

//* styled components
const SubBox = styled(Box)(({ theme }) => ({
  width: "85%",
  margin: "auto",
}));

export default function SubContainer({ children }) {
  return <SubBox>{children}</SubBox>;
}
