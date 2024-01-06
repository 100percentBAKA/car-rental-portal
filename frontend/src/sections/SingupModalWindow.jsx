//* MUI components import
import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Modal,
  TextField,
  Typography,
  styled,
  useScrollTrigger,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-scroll";

//? import context
import { useModalContext } from "../contexts/ModalContextProvider";

//? styled containers
const StyledModalBox = styled(Box)(({ theme }) => ({
  width: "50%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

const StyledMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(5),
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 2,

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
  },
}));

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.common.white,
  borderRadius: theme.spacing(1),
  border: "none",
  cursor: "pointer",
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  boxShadow: "0 10px 15px 0 rgba(255,83,48,.35)",
  fontSize: "1rem",
  width: "fit-content",
  padding: "0.75rem",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#e63c1e",
  },

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    padding: "0.6rem",
  },
}));

//? singup component
const SignUp = ({ switchToSignIN }) => {
  return (
    <StyledMainBox>
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography variant="h5" component="h1">
        Sign up
      </Typography>

      <Box component="form" noValidate>
        <Grid container spacing={2} sx={{ marginTop: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoFocus
              required
              label="First Name"
              fullWidth
              id="firstName"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              autoFocus
              required
              label="Last Name"
              fullWidth
              id="lastName"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              autoFocus
              required
              label="Email Address"
              fullWidth
              id="emailAddress"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              autoFocus
              type="password"
              required
              label="Password"
              fullWidth
              id="password"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>

          <Grid item xs={12}>
            <StyledSubmitButton>Submit</StyledSubmitButton>
          </Grid>

          <Grid container justifyContent="flex-end" sx={{ marginTop: 2 }}>
            <Grid item>
              <Link variant="body2" onClick={switchToSignIN}>
                Already have an account?
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </StyledMainBox>
  );
};

//? signin component
const SignIn = ({ switchToSignUP }) => {
  return (
    <StyledMainBox>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "secondary.main", margin: 1 }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5" component="h1">
          Sign In
        </Typography>

        <Box component="form" noValidate sx={{ marginTop: 3, width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                fullWidth
                label="Email Address"
                required
                id="emailAddress"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoFocus
                fullWidth
                label="Password"
                required
                id="password"
                type="password"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ marginTop: 1.5 }}>
            <StyledSubmitButton>Login</StyledSubmitButton>
          </Grid>

          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            sx={{ marginTop: 0.5 }}
          >
            <Grid item>
              <Link variant="body2">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link variant="body2" onClick={switchToSignUP}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </StyledMainBox>
  );
};

export default function SingupModalWindow() {
  const { isModalOpen, closeModal } = useModalContext();
  //? above line shows unpacking / destructuring contents from useModalContext which holds all the ContextValues

  const [isLogin, setIsLogin] = useState(false);

  const switchToSignUP = () => {
    setIsLogin(false);
  };

  const switchToSignIN = () => {
    setIsLogin(true);
  };

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      disableScrollLock
      sx={{ width: "100%" }}
    >
      <StyledModalBox>
        {isLogin ? (
          <SignIn switchToSignUP={switchToSignUP} />
        ) : (
          <SignUp switchToSignIN={switchToSignIN} />
        )}
      </StyledModalBox>
    </Modal>
  );
}
