import { Box, Typography } from "@mui/material";
import "App.css";
import { Header } from "components/header/header";
import { RouterProvider } from "react-router-dom";
import { RootRouter } from "routes/root-routes";

function App() {
  return <RouterProvider router={RootRouter} />;
}

export default App;
