import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Register() {
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch(`${BASE_URL}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Đăng ký thành công! Bạn có thể đăng nhập.');
        setForm({ email: '', name: '', password: '' });
      } else {
        setMessage(data.message || 'Lỗi đăng ký');
      }
    } catch (err) {
      setMessage('Lỗi kết nối server');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Nguyen Van A"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow"
          >
            Register
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes('thành công') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}

        <div className="mt-6 text-center text-sm text-gray-600">
          Have a account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
