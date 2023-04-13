
const fetchData = () => { 
  fetch("http://localhost:8000/")
    .then(res => res.json())
    .then(res => console.log(res))
}

export const ProjectPage = () => { 
  return (
    <>
      <button onClick={fetchData}>
        data
      </button>
    </>
  )





}