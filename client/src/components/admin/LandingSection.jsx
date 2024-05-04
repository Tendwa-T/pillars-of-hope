import { Box, Typography } from "@mui/material";
import { useState } from 'react';

export default function AdminLandingSection() {
    const [bgUrl, setBgUrl] = useState("https://images.unsplash.com/photo-1474377207190-a7d8b3334068?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

    // eslint-disable-next-line no-unused-vars
    function changeBackground(newUrl) {
        setBgUrl(newUrl);
    }
    return (
        <>
            <Box sx={{
                display: 'block',
                backgroundImage: `url(${bgUrl})`,
                height: '78vh',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, rgb(0, 78, 64, 1), rgba(0, 78, 64, 0.0))',
                    zIndex: 1
                }
            }}
            >
                <Typography
                    top={'42%'}
                    padding={2}
                    variant="h2"
                    position={'relative'}
                    zIndex={2}
                    color={'white'}
                    sx={{ cursor: 'default', userSelect: 'none' }}

                >
                    Pillars of Hope Admin Panel
                </Typography>
                <Typography
                    top={'44%'}
                    width={'50%'}
                    padding={2}
                    variant="h6"
                    position={'relative'}
                    zIndex={2}
                    color={'white'}
                    sx={{ cursor: 'default', userSelect: 'none' }}
                >
                    Welcome! From here, feel free to edit the website content. You are currently limited to editing the users who can add to this page (Admins) as well as the events that are displayed on the events page. Enjoy!!
                </Typography>
            </Box>
        </>

    )
}