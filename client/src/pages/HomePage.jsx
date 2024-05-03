import DrawerComponent from "../components/admin/Drawer";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';

export default function HomePage() {
    return (
        <div className="flex border border-red-700 justify-center">
            <h1>Home Page</h1>
            <DrawerComponent labels={["Home", "Dashboard", "Settings"]} icons={[<HomeIcon key="home" />, <DashboardIcon key="Dashbord" />, <SettingsIcon key="Settings" />]} />
        </div>
    );
}
