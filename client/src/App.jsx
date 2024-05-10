/* eslint-disable no-unused-vars */
import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ThemeProviderWithContext } from "./theme/ThemeContext";
import AdminLoginPage from "./pages/admin/LoginPage";
import { AuthProvider } from "./context/Auth/AuthContext";
import AdminDashboardPage from "./pages/admin/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoutes";
import { EventProvider } from "./context/Event/EventContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { UserProvider } from "./context/Users/UserContext";

function AppContent() {
  const location = useLocation();
  useEffect(() => {
    const titleMap = {
      // Add your route and Its title here
      "/": "Home",
      "/about": "About",
      "/admin": "Admin Login",
      "/support":"Support",
      "/events": "Events",
      "/admin/dashboard": "Admin Dashboard",
      "/admin/events": "Admin Events",
    };
    const title = titleMap[location.pathname] || "Page Not Found";
    document.title = `Pillars of Hope - ${title}`;
  }, [location]);
  //Add your routes below
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminLoginPage />} />
      <Route
        path="/admin/dashboard"
        element={<ProtectedRoute element={<AdminDashboardPage />} />}
      />
    </Routes>
  );
}
// Do not touch this function
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProviderWithContext>
        <AuthProvider>
          <EventProvider>
            <UserProvider>
              <Router>
                <AppContent />
              </Router>
            </UserProvider>
          </EventProvider>
        </AuthProvider>
      </ThemeProviderWithContext>
    </LocalizationProvider>
  );
}

export default App;
