import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart, Search, CircleUserRound } from "lucide-react";
import Drawer from '../components/Drawer'
import { fetchProducts } from '../service/api/productApi.js';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter products based on the search query
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
                    <button>
                        <CircleUserRound className='h-5 w-5' />
                        <span className="sr-only">Account</span>
                    </button>
                    <Drawer 
                        icon={
                            <button className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-soap-100 transition-colors relative cursor-pointer">
                                <ShoppingCart className="h-5 w-5" />
                                <span className="sr-only">Cart</span>
                                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#2D6E53] text-white text-xs flex items-center justify-center">
                                    0
                                </span>
                            </button>
                        }
                        anchor="right"
                        content={
                            <div className="p-4">
                                <h2 className="text-lg font-bold">Your Cart</h2>
                                <p>No items in the cart.</p>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
  
export default Navbar;