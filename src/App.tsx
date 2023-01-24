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
  );
}

export default App;
