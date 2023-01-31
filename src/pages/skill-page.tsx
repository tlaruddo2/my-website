import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

const skillList: SkillListProps[] = [];

export const SkillPage = () => {
  return (
    <Box>
      <Typography> TECHNICAL SKILLS</Typography>
      <SkillListItem listText="aa" />
    </Box>
  );
};

interface SkillListProps {
  imageSource?: string;
  listText: string;
}

export const SkillListItem = ({
  imageSource = "/static/images/avatar/1.jpg",
  listText,
}: SkillListProps) => {
  return (
    <Box>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={imageSource} />
          </ListItemAvatar>
          <ListItemText>{listText}</ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};
