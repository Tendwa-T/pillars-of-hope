import { useState } from "react";
import { Box, Button, Modal, Typography, TextField, Snackbar, Alert, CircularProgress } from "@mui/material";
import { useUser } from "../../../context/Users/useUser";

export default function AddUserForm() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [snackConfig, setSnackConfig] = useState({ openSnackbar: false, message: '', serverity: 'success' });
    const { createUser } = useUser();

    const handleOpen = () => {
        setOpen(!open);
        handleCancel();
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackConfig({ ...snackConfig, openSnackbar: false });
    };

    function handleCancel() {
        setName('');
        setEmail('');
        setPassword('');
        setConfPass('');
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: { xs: '90%', sm: '80%', md: '60%' },
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const handleSubmit = async (event) => {
        setIsLoading(true);

        event.preventDefault();
        let user, userAction;
        if (password === confPass) {
            user = {
                name,
                email,
                password
            }
            userAction = await createUser(user);
        } else {
            setSnackConfig({ openSnackbar: true, message: 'Passwords do not match', serverity: 'error' });
            setIsLoading(false);
            return;
        }

        if (!userAction) {
            setSnackConfig({ openSnackbar: true, message: 'Unable to create User', serverity: 'error' });
        } else {
            setSnackConfig({ openSnackbar: true, message: 'User created successfully', serverity: 'success' });
        }
        setIsLoading(false);
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handlePassConfChange = (event) => {
        setConfPass(event.target.value)
    }
    return (
        <>
            <Button onClick={handleOpen}>
                Add User
            </Button>
            <Modal
                open={open}
                onClose={handleOpen}
                aria-labelledby="user-form"
                aria-describedby="user-form"
                disableEnforceFocus
            >
                <Box sx={{ ...style }} border={1} borderRadius={5} justifyContent={"space-between"} display={'flex'} flexDirection={'column'}>
                    <Typography variant="h4" textAlign={'center'}>Add User</Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            sx={{ mb: '1rem' }}
                        />

                        <TextField
                            id="email-field"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            sx={{ mb: '1rem' }}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            sx={{ mb: '1rem' }}
                        />
                        <TextField
                            id="confPass"
                            label="Confirm Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            value={confPass}
                            onChange={handlePassConfChange}
                            sx={{ mb: '1rem' }}
                        />

                        <Box display={'flex'} justifyContent={'center'}>
                            {isLoading ? <CircularProgress /> :
                                <Box width={"100%"} justifyContent={"space-evenly"} display={'flex'} >
                                    <Button onClick={handleOpen} variant='outlined'>Cancel</Button>
                                    <Button variant='contained' onClick={handleSubmit} >Submit</Button>
                                </Box>
                            }
                        </Box>
                    </form>

                </Box>
            </Modal>
            <Snackbar open={snackConfig.openSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={4000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackConfig.serverity} sx={{ width: '100%' }}>
                    {snackConfig.message}
                </Alert>
            </Snackbar>
        </>

    )
}