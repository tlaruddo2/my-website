import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
  } from "@mui/material";

interface SkillListCardProps {
    imageSource?: string;
    listText: string;
    proficiency: number, 
    description : string
  }
  
  export const SkillListCard = ({
    imageSource = "/static/images/avatar/1.jpg",
    listText,
    proficiency, 
    description
  }: SkillListCardProps) => {
    return (
        <List >
          <ListItem sx={{display:'flex', flexDirection:"column", width:'25vw', }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={imageSource} />
            </ListItemAvatar>
            <ListItemText>{listText}</ListItemText>
            <ListItemText>{proficiency}%</ListItemText>
            <ListItemText>{description}</ListItemText>
          </ListItem>
        </List>
    );
  };