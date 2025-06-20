import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '/src/context/UserContext';
import Cookies from 'js-cookie';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUserName } = useContext(UserContext);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');

    try {
      const res = await axios.post(`${BASE_URL}/api/users/login`, {
        email,
        password,
      });

      const data = res.data;

      Cookies.set('token', data.token, { expires: 1 / 24 });
      Cookies.set('userName', data.name, { expires: 1 / 24 });

      setMsg(`Xin chào ${data.name}`);
      setUserName(data.name);

      navigate('/');
    } catch (err) {
      if (err.response) {
        setMsg('Đăng nhập thất bại');
      } else {
        setMsg('Lỗi kết nối server');
      }
      console.error('Error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:underline"
              >
                {showPassword ? 'Ẩn' : 'Hiện'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow"
          >
            Login
          </button>
        </form>

        {msg && (
          <p
            className={`mt-4 text-center font-medium ${
              msg.includes('Xin chào') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {msg}
          </p>
        )}

        <div className="mt-6 text-center text-sm text-gray-600">
          Haven't a account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
