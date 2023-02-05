import {
  AppBar,
  Box,
  Toolbar,
} from "@mui/material";
import { HeaderMenuDrawer } from "./header-menu-drawer";
import { HeaderMenuRegular } from "./header-menu-regular";

export const Header = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ background: "white" }}>
        <Toolbar>
          <Box sx={{display:{xs:'none',md:'block', width:"100%"}}}>
            <HeaderMenuRegular/>  
          </Box>
          <Box sx={{display:{xs:'block',md:'none', width:"100%"}}}>
            <HeaderMenuDrawer/> 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
