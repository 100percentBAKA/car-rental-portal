//? Images Import
import { useState } from "react";
import logo from "../assets/logo.png";

//? Native components import;
import ContainedButton from "../components/ContainedButton";

//? MUI components import
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

//? MUI icon components
import { Menu as MenuIcon } from "@mui/icons-material";

//? Styled Components
const StyledNavbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  boxShadow: "none",
  justifyContent: "space-between",
  paddingTop: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  position: "relative",
}));

const StyledLogo = styled("img")(({ theme }) => ({
  height: "3rem",
  width: "100%",
  objectFit: "cover",

  [theme.breakpoints.down("md")]: {
    height: "2.5rem",
  },
}));

const NavbarLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 25,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

const StyledButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

//? Custom Components
const pages = [
  "Home",
  "About",
  "Vehicles",
  "Testimonials",
  "Our Team",
  "Contact",
  "Register",
];

const ListComponent = () => (
  <List>
    {pages.map((page, index) => (
      <ListItem key={index}>
        <ListItemButton>
          {page === "Register" ? (
            <ListItemText primary={page} sx={{ color: "#ff4d30" }} />
          ) : (
            <ListItemText primary={page} />
          )}
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledNavbar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={(e) => setShowMenu(true)}
          disableRipple
        >
          <StyledLogo src={logo} alt="logo" />
        </IconButton>
        <Drawer
          anchor="left"
          open={showMenu}
          onClose={(e) => setShowMenu(false)}
        >
          <ListComponent />
        </Drawer>
      </Toolbar>

      <NavbarLinkBox>
        {pages.map((page, index) => (
          <NavbarLink key={index}>{page === "Register" ? "" : page}</NavbarLink>
        ))}
      </NavbarLinkBox>

      <StyledButtonContainer>
        <ContainedButton padding="0.8rem 1.6rem">Register</ContainedButton>
      </StyledButtonContainer>

      <StyledIconButton onClick={(e) => setShowMenu(true)}>
        <MenuIcon />
      </StyledIconButton>
    </StyledNavbar>
  );
}
