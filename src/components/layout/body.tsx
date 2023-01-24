import { Box } from "@mui/material";
import { Header } from "components/header/header";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};
