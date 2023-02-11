import { Box,  Typography } from "@mui/material";
export const ExperiencePage = () => {
  return (
    <Box sx={{
      textAlign: "center",
      display: "flex",
      flexDirection: "column"
    }}>
      <Typography variant="h4"> EXPERIENCE PAGE</Typography>
      <Box sx={{
        display:"flex",
        flexDirection: "row"
      }}>
        <Box 
          component={"img"}
          sx={{
          height:"10%",
          width: "30%"
        }}
          src="https://intersystemcontrols.com/wp-content/uploads/2022/12/ISC-Logo-scaled-1.webp"
          alt="intersystem controls logo"
        />
        <Typography variant="h6"> Intersystem Controls</Typography>
      </Box>
    </Box>
  );
};
