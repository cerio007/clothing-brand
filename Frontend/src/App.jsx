import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import OtherServicesPage from './Pages/Services';
import LoginPage from './Pages/LoginPage';
import AdminDashboard from './Pages/AdminDashboard';

// Components
import Navbar from './Components/Navbar';
import WhatsAppFloat from './Components/WhatsAppFloat';
import ProtectedRoute from './Components/protectedRoute';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<OtherServicesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/admin/manage" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;