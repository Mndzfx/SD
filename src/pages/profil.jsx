import React from 'react';
import Navbar from '../components/navbar';
import Logo from '../assets/logo.png'; // Ganti path sesuai lokasi file logo Anda

const AccessMemberPage = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FF]">
      {/* Header */}
      <div className="w-full bg-gradient-to-b from-blue-600 to-blue-400 pt-4 pb-20 px-4 text-center rounded-b-3xl">
        <div className="flex items-center justify-center gap-3 invisible">
          {/* Gunakan class "invisible" agar tetap ada di DOM tetapi tidak terlihat */}
          <img src={Logo} className="w-12 h-12" alt="Logo" />
          <h1 className="text-white text-2xl font-bold">Jelajahin</h1>
        </div>
      </div>

      {/* Card Lengkapi Data Diri */}
      <div className="relative z-10 -mt-16 mb-6 mx-4">
        <div className="bg-[#F7F9FF] rounded-xl p-5 shadow-lg">
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
      </div>

      {/* Blue gradient card */}
      <div
        className="rounded-xl p-6 text-white mt-5 mx-4"
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
      <div className="bg-[#F7F9FF] rounded-xl divide-y divide-[#E6E9F0] mt-5 mx-4">
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

      {/* Bottom Navbar */}
      <Navbar />
    </div>
  );
};

export default AccessMemberPage;
