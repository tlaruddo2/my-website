import {
  AppBar,
  Box,
  Toolbar,
} from "@mui/material";
import React from "react";
import { HeaderMenuDrawer } from "./header-menu-drawer";
import { HeaderMenuRegular } from "./header-menu-regular";

export const Header = () => {
  return (
    <div>
      <Box sx={{display:{xs:'none',md:'block', width:"100%"}}}>
        <HeaderMenuRegular/>  
      </Box>
      <Box sx={{display:{xs:'block',md:'none', width:"100%"}}}>
        <HeaderMenuDrawer/> 
      </Box>
    </div>
  );
};
