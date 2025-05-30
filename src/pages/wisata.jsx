import React, { useState } from 'react';
import {
  Sparkles,
  TreePine,
  Landmark,
  Waves,
  Drama,
  ScrollText,
  Mountain
} from "lucide-react";
import { Search, MapPin, Star, Heart, Filter, ArrowLeft, Camera, Users, Clock, Compass, Zap, TrendingUp } from 'lucide-react';

const WisataPage = () => {
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

  const wisataData = {
    populer: [
      {
        id: 1,
        name: "Borobudur Temple",
        location: "Yogyakarta",
        rating: 4.8,
        reviews: 2453,
        price: "Rp 50.000",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
        category: "Sejarah",
        distance: "2.5 km",
        duration: "3-4 jam",
        isHot: true
      },
      {
        id: 2,
        name: "Raja Ampat Marine Paradise",
        location: "Papua Barat",
        rating: 4.9,
        reviews: 1876,
        price: "Rp 2.500.000",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
        category: "Alam",
        distance: "15 km",
        duration: "Full Day",
        isNew: true
      },
      {
        id: 3,
        name: "Tanah Lot Sunset",
        location: "Bali",
        rating: 4.7,
        reviews: 3421,
        price: "Rp 60.000",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=250&fit=crop",
        category: "Spiritual",
        distance: "8 km",
        duration: "2-3 jam"
      },
      {
        id: 4,
        name: "Kawah Ijen Blue Fire",
        location: "Jawa Timur",
        rating: 4.6,
        reviews: 987,
        price: "Rp 400.000",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=250&fit=crop",
        category: "Adventure",
        distance: "25 km",
        duration: "2 hari",
        isHot: true
      }
    ],
    terbaru: [
      {
        id: 5,
        name: "Hidden Beach Nusa Penida",
        location: "Bali",
        rating: 4.8,
        reviews: 2156,
        price: "Rp 350.000",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
        category: "Pantai",
        distance: "45 km",
        duration: "1-2 hari",
        isNew: true
      },
      {
        id: 6,
        name: "Dieng Plateau Adventure",
        location: "Jawa Tengah",
        rating: 4.5,
        reviews: 1432,
        price: "Rp 200.000",
        image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400&h=250&fit=crop",
        category: "Alam",
        distance: "35 km",
        duration: "Full Day",
        isNew: true
      }
    ],
    terdekat: [
      {
        id: 7,
        name: "Taman Mini Indonesia",
        location: "Jakarta",
        rating: 4.3,
        reviews: 5432,
        price: "Rp 25.000",
        image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400&h=250&fit=crop",
        category: "Budaya",
        distance: "5 km",
        duration: "4-6 jam"
      },
      {
        id: 8,
        name: "Ancol Dreamland",
        location: "Jakarta",
        rating: 4.2,
        reviews: 8765,
        price: "Rp 75.000",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=250&fit=crop",
        category: "Pantai",
        distance: "8 km",
        duration: "Full Day"
      }
    ]
  };

 const categories = [
  { name: "semua", label: "Semua", icon: <Sparkles size={20} />, color: "from-blue-500 to-purple-600" },
  { name: "alam", label: "Alam", icon: <TreePine size={20} />, color: "from-green-400 to-emerald-600" },
  { name: "sejarah", label: "Sejarah", icon: <Landmark size={20} />, color: "from-amber-400 to-orange-600" },
  { name: "pantai", label: "Pantai", icon: <Waves size={20} />, color: "from-cyan-400 to-blue-600" },
  { name: "budaya", label: "Budaya", icon: <Drama size={20} />, color: "from-purple-400 to-indigo-600" },
  { name: "spiritual", label: "Spiritual", icon: <ScrollText size={20} />, color: "from-orange-400 to-red-500" },
  { name: "adventure", label: "Adventure", icon: <Mountain size={20} />, color: "from-red-400 to-pink-600" }
];

  const filteredData = activeCategory === 'semua' 
    ? wisataData[activeTab] 
    : wisataData[activeTab]?.filter(item => item.category.toLowerCase() === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <div className="w-full bg-gradient-to-b from-[#3A8DFF] to-[#1E5EDB] pt-6 pb-20 px-4 text-center rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <ArrowLeft className="w-6 h-6 text-white cursor-pointer" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Compass className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-white text-xl font-bold">Jelajahin Wisata</h1>
          </div>
          <div className="w-6 h-6"></div>
        </div>
        
        <p className="text-blue-100 text-sm mb-4">Temukan destinasi impian Anda</p>
      </div>

      {/* Search Card */}
      <div className="relative z-10 -mt-16 mb-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-6 mx-auto w-[90%] max-w-md shadow-xl">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari destinasi wisata impian..."
              className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition-all"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500 cursor-pointer hover:text-blue-700 transition-colors" />
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">150+</div>
              <div className="text-xs text-gray-600">Destinasi</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">4.8★</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">50K+</div>
              <div className="text-xs text-gray-600">Wisatawan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
     <div className="px-4 mb-6">
  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
     
      Kategori Wisata
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
            <span className="text-lg">{category.icon}</span>
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
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Wisata Cards */}
      <div className="px-4 space-y-6 pb-20">
        {filteredData?.map((wisata, index) => (
          <div key={wisata.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative">
              <img
                src={wisata.image}
                alt={wisata.name}
                className="w-full h-56 object-cover"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-lg">
                  {wisata.category}
                </span>
                {wisata.isHot && (
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🔥 HOT
                  </span>
                )}
                {wisata.isNew && (
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ✨ NEW
                  </span>
                )}
              </div>
              
              <button
                onClick={() => toggleFavorite(wisata.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    favorites.has(wisata.id) ? 'text-red-500 fill-red-500' : 'text-gray-600 hover:text-red-400'
                  }`}
                />
              </button>
              
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Camera className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">24+</span>
                </div>
                <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Users className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">1.2K</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{wisata.name}</h3>
                  <div className="flex items-center space-x-1 mb-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600 font-medium">{wisata.location}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{wisata.distance}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{wisata.duration}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-blue-600">{wisata.price}</p>
                  <p className="text-xs text-gray-500">per orang</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-gray-800">{wisata.rating}</span>
                    <span className="text-sm text-gray-500">({wisata.reviews} ulasan)</span>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Floating Action Button */}
      <div className="fixed bottom-6 right-4">
        <button className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300">
          <MapPin className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
};

export default WisataPage;