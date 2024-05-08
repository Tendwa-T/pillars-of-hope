
import AboutPage from "../components/AboutSection";
import AdminEventsSection from "../components/admin/EventsSection";
import Support from "../components/Support";
import Footer from "../components/footer";

export default function HomePage() {
    return (
        <>
            <AdminEventsSection />
            <AboutPage />
            <Support />
            <Footer/>

        </>
    );
}
