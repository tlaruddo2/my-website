import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { PAGES } from "consts/pages";

// interface Props {}

const pages = [
  "Kukjin Kim",
  "about",
  "skill",
  "experience",
  "project",
  "contact",
];

export const Header = () => {
  return (
    <Box>
      <AppBar position="static" sx={{background: "#cc5eff"}}>
        <Toolbar>
          {pages.map(p =>
            p === "Kukjin Kim" ? (
              <Button key={p} >
                <Link to={"/"} key={p} style={{textDecoration: "none", color:"white"}}>
                  {p}
                </Link>
              </Button>
            ) : (
              <Button key={p}>
                <Link to={`/${p}`} key={p} style={{textDecoration: "none", color:"white"}}>
                  {p}
                </Link>
              </Button>
            )
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
