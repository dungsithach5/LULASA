import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="h-screen bg-[#2D3B2D] grid grid-cols-1">
      {/* Header Section */}
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl font-medium">
            Experience the Magic of Herbal Soaps
          </h1>
          <p className="text-white text-sm font-medium mt-4 max-w-2xl mx-auto opcacity-90">
            Join thousands of happy customers who have made the switch to natural skincare. Your skin deserves the best!
          </p>
          <div className="mt-6">
            <button className="w-52 h-12 rounded-[6px] border border-white text-white text-sm font-medium">
              Shop Our Collection
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-52 flex justify-between text-white mt-20">
        {/* Community Section */}
        <div>
          <h3 className="text-[15px] font-semibold">JOIN OUR COMMUNITY</h3>
          <p className="text-sm mt-4 opacity-90">
            Subscribe to get special offers, free gifts and <br/> keep up with what’s happening at LULASA
          </p>
          <div className="mt-5 flex items-center border border-[#00814540] p-2 rounded">
            <form className="flex">
              <div className="bg-white rounded w-20 h-7 flex items-center justify-center">
                <span className="text-black font-medium">Submit</span>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none text-white placeholder:text-white placeholder:opacity-70 ml-2"/>
            </form>
          </div>
          <div className="flex space-x-2 mt-5">
            <Instagram />
            <Facebook />
            <Youtube />
            <Twitter />
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-[15px] font-semibold">LINKS</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-sm opacity-90">Home</li>
            <li className="text-sm opacity-90">Shop</li>
            <li className="text-sm opacity-90">Blog</li>
            <li className="text-sm opacity-90">Contact</li>
            <li className="text-sm opacity-90">About Us</li>
          </ul>
        </div>
        
        {/* Shop Section */}
        <div>
          <h3 className="text-[15px] font-semibold">SHOP</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-sm opacity-90">Bestsellers</li>
            <li className="text-sm opacity-90">Subscribe</li>
            <li className="text-sm opacity-90">Bundle</li>
            <li className="text-sm opacity-90">Gifts</li>
            <li className="text-sm opacity-90">Ingredients</li>
            <li className="text-sm opacity-90">Facial Care</li>
            <li className="text-sm opacity-90">Last Chance</li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div>
          <h3 className="text-[15px] font-semibold">CUSTOMER SERVICE</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-sm opacity-90">FAQ</li>
            <li className="text-sm opacity-90">Shipping & Return</li>
            <li className="text-sm opacity-90">Privacy Policy</li>
            <li className="text-sm opacity-90">Terms & Conditions</li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-[15px] font-semibold">ABOUT</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-sm opacity-90">About Us</li>
            <li className="text-sm opacity-90">Contact Us</li>
            <li className="text-sm opacity-90">Meet Our Team</li>
            <li className="text-sm opacity-90">What’s New</li>
            <li className="text-sm opacity-90">Videos</li>
          </ul>
        </div>


      </div>

      {/* Footer Branding */}
      <div className="text-center text-white text-opacity-80 text-[12px]">
        &copy; {currentYear} LULASA All rights reserved.
      </div>
    </div>
  );
};

export default Footer;