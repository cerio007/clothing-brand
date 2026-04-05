import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import API from '../Api/axions';

const WhatsAppFloat = () => {
  const [contact, setContact] = useState({ phone: '' });

  useEffect(() => {
    API.get('/settings').then(res => {
      setContact({ 
        phone: res.data.contactPhone
      });
    });
  }, []);

  const phoneNumber = contact.phone;
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const message = "Hello! I'm browsing your website and have a question about your services.";
  
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-16 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold shadow-md opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppFloat;