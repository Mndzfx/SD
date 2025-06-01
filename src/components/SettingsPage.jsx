import React from 'react';

const SettingsPage = ({ isAntiPhishingActive, setIsAntiPhishingActive, isAdBlockerActive, setIsAdBlockerActive, isNetworkOptimized, setIsNetworkOptimized }) => {
  return (
    <div className="flex-grow mx-4 mt-4 overflow-y-auto custom-scrollbar">
      <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Pengaturan Browser</h2>

        <div className="space-y-6">
          {/* Section: Privasi & Keamanan */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-xl font-semibold text-white mb-4" style={{ color: '#59e094' }}>Privasi & Keamanan</h3>
            <div className="space-y-4">
              {/* Toggle Anti-Phishing */}
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex-grow mr-4">
                  <p className="text-white font-medium">Anti-Phishing & Ancaman</p>
                  <p className="text-gray-400 text-sm">Melindungi Anda dari situs berbahaya dan upaya penipuan.</p>
                </div>
                <button
                  onClick={() => setIsAntiPhishingActive(prev => !prev)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    isAntiPhishingActive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}
                >
                  {isAntiPhishingActive ? 'Aktif' : 'Nonaktif'}
                </button>
              </div>

              {/* Toggle Pemblokir Iklan */}
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex-grow mr-4">
                  <p className="text-white font-medium">Pemblokir Iklan & Pelacak</p>
                  <p className="text-gray-400 text-sm">Memblokir iklan yang mengganggu dan pelacak online.</p>
                </div>
                <button
                  onClick={() => setIsAdBlockerActive(prev => !prev)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    isAdBlockerActive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}
                >
                  {isAdBlockerActive ? 'Aktif' : 'Nonaktif'}
                </button>
              </div>
            </div>
          </div>

          {/* Section: Performa */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-xl font-semibold text-white mb-4" style={{ color: '#59e094' }}>Performa</h3>
            <div className="space-y-4">
              {/* Toggle Optimalisasi Jaringan */}
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex-grow mr-4">
                  <p className="text-white font-medium">Optimalisasi Jaringan</p>
                  <p className="text-gray-400 text-sm">Meningkatkan kecepatan muat halaman.</p>
                </div>
                <button
                  onClick={() => setIsNetworkOptimized(prev => !prev)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    isNetworkOptimized ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}
                >
                  {isNetworkOptimized ? 'Aktif' : 'Nonaktif'}
                </button>
              </div>
            </div>
          </div>

          {/* Section: Lain-lain (Contoh) */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-xl font-semibold text-white mb-4" style={{ color: '#59e094' }}>Lain-lain</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center p-3 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors">
                <i className="fas fa-trash-alt text-lg mr-3"></i>
                Bersihkan Data Penjelajahan
              </button>
              <button className="w-full flex items-center p-3 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors">
                <i className="fas fa-info-circle text-lg mr-3"></i>
                Cek Versi Browser
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;