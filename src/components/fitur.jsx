// src/components/MenuTripPlanner.jsx
import React from "react";
import { Link } from 'react-router-dom';
import Wisata from '../assets/wisata.png'
import Kuliner from '../assets/kulineran.png'
import Tagihan from '../assets/tagih.png'
import Transportasi from '../assets/transportasi.png'
import Akomodasi from '../assets/akomodasi.png'
import Hotel from '../assets/hotel.png'
import Ecommerce from '../assets/ecommerce.png'
import ProdukDigital from '../assets/produk-digital.png'
import Event from '../assets/travel.png'

const MenuTripPlanner = () => {
  return (
    <>
      {/* Menu Icons */}
      <div className="grid grid-cols-5 gap-x-4 gap-y-6 px-4 mt-10">
        {/* Wisata */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#3A8DFF] to-[#1E5EDB] flex justify-center items-center">
            <img src={Wisata} className="w-7 h-7" />
          </div>
          <span className="text-xs text-[#1A1A1A] text-center">Wisata</span>
        </div>

        {/* Kuliner */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#FF7A2A] to-[#FF5A00] flex justify-center items-center">
            <img src={Kuliner} className="w-7 h-7" />
          </div>
          <span className="text-xs font-semibold text-[#1A1A1A] text-center">Kuliner</span>
        </div>

        {/* Tagihan */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#3AC1D9] to-[#1E9DB3] flex justify-center items-center">
            <img src={Tagihan} className="w-7 h-7" />
          </div>
          <span className="text-xs text-[#1A1A1A] text-center">Tagihan</span>
        </div>

        {/* Akomodasi */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#7B4EFF] to-[#5A2EDB] flex justify-center items-center">
            <img src={Akomodasi} className="w-7 h-7" />
          </div>
          <span className="text-xs text-[#1A1A1A] text-center">Akomodasi</span>
        </div>

        {/* Transportasi */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#3A8DFF] to-[#1E5EDB] flex justify-center items-center">
            <img src={Transportasi} className="w-7 h-7" />
          </div>
          <span className="text-xs text-[#1A1A1A] text-center truncate max-w-[4.5rem]">Transportasi</span>
        </div>

        {/* Hotel */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#3A8DFF] to-[#1E5EDB] flex justify-center items-center">
            <img src={Hotel} className="w-7 h-7" />
          </div>
          <span className="text-xs text-[#1A1A1A] text-center truncate max-w-[4.5rem]">Hotel</span>
        </div>

        {/* E-Commerce */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#3AC1D9] to-[#1E9DB3] flex justify-center items-center">
            <img src={Ecommerce} className="w-7 h-7" />
          </div>
          <span className="text-xs text-[#1A1A1A] text-center truncate max-w-[4.5rem]">E-Commerce</span>
        </div>

        {/* Produk Digital */}
        <Link to="/produkDigital">
  <div className="flex flex-col items-center space-y-1 cursor-pointer">
    <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#7B4EFF] to-[#5A2EDB] flex justify-center items-center">
      <img src={ProdukDigital} className="w-7 h-7" />
    </div>
    <span className="text-xs text-[#1A1A1A] text-center truncate max-w-[4.5rem]">Produk Digital</span>
  </div>
</Link>

        {/* Event */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#3A8DFF] to-[#1E5EDB] flex justify-center items-center">
            <img src={Event} className="w-7 h-7" />
          </div>
          <span className="text-xs text-[#1A1A1A] text-center truncate max-w-[4.5rem]">Event</span>
        </div>

        {/* More */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center border border-gray-300">
            <span className="text-xl text-[#3A8DFF]">...</span>
          </div>
          <span className="text-xs font-semibold text-[#1A1A1A] text-center">More</span>
        </div>
      </div>

      {/* Trip Planner */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mx-4 mt-8 p-4 flex items-center justify-between text-white">
        <div>
          <p className="font-bold text-sm">TRIP Planner</p>
          <p className="text-xs">Buat pengalaman wisata lebih menyenangkan</p>
        </div>
        <button className="bg-white text-indigo-600 px-4 py-1 rounded-full text-sm font-semibold">BUAT</button>
      </div>
    </>
  );
};

export default MenuTripPlanner;