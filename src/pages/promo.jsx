import React, { useState, useRef } from 'react';
import { ArrowLeft, Search, Zap } from 'lucide-react';
import Navbar from '../components/navbar';

const TravelPromoApp = () => {
  const [activeTab, setActiveTab] = useState('Semua');
  const [bookedItems, setBookedItems] = useState({});
  const tabContainerRef = useRef(null);

  const tabs = ['Semua', 'Hotel', 'Wisata', 'Kuliner', 'Transport'];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleBookClick = (e, itemId) => {
    e.stopPropagation();
    setBookedItems(prev => ({ ...prev, [itemId]: true }));
    setTimeout(() => {
      setBookedItems(prev => ({ ...prev, [itemId]: false }));
    }, 2000);
  };

  const handleCardClick = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
      card.style.transform = '';
    }, 150);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PromoCard = ({ id, discount, title, description, price, originalPrice, emoji, bgGradient }) => (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer hover:-translate-y-1"
      onClick={handleCardClick}
    >
      <div className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 relative overflow-hidden">
        <div 
          className={`w-full h-full ${bgGradient} flex items-center justify-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
        >
          {emoji}
        </div>
        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
          {discount}%
        </div>
      </div>
      <div className="p-4 sm:p-5 lg:p-6">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 leading-tight">{title}</h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-3 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600">{price}</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400 line-through">{originalPrice}</div>
          </div>
          <button
            className={`px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-all duration-200 hover:scale-105 ${
              bookedItems[id] 
                ? 'bg-green-500 text-white' 
                : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/30'
            }`}
            onClick={(e) => handleBookClick(e, id)}
          >
            {bookedItems[id] ? '✓ Dipilih' : 'Pesan'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gray-100 relative overflow-x-hidden">
      <style jsx>{`
        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Blue Header Section */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20 rounded-b-3xl">
        {/* Header */}
        <div className="flex items-center p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 text-white">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold flex-1">Promo Saya</div>
          <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-full bg-white bg-opacity-20 border-none text-white cursor-pointer flex items-center justify-center hover:bg-opacity-30 transition-all">
            <Zap size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 pb-5">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 lg:justify-center" style={{ minWidth: 'max-content' }}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 xl:px-8 xl:py-4 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab
                      ? 'bg-white text-blue-500'
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 bg-gray-100 rounded-t-3xl -mt-6 relative z-10">
        {/* Special Banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 rounded-2xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-center relative overflow-hidden">
          <div className="absolute -top-1/2 -right-5 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white/10 rounded-full"></div>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2">🎉 Flash Sale!</div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 mb-4">Diskon hingga 70% untuk booking hari ini</div>
          <button className="bg-white text-red-600 border-0 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3.5 xl:px-10 xl:py-4 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold cursor-pointer hover:scale-105 transition-all duration-200 shadow-lg">
            Lihat Semua
          </button>
        </div>

        {/* Hotel Section */}
        <div className="bg-white rounded-2xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 pb-3 sm:pb-4 md:pb-5 border-b border-gray-100">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 mb-1">Hotel Terpopuler</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600">Nikmati pengalaman menginap terbaik</p>
          </div>
          <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            <PromoCard
              id="hotel1"
              discount="30"
              title="Hotel Coral Yogyakarta"
              description="Hotel bintang 4 di pusat kota dengan fasilitas lengkap"
              price="Rp 420.000"
              originalPrice="Rp 600.000"
              emoji="🏨"
              bgGradient="bg-gradient-to-br from-purple-500 to-purple-600"
            />
            <PromoCard
              id="hotel2"
              discount="25"
              title="Mataram Suites Bandung"
              description="Suite mewah dengan pemandangan kota yang menakjubkan"
              price="Rp 350.000"
              originalPrice="Rp 465.000"
              emoji="🏢"
              bgGradient="bg-gradient-to-br from-green-500 to-green-600"
            />
          </div>
        </div>

        {/* Tourism Section */}
        <div className="bg-white rounded-2xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 pb-3 sm:pb-4 md:pb-5 border-b border-gray-100">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 mb-1">Destinasi Wisata</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600">Jelajahi keindahan Indonesia</p>
          </div>
          <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            <PromoCard
              id="tour1"
              discount="40"
              title="Paket Wisata Bromo"
              description="3D2N termasuk transportasi, penginapan & guide"
              price="Rp 750.000"
              originalPrice="Rp 1.250.000"
              emoji="🏔"
              bgGradient="bg-gradient-to-br from-yellow-500 to-orange-600"
            />
            <PromoCard
              id="tour2"
              discount="35"
              title="Trip Pulau Seribu"
              description="Day trip snorkeling & island hopping"
              price="Rp 325.000"
              originalPrice="Rp 500.000"
              emoji="🏝"
              bgGradient="bg-gradient-to-br from-cyan-500 to-blue-600"
            />
          </div>
        </div>

        {/* Culinary Section */}
        <div className="bg-white rounded-2xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 pb-3 sm:pb-4 md:pb-5 border-b border-gray-100">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 mb-1">Kuliner Spesial</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600">Cicipi kelezatan nusantara</p>
          </div>
          <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            <PromoCard
              id="food1"
              discount="20"
              title="Paket Kuliner Jakarta"
              description="Food tour 5 destinasi kuliner legendaris"
              price="Rp 200.000"
              originalPrice="Rp 250.000"
              emoji="🍽"
              bgGradient="bg-gradient-to-br from-red-500 to-red-600"
            />
          </div>
        </div>

        {/* Bottom padding for navbar */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24"></div>
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-20 sm:bottom-22 md:bottom-24 lg:bottom-28 right-4 sm:right-5 md:right-6 lg:right-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-gradient-to-r from-red-500 to-red-600 rounded-full border-0 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl cursor-pointer shadow-lg hover:scale-110 transition-all duration-300 z-50"
        style={{ boxShadow: '0 8px 24px rgba(255, 107, 107, 0.4)' }}
        onClick={scrollToTop}
      >
        +
      </button>
      
      <Navbar />
    </div>
  );
};

export default TravelPromoApp;