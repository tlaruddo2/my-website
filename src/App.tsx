<<<<<<< HEAD
import { NavBar } from "components/nav-bar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header>kukjin's website</header>
      <header>kukjin's website</header>
      <header>kukjin's website</header>
      <header>kukjin's website</header>
      <header>kukjin's website</header>
      <header>kukjin's website</header>
    </div>
=======
import { Box, Typography } from '@mui/material';
import 'App.css';
import {Header} from "components/header/header"
import { AboutPage } from 'pages/about-page';


function App() {
  return (
    <Box>
      <Header/> 
      <AboutPage/>
    </Box>
>>>>>>> 19aaa7f82a4a96ec9994edc029a80d7362cc8685
  );
}

export default App;
