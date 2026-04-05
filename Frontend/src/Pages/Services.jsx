import React, { useEffect, useState } from 'react';
import API from '../Api/axions';

const OtherServicesPage = () => {
  const [note, setNote] = useState("");

  useEffect(() => {
    API.get('/settings').then(res => setNote(res.data.serviceNote));
  }, []);

  const services = [
    { title: "TAOGE ROYALTY FASHION", desc: "Modest, structured, message-driven fashion designed to communicate confidence and kingdom values." },
    { title: "TAOGE ROYALTY ESSENTIALS", desc: "High quality soaps, shampoos, and oils crafted for purity, wellness, and daily excellence." },
    { title: "TAOGE ROYALTY CONSULTING", desc: "Mentorship, training, and consulting designed to help you structure your vision and scale with confidence." }
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-serif mb-6 text-center">Expert Services</h2>
      
      {note && (
        <div className="bg-green-50 border border-green-100 p-4 rounded-xl mb-12 text-center text-green-800 font-medium">
          📢 {note}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-8 border rounded-2xl hover:shadow-soft transition">
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OtherServicesPage;