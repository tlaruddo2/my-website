import { Box, Button } from "@mui/material";
import { Logo } from "./logo";
import { Menus } from "./menus";
  


export const HeaderMenuRegular = () => {
    return (
        <Box sx={{display:"flex",justifyContent: 'space-between'}}>
            <Logo/>
            <Menus/>
        </Box>
    )
}