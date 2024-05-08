import DrawerComponent from "../components/admin/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import Home from "../components/Home";
import DrawerAppBar from "../components/Navbar";
import AboutPage from "../components/AboutSection";
import AdminEventsSection from "../components/admin/EventsSection";
import Support from "../components/Support";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <>
      <DrawerAppBar />
      <Home />
      <AdminEventsSection />
      <AboutPage />
      <Support />
       <Footer/>
    </>
  );
}
