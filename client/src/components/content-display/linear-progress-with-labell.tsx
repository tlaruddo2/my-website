import { Box, LinearProgress, Typography } from "@mui/material";

interface LinearProgressWithLabelProps {
  value: number;
}

export const LinearProgressWithLabel = ({
  value,
}: LinearProgressWithLabelProps) => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ width: "80%" }}>
        <LinearProgress color="primary" variant="determinate" value={value} />
      </Box>
      <Box sx={{ width: "20%" }}>
        <Typography>{value}%</Typography>
      </Box>
    </Box>
  );
};
