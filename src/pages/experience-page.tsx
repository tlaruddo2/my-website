import { Box,  Typography, } from "@mui/material";
import { ExperienceListCard } from "components/content-display/experience-list-card";
import type { Expeirence } from "entity/experience/interface/experience";
import  intersystemLogo  from "assets/images/intersystem.png";
import locoLogo from "assets/images/loco.png";
import ipserlabLogo from "assets/images/ipserlab.png"
import photobymeLogo from "assets/images/photobyme.png";

const experiences: Expeirence[] = [
  {
    id:0,
    logoUrl: intersystemLogo, 
    company: "Intersystem Conrols Inc.", 
    role: "Full-stack Developer", 
    location: "Vancouver, B.C.",
    startDate: "Jan. 2023" ,
    endDate: "Present", 
    Description: ["- Make UI Template to render based on data from backend","- Stack: ReactJs, Typescript, Redux, Router, Mui"]
  },
  {
    id:1,
    logoUrl: locoLogo, 
    company: "Loco", 
    role: "Co-founder, Full-stack Developer", 
    location: "Vancouver, B.C.",
    startDate: "May. 2022" ,
    endDate: "Present", 
    Description: ["- Make front-end of using Flutter","- Set pipllinel to upload data using Amazon AWS","- Stack: Flutter, Dart, Dart Dao, Mui"]
  },
  {
    id:2,
    logoUrl: photobymeLogo, 
    company: "Photobyme", 
    role: "Co-founder, Full-stack Developer", 
    location: "Vancouver, B.C.",
    startDate: "Apr. 2022" ,
    endDate: "Present", 
    Description: ["- Launched a new business model in Vancouver","- Succeeded to have a surplus from the first month","- Built a web application with WordPress"]
  },  
  {
    id:3,
    logoUrl: ipserlabLogo, 
    company: "Ipserlab", 
    role: "Software Engineer", 
    location: "Califonia, USA (remote)",
    startDate: "Feb. 2022" ,
    endDate: "Aug. 2022", 
    Description: ["- Developed web app for B2B application",]
  },
]

export const ExperiencePage = () => {
  return (
    <Box sx={{
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      p:2
    }}>
      <Typography 
        variant="h4"
        sx={{p:1}}> EXPERIENCE</Typography>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}>
        {experiences.map(e => <ExperienceListCard key={e.id} experience={e}/>)}
      </Box>
      
    </Box>
  );
};
