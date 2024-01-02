import { Button, styled } from "@mui/material";

const ContainedButton = ({ children, padding }) => {
  const CustomButton = styled(Button)(({ theme, padding }) => ({
    color: theme.palette.common.white,
    borderRadius: "3px",
    textTransform: "none",
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 10px 15px 0 rgba(255,83,48,.35)",
    fontSize: "1rem",
    width: "fit-content",
    padding: padding,
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#e63c1e",
    },

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(1),
  }));

  return <CustomButton padding={padding}>{children}</CustomButton>;
};

export default ContainedButton;
