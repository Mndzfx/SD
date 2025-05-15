import React from 'react';
import Navbar from "../components/navbar";

const AccessMemberPage = () => {
  return (
    <div className="min-h-screen flex justify-center px-5 py-5 relative">
      {/* Updated gradient background with full width, half height, and bottom rounded */}
      <div className="w-full bg-gradient-to-b from-blue-600 to-blue-400 pt-4 pb-4 px-4 text-center rounded-b-3xl absolute top-0 left-0 right-0 h-1/4">
  {/* Konten di dalam background */}
</div>


      <div className="max-w-md w-full relative z-10 mt-14">
        {/* Top card */}
        <div className="bg-[#F7F9FF] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="bg-[#FF6600] rounded-full w-16 h-16 flex items-center justify-center"></div>
              <div>
                <h2 className="text-[#121F3E] font-semibold text-lg leading-6">Lengkapi Data Diri</h2>
                <p className="text-[#121F3E] text-base leading-6">Belum Menjadi Member Access</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              className="flex items-center justify-center bg-white rounded-lg px-6 py-3 w-1/2 text-[#121F3E] text-base leading-6 font-normal shadow-sm"
              type="button"
            >
              Lihat Profile
            </button>
            <button
              className="flex items-center justify-center bg-white rounded-lg px-6 py-3 w-1/2 text-[#121F3E] text-base leading-6 font-normal shadow-sm"
              type="button"
            >
              QR code
            </button>
          </div>
        </div>

        {/* Blue gradient card */}
        <div
          className="rounded-xl p-6 text-white mt-5"
          style={{
            background: 'linear-gradient(90deg, #00D2FF 0%, #007BFF 100%)',
          }}
        >
          <h3 className="font-bold text-xl leading-7 mb-2">Perbarui Ke Basic</h3>
          <p className="text-base leading-6 mb-6 font-normal">
            Upgrade akunmu jadi Member Basic untuk mendapatkan akses penuh Access
          </p>
          <button
            className="w-full bg-white text-[#1D4ED8] font-extrabold text-lg leading-7 py-3 rounded-lg"
            type="button"
          >
            LANJUTKAN
          </button>
        </div>

        {/* List items */}
        <div className="bg-[#F7F9FF] rounded-xl divide-y divide-[#E6E9F0] mt-5">
          <button
            className="flex items-center justify-between px-5 py-4 w-full text-[#121F3E] text-base leading-6 font-normal"
            type="button"
          >
            <span>Member Benefit</span>
          </button>

          <button
            className="flex items-center justify-between px-5 py-4 w-full text-[#121F3E] text-base leading-6 font-normal"
            type="button"
          >
            <span>Pusat Bantuan</span>
          </button>

          <div className="flex items-center justify-between px-5 py-4 w-full text-[#121F3E] text-base leading-6 font-normal">
            <span>Tentang Access</span>
            <div className="bg-[#1D4ED8] text-white text-xs font-semibold rounded-full px-3 py-1 select-none">
              ID
            </div>
          </div>

          <button
            className="flex items-center justify-between px-5 py-4 w-full text-[#121F3E] text-base leading-6 font-normal"
            type="button"
          >
            <span>Bahasa</span>
          </button>

          <button
            className="flex items-center justify-between px-5 py-4 w-full text-[#121F3E] text-base leading-6 font-normal rounded-b-xl"
            type="button"
          >
            <span>Keluar</span>
          </button>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default AccessMemberPage;
