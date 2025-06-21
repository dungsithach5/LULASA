import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaShoppingCart, FaCreditCard, FaCheckCircle } from 'react-icons/fa';
import { X } from 'lucide-react';
import axios from 'axios';
import { useCart } from '/src/context/CartContext';
import Layout from '../../layout/Layout';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Checkout = () => {
  const { cartItems, clearCart, totalPrice, updateQuantity, removeFromCart, totalQuantity } = useCart();
  
  const [form, setForm] = useState({
    customer_name: '',
    customer_phone: '',
    customer_email: '',
    customer_address: '',
    total_amt: 0,
    order_date: new Date().toISOString().split('T')[0]
  });

  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getTotal = () => {
    return totalPrice.toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Update form with current total amount
    const updatedForm = {
      ...form,
      total_amt: totalPrice,
      order_date: new Date().toISOString().split('T')[0]
    };
    
    const orderData = {
      ...updatedForm,
      items: cartItems
    };

    try {
        const res = await axios.post(`${BASE_URL}/api/orders`, orderData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        const data = res.data;
      
        const emailStatus = data.emailSent ? '📧 Email sent successfully!' : '📧 Email delivery pending';
        setMessage(`🎉 Successful payment! Order ID: ${data.id} | Date: ${new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        })} | Total: ${totalPrice.toLocaleString()} VND | ${emailStatus}`);
        clearCart();
        
      } catch (err) {
        if (err.response) {
          setMessage(err.response.data.error || '❌ Có lỗi xảy ra.');
        } else if (err.request) {
          setMessage('❌ Không thể kết nối đến máy chủ.');
        } else {
          setMessage('❌ Lỗi không xác định: ' + err.message);
        }
      } finally {
        setIsSubmitting(false);
      }
  };

  // Show loading if cart is empty
  if (!cartItems || cartItems.length === 0) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <FaShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-gray-500">Redirecting...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mt-16 min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
            <p className="text-gray-600">Complete your order</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <FaShoppingCart className="w-4 h-4" />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">Cart</span>
              </div>
              <div className="w-12 h-0.5 bg-green-500"></div>
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <FaCreditCard className="w-4 h-4" />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">Payment</span>
              </div>
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="bg-gray-300 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
                  <FaCheckCircle className="w-4 h-4" />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">Complete</span>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Thông tin */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaUser className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Information Customer</h2>
                </div>

                {/* Order Summary */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <FaShoppingCart className="w-5 h-5 mr-2 text-blue-600" />
                    Order Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Order Date</p>
                      <p className="font-semibold text-gray-900">{new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Total Items</p>
                      <p className="font-semibold text-gray-900">{totalQuantity}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="font-bold text-green-600 text-lg">{totalPrice.toLocaleString()} VND</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <FaUser className="w-4 h-4 mr-2 text-green-600" />
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      name="customer_name" 
                      required 
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <FaPhone className="w-4 h-4 mr-2 text-green-600" />
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      name="customer_phone" 
                      required 
                      onChange={handleChange}
                      placeholder="0123456789"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <FaEnvelope className="w-4 h-4 mr-2 text-green-600" />
                      Email
                    </label>
                    <input 
                      type="email" 
                      name="customer_email" 
                      required 
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" 
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2 text-green-600" />
                      Address
                    </label>
                    <textarea 
                      name="customer_address" 
                      required 
                      onChange={handleChange}
                      placeholder="Input your address"
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 resize-none" 
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <FaCreditCard className="w-5 h-5 mr-2" />
                      Pay now
                    </div>
                  )}
                </button>

                <div className="text-center text-sm text-gray-600 mt-4">
                  <div className="flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 mr-2 text-green-600" />
                    <span>You'll receive an order confirmation email</span>
                  </div>
                </div>

                {message && (
                  <div className={`p-4 rounded-xl text-center ${
                    message.includes('✅') || message.includes('🎉') 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {message}
                  </div>
                )}
              </form>
            </div>

            {/* Thông tin giỏ hàng */}
            <div className="lg:col-span-1">
              <div className="p-6 sticky top-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaShoppingCart className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
                </div>

                <div className="space-y-4 mb-6">
                  {cartItems && cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                          {item.main_image_url ? (
                            <img 
                              src={item.main_image_url} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-gray-600 font-semibold text-sm">
                              {item.name ? item.name.charAt(0).toUpperCase() : 'P'}
                            </span>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 text-sm">{item.name || 'Product'}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-400"
                            >
                              -
                            </button>
                            <span className="text-xs text-gray-500 min-w-[20px] text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-400"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">
                            {item.price ? (item.price * item.quantity).toLocaleString() : '0'} VND
                          </p>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 text-xs mt-1"
                          >
                            <X className="w-5 h-5 cursor-pointer" />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <FaShoppingCart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Your cart is empty</p>   
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Temporary</span>
                    <span>{cartItems && cartItems.length > 0 ? parseInt(getTotal()).toLocaleString() : '0'} VND</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-200 pt-3">
                    <span>Total</span>
                    <span className="text-green-600">
                      {cartItems && cartItems.length > 0 ? parseInt(getTotal()).toLocaleString() : '0'} VND
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center text-green-800">
                    <FaCheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm font-semibold">Orders have been protected</span>
                  </div>
                  <p className="text-xs text-green-600 mt-1">Your information is encrypted and protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
