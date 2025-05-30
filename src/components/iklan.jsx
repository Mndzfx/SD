import React, { useState, useEffect } from 'react';
import { Star, MapPin } from 'lucide-react';

// Hotel images from Unsplash
const getHotelImage = (id) => {
  const hotelImages = {
    1: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop',
    2: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=200&fit=crop',
    3: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=200&fit=crop',
    4: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400&h=200&fit=crop',
    5: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=200&fit=crop',
    6: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop',
    7: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=200&fit=crop',
    8: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=200&fit=crop'
  };
  
  return hotelImages[id] || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop';
};

const promoData = [
  {
    id: 1,
    discount: '45%',
    title: 'GRAND HOTEL YOGYAKARTA',
    location: 'Malioboro Street',
    originalPrice: 'Rp 2.500.000',
    currentPrice: 'Rp 1.375.000',
    rating: 4.8,
    featured: true,
  },
  {
    id: 2,
    discount: 'FLASH SALE',
    title: 'BALI BEACH RESORT',
    location: 'Seminyak Beach',
    originalPrice: 'Rp 1.800.000',
    currentPrice: 'Rp 899.000',
    rating: 4.9,
    featured: true,
  },
  {
    id: 3,
    discount: '25%',
    title: 'MATARAM SUITES BANDUNG',
    location: 'Dago Area',
    originalPrice: 'Rp 800.000',
    currentPrice: 'Rp 600.000',
    rating: 4.5,
  },
  {
    id: 4,
    discount: 'NEW',
    title: 'JUNGLE RESORT BOGOR',
    location: 'Puncak Hills',
    originalPrice: 'Rp 1.200.000',
    currentPrice: 'Rp 950.000',
    rating: 4.7,
  },
  {
    id: 5,
    discount: '60%',
    title: 'ROYAL PALACE JAKARTA',
    location: 'Central Jakarta',
    originalPrice: 'Rp 3.500.000',
    currentPrice: 'Rp 1.400.000',
    rating: 5.0,
    featured: true,
  },
  {
    id: 6,
    discount: 'LIMITED',
    title: 'SUNSET VILLA LOMBOK',
    location: 'Gili Islands',
    originalPrice: 'Rp 2.200.000',
    currentPrice: 'Rp 1.650.000',
    rating: 4.8,
  },
  {
    id: 7,
    discount: '35%',
    title: 'METROPOLITAN SURABAYA',
    location: 'Tunjungan Plaza',
    originalPrice: 'Rp 1.000.000',
    currentPrice: 'Rp 650.000',
    rating: 4.6,
  },
  {
    id: 8,
    discount: 'HOT DEAL',
    title: 'MOUNTAIN RETREAT MALANG',
    location: 'Batu City',
    originalPrice: 'Rp 900.000',
    currentPrice: 'Rp 540.000',
    rating: 4.4,
  }
];

const Promo = () => {
  return (
    <div className="px-4 mt-6 mb-10">
      <h2 className="font-bold text-lg mb-3">🔥 Promo Terbaru</h2>
      
      <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        {promoData.map((promo) => (
          <div
            key={promo.id}
            className="flex-shrink-0 w-[200px] h-[160px] rounded-xl overflow-hidden relative shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {/* Background Image */}
            <img 
              src={getHotelImage(promo.id)}
              alt={promo.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop';
              }}
            />
            
            {/* Gradient Overlay - Lighter at top, darker at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
            
            {/* Discount Badge - Top Left */}
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold shadow-lg">
              {promo.discount}
            </div>
            
            {/* Featured Badge - Top Right */}
            {promo.featured && (
              <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-1.5 py-1 rounded-md text-xs font-bold shadow-lg">
                ⭐
              </div>
            )}
            
            {/* Rating - Top Right (if not featured) - Smaller */}
            {!promo.featured && (
              <div className="absolute top-2 right-2 bg-white/90 px-1.5 py-0.5 rounded-md flex items-center space-x-1 shadow-lg">
                <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-semibold">{promo.rating}</span>
              </div>
            )}
            
            {/* Hotel Info - Bottom with better spacing */}
            <div className="absolute bottom-0 left-0 right-0 p-2.5 text-white">
              {/* Hotel Title - Shorter */}
              <h3 className="text-xs font-bold leading-tight mb-1 text-shadow line-clamp-1">
                {promo.title}
              </h3>
              
              {/* Location - Smaller */}
              <div className="flex items-center space-x-1 mb-1.5">
                <MapPin className="w-2.5 h-2.5" />
                <span className="text-xs opacity-90 line-clamp-1">{promo.location}</span>
              </div>
              
              {/* Pricing - Side by side */}
              <div className="flex items-end justify-between">
                <div className="flex items-center space-x-2 flex-1 min-w-0">
                  <div className="text-xs opacity-75 line-through whitespace-nowrap">{promo.originalPrice}</div>
                  <div className="text-xs font-bold text-green-300 whitespace-nowrap">{promo.currentPrice}</div>
                </div>
                
                {/* Rating for featured items - Smaller */}
                {promo.featured && (
                  <div className="bg-white/20 px-1.5 py-0.5 rounded-md flex items-center space-x-1 ml-2">
                    <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold">{promo.rating}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-2xl p-4 text-white relative overflow-hidden mb-20">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="relative z-10">
          <h3 className="font-bold text-lg mb-1"> Super Flash Sale</h3>
          <p className="text-sm opacity-90 mb-2">Diskon hingga 70% untuk booking hari ini!</p>
          <button className="bg-white text-red-500 px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">
            Lihat Semua Promo
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .text-shadow {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Promo;