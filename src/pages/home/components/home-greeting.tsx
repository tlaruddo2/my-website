import { Link } from "react-router-dom"
import styled from 'styled-components';

const Button = styled.button`
    background-color: #9370DB;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 20px;
    padding: 10px;
`;


export const HomeGreeting = () => { 
    return ( 
        <div style={{width: "40vw", padding:20}}>
            <h1 style={{padding: 10}}>Hello World!</h1>
            <div style={{padding: 10}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque accusantium maxime beatae adipisci, excepturi quis dolorem repudiandae doloribus ad modi harum esse quod tempore et sit voluptatibus reprehenderit perspiciatis.</div>
            <Link to={`/my-website/project`} style={{ textDecoration: "none", color: "black", padding: 10}}>
                    <Button>
                        Go to 'About'
                    </Button>
            </Link>
        </div>
    )
}