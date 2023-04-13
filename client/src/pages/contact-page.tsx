import { Box, Typography } from "@mui/material";
import { ContactListCard } from "components/content-display/contact-list-card";
import type { Contact } from "entity/contact/interface/contact"
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const contacts: Contact[] = [ 
  {
    icon: <EmailIcon/>,
    title: "E-Mail",
    content: "tlaruddo2@gmail.com"
  },
  {
    icon: <GitHubIcon/>,
    title: "Github",
    content: "https://github.com/tlaruddo2"
  },
  {
    icon: <LinkedInIcon/>,
    title: "Linkedin",
    content: "https://www.linkedin.com/in/kukjinkim/"
  },
  {
    icon: <InstagramIcon/>,
    title: "Instagram",
    content: "https://www.instagram.com/kukjin_kim/"
  },
]

//email, github, linkedin, instagram
export const ContactPage = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", p:2, alignItems:"center"}}>
      <Typography variant="h3">Kukjin Kim</Typography>
      <Typography variant="subtitle1">Please, contact me if you have anything interesting!</Typography>
      <Box sx={{display:"flex", flexDirection:"row"}}>
        {contacts.map(c => <ContactListCard contact={c}/>)}
      </Box>
    </Box>
  
    );
};
