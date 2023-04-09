import React, { useState } from "react";

export const ProjectPage = () => {
  // const handleSubmit2 = async () => {
  //   console.log(input2)

  //   await fetch ("http://localhost:5000/todos",{
  //     method: "DELETE",
  //     body: JSON.stringify({
  //       "id": `${input2}`
  //     }),
  //     headers:{
  //       'Content-type':'application/json'
  //     }
  //   })
  //     .then((res) => console.log(res))
  //     .catch((err) => {
  //       console.log(err.message);
  //     })
  // }  

  //integreatino key: secret_C2jj98h8wxSTf8RMQOtYre0EwQr0uZl4rhqYgTve4sR
  async function retriveData() {

    // const options = {
    //   method: 'POST',
    //   mode: "no-cors",
    //   headers: {
    //     Authentication: 'Bearer secret_C2jj98h8wxSTf8RMQOtYre0EwQr0uZl4rhqYgTve4sR',
    //     Accept: 'application/json',
    //     'Notion-Version': '2022-06-28',
    //     'content-type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   body: JSON.stringify({page_size: 100})
    // };
    
    await fetch('https://api.notion.com/v1/databases/1c0101b33ea04cbca65f26207db609c5/query',
        {
          method: 'POST',
          // mode: "no-cors",
          headers: {
            Authorization: 'Bearer secret_9VmcnB2AyNLBC6aTzBBZZFI3j9vjgjDC9Q7yoRYXwbA',
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({page_size: 100}
            )})
            .then( res => res.json())
            .then( res => console.log(res));

    // const result = await res.json()

    // console.log(res);

  }
  

  return (
    <div>
      <button onClick={retriveData}>retried data </button>
    </div>
  )
}
  
