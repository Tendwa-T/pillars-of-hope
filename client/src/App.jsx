/* eslint-disable no-unused-vars */
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { ThemeProviderWithContext } from './theme/ThemeContext';
import AdminLoginPage from './pages/admin/LoginPage';


function App() {
  return (
    <div className='w-screen'>
      <ThemeProviderWithContext>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin" element={<AdminLoginPage />} />
          </Routes>
        </Router>
      </ThemeProviderWithContext>
    </div>
  );
}

export default App
