import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material';

export default function AppBarComponent({ labels }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleDrawerToggle = () => {
        setIsOpen(!isOpen);
    }

    const drawer = (
        <Box
            onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}
        >
            <Typography variant="h6" sx={{ my: 2 }}>
                POHC - ADMIN
            </Typography>
            <Divider />
            <List>
                {labels.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} selected={selectedIndex === index} onClick={setSelectedIndex(index)}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <>
            {/* <Box sx={{ display: "flex" }}>
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                        >
                            POH - ADMIN
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {labels.map((text, index) => (
                                <Button key={text} color="inherit" onClick={setSelectedIndex(index)}>{text}</Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        variant="temporary"
                        open={isOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box> */}
            <Box>
                <AppBar position="static">
                    <CssBaseline />
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                        >
                            POH - ADMIN
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {labels.map((text, index) => (
                                <Button key={text} color="inherit" onClick={setSelectedIndex(index)}>{text}</Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>

    );

}

AppBarComponent.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string),
};