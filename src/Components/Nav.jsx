import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="w-full shadow-sm">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-3">
        
        {/* Logo */}
        <img 
          src="https://www.carrollwoodflorist.com/files/6614/9153/6245/logo.png" 
          alt="Carrollwood Florist Logo" 
          className="w-40 md:w-48"
        />

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button className="bg-white border px-4 py-2 font-bold text-sm md:text-base">
            LOGIN
          </button>

          <div className="relative">
            <FaShoppingCart className="text-2xl md:text-3xl" />
            {/* Cart badge (example, can be dynamic) */}
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>

          <button className="bg-green-600 font-bold text-white px-4 py-2 text-sm md:text-base">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center px-4 md:px-10 mb-4">
        <div className="flex w-full md:w-2/3 lg:w-1/2 border rounded overflow-hidden">
          <input type="text" placeholder="Search" className="flex-grow px-3 py-2 text-sm outline-none"/>
          <button className="bg-blue-100 px-4 py-2 text-sm font-medium">
            Search
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className='hidden md:block'>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-medium text-sm md:text-base py-3 border-t">
        <p className="cursor-pointer hover:text-green-600">SHOP FLOWERS</p>
        <p className="cursor-pointer hover:text-green-600">SHOP PLANTS</p>
        <p className="cursor-pointer hover:text-green-600">SHOP CANDLES</p>
        <p className="cursor-pointer hover:text-green-600">WEDDINGS</p>
      </div>
      </div>
    </div>
  );
};

export default Nav;
