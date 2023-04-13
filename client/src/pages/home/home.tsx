import styled from 'styled-components';
import { HomeGreeting } from "./components/home-greeting";
import { HomeAnimation } from "./components/home-animation";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 768px){ 
    flex-direction: row;
    height: 80vh
  }
`;

export const Home = () => {
  return (
    <Container>
      <HomeAnimation/>
      <HomeGreeting/>
    </Container>
  );
};
