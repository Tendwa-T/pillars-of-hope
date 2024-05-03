import { useState } from "react";
import { List, Box, ListItem, ListItemButton, ListItemText, Button, SwipeableDrawer, ListItemIcon } from "@mui/material";
import PropTypes from "prop-types";

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
    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list()}

            </SwipeableDrawer>
        </div>
    )

}

DrawerComponent.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    icons: PropTypes.array.isRequired
}