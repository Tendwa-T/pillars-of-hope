import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    
} from "@mui/material";



export default function Footer(){
   
   return(
    <Box 
    sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap: 10,

    }}
    >
        <Box className="rounded-lg">
            <img src="../../public/assets/children.jpeg" alt="Loading..." />
            <h3>Pillars Of Hope Founder</h3>
            <Typography variant="h5">Lorem ipsum dolor sit amet</Typography>
        </Box>
        <Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText primary="Events" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText primary="Support" />
                    </ListItemButton>
                </ListItem>

        </List>
        </Box>
        <Typography variant="h6">Pillars Of Hope</Typography>
    </Box>
   )
    
    
}