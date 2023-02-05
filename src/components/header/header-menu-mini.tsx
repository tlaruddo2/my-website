import { Box, Button, IconButton} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DescriptionIcon from "@mui/icons-material/Description";
import { Logo } from "./logo";

const pages = [
    "Kukjin Kim",
    "about",
    "skill",
    "experience",
    "project",
    "contact",
];

export const HeaderMenuMini = () => {
    return(
        <Box sx={{display:"flex", justifyContent: 'space-between'}}> 
            <Button>
                <Link to={"/"} 
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",}}>
                    KukjinKim
                </Link>
            </Button>
            <IconButton>
                <MenuIcon/>
            </IconButton>
        </Box>
    )

}