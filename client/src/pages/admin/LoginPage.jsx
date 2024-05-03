/* eslint-disable no-unused-vars */
import { Box, Button, Container, TextField, Backdrop, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";


export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const nav = useNavigate();



    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        if ((await login(email, password)) === false) {
            setIsLoading(false);
            return;

        }
        console.log(AuthProvider.currentUser);
        nav('/admin/dashboard');
    }
    const handleCancel = () => {
        setEmail("");
        setPassword("");
    }
    return (
        <div className="flex justify-center items-center h-[100vh] bg-[#c9b098]">
            <div className="flex justify-center items-center flex-col h-[80vh] w-[60vw] bg-[url('../../../login_backdrop.jpg')] bg-center bg-cover rounded-2xl">
                <Container maxWidth='sm' className="backdrop-blur-md bg-black/20 rounded-xl m-[10vw] p-[2vw] shadow-xl ">
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                        gap: '5px',
                        padding: '2vw',
                    }}
                        className=" p-8 "
                    >
                        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                id="email-field"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                className="mb-4"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                fullWidth
                                className="mb-4"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />

                            <div className="flex justify-between w-full">
                                <Button className="w-[120px] bg-slate-300" onClick={handleCancel}>
                                    Cancel
                                </Button>
                                <Button className="w-[120px] bg-slate-300" type="submit" color="primary" >
                                    Login
                                </Button>
                            </div>
                        </form>
                        {isLoading && <CircularProgress />}
                    </Box>
                </Container>
            </div>
        </div>


    )
}