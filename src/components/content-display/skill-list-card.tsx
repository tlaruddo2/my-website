import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
} from "@mui/material";
import { LinearProgressWithLabel } from "./linear-progress-with-labell";

interface SkillListCardProps {
  imageSource?: string;
  listText: string;
  proficiency: number;
  description: string;
}

export const SkillListCard = ({
  imageSource = "/static/images/avatar/1.jpg",
  listText,
  proficiency,
  description,
}: SkillListCardProps) => {
  return (
    <List>
      <ListItem
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          // background: "purple",
          margin: "10px",
          p: "10px",
        }}
      >
        <Box>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={imageSource} />
          </ListItemAvatar>
          <ListItemText sx={{ textAlign: "center" }}>{listText}</ListItemText>
        </Box>
        <Box>
          <LinearProgressWithLabel value={proficiency} />
          <ListItemText sx={{ textAlign: "center" }}>
            {description}
          </ListItemText>
        </Box>
      </ListItem>
    </List>
  );
};
