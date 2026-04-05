import React, { useEffect, useState } from 'react';
import API from '../Api/axions';

const Footer = () => {
  const [contact, setContact] = useState({ email: '', phone: '' });

  useEffect(() => {
    API.get('/settings').then(res => {
      setContact({ 
        email: res.data.contactEmail, 
        phone: res.data.contactPhone
      });
    });
  }, []);

  return (
    <footer className="bg-gray-50 border-t py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-serif font-bold text-xl mb-4 text-black">TAOGE ROYALTY</h3>
          <p className="text-gray-500 text-sm">Expressing identity through: Fashion, Lifestyle, Consulting.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Contact Us</h4>
          <p className="text-gray-600 text-sm mb-2">{contact.email || "admin@example.com"}</p>
          <p className="text-gray-600 text-sm">{contact.phone || "+234 800 000 0000"}</p>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>© 2026 TAOGE ROYALTY</li>
            <li>Made in Nigeria 🇳🇬</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;