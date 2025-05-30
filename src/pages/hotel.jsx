import React, { useState } from 'react';
import {
  Building2,
  Bed,
  Bath,
  Stars,
  Wallet,
  Landmark,
  ConciergeBell,
   Search, MapPin, Star, Heart, Filter, ArrowLeft, Camera, Users, Clock, Wifi, Car, Coffee, Award, TrendingUp, Zap, Calendar
} from "lucide-react";


const HotelPage = () => {
  const [activeTab, setActiveTab] = useState('populer');
  const [favorites, setFavorites] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('semua');

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const hotelData = {
    populer: [
      {
        id: 1,
        name: "Grand Hyatt Jakarta",
        location: "Jakarta Pusat",
        rating: 4.9,
        reviews: 3421,
        price: "Rp 2.500.000",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
        category: "Luxury",
        distance: "1.2 km",
        checkIn: "14:00",
        isHot: true,
        starRating: 5,
        facilities: ["wifi", "pool", "gym", "spa", "restaurant"],
        roomsLeft: 3
      },
      {
        id: 2,
        name: "The Ritz-Carlton Bali",
        location: "Nusa Dua, Bali",
        rating: 4.8,
        reviews: 2876,
        price: "Rp 3.200.000",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop",
        category: "Resort",
        distance: "2.8 km",
        checkIn: "15:00",
        isNew: true,
        starRating: 5,
        facilities: ["wifi", "pool", "spa", "beach", "restaurant"],
        roomsLeft: 5
      },
      {
        id: 3,
        name: "Hotel Majapahit Surabaya",
        location: "Surabaya, Jawa Timur",
        rating: 4.7,
        reviews: 1987,
        price: "Rp 1.800.000",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop",
        category: "Heritage",
        distance: "5.5 km",
        checkIn: "14:00",
        starRating: 4,
        facilities: ["wifi", "pool", "restaurant", "meeting"],
        roomsLeft: 8
      },
      {
        id: 4,
        name: "Four Seasons Resort Langkawi",
        location: "Langkawi, Malaysia",
        rating: 4.9,
        reviews: 4532,
        price: "Rp 4.500.000",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=250&fit=crop",
        category: "Resort",
        distance: "3.2 km",
        checkIn: "15:00",
        isHot: true,
        starRating: 5,
        facilities: ["wifi", "pool", "spa", "beach", "restaurant", "golf"],
        roomsLeft: 2
      }
    ],
    terbaru: [
      {
        id: 5,
        name: "Hotel Tentrem Yogyakarta",
        location: "Yogyakarta",
        rating: 4.6,
        reviews: 1234,
        price: "Rp 1.200.000",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=250&fit=crop",
        category: "Business",
        distance: "4.1 km",
        checkIn: "14:00",
        isNew: true,
        starRating: 4,
        facilities: ["wifi", "pool", "gym", "restaurant", "meeting"],
        roomsLeft: 12
      },
      {
        id: 6,
        name: "Alila Villas Uluwatu",
        location: "Uluwatu, Bali",
        rating: 4.5,
        reviews: 987,
        price: "Rp 5.500.000",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop",
        category: "Villa",
        distance: "6.8 km",
        checkIn: "15:00",
        isNew: true,
        starRating: 5,
        facilities: ["wifi", "pool", "spa", "beach", "restaurant"],
        roomsLeft: 4
      }
    ],
    terdekat: [
      {
        id: 7,
        name: "Hotel Santika Premiere",
        location: "Jakarta Selatan",
        rating: 4.4,
        reviews: 2341,
        price: "Rp 850.000",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop",
        category: "Business",
        distance: "0.8 km",
        checkIn: "14:00",
        starRating: 4,
        facilities: ["wifi", "pool", "gym", "restaurant"],
        roomsLeft: 15
      },
      {
        id: 8,
        name: "Ibis Styles Jakarta",
        location: "Jakarta Pusat",
        rating: 4.2,
        reviews: 1876,
        price: "Rp 650.000",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=250&fit=crop",
        category: "Budget",
        distance: "1.5 km",
        checkIn: "14:00",
        starRating: 3,
        facilities: ["wifi", "restaurant", "meeting"],
        roomsLeft: 20
      }
    ]
  };


const categories = [
  { name: "semua", label: "Semua", icon: <Building2 size={20} />, color: "from-blue-400 to-indigo-500" },
  { name: "budget", label: "Budget", icon: <Wallet size={20} />, color: "from-green-400 to-emerald-500" },
  { name: "bintang3", label: "Bintang 3", icon: <Stars size={20} />, color: "from-yellow-400 to-amber-500" },
  { name: "bintang4", label: "Bintang 4", icon: <Stars size={20} />, color: "from-orange-400 to-red-500" },
  { name: "bintang5", label: "Bintang 5", icon: <Stars size={20} />, color: "from-purple-400 to-fuchsia-500" },
  { name: "resort", label: "Resort", icon: <ConciergeBell size={20} />, color: "from-cyan-400 to-blue-500" },
  { name: "villa", label: "Villa", icon: <Landmark size={20} />, color: "from-pink-400 to-rose-500" }
];


  const getFacilityIcon = (facility) => {
    const icons = {
      wifi: <Wifi className="w-4 h-4" />,
      pool: "🏊‍♂",
      gym: "💪",
      spa: "🧘‍♀",
      restaurant: "🍽",
      beach: "🏖",
      golf: "⛳",
      meeting: "🏢"
    };
    return icons[facility] || "✨";
  };

  const getStarRating = (stars) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const filteredData = activeCategory === 'semua' 
    ? hotelData[activeTab] 
    : hotelData[activeTab]?.filter(item => item.category.toLowerCase() === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <div className="w-full bg-gradient-to-b from-blue-500 to-indigo-600 pt-6 pb-20 px-4 text-center rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <ArrowLeft className="w-6 h-6 text-white cursor-pointer" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Bed className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-white text-xl font-bold">BookingKu Hotel</h1>
          </div>
          <div className="w-6 h-6"></div>
        </div>
        
        <p className="text-blue-100 text-sm mb-4">Temukan hotel terbaik untuk perjalanan Anda</p>
      </div>

      {/* Search Card */}
      <div className="relative z-10 -mt-16 mb-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-6 mx-auto w-[90%] max-w-md shadow-xl">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari hotel impian Anda..."
              className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition-all"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500 cursor-pointer hover:text-blue-700 transition-colors" />
          </div>
          
          {/* Quick Booking Info */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-600 mb-1">Check-in</div>
              <div className="text-sm font-bold text-gray-800">29 Mei 2025</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-600 mb-1">Check-out</div>
              <div className="text-sm font-bold text-gray-800">31 Mei 2025</div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">1200+</div>
              <div className="text-xs text-gray-600">Hotel</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">4.8★</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">50K+</div>
              <div className="text-xs text-gray-600">Booking</div>
            </div>
          </div>
        </div>
      </div>

     <div className="px-4 mb-6">
  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
       Kategori Hotel
    </h3>
    <div className="flex overflow-x-auto space-x-4 pb-2 snap-x snap-mandatory scroll-smooth">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(category.name)}
          className={`flex-shrink-0 w-40 h-16 rounded-xl flex items-center px-4 transition-all duration-300 snap-start ${
            activeCategory === category.name
              ? 'bg-blue-50 ring-2 ring-blue-300 text-blue-600'
              : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-md mr-3`}
          >
            {category.icon}
          </div>
          <span className="text-sm font-medium">{category.label}</span>
        </button>
      ))}
    </div>
  </div>
</div>

      {/* Enhanced Tabs */}
      <div className="px-4 mb-6">
        <div className="flex bg-white rounded-2xl p-2 shadow-lg">
          {[
            { key: 'populer', label: 'Populer', icon: TrendingUp },
            { key: 'terbaru', label: 'Terbaru', icon: Zap },
            { key: 'terdekat', label: 'Terdekat', icon: MapPin }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Hotel Cards */}
      <div className="px-4 space-y-6 pb-20">
        {filteredData?.map((hotel, index) => (
          <div key={hotel.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-56 object-cover"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-lg">
                  {hotel.category}
                </span>
                {hotel.isHot && (
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🔥 HOT DEAL
                  </span>
                )}
                {hotel.isNew && (
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ✨ BARU
                  </span>
                )}
                {hotel.roomsLeft <= 5 && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⚡ {hotel.roomsLeft} kamar tersisa
                  </span>
                )}
              </div>
              
              <button
                onClick={() => toggleFavorite(hotel.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    favorites.has(hotel.id) ? 'text-red-500 fill-red-500' : 'text-gray-600 hover:text-red-400'
                  }`}
                />
              </button>
              
              {/* Star Rating */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  {getStarRating(hotel.starRating)}
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Camera className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">25+</span>
                </div>
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Award className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs text-white font-medium">Certified</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{hotel.name}</h3>
                  <div className="flex items-center space-x-1 mb-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600 font-medium">{hotel.location}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{hotel.distance}</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Check-in {hotel.checkIn}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">2 Tamu</span>
                    </div>
                  </div>
                  
                  {/* Facilities */}
                  <div className="flex flex-wrap gap-2">
                    {hotel.facilities.slice(0, 4).map((facility, idx) => (
                      <div key={idx} className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                        <span className="text-xs mr-1">{typeof getFacilityIcon(facility) === 'string' ? getFacilityIcon(facility) : ''}</span>
                        {typeof getFacilityIcon(facility) !== 'string' && getFacilityIcon(facility)}
                        <span className="text-xs text-gray-600 ml-1 capitalize">{facility}</span>
                      </div>
                    ))}
                    {hotel.facilities.length > 4 && (
                      <div className="flex items-center bg-blue-100 rounded-lg px-2 py-1">
                        <span className="text-xs text-blue-600 font-medium">+{hotel.facilities.length - 4} lainnya</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-blue-600">{hotel.price}</p>
                  <p className="text-xs text-gray-500">per malam</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-gray-800">{hotel.rating}</span>
                    <span className="text-sm text-gray-500">({hotel.reviews} ulasan)</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                    Detail
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Floating Action Button */}
      <div className="fixed bottom-6 right-4">
        <button className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300">
          <Calendar className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
};

export default HotelPage;