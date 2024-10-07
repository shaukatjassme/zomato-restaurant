import React from 'react';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import country from '../data/country.json';
import { FaChevronDown } from 'react-icons/fa';

const Footer = () => {

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    fetch('/data/country.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  return (
    <>
      <footer className="text-gray-600 body-font bg-gray-100 py-10">
        <div className="py-4 px-10 bg-grey-900">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
            {/* Logo */}
            <div className="flex items-center mb-4 md:mb-0"> {/* Add margin for mobile spacing */}
              <img src="/images/zomato-black.png" alt="Logo" className="w-32 h-auto" />
            </div>

            {/* Dropdowns */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto"> {/* Use flex-col on mobile */}
              {/* Custom Dropdown for Country */}
              <div className="relative inline-block text-left w-full md:w-auto"> {/* Full width on mobile */}
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="bg-gray-100 border border-gray-300 rounded-lg p-2 flex items-center justify-between w-full"
                >
                  <div className="flex items-center">
                    {selectedCountry ? (
                      <>
                        <img
                          src={selectedCountry.flag}
                          alt={selectedCountry.name}
                          className="inline-block w-4 h-4 mr-2" // Adjusted spacing
                        />
                        {selectedCountry.name}
                      </>
                    ) : (
                      'Select a Country'
                    )}
                  </div>
                  <FaChevronDown className="text-gray-600 ml-2" /> {/* Dropdown icon */}
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                    {country.countries.map((country) => (
                      <div
                        key={country.code}
                        onClick={() => handleCountrySelect(country)}
                        className="p-2 flex items-center cursor-pointer hover:bg-gray-200"
                      >
                        <img src={country.flag} alt={country.name} className="inline-block w-4 h-4 mr-3" />
                        {country.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Language Dropdown */}
              <select className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full md:w-auto"> {/* Full width on mobile */}
                {country.languages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
          </div>


        </div>


        <div className="container px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col bg-grey-900 border-b border-gray-300 ">

          <div className="flex-grow flex flex-wrap -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/5 md:w-1/4 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 text-xl  mb-3">About Zomato</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Who We Are</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Work With Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Investor Relations</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Press Kit</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Contact Us </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/4 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 text-xl  mb-3">Zomaverse</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Zomato</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Feeding India</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Hyperpure</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Zomato Live</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Zomaland</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Weather Union</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Weather Union</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/4 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 text-xl  mb-3">For Restaurants</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Partner With Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Apps For You</a>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/4 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 text-xl  mb-3">Learn More</h2>
              <nav className="list-none mb-10">
                <li className=''>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Privacy</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Security</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Terms</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Sitemap</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/1 mb-8 w-full px-4 flex flex-col items-center md:items-start"> {/* Added flex and items-center */}
              <h2 className="title-font font-medium text-gray-900 text-xl mb-3 text-center  ">Social links</h2> {/* Centered text */}

              <div className="flex space-x-3 mb-6 justify-center"> {/* Centered social icons */}
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-full p-2 text-sm hover:bg-gray-700">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-full p-2 text-sm hover:bg-gray-700">
                  <FaInstagram />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-full p-2 text-sm hover:bg-gray-700">
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-full p-2 text-sm hover:bg-gray-700">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-full p-2 text-sm hover:bg-gray-700">
                  <FaYoutube />
                </a>
              </div>

              {/* Followed by Two Images */}
              <div className="flex flex-col items-center space-y-4"> {/* Centered images */}
                <img src="/images/ios-pic.png" alt="First Picture" className="w-36 h-auto object-cover rounded-lg" />
                <img src="/images/google-play.png" alt="Second Picture" className="w-36 h-auto object-cover rounded-lg" />
              </div>
            </div>



          </div>
        </div>
        <div className="bg-gray-100 border-1 border-top-2">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.

            </p>

          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
