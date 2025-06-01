import React from 'react';

const SearchResults = ({ searchValue, searchResults = [], isLoading, currentSearchType, setCurrentSearchType, performSearch }) => {
  const categories = [
    { type: 'all', label: 'Semua' },
    { type: 'news', label: 'Berita' },
    { type: 'image', label: 'Gambar' },
  ];

  const handleCategoryClick = (type) => {
    if (currentSearchType !== type) {
      setCurrentSearchType(type);
      performSearch(type);
    }
  };

  return (
    <div className="flex-grow mx-4 mt-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2" style={{ color: '#59e094' }}>
          🔎 Pencarian Web oleh Fluxo
        </h2>
        <div className="text-sm text-gray-400 mb-4">
          Hasil untuk: "<span className="font-semibold">{searchValue}</span>"
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-4 border-b border-gray-700 mb-4 pb-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.type}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors
                ${currentSearchType === category.type
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              onClick={() => handleCategoryClick(category.type)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: '#59e094' }}></div>
            <span className="ml-3 text-gray-300">Mencari hasil terbaik untuk Anda...</span>
          </div>
        ) : (
          <div className="space-y-6">
            {searchResults.length === 0 && (
              <div className="text-center py-12">
                <i className="fas fa-search text-4xl text-gray-500 mb-4"></i>
                <p className="text-gray-400">Tidak ada hasil ditemukan untuk "<span className="font-semibold">{searchValue}</span>" dalam kategori <span className="font-semibold">{categories.find(c => c.type === currentSearchType)?.label}</span>.</p>
                <p className="text-gray-500 text-sm mt-2">Coba kata kunci lain atau periksa ejaan Anda.</p>
              </div>
            )}

            {currentSearchType === 'image' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {searchResults.map((result, index) => (
                  <a
                    key={index}
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden shadow hover:bg-opacity-80 transition-all cursor-pointer group"
                  >
                    <img
                      src={result.imageUrl}
                      alt={result.title}
                      className="w-full h-32 object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/150?text=Gambar+Rusak" }}
                    />
                    <div className="p-2">
                      <p className="text-white text-xs truncate group-hover:underline" dangerouslySetInnerHTML={{ __html: result.title }}></p>
                      <span className="text-gray-400 text-[10px] truncate">{result.displayLink}</span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <>
                {searchResults.length > 0 && currentSearchType === 'all' && (
                  <div className="bg-gray-800 bg-opacity-60 rounded-xl p-4 overflow-hidden flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 hover:bg-opacity-80 transition-all cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=2070"
                      alt="Search result illustration"
                      className="w-full md:w-48 h-32 md:h-28 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-1" style={{ color: '#59e094' }} dangerouslySetInnerHTML={{ __html: `Panduan Lengkap: Memahami ${searchValue}` }}>
                      </h3>
                      <div className="text-sm text-gray-400 mb-2">
                        fluxo.info.id/belajar/{searchValue.toLowerCase().replace(/\s/g, '-')}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        Pelajari seluk beluk tentang {searchValue} dengan panduan interaktif kami. Dari dasar hingga tingkat lanjutan, kami akan membimbing Anda. Temukan rahasia di balik konsep ini...
                      </p>
                    </div>
                  </div>
                )}

                {searchResults.map((result, index) => (
                  <a
                    key={index}
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-800 bg-opacity-60 rounded-xl p-4 hover:bg-opacity-80 transition-all cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#59e094' }} dangerouslySetInnerHTML={{ __html: result.title }}>
                    </h3>
                    <div className="text-sm text-gray-400 mb-2">
                      {result.displayLink}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3" dangerouslySetInnerHTML={{ __html: result.snippet }}>
                    </p>
                  </a>
                ))}
              </>
            )}
          </div>
        )}

        {/* Pagination */}
        {!isLoading && searchResults.length > 0 && (
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2 items-center">
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="px-4 py-2 text-white rounded-lg font-bold" style={{ backgroundColor: '#59e094', color: '#002631' }}>
                1
              </button>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                3
              </button>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;