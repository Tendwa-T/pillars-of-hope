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
    
    <section className=" flex gap-20 justify-center items-center w-screen p-20 bg-slate-100">
        <Box className="rounded-lg">
            <img className="size-58 justify-center items-center rounded-lg" src="../../public/assets/children.jpeg" alt="Loading..." />
            <Typography variant="h5" className="text-center mt-2">Pillars Of Hope Founder</Typography>
            <Typography variant="h6" className="text-center">Lorem ipsum dolor sit amet</Typography>
        </Box>
        <Box>
            <List className="flex mt-4 p-8">
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
        
        
    </section>
   
   )
    
    
}