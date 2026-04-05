import React, { useState } from 'react';
import API from '../Api/axions';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      window.location.href = '/admin/manage';
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="p-8 bg-white shadow-xl rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Staff Login</h2>
        <input 
          type="email" placeholder="Email" className="w-full border p-2 mb-4 rounded" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" placeholder="Password" className="w-full border p-2 mb-6 rounded" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button className="w-full bg-black text-white py-2 rounded font-bold">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;