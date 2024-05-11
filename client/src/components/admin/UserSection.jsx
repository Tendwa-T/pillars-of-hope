import { Typography, Box, Card, Avatar, IconButton, Button, Modal, Snackbar, Alert, Badge } from "@mui/material";
import { useUser } from "../../context/Users/useUser"
import { useAuth } from "../../context/Auth/useAuth";
import AddUserForm from "./users/AddUser";

import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { useState, } from "react";
import { styled } from '@mui/material/styles';

export default function AdminUserSection() {
    const { userList } = useUser();
    const { currentUser } = useAuth();
    const [snackConfig, setSnackConfig] = useState({ openSnackbar: false, message: '', serverity: 'info' });




    function stringToColor(string) {
        let hash = 0;
        let i;

        for (i = 0; i < string.length; i++) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = '#';

        for (i = 0; i < 3; i++) {
            let value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }

        return color;
    }

    function stringAvatar(name) {
        //Check if name has 2 names or one
        if (name.split(' ').length === 1) {
            return {
                sx: {
                    bgcolor: stringToColor(name),
                    width: 56,
                    height: 56,

                },
                children: `${name[0]}`
            }
        }
        return {
            sx: {
                bgcolor: stringToColor(name),
                width: 56,
                height: 56,

            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
        }
    }
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackConfig({ ...snackConfig, openSnackbar: false });
    };

    function DeleteUser({ userID }) {

        const [open, setOpen] = useState(false);
        const { deleteUser } = useUser();

        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
        async function handleDelete() {

            if (await deleteUser(userID)) {
                setSnackConfig({ openSnackbar: true, message: 'User Deleted', serverity: 'success' });
                handleClose();
            } else {
                setSnackConfig({ openSnackbar: true, message: 'Error Deleting User', serverity: 'error' });
                handleClose();
            }

        }
        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: { xs: '90%', sm: '80%', md: '60%' },
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
        };


        return (

            <>
                <IconButton onClick={handleOpen} color='error' variant='contained'><DeleteIcon /></IconButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: { xs: 350, sm: 400, md: 600 }, borderRadius: 5, }}>
                        <Typography id="child-modal-title" variant="h6"> Delete User?</Typography>
                        <Typography id="child-modal-description" variant="body1">Are you sure you want to delete this User?</Typography>
                        <Typography id="child-modal-description" variant="caption" textAlign={'center'}>This action cannot been undone</Typography>
                        <Box display={'flex'} justifyContent={'center'} my={2}></Box>
                        <Box width={"100%"} justifyContent={"space-evenly"} display={'flex'}>
                            <Button onClick={handleClose} variant="contained" color='error'>Do not Delete</Button>
                            <Button onClick={handleDelete} variant="contained" color='warning'>Yes, Delete User</Button>
                        </Box>
                    </Box>
                </Modal>

            </>

        );
    }
    DeleteUser.propTypes = {
        userID: PropTypes.string.isRequired,

    }

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));


    return (
        <section id="users">
            <Box mb={10}>
                <Box sx={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'column' }}>
                    <Typography variant="h3" textAlign={'center'} sx={{ color: "#2ecc71", cursor: 'default', userSelect: 'none', }}>Adminstrators</Typography>
                </Box>
                <Box px={2} display={'flex'} justifyContent={'end'}>
                    <AddUserForm />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'space-between' }, padding: 2 }}>
                    {userList && userList.map((user) => (
                        <Card key={user._id} sx={{ display: 'flex', flexDirection: 'column', padding: '5px', margin: '5px', width: '45vw', borderRadius: 5, cursor: 'default', userSelect: 'none', }}>
                            <Box sx={{ display: 'flex', width: '100%' }}>
                                <Box sx={{ display: 'flex', width: '100%', }}>
                                    {user._id === currentUser.userID ?
                                        <StyledBadge
                                            overlap="circular"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            variant="dot"
                                        >
                                            <Avatar {...stringAvatar(user.name)} />
                                        </StyledBadge> :
                                        <Avatar {...stringAvatar(user.name)} />

                                    }
                                    <Box ml={4}>
                                        <Typography variant="h6"> {user.name}</Typography>
                                        <Typography variant="caption" fontStyle={'italic'}> {user.email}</Typography>
                                        {user._id === currentUser.userID && <Typography variant="caption"> (You)</Typography>}
                                    </Box>
                                </Box>
                                <DeleteUser userID={user._id} />
                            </Box>
                        </Card>

                    ))}
                </Box>
            </Box>
            <Snackbar open={snackConfig.openSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={4000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackConfig.serverity} sx={{ width: '100%' }}>
                    {snackConfig.message}
                </Alert>
            </Snackbar>
        </section >
    )
}