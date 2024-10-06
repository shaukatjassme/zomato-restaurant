import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import LocationDropdown from './LocationDropdown ';


export const Navbar = () => {
  return (
    <>
      <header className="bg-cover bg-center h-[70vh]" style={{ backgroundImage: "url('/images/header-bg.jpg')" }}>
        <div className="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <FaMobileAlt className="text-2xl mr-1" /> Get the App
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-white text-xl hover:text-gray-300">Investor Relations</a>
            <a className="mr-5 text-white text-xl hover:text-gray-300">Add Restaurant</a>
            <a className="mr-5 text-white text-xl hover:text-gray-300">Log In</a>
            <a className="mr-5 text-white text-xl hover:text-gray-300">Sign Up</a>
          </nav>
        </div>
        <div className="justify-center items-center h-full">
          <div className="image-container flex justify-center items-center mb-5">
            <img src="/images/zomato-logo.png" className="w-1/5 pt-12 pb-4" alt="" />
          </div>
          <h1 className="text-white text-center text-2xl">Discover the best food & drinks in Baramulla</h1>
          <LocationDropdown />
        </div>
      </header>
    </>
  );
};

export default Navbar;