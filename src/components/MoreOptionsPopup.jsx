import React from 'react';

const MoreOptionsPopup = ({ moreOptions, setShowMorePopup }) => {
  return (
    <div
      className="fixed inset-0 z-40"
      onClick={() => setShowMorePopup(false)} // Menutup pop-up saat mengklik di luar area pop-up
    >
      <div
        className="absolute bottom-16 right-4 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 min-w-[200px]"
        onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam pop-up menutupnya
        style={{
          animation: 'slideUpFade 0.2s ease-out',
          backgroundColor: '#002631', // Background color dari tema Fluxo
          borderColor: '#1a4a54', // Border color dari tema Fluxo
        }}
      >
        <style>{`
          @keyframes slideUpFade {
            from {
              opacity: 0;
              transform: translateY(10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>

        <div className="py-2 custom-scrollbar overflow-y-auto max-h-80"> {/* Menambahkan scrollbar dan max-height */}
          {moreOptions.map((option, index) => (
            <button
              key={index}
              className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-700 transition-colors text-left"
              onClick={() => {
                option.action(); // Panggil fungsi action dari opsi
                // Pop-up akan selalu menutup setelah aksi, bahkan untuk toggle,
                // karena desain pop-up Anda lebih cocok untuk "menu" daripada "dashboard"
                setShowMorePopup(false);
              }}
            >
              <i className={`${option.icon} text-lg`} style={{ color: '#59e094' }}></i>
              <div className="text-white text-sm font-medium">
                {option.title}
                {option.isToggle && (
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${option.toggleState ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {option.toggleState ? 'Aktif' : 'Nonaktif'}
                  </span>
                )}
                {option.description && (
                  <p className="text-xs text-gray-400 mt-1">{option.description}</p>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="border-t" style={{ borderColor: '#1a4a54' }}></div>

        <div className="px-4 py-2">
          <div className="text-gray-400 text-xs">
            Fluxo Browser v1.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreOptionsPopup;