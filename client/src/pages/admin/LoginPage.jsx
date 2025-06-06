/* eslint-disable no-unused-vars */
import { Box, Button, Container, TextField, Backdrop, CircularProgress, Link } from "@mui/material";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth/useAuth";
import { useNavigate } from "react-router-dom";
import AlertComponent from "../../components/admin/AlertComponent";
import ColorThief from 'colorthief'




export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [backgroundImg, setBackgroundImg] = useState("https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    const [backgroundColor, setBackgroundColor] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: "", severity: "" })
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const nav = useNavigate();

    useEffect(() => {
        async function fetchDominantColor() {
            try {
                const dominantColor = await getDominantColor(backgroundImg);
                setBackgroundColor(`rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`);
                return
            } catch (error) {
                console.error("Failed to fetch color", error)
            }
        }
        fetchDominantColor();
    }, [backgroundImg])

    async function getDominantColor(backgroundImg) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = backgroundImg;
            img.onload = () => {
                const colorThief = new ColorThief();
                const dominantColor = colorThief.getColor(img);
                resolve(dominantColor);
            };
            img.onerror = (error) => reject(error);
        });
    }



    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleAlertClose = () => {
        setAlert({ ...alert, show: false })
    }


    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        const loginSuccess = await login(email, password);
        console.log(email, password)
        if (!loginSuccess) {
            setAlert({ show: true, message: "Invalid email or password", severity: "error" });
        } else {
            nav('/admin/dashboard');
        }
        setIsLoading(false);
    }
    const handleCancel = () => {
        setEmail("");
        setPassword("");
    }


    return (
        <div className="flex justify-center items-center h-[100vh]"
            style={{ backgroundColor: backgroundColor }}
        >
            <div className="flex justify-center items-center flex-col h-[80vh] w-[60vw] bg-center bg-cover rounded-2xl"
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <Container fixed maxWidth='sm' className="backdrop-blur-md bg-black/20 rounded-xl my-[10vw] mx-[5vw] p-[2vw] shadow-xl ">
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
                                <Button variant="contained" sx={{ width: '120px' }} onClick={handleCancel}>
                                    Cancel
                                </Button>
                                <Button type="submit" color="primary" variant="contained" sx={{ width: '120px' }} >
                                    Login
                                </Button>
                            </div>
                            <div>
                                <Link href="/forgot-password" >
                                    Forgot Password?
                                </Link>
                            </div>
                        </form>
                        {isLoading && <CircularProgress />}
                        {alert.show && <AlertComponent message={alert.message} severity={alert.severity} show={alert.show} onClose={handleAlertClose} />}
                    </Box>
                </Container>
            </div>
        </div>
    )
}