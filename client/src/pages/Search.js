import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animateArrow } from '../utils/motion'; // Import the arrow animation function
import Logo from '../assets/Logo.PNG'

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search logic here
    console.log('Searching for:', searchQuery);
    // Clear search query
    setSearchQuery('');
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="gradient-form min-h-screen bg-gradient-to-bl from-[#5228F5] to-[#392B43] dark:bg-neutral-700">
      <div className="container flex items-center justify-center h-screen p-10">
        <div className="flex flex-col justify-center items-center px-4 py-6 bg-gradient-to-tr from-[#241868] to-[#392B43] rounded-lg shadow-lg dark:bg-neutral-800">
        {/* <h2 className="text-center text-white text-2xl mb-6">Search Page</h2> */}
        <img className="w-24 h-24 mb-3 " src= {Logo} alt="Logo" />

          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="SEARCH"
                value={searchQuery}
                onChange={handleChange}
                className="form-input peer block min-h-[auto] w-full rounded-lg border border-gray-400 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-tr from-[#241868] via-[#392B43] to-[#241868] rounded p-2 text-white focus:outline-none"
                onMouseEnter={animateArrow} // Start arrow animation on mouse enter
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    id="arrowPath" // Add an id to the path for animation purposes
                  />
                </svg>
              </button>
            </div>
          </form>
          
          <Link to="/">
            <button
              type="button"
              className="btn bg-gradient-to-tr from-[#241868] via-[#392B43] to-[#241868] text-white rounded px-4 py-2 mt-6"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
