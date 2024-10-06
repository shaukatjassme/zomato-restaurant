import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

export const SearchBar = () => {
  const [selectedCountry, setSelectedCountry] = useState('Select Country');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const countries = ['USA', 'Canada', 'United Kingdom', 'Australia', 'Germany'];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false); // Close the dropdown after selecting a country
  };

  return (
    <div className="container mx-auto flex items-center justify-center py-8">
      <div className="flex items-center  border-gray-300 pb-2">
   {/* Location Dropdown */}
<div className="relative mr-6">
  <button
    className="flex items-center bg-white text-gray-700 py-2 px-4 border border-gray-300 rounded-md w-56 justify-between" 
    onClick={toggleDropdown}
  >
    <div className="flex items-center">
      <FaMapMarkerAlt className="text-xl mr-2 text-red-500" />
      <span className="whitespace-nowrap">{selectedCountry}</span> {/* Ensure no text break */}
    </div>
    <svg
      className={`w-4 h-4 ml-2 transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {/* Country Dropdown Menu */}
  {dropdownOpen && (
    <ul className="absolute bg-white border border-gray-300 mt-1 rounded-md w-full text-left z-10">
      {countries.map((country) => (
        <li
          key={country}
          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleCountrySelect(country)}
        >
          {country}
        </li>
      ))}
    </ul>
  )}
</div>


        {/* Vertical Divider */}
        <div className="h-8 w-px bg-gray-300 ml-0 mr-5"></div>

        {/* Search Input with Icon on Left */}
        <div className="relative flex items-center w-full">
          <FaSearch className="absolute left-3 text-gray-500 text-xl" />
          <input
            type="text"
            className="bg-white text-gray-700 py-2 pl-10 pr-8 border border-gray-300 rounded-md w-88 focus:outline-none"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
