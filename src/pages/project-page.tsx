import { Box, Button } from "@mui/material";
import React, { useState } from "react";

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
  const [input, setInput] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async () => {
    console.log(input)

    await fetch ("http://localhost:5000/todos",{
      method: "POST",
      body: JSON.stringify({
        "description": `${input}`
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

  return (
    <div>
        <input type="text" id='input' onChange={handleOnChange}/>  
        <input type="button" value="submit" onClick={handleSubmit} />       
    </div>
  )
}
  
