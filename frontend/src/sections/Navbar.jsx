import { useState } from "react";

//? Images Import
import logo from "../assets/logo.png";

//? Native components import;
import ContainedButton from "../components/ContainedButton";

//? MUI components import
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  Link,
  ListItem,
  ListItemButton,
  Toolbar,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";

//? MUI icon components
import { Menu as MenuIcon } from "@mui/icons-material";

//? importing Contexts
import { useModalContext } from "../contexts/ModalContextProvider";

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

const NavbarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
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

const paths = [
  "/",
  "/about",
  "/vehicles",
  "/testimonials",
  "team",
  "contact",
  "register",
];

const ListComponent = ({ closeMenu }) => (
  <List>
    {pages.map((page, index) => (
      <ListItem key={index}>
        {page === "Register" ? (
          <ListItemButton onClick={closeMenu}>
            <Link
              sx={{ color: "#ff4d30", textDecoration: "none" }}
              component={Typography}
            >
              {page}
            </Link>
          </ListItemButton>
        ) : (
          <ListItemButton href={paths[index]}>
            <Link
              href={paths[index]}
              sx={{ textDecoration: "none", color: "black" }}
            >
              {page}
            </Link>
          </ListItemButton>
        )}
      </ListItem>
    ))}
  </List>
);

export default function Navbar() {
  const { openModal } = useModalContext();
  const [showMenu, setShowMenu] = useState(false);

  //? useMediaQuery
  const theme = useTheme();
  const isScreenSmaller = useMediaQuery(theme.breakpoints.down("md"));

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
        {isScreenSmaller ? (
          <Drawer
            anchor="left"
            open={showMenu}
            onClose={(e) => setShowMenu(false)}
            variant="temporary"
          >
            <ListComponent closeMenu={(e) => setShowMenu(false)} />
          </Drawer>
        ) : (
          ""
        )}
      </Toolbar>

      <NavbarLinkBox>
        {pages.map((page, index) => (
          <NavbarLink key={index} href={paths[index]}>
            {page === "Register" ? "" : page}
          </NavbarLink>
        ))}
      </NavbarLinkBox>

      <StyledButtonContainer onClick={openModal}>
        <ContainedButton padding="0.8rem 1.6rem">Register</ContainedButton>
      </StyledButtonContainer>

      <StyledIconButton onClick={(e) => setShowMenu(true)}>
        <MenuIcon />
      </StyledIconButton>
    </StyledNavbar>
  );
}
