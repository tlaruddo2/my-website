import {AppBar, Box, Typography, Toolbar,Button, Menu, MenuItem} from "@mui/material";
import {PAGES} from "consts/pages";

// interface Props {}

const pages = ["Kukjin Kim", "ABOUT", "SKILLS", "EXPERIENCE", "PROJECT", "CONTACT"]

export const Header = () => {
    return (
        <Box>
            <AppBar position = "static">
                <Toolbar>
                    {/* <Typography variant="h5">Kukjin Kim</Typography> */}
                    {pages.map(p => <Button variant ="text" key={p} sx={{ my: 2, color: 'white', display: 'block' }}>{p}</Button>)}
                </Toolbar> 
            </AppBar>
        </Box>
    )
}