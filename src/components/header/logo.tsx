import { Button} from "@mui/material";
import { Link } from "react-router-dom";

export const Logo = () => { 
    return (
        <Button >
            <Link to={"/"} 
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",}}
            >
                Kukjin Kim
            </Link>
        </Button>
    )
}