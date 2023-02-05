import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom";

const pages = [
    "about",
    "skill",
    "experience",
    "project",
    "contact",
];
export const Menus = () => { 
    return (
        <Box>
            {pages.map(p =>
                <Button key={p}>
                    <Link
                    to={`/${p}`}
                    key={p}
                    style={{ textDecoration: "none", color: "black" }}
                    >
                    {p}
                    </Link>
                </Button>                
            )}
        </Box>
    )

}