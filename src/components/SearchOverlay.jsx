import React from 'react';

const SearchOverlay = ({ searchQuery, setSearchQuery, performSearch, setShowSearchOverlay }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    performSearch();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 flex flex-col p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="w-8"></div> {/* Placeholder for alignment */}
        <h2 className="text-xl font-bold text-white">Telusuri</h2>
        <button
          onClick={() => setShowSearchOverlay(false)}
          className="text-gray-400 hover:text-white text-2xl"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-800 rounded-xl px-4 py-2 shadow-lg mb-4">
        <input
          type="text"
          placeholder="Cari atau ketik URL..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-800 text-gray-300 placeholder-gray-400 flex-grow text-lg focus:outline-none px-2 py-1"
          autoFocus
        />
        <button type="submit" className="text-lg focus:outline-none text-gray-400 hover:text-white">
          <i className="fas fa-search"></i>
        </button>
      </form>

      {/* Removed manual keyboard section */}

      <div className="mt-auto text-center text-gray-500 text-sm">
        Tekan Enter untuk mencari
      </div>
    </div>
  );
};

export default SearchOverlay;