import type { Expeirence } from "entity/experience/interface/experience"
import { Box, Typography, Divider} from "@mui/material"

interface ExperienceListCardProps{
    experience: Expeirence
}

export const ExperienceListCard = ( {experience}: ExperienceListCardProps ) => {
    return (
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        alignItem: "center",
        justifyContent:"center"
      }}>
        <Box
            sx={{
            // width: "80%",
            display:"flex",
            flexDirection: "row",
            justifyContent: "center",
            p: "20"
          }}>
            <Box 
              component={"img"}
              sx={{
              height:"100px",
              width: "100px",
              p:2
            }}
              src={experience.logoUrl}
              alt={experience.company}
            />
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems:"start",
              p:2
            }}>
              <Typography variant="h6"> {experience.company}</Typography>
              <Typography variant="subtitle1"> {experience.location}</Typography>
              <Typography variant="subtitle1"> {experience.role}</Typography>
              {experience.Description.map(d => <Typography variant="body1"> {d}</Typography>)}
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              p:2
            }}>
              <Typography> {experience.startDate}</Typography>
              <Typography>~ {experience.endDate}</Typography>
            </Box>
        </Box>
        <Divider variant="middle"/>
      </Box>        
              
    )
}


// export interface Expeirence{ 
//   logoUrl?: string, 
//   company: string, 
//   role: string, 
//   location: string,
//   startDate: string 
//   endDate: string, 
//   Description: string[]
// }