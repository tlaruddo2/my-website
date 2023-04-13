import { Link } from "react-router-dom"
import { Button } from "../styled/button.styles"
import { GreetingContainer } from "../styled/greeting-container"



export const HomeGreeting = () => { 
    return ( 
        <GreetingContainer>
            <h1 style={{ padding: 10 }}>Hello World!</h1>
            <div style={{ padding: 10, fontSize: "20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque accusantium maxime beatae adipisci, excepturi quis dolorem repudiandae doloribus ad modi harum esse quod tempore et sit voluptatibus reprehenderit perspiciatis.</div>
            <Link to={`/my-website/project`} style={{ textDecoration: "none", color: "black", padding: 10}}>
                    <Button> Who am I ? </Button>
            </Link>
        </GreetingContainer>
    )
}