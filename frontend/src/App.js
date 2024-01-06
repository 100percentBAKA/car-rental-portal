//* main react imports
import React, { useState } from "react";

//* react router imports 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//* native imports
import theme from "./theme";
import Navbar from "./sections/Navbar";
import SignupModalWindow from "./sections/SingupModalWindow"

//* native page imports 
import Main from "./pages/MainPage"
import AboutPage from "./pages/AboutPage"
import TestimonialsPage from "./pages/TestimonialsPage";
import OurTeam from "./pages/OurTeamPage"

//* MUI components imports 
import { ThemeProvider } from "@mui/material";
import ModalContextProvider from "./contexts/ModalContextProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Router>
          <ModalContextProvider>
            <Navbar />
            <SignupModalWindow />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/team" element={<OurTeam />} />
            </Routes>
          </ModalContextProvider>
        </Router>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
