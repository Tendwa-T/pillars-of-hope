import DrawerComponent from "../components/admin/Drawer";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import AppBarComponent from "../components/admin/AppBar";

export default function HomePage() {
    return (
        <div className="flex border border-red-700 justify-center">
            <AppBarComponent labels={["Home", "Dashboard", "Settings"]} />
            <h1>Home Page</h1>
            <DrawerComponent labels={["Home", "Dashboard", "Settings"]} icons={[<HomeIcon key="home" />, <DashboardIcon key="Dashbord" />, <SettingsIcon key="Settings" />]} />
        </div>
    );
}
