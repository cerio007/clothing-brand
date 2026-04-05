import React, { useEffect, useState } from 'react';
import API from '../Api/axions';

const ProductCard = ({ product }) => {
  const [contact, setContact] = useState({ phone: '' });
  useEffect(() => {
    API.get('/settings').then(res => {
      setContact({ 
        phone: res.data.contactPhone
      });
    });
  }, []);

  const phoneNumber = contact.phone;
  const ownerPhone = phoneNumber.replace(/\D/g, "");
  
  const handleOrder = () => {
    const message = `Hello! I saw the "${product.name}" on your website and I'd like to make an order. \nPrice: ₦${product.price.toLocaleString()}`;
    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img 
        src={product.image || 'https://via.placeholder.com/300'} 
        alt={product.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-700 font-bold">₦{product.price.toLocaleString()}</span>
          <button 
            onClick={handleOrder}
            className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 flex items-center gap-2"
          >
            Chat to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;