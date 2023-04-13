import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom";

const pages = [
    "about",
    "project",
    "contact",
];
export const MenusRegular = () => { 
    return (
        <Box>
            {pages.map(p =>
                <Button key={p}>
                    <Link
                    to={`/my-website/${p}`}
                    key={p}
                    style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
                    >
                    {p}
                    </Link>
                </Button>                
            )}
        </Box>
    )
}