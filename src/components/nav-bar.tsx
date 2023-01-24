import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { pages } from "constants/pages";

interface Props {}

export const NavBar = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography>{pages.about}</Typography>
          <Typography>{pages.contact}</Typography>
          <Typography>{pages.projects}</Typography>
          <Typography>{pages.skills}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
