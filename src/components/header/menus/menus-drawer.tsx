import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import ComputerIcon from '@mui/icons-material/Computer';

const pages = [
    "about",
    "skill",
    "experience",
    "project",
    "contact",
];

const pagesIcon = [
    <PersonIcon/>,
    <ComputerIcon/>,
    <WorkIcon/>,
    <GroupsIcon/>,
    <CallIcon/>,
]

interface MenuesDrawerProps{ 
    callBack: (opend: boolean) => void
}

export const MenuesDrawer = ({callBack}: MenuesDrawerProps) => {
    return (
        <Box>
            <IconButton onClick ={(e) => {callBack(false)}}>
                <ClearIcon/>
            </IconButton>
            <List sx={{display: "flex", flexDirection: "column"}}>
                {pages.map((p,i) => (
                    <ListItem key ={p}>
                        <ListItemButton>
                            <Link
                                to={`/${p}`}
                                key={p} 
                                style={{ textDecoration: "none", color: "black", display:"flex", flexDirection:"row"}}
                                >
                                <ListItemIcon>{pagesIcon[i]}</ListItemIcon>
                                <ListItemText>{p.toUpperCase()}</ListItemText>
                             </Link> 
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    )
}