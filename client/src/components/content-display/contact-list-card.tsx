import { Box, Link, Typography,Button} from "@mui/material";
import { Contact } from "entity/contact/interface/contact";

interface ContractListCardProps {
    contact: Contact

}

export const ContactListCard = ({contact}:ContractListCardProps) => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", p:2}}>
            {contact.icon}
            <Typography variant="subtitle1">{contact.title}</Typography>
            <Typography variant="subtitle1">{contact.content}</Typography>           
            <Button>
                <a href={contact.content} target="_blank">
                    Go to the link
                </a>        
            </Button>            
        </Box>
    )
}

   