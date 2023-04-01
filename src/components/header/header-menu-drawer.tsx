import { Box, Button, Drawer, IconButton} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { MenuesDrawer } from "./menus/menus-drawer";

const pages = [
    "Kukjin Kim",
    "about",
    "project",
    "contact",
];

export const HeaderMenuDrawer = () => {
    const [opened, setOpend] = useState(false);

    return(
        <Box sx={{display:"flex", justifyContent: 'space-between'}}> 
            <Button>
                <Link to={"/my-website"} 
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",}}>
                    KukjinKim
                </Link>
            </Button>
            <IconButton onClick={()=>{setOpend(true)}}>
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor={'right'}
                open={opened}
                onClose={()=>{setOpend(false)}}
                sx={{width:"100%"}}
            >
                <Box sx={{width:"100%"}}>
                    <MenuesDrawer callBack={(childData) => {setOpend(childData)}}/>
                </Box>
            </Drawer>
        </Box>
    )

}