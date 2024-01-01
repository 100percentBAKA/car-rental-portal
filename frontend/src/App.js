import React from "react";

import theme from "./theme";
import Main from "./pages/Main"

import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Main />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
