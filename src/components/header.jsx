// src/components/HeaderWelcome.jsx
import React from "react";

import Logo from '../assets/logo-new.png'

import Logo from '../assets/logo.png'


const Header = () => (
  <>
    {/* Header */}
    <div className="w-full bg-gradient-to-b from-blue-600 to-blue-400 pt-4 pb-20 px-4 text-center rounded-b-3xl">
      <div className="flex items-center justify-center gap-3">
        <img src={Logo} className="w-12 h-12" alt="Logo" />
        <h1 className="text-white text-2xl font-bold">Jelajahin</h1>
      </div>
    </div>

    {/* Welcome Card */}
    <div className="relative z-10 -mt-16 mb-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl p-6 mx-auto w-[90%] max-w-md shadow-lg">
        <p className="text-gray-900 text-lg font-semibold mb-4">Selamat Malam</p>

        {/* Tombol Baris 1 */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <button className="flex items-center justify-center gap-1 bg-white rounded-xl shadow px-2 py-2 font-semibold text-sm text-gray-900">
            <img src="https://img.icons8.com/ios-filled/24/1E40AF/marker.png" className="w-4 h-4" alt="Marker" />
            Jelajah
          </button>
          <button className="bg-white rounded-xl shadow px-2 py-2 font-semibold text-sm text-gray-900">Scan</button>
          <button className="bg-white rounded-xl shadow px-2 py-2 font-semibold text-sm text-gray-900">Top Up</button>
        </div>

        {/* Tombol Baris 2 */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 rounded-xl px-2 py-2">
            <img src="https://img.icons8.com/ios-filled/24/1E40AF/coins.png" className="w-5 h-5" alt="Coins" />
            <span className="font-semibold text-sm">Koin Anda: 500</span>
          </div>
          <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl px-2 py-2 font-semibold text-sm">
            Jadi Member
          </button>
        </div>
      </div>
    </div>
  </>
);

export default Header;