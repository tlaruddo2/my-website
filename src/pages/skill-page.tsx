import {
  Box,
  Typography,
} from "@mui/material";
import { SKILLS } from "consts/skills";
import { SkillListCard } from "components/content-display/skill-list-card";



export const SkillPage = () => {
  return (
    <Box sx={{display:'block' ,height: '100vh', width:'100vw' ,textAlign: 'center ', margin:'auto', padding:'10px'}}>
      <Typography variant="h4"> TECHNICAL SKILLS</Typography>
      <Box sx={{display:'flex', backgroundColor:'yellow', width:'100%', height:'90%', margin: 'auto'}}>
        {SKILLS.map(s => 
          <SkillListCard 
          listText={s.name} 
          imageSource={s.logoUrl}
          proficiency={s.proficiency}
          description={s.description} />
        )}
      </Box>      
    </Box>
  );
};


