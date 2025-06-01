import React from 'react';

const HomeContent = ({ showStats, privacyStats, setShowStats }) => {
  return (
    <>
      {showStats && (
        <section className="relative mx-4 mt-4 bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-5 flex justify-between text-xs select-none shadow-lg">
          <div className="flex flex-col items-center space-y-1 w-1/3">
            <div className="flex items-center space-x-1 text-[11px] font-semibold" style={{ color: '#59e094' }}>
              <i className="fas fa-shield-alt"></i>
              <span>Status Privasi</span>
            </div>
            <div className="text-3xl font-light leading-none" style={{ color: '#59e094' }}>
              {privacyStats.blocked}
            </div>
            <div className="text-center leading-tight text-gray-300">
              Pelacak & Iklan
              <br />
              Diblokir
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1 w-1/3">
            <div className="text-indigo-400 text-3xl font-light leading-none">
              {privacyStats.dataSaved}
              <span className="text-sm align-top">KB</span>
            </div>
            <div className="text-center leading-tight text-gray-300">
              Perkiraan Data
              <br />
              Dihemat
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1 w-1/3">
            <div className="text-white text-3xl font-light leading-none">
              {privacyStats.timeSaved}
              <span className="text-sm align-top">s</span>
            </div>
            <div className="text-center leading-tight text-gray-300">
              Est. Penghematan Waktu
            </div>
          </div>
          <button
            aria-label="Toggle Privacy Stats"
            className="absolute top-3 right-3 text-white text-xs cursor-pointer focus:outline-none"
            title="Sembunyikan Statistik"
            onClick={() => setShowStats(false)}
          >
            <i className="fas fa-eye-slash"></i>
          </button>
        </section>
      )}

      <main className="relative flex-grow mx-4 mt-5 rounded-3xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful mountain landscape"
          className="w-full object-cover rounded-3xl"
          style={{ height: '450px' }}
        />
        <div className="absolute bottom-4 left-4 text-xs text-white font-semibold select-none bg-black bg-opacity-40 rounded-md px-2 py-1">
          Pemandangan Alam <span className="font-bold">Pegunungan Alpen</span>
        </div>
      </main>
    </>
  );
};

export default HomeContent;