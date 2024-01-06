import { Button, styled } from "@mui/material";

const OutlinedButton = ({ children, padding, href }) => {
  const CustomButton = styled(Button)(({ theme, padding, href }) => ({
    color: theme.palette.common.white,
    borderRadius: "3px",
    textTransform: "none",
    backgroundColor: "black",
    fontSize: "1rem",
    width: "fit-content",
    padding: padding,
    transition: "all 0.3s ease",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
      outline: "0.12rem solid rgba(0, 0, 0)",
    },
  }));

  return (
    <CustomButton padding={padding} href={href}>
      {children}
    </CustomButton>
  );
};

export default OutlinedButton;
