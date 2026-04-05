import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b">
      <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-black">
        TOAGE <span className="text-gray-500">ROYALTY</span>
      </Link>
      
      <div className="flex items-center gap-8 font-medium text-sm uppercase tracking-widest">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/services" className="hover:text-green-600">Services</Link>
        <Link to="/about" className="hover:text-green-600">About</Link>
        
        {token && (
          <button 
            onClick={handleLogout}
            className="text-red-500 hover:text-red-700 font-bold border-l pl-8"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;