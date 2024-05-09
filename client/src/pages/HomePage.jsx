import DrawerComponent from "../components/admin/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import Home from "../components/home";

export default function HomePage() {
  return (
    <>
      <Home />
      <AdminEventsSection />
      {/* <AboutPage /> */}
    </>
  );
}
