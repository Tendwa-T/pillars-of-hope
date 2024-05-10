import Home from "../components/home";
import DrawerAppBar from "../components/Navbar";
import AboutPage from "../components/AboutSection";
import AdminEventsSection from "../components/admin/EventsSection";
import SupportComponent from "../components/SupportComponent";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <>
      <DrawerAppBar />
      <Home />
      <AdminEventsSection />
      <AboutPage />
      <SupportComponent/>
      <Footer/>
    </>
  );
}
