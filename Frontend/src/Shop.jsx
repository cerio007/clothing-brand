import React, { useEffect, useState } from 'react';
import axios from './Api/axions';
import ProductCard from './Components/ProductCard';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center p-10">Loading catalog...</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-serif font-bold mb-2">Signature Styles</h1>
        <p className="text-gray-500">Bespoke tailoring & Ready-to-wear</p>
      </header>

      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h2 className="font-bold text-xl mb-2">✂️ Custom Sewing</h2>
          <p className="text-sm">Bring your own fabric or choose from our premium stock for a perfect fit.</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
          <h2 className="font-bold text-xl mb-2">🧵 Bulk Orders</h2>
          <p className="text-sm">We handle uniform ROYALTYing and group attire for events.</p>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;