import { Button} from "@mui/material";
import { Link } from "react-router-dom";

export const Logo = () => { 
    return (
        <Button >
            <Link to={"/my-website"} 
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",}}
            >
                Kukjin Kim
            </Link>
        </Button>
    )
}