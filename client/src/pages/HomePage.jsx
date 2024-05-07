import DrawerComponent from "../components/admin/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import Home from "../components/Home";
import DrawerAppBar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <DrawerAppBar />
      <Home />
    </>
  );
}
