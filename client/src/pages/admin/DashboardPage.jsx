import AppBarComponent from "../../components/admin/AppbarComponent";
import AdminEventsSection from "../../components/admin/EventsSection";
import AdminLandingSection from "../../components/admin/LandingSection";



export default function AdminDashboardPage() {

    return (
        <>
            <AppBarComponent />
            <AdminLandingSection />
            <AdminEventsSection />
        </>

    );
}