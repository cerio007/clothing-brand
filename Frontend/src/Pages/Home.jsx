import React, { useState } from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-100 overflow-hidden">
        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Express Identity. Live Intentionally. Build with Authority.</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            A multi-dimensional brand at the intersection of fashion, lifestyle, and consulting—designed for individuals who value meaning, structure, and excellence.
          </p>
          <Link to="/services" className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
            Explore Our Services
          </Link>
        </div>
      </section>
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link 
          to="/services/royalty-fashion"
           className="block group cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
>
          <div className="bg-red-50 p-10 rounded-2xl text-center border border-transparent hover:border-red-200 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-2 text-red-900 group-hover:text-red-600 transition-colors">
              TAOGE ROYALTY FASHION
            </h3>
            <p className="text-sm text-red-700">
              Wear your identity with confidence.
            </p>
          </div>
        </Link>
<Link
  to="/services/royalty-essentials"
  className="block group cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
>
  <div className="bg-blue-50 p-10 rounded-2xl text-center border border-transparent hover:border-blue-200 hover:shadow-xl transition-all">
    <h3 className="text-xl font-bold mb-2 text-blue-900 group-hover:text-blue-600 transition-colors">
      TAOGE ROYALTY ESSENTIALS
    </h3>
    <p className="text-sm text-blue-700">
      Care with intention.
    </p>
  </div>
</Link>
        <Link 
  to="/services/royalty-consulting" 
  className="block group cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
>
  <div className="bg-green-50 p-10 rounded-2xl text-center border border-transparent hover:border-green-200 hover:shadow-xl transition-all">
    <h3 className="text-xl font-bold mb-2 text-green-900 group-hover:text-green-600 transition-colors">
      TAOGE ROYALTY CONSULTING
    </h3>
    <p className="text-sm text-green-700">
      Build with clarity.
    </p>
  </div>
</Link>
      </section>
    </div>
  );
};

export default HomePage;