import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
        password
      });

      const data = res.data;
      
      Cookies.set('token', data.token, { expires: 1/24 }); // 1/24 = 1 hour
      Cookies.set('userName', data.name, { expires: 1/24 });

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
    <div className="max-w-sm mx-auto mt-12 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Nhập email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium text-gray-700">Mật khẩu</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              placeholder="Nhập mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 text-sm hover:underline"
            >
              {showPassword ? 'Hidden' : 'Show'}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className='bg-blue-500 text-white w-full rounded font-medium'
        >
          đăng nhập
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
    </div>
  );
}

export default Login;