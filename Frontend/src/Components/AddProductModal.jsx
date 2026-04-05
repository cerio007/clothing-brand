import React, { useState } from 'react';
import API from '../Api/axions';

const AddProductModal = ({ isOpen, onClose, refreshProducts }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Ready-to-Wear',
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Use FormData because we are uploading a file (image)
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('description', formData.description);
    data.append('category', formData.category);
    data.append('image', image);

    try {
      await API.post('/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert("Product added successfully!");
      refreshProducts();
      onClose();
    } catch (err) {
      alert("Failed to add product. Check if all fields are filled.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" placeholder="Product Name (e.g. Blue Senator)"
            className="w-full border p-2 rounded-lg" required
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          
          <div className="flex gap-2">
            <input 
              type="number" placeholder="Price (₦)"
              className="w-full border p-2 rounded-lg" required
              onChange={(e) => setFormData({...formData, price: e.target.value})}
            />
            <select 
              className="border p-2 rounded-lg"
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="Ready-to-Wear">Ready-to-Wear</option>
              <option value="Bespoke">Bespoke</option>
              <option value="Suits">Suits</option>
            </select>
          </div>

          <textarea 
            placeholder="Short description..."
            className="w-full border p-2 rounded-lg h-24"
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />

          <div className="border-2 border-dashed border-gray-200 p-4 rounded-lg text-center">
            <label className="cursor-pointer text-sm text-gray-500">
              {image ? `Selected: ${image.name}` : "Click to upload product image"}
              <input 
                type="file" className="hidden" accept="image/*" required
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              type="button" onClick={onClose}
              className="flex-1 py-2 border rounded-lg font-medium hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              type="submit" disabled={loading}
              className="flex-1 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-400"
            >
              {loading ? "Uploading..." : "Save Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;