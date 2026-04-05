import React, { useState, useEffect } from 'react';
import axios from '../Api/axions';

const AdminDashboard = () => {
  const [settings, setSettings] = useState({ aboutText: '', serviceNote: '' });
  const token = localStorage.getItem('token');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch('http://localhost:5000/api/settings', settings, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Website updated successfully!");
    } catch (err) {
      alert("Failed to update. Are you logged in?");
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Website Content</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">About Us Text</label>
          <textarea 
            className="w-full border p-2 rounded h-32"
            value={settings.aboutText}
            onChange={(e) => setSettings({...settings, aboutText: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Services Announcement</label>
          <input 
            className="w-full border p-2 rounded"
            value={settings.serviceNote}
            onChange={(e) => setSettings({...settings, serviceNote: e.target.value})}
          />
        </div>
        <button className="bg-black text-white px-6 py-2 rounded">Save Changes</button>
      </form>
    </div>
  );
};

export default AdminDashboard;