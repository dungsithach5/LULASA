import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#2D3B2D] px-4 py-10 space-y-10">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-white text-2xl md:text-4xl font-medium">
          Experience the Magic of Herbal Soaps
        </h1>
        <p className="text-white text-sm md:text-base font-medium mt-4 max-w-2xl opacity-90">
          Join thousands of happy customers who have made the switch to natural skincare. Your skin deserves the best!
        </p>
        <button className="w-52 h-12 mt-6 rounded-[6px] border border-white text-white text-sm font-medium">
          Shop Our Collection
        </button>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 max-md:text-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 text-white px-4 md:px-12 xl:px-20">
        {/* Community Section */}
        <div>
          <h3 className="text-[15px] font-semibold">JOIN OUR COMMUNITY</h3>
          <p className="text-sm mt-4 opacity-90">
            Subscribe to get special offers, free gifts and <br /> keep up with what’s happening at LULASA
          </p>
          <form className="mt-5 flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 outline-none bg-transparent border border-[#00814540] rounded px-3 py-2 text-white placeholder:text-white placeholder:opacity-70"
            />
            <button
              type="submit"
              className="bg-white text-black font-medium px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
          <div className="flex space-x-3 mt-5">
            <Instagram />
            <Facebook />
            <Youtube />
            <Twitter />
          </div>
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
        &copy; {currentYear} LULASA. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
