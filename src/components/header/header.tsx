import {
  AppBar,
  Box,
  Toolbar,
} from "@mui/material";
import { HeaderMenuMini } from "./header-menu-mini";
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
            <HeaderMenuMini/> 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
