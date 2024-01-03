import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import theme from "./theme";
import Navbar from "./sections/Navbar";

import Main from "./pages/Main"
import AboutPage from "./pages/AboutPage"

import { ThemeProvider } from "@mui/material";
import TestimonialsPage from "./pages/TestimonialsPage";
import OurTeam from "./pages/OurTeam"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/team" element={<OurTeam />} />
          </Routes>
        </Router>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
