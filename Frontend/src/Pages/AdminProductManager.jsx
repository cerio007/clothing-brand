import React, { useEffect, useState } from 'react';
import API from '../Api/axions';
import { formatNaira } from '../utils/formatCurrency';
import {AddProductModal} from '../Components/AddProductModal';

const AdminProductManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get('/products');
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to remove this product?")) {
      try {
        await API.delete(`/products/${id}`);
        setProducts(products.filter(p => p.id !== id));
      } catch (err) {
        alert("Delete failed. Check your connection.");
      }
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  if (loading) return <div className="p-10 text-center">Loading Inventory...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Product Inventory</h2>
        <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-black text-white px-4 py-2 rounded-lg text-sm">
          + Add New Product
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl border">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-4 font-semibold text-sm">Product</th>
              <th className="p-4 font-semibold text-sm">Category</th>
              <th className="p-4 font-semibold text-sm">Price</th>
              <th className="p-4 font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4 flex items-center gap-3">
                  <img src={product.image} alt="" className="w-12 h-12 rounded object-cover" />
                  <span className="font-medium">{product.name}</span>
                </td>
                <td className="p-4 text-sm text-gray-600">{product.category}</td>
                <td className="p-4 text-sm font-bold">{formatNaira(product.price)}</td>
                <td className="p-4">
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <AddProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onProductAdded={fetchProducts}
        />
      )}
  <AddProductModal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)} 
  refreshProducts={fetchProducts} 
/>
    </div>
  );
};

export default AdminProductManager;