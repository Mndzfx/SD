import React from 'react';

const BookmarksPage = ({ bookmarks }) => {
  return (
    <div className="flex-grow mx-4 mt-4 overflow-y-auto custom-scrollbar"> {/* Tambahkan custom-scrollbar jika belum */}
      <h2 className="text-xl font-bold mb-4" style={{ color: '#59e094' }}>Bookmark</h2>
      <div className="space-y-3">
        {bookmarks.map((bookmark, index) => (
          <a // Mengubah div menjadi a agar bisa diklik dan membuka URL
            key={index}
            href={`https://${bookmark.url}`} // Tambahkan https:// agar link bisa dibuka
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black bg-opacity-40 backdrop-blur-md rounded-xl p-4 flex items-center space-x-3 hover:bg-opacity-60 transition-colors"
          >
            <i className={`${bookmark.icon} text-lg`} style={{ color: '#59e094' }}></i> {/* Perbaiki closing tag */}
            <div>
              <div className="text-white font-medium">{bookmark.title}</div>
              <div className="text-gray-400 text-sm">{bookmark.url}</div>
            </div>
          </a>
        ))}
        {bookmarks.length === 0 && (
          <p className="text-gray-400 text-center py-10">Tidak ada bookmark yang tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default BookmarksPage;