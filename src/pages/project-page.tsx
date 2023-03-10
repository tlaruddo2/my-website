import React, { useState } from "react";

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

  const [input2, setInput2] = useState("");

  const handleOnChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit2 = async () => {
    console.log(input2)

    await fetch ("http://localhost:5000/todos",{
      method: "DELETE",
      body: JSON.stringify({
        "id": `${input2}`
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
        <input type="number" id='input' onChange={handleOnChange2}/>  
        <input type="button" value="delete" onClick={handleSubmit2} />    
    </div>
  )
}
  
