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
import AboutPage from "./pages/AboutPage";
import { ThemeProviderWithContext } from "./theme/ThemeContext";
import AdminLoginPage from "./pages/admin/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import AdminDashboardPage from "./pages/admin/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoutes";

function AppContent() {
  const location = useLocation();
  useEffect(() => {
    const titleMap = {
      // Add your route and Its title here
      "/": "Home",
      "/about": "About",
      "/admin": "Admin Login",
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
      <Route path="/about" element={<AboutPage />} />
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
    <ThemeProviderWithContext>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ThemeProviderWithContext>
  );
}

export default App;
