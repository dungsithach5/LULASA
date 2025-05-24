import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart, Search, CircleUserRound } from "lucide-react";
function Navbar() {
    return (
        <>
            <div className='bg-white'>
                <div className='mx-52 flex items-center justify-between h-16'>
                    <h1 className='logofont font-medium text-[#584732] text-2xl'>
                        LULASA
                    </h1>
                    <ul className='grid grid-cols-5 place-items-center gap-2 font-medium'>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/shop"><li>Shop</li></Link>
                        <Link to="/blog"><li>Blog</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                        <Link to="/about"><li>About</li></Link>
                    </ul>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-soap-100 transition-colors">
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </button>
                        <button>
                            <CircleUserRound className='h-5 w-5' />
                            <span className="sr-only">Account</span>
                        </button>
                        <button className="flex items-center justify-center h-9 w-9 rounded-full hover:bg-soap-100 transition-colors relative">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="sr-only">Cart</span>
                            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#2D6E53] text-white text-xs flex items-center justify-center">
                            0
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
  
export default Navbar;