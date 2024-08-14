import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitCredentials = async () => {
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    }

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', height: '100vh' }}>
            <Box sx={{ display: 'flex', alignContent: 'center', py: '2em', justifyContent: 'space-around' }}>
                <form onSubmit={submitCredentials}>
                    <TextField
                        onChange={handleEmailChange}
                        onBlur={handleEmailChange}
                        label="email"
                    />
                    <TextField
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordChange}
                        label="password"
                    />
                    <Box>
                        <Button variant="contained" type="submit">
                            Create Account
                        </Button>

                    </Box>
                </form>

            </Box>

        </Box>
    )
}