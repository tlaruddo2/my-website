import { Box } from "@mui/material";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

export const Body = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};
