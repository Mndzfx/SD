import React from 'react';

const MessagesPage = ({ newsFeed }) => { // Mengambil newsFeed dari props
  return (
    <div className="flex-grow mx-4 mt-4 overflow-y-auto custom-scrollbar"> {/* Menambahkan custom-scrollbar */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2" style={{ color: '#59e094' }}>
          📰 Berita & Pembaruan Terkini
        </h2>
        <p className="text-sm text-gray-400">
          Kurasi berita seputar Kripto, Keuangan, Saham, dan Teknologi.
        </p>
      </div>

      <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-4">
        {newsFeed.length === 0 ? (
          <div className="text-center py-12">
            <i className="fas fa-info-circle text-4xl text-gray-500 mb-4"></i>
            <p className="text-gray-400">Tidak ada berita yang tersedia saat ini.</p>
            <p className="text-gray-500 text-sm mt-2">Coba kembali nanti atau periksa koneksi Anda.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {newsFeed.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800 bg-opacity-60 rounded-xl p-4 hover:bg-opacity-80 transition-all cursor-pointer overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-start md:space-x-4">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full md:w-32 h-24 object-cover rounded-lg mb-3 md:mb-0 flex-shrink-0"
                      onError={(e) => {
                        e.target.onerror = null; // Mencegah loop error
                        // Menggunakan picsum.photos untuk gambar placeholder acak 300x200
                        e.target.src = "https://picsum.photos/300/200?random=" + item.id;
                      }}
                    />
                  )}
                  <div className="flex-grow">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block" style={{ backgroundColor: '#59e094', color: '#002631' }}>
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-1 mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-3">{item.snippet}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;