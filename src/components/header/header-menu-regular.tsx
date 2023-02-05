import { Box, Button } from "@mui/material";
import { Logo } from "./logo";
import { MenusRegular } from "./menus/menus-regular";
  


export const HeaderMenuRegular = () => {
    return (
        <Box sx={{display:"flex", justifyContent: 'space-between'}}>
            <Logo/>
            <MenusRegular/>
        </Box>
    )
}