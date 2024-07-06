"use client"

import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
   
  };

  return (
    <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="py-2 px-4 w-full focus:outline-none"
      />
      {query &&<button
        onClick={() => {
          setQuery('');
          router.push('/');
        }}
        className="text-gray-600 hover:text-gray-800 focus:outline-none px-4"
      >
        Clear
      </button>}
    </div>
  );
};

export default SearchBar;
