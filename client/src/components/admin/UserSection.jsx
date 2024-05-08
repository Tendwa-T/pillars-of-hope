import { Typography, Box, Card } from "@mui/material";
import { useUser } from "../../context/Users/useUser"

export default function AdminUserSection() {
    const { userList } = useUser();
    return (
        <section id="users">
            <Box>
                <Box sx={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'column' }}>
                    <Typography variant="h2" textAlign={'center'} sx={{ cursor: 'default', userSelect: 'none', }}>Users</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                    {userList.map((user) => (
                        <Card key={user._id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid black', borderRadius: '5px', padding: '5px', margin: '5px' }}>

                            <Typography variant="h4">User Name: {user.name}</Typography>
                            <Typography variant="h4">Email: {user.email}</Typography>
                        </Card>
                    ))}
                </Box>
            </Box>

        </section>
    )
}