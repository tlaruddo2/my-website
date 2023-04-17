import { useState } from "react";

const fetchData = () => { 
  fetch("http://localhost:8000/")
    .then(res => res.json())
    .then(res => console.log(res))
}

export const ProjectPage = () => {
  const [res, setRes] = useState("");

  const fetchData = () => {
    fetch("http://localhost:8000/")
      .then( res => res.json()) //JSON.parse(res)
      .then( res => JSON.stringify(res))
      .then( res => setRes(res))
  }
  
  return (
    <>
      <button onClick={fetchData}>
        data
      </button>
      <p>{res}</p>
    </>
  )





}