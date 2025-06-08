import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart, Search, CircleUserRound } from "lucide-react";
import Drawer from '../components/Drawer'
import { fetchProducts } from '../service/api/productApi.js';
import { UserContext } from '/src/context/UserContext';
import { CartContext } from '/src/context/CartContext';
import { useCart } from '/src/context/CartContext';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const { userName } = useContext(UserContext);
    const { cartItems } = useContext(CartContext);
    const { totalQuantity } = useCart();


    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );
        setFilteredProducts(filtered);
    };

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProducts();
    }, []);

    return (
        <div className='bg-white fixed top-0 left-0 right-0 z-50 shadow-xs'>
            <div className='mx-52 flex items-center justify-between h-16'>
                <Link to="/" className='logo-font font-bold text-[#584732] text-3xl'>
                    LULASA
                </Link>
                <ul className='grid grid-cols-5 place-items-center gap-2 font-medium'>
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/shop"><li>SHOP</li></Link>
                    <Link to=""><li>BLOG</li></Link>
                    <Link to="/contact"><li>CONTACT</li></Link>
                    <Link to=""><li>ABOUT</li></Link>
                </ul>
                <div className="flex items-center gap-4">
                    <Drawer 
                        icon={
                            <button className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-soap-100 transition-colors">
                                <Search className="h-5 w-5" />
                                <span className="sr-only">Search</span>
                            </button>
                        }
                        anchor="top"
                        content={
                            <div className="p-4 mx-96">
                                <h2 className="text-lg font-medium">Search</h2>
                                <input 
                                    type="text" 
                                    placeholder="Search for products..." 
                                    className="w-full p-2 px-4 border rounded-lg mt-2"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                                <div className="mt-4">
                                    {filteredProducts.length > 0 ? (
                                        <ul>
                                            {filteredProducts.map(product => (
                                                <li key={product.id} className='hover:bg-gray-100'>
                                                    <Link to={`/detail/${product.id}`} className='flex items-center gap-2'>
                                                        <img src={product.main_image_url} className='h-15 w-15'/>
                                                        {product.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No products found.</p>
                                    )}
                                </div>
                            </div>
                        }
                    />
                    {userName ? (
                    <div className="avatar-text cursor-default" title={`Hello, ${userName}`}>
                        Hello, <strong>{userName}</strong>
                    </div>
                    ) : (
                    <Link to='/login'>
                        <CircleUserRound className='h-5 w-5' />
                        <span className="sr-only">Account</span>
                     </Link>
                    )}
                    <Drawer 
                        icon={
                            <button className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-soap-100 transition-colors relative cursor-pointer">
                                <ShoppingCart className="h-5 w-5" />
                                <span className="sr-only">Cart</span>
                                {totalQuantity > 0 && (
                                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#2D6E53] text-white text-xs flex items-center justify-center">
                                    {totalQuantity}
                                    </span>
                                )}
                            </button>
                        }
                        anchor="right"
                        content={
                            <div className='p-4'>
                                <p className='text-lg'>Your cart</p>
                                <div className="mt-2">
                                    {cartItems.length === 0 ? (
                                        <div className="text-center text-gray-500">
                                        <p>No items in your cart.</p>
                                        </div>
                                    ) : (
                                        cartItems.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between border-b pb-2">
                                            <div className='flex space-x-4'>
                                            <img src={item.main_image_url} className='w-20 h-20' />
                                            <div className='space-y-1'>
                                                <h3 className="text-md font-medium text-gray-800">{item.name}</h3>
                                                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                                <p className="text-md font-medium text-gray-700">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                            </div>
                                        </div>
                                        ))
                                    )}
                                    {cartItems.length > 0 && (
                                        <div className="flex justify-between items-center mt-4">
                                            <p className="text-lg font-medium text-gray-900">
                                                Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                                            </p>
                                            <button className="px-4 py-2 bg-[#2D6E53] text-white rounded hover:bg-green-700 transition cursor-pointer">
                                                Checkout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
  
export default Navbar;