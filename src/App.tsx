import { Box, Typography } from "@mui/material";
import "App.css";
import { Header } from "components/header/header";
import { Body } from "components/layout/body";
import { AboutPage } from "pages/about-page";

function App() {
  return (
    <Box>
      <Header />
      <Body />
    </Box>
  );
}

export default App;
