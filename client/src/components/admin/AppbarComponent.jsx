import { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useAuth } from '../../context/Auth/useAuth';
import { ThemeContext } from '../../theme/ThemeContext';
import { ContrastOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



export default function AppBarComponent() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigator = useNavigate();
    const { toggleTheme, theme } = useContext(ThemeContext);

    const { logout } = useAuth();


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <AppBar sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#004e40' : '#004e40',
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component='a'
                        href="/admin/dashboard"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ADMIN
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size='large'
                            aria-label='current user account'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key={'event'} onClick={() => scrollToSection('event')}>
                                <Typography textAlign="center">
                                    Event
                                </Typography>
                            </MenuItem>
                            <MenuItem key={"webpage"} onClick={() => navigator('/')}>
                                <Typography textAlign="center">
                                    Webpage
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component='a'
                        href="/admin/dashboard"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ADMIN
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={'events'}
                            onClick={() => scrollToSection('events')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Events
                        </Button>
                        <Button
                            key={'webpage'}
                            onClick={() => { logout(); navigator('/'); }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Webpage
                        </Button>

                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Typography
                            sx={{ cursor: 'default', userSelect: 'none' }}
                        >
                            Hello {useAuth().currentUser.userName}
                        </Typography>
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>

                        <IconButton onClick={toggleTheme} sx={{ mx: 4 }}>
                            <ContrastOutlined />
                        </IconButton>

                        <Tooltip title="Open settings">

                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={useAuth().currentUser.userName} src="/static/images/avatar/2.jpg" sx={{ bgcolor: 'purple' }} />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem key="logout" onClick={logout}>
                                <Typography textAlign="center">LogOut</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>

        </AppBar>
    )

}