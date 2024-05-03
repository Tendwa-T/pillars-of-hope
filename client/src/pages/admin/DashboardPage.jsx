import { IconButton } from "@mui/material";
import { ThemeContext } from "../../theme/ThemeContext";
import { useContext } from "react";
import { ContrastOutlined } from '@mui/icons-material'
import DrawerComponent from "../../components/admin/Drawer";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';


export default function AdminDashboardPage() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div className="flex justify-center items-center">
            <h1>Admin Dashboard Page</h1>
            <IconButton onClick={toggleTheme} >
                <ContrastOutlined />
            </IconButton>
            <DrawerComponent labels={["Home", "Dashboard", "Settings"]} icons={[<HomeIcon key="home" />, <DashboardIcon key="Dashbord" />, <SettingsIcon key="Settings" />]} />

        </div>
    );
}