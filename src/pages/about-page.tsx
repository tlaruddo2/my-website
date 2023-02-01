import { Box, Typography } from "@mui/material";
import profileImg from "../assets/images/profile.png";

export const AboutPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{}}></Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ p: "10px" }}>
          <img src={profileImg} alt="profile image" />
        </Box>

        <Box sx={{ p: "10px" }}>
          <Typography variant="h4">About Me</Typography>
          <Typography variant="h6">My name is Kukjin Kim</Typography>
          <Typography variant="subtitle1">Hi There! I'm Kukjin Kim</Typography>
          <Typography variant="body1">
            I currently major in computer science at Simon Fraser University in
            Vancouver
          </Typography>
        </Box>
      </Box>
      <Box sx={{}}></Box>
    </Box>
  );
};
