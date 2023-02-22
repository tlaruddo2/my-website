import { Box, Button } from "@mui/material";
import React from "react";

const handleOnclick = async () => {
  await fetch ("http://localhost:5000/todos",{
    method: "POST",
    body: JSON.stringify({
      "description": "hihi"
    }),
    headers:{
      'Content-type':'application/json'
    }
  })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err.message);
    })
}

export const ProjectPage = () => {
  return (
    <Box>
      <Button onClick={handleOnclick}>
        insert
      </Button>
    </Box>
  )
}
  
