import React, { useState } from 'react';
import { FaBars, FaTimes, FaMobileAlt } from 'react-icons/fa';
import LocationDropdown from './LocationDropdown';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="bg-cover bg-center bg-no-repeat lg:h-[70vh] md:h-[50vh] sm:h-[40vh]" style={{ backgroundImage: "url('/images/header-bg.jpg')" }}>
        <div className="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hidden md:flex">
            <FaMobileAlt className="text-2xl mr-1" /> Get the App
          </a>

          <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-white text-xl hover:text-gray-300">Investor Relations</a>
            <a className="mr-5 text-white text-xl hover:text-gray-300">Add Restaurant</a>
            <a className="mr-5 text-white text-xl hover:text-gray-300">Log In</a>
            <a className="mr-5 text-white text-xl hover:text-gray-300">Sign Up</a>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-white text-3xl absolute left-5 top-5"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>


        {/* Sliding Menu */}
        <div className={`fixed top-0 left-0 h-full bg-white shadow-lg w-64 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
          <div className="flex justify-between items-center p-4 border-b">
            <img src="/images/zomato-black.png" className="h-auto w-36" alt="" />
            <button className="text-2xl" onClick={closeMenu}>
              <FaTimes />
            </button>
          </div>
          <nav className="p-4">
            <a className="block py-2 text-gray-800 hover:text-gray-500" href="#">Investor Relations</a>
            <a className="block py-2 text-gray-800 hover:text-gray-500" href="#">Add Restaurant</a>
            <a className="block py-2 text-gray-800 hover:text-gray-500" href="#">Log In</a>
            <a className="block py-2 text-gray-800 hover:text-gray-500" href="#">Sign Up</a>
          </nav>
        </div>

        {/* Backdrop */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>
        )}

        <div className="justify-center items-center h-full">
          <div className="image-container flex justify-center items-center mb-5">
            <img src="/images/zomato-logo.png" className="w-2/5 lg:w-1/5 pt-12 pb-4" alt="Zomato Logo" />
          </div>
          <h1 className="text-white text-center text-2xl">Discover the best food & drinks in Baramulla</h1>
          <LocationDropdown />
        </div>
      </header>
    </>
  );
};

export default Navbar;
