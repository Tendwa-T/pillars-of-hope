/* eslint-disable no-unused-vars */
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { ThemeProviderWithContext } from './theme/ThemeContext';
import AdminLoginPage from './pages/admin/LoginPage';
import { AuthProvider } from './context/AuthContext';
import AdminDashboardPage from './pages/admin/DashboardPage';
import ProtectedRoute from './components/ProtectedRoutes';


function App() {
  return (
    <AuthProvider>
      <ThemeProviderWithContext>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute element={<AdminDashboardPage />} />
            } />
          </Routes>
        </Router>
      </ThemeProviderWithContext>
    </AuthProvider>
  );
}

export default App
