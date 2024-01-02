import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import theme from "./theme";
import Navbar from "./sections/Navbar";

import Main from "./pages/Main"
import AboutPage from "./pages/AboutPage"

import { ThemeProvider } from "@mui/material";
import TestimonialsPage from "./pages/TestimonialsPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonial" element={<TestimonialsPage />} />
          </Routes>
        </Router>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
