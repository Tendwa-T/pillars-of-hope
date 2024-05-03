import { useState } from "react";
import { List, Box, ListItem, ListItemButton, ListItemText, Button, SwipeableDrawer, ListItemIcon, IconButton, Divider } from "@mui/material";
import PropTypes from "prop-types";
import CloseIcon from '@mui/icons-material/Close';

export default function DrawerComponent({ labels, icons }) {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setOpen(open);
    };
    const items = labels.map((label, index) => ({
        label,
        icon: icons[index]
    }));
    const drawerWidth = 250;

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {items.map(({ label, icon }, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const DrawerHeader = () => (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '0 8px',
                    // necessary for content to be below app bar
                    ...({ theme }) => theme.mixins.toolbar,
                }}
            >
                <IconButton onClick={toggleDrawer(false)}><CloseIcon /></IconButton>

            </Box>
            <Divider />
        </>
    );
    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
            <SwipeableDrawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <DrawerHeader />

                {list()}

            </SwipeableDrawer>
        </div>
    )

}

DrawerComponent.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    icons: PropTypes.array
}