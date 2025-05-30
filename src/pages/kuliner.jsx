import React, { useState } from 'react';
import {
  Utensils,
  Drumstick,
  Salad,
  CupSoda,
  CakeSlice,
  Pizza,
  IceCream
} from "lucide-react";

import { Search, MapPin, Star, Heart, Filter, ArrowLeft, Camera, Users, Clock, UtensilsCrossed, Zap, TrendingUp, Flame, Award } from 'lucide-react';

const KulinerPage = () => {
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

  const kulinerData = {
    populer: [
      {
        id: 1,
        name: "Gudeg Yu Djum",
        location: "Yogyakarta",
        rating: 4.9,
        reviews: 3421,
        price: "Rp 25.000",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
        category: "Tradisional",
        distance: "1.2 km",
        cookTime: "30 menit",
        isHot: true,
        spicyLevel: 2,
        isHalal: true
      },
      {
        id: 2,
        name: "Sate Klathak Pak Pong",
        location: "Bantul, Yogyakarta",
        rating: 4.8,
        reviews: 2876,
        price: "Rp 35.000",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=250&fit=crop",
        category: "BBQ",
        distance: "2.8 km",
        cookTime: "20 menit",
        isNew: true,
        spicyLevel: 3,
        isHalal: true
      },
      {
        id: 3,
        name: "Bakmi Jawa Mbah Harto",
        location: "Solo, Jawa Tengah",
        rating: 4.7,
        reviews: 1987,
        price: "Rp 18.000",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=250&fit=crop",
        category: "Mie",
        distance: "5.5 km",
        cookTime: "15 menit",
        spicyLevel: 1,
        isHalal: true
      },
      {
        id: 4,
        name: "Rendang Minang Asli",
        location: "Padang, Sumatera Barat",
        rating: 4.9,
        reviews: 4532,
        price: "Rp 45.000",
        image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=250&fit=crop",
        category: "Tradisional",
        distance: "3.2 km",
        cookTime: "45 menit",
        isHot: true,
        spicyLevel: 4,
        isHalal: true
      }
    ],
    terbaru: [
      {
        id: 5,
        name: "Korean BBQ Samgyupsal",
        location: "Jakarta Selatan",
        rating: 4.6,
        reviews: 1234,
        price: "Rp 85.000",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop",
        category: "Korea",
        distance: "4.1 km",
        cookTime: "25 menit",
        isNew: true,
        spicyLevel: 2,
        isHalal: false
      },
      {
        id: 6,
        name: "Ramen Ichiraku",
        location: "Bandung, Jawa Barat",
        rating: 4.5,
        reviews: 987,
        price: "Rp 55.000",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=250&fit=crop",
        category: "Jepang",
        distance: "6.8 km",
        cookTime: "20 menit",
        isNew: true,
        spicyLevel: 2,
        isHalal: false
      }
    ],
    terdekat: [
      {
        id: 7,
        name: "Warung Tegal Bu Yanti",
        location: "Jakarta Pusat",
        rating: 4.4,
        reviews: 2341,
        price: "Rp 15.000",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=250&fit=crop",
        category: "Warteg",
        distance: "0.8 km",
        cookTime: "10 menit",
        spicyLevel: 2,
        isHalal: true
      },
      {
        id: 8,
        name: "Pizza Corner",
        location: "Jakarta Utara",
        rating: 4.2,
        reviews: 1876,
        price: "Rp 65.000",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop",
        category: "Italia",
        distance: "1.5 km",
        cookTime: "30 menit",
        spicyLevel: 0,
        isHalal: true
      }
    ]
  };


const categories = [
  { name: "semua", label: "Semua", icon: <Utensils size={20} />, color: "from-orange-400 to-yellow-500" },
  { name: "makanan", label: "Makanan", icon: <Drumstick size={20} />, color: "from-red-400 to-pink-500" },
  { name: "vegetarian", label: "Vegetarian", icon: <Salad size={20} />, color: "from-green-400 to-emerald-500" },
  { name: "minuman", label: "Minuman", icon: <CupSoda size={20} />, color: "from-cyan-400 to-blue-500" },
  { name: "dessert", label: "Dessert", icon: <CakeSlice size={20} />, color: "from-purple-400 to-indigo-500" },
  { name: "fastfood", label: "Fast Food", icon: <Pizza size={20} />, color: "from-yellow-400 to-orange-500" },
  { name: "eskrim", label: "Es Krim", icon: <IceCream size={20} />, color: "from-pink-400 to-fuchsia-500" }
];


  const getSpicyIcon = (level) => {
    switch(level) {
      case 0: return "😌";
      case 1: return "🌶";
      case 2: return "🌶🌶";
      case 3: return "🌶🌶🌶";
      case 4: return "🔥🔥🔥";
      default: return "😌";
    }
  };

  const filteredData = activeCategory === 'semua' 
    ? kulinerData[activeTab] 
    : kulinerData[activeTab]?.filter(item => item.category.toLowerCase() === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <div className="w-full bg-gradient-to-b from-orange-500 to-red-500 pt-6 pb-20 px-4 text-center rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <ArrowLeft className="w-6 h-6 text-white cursor-pointer" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6 text-orange-600" />
            </div>
            <h1 className="text-white text-xl font-bold">Jelajahin Kuliner</h1>
          </div>
          <div className="w-6 h-6"></div>
        </div>
        
        <p className="text-orange-100 text-sm mb-4">Cicipi kelezatan nusantara</p>
      </div>

      {/* Search Card */}
      <div className="relative z-10 -mt-16 mb-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-6 mx-auto w-[90%] max-w-md shadow-xl">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari makanan favorit Anda..."
              className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-white transition-all"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-700 transition-colors" />
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600">500+</div>
              <div className="text-xs text-gray-600">Restoran</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">4.7★</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">100K+</div>
              <div className="text-xs text-gray-600">Pesanan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
     <div className="px-4 mb-6">
  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
      
      Kategori Kuliner
    </h3>
    <div className="flex overflow-x-auto space-x-4 pb-2 snap-x snap-mandatory scroll-smooth">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(category.name)}
          className={`flex-shrink-0 w-40 h-16 rounded-xl flex items-center px-4 transition-all duration-300 snap-start ${
            activeCategory === category.name
              ? 'bg-orange-50 ring-2 ring-orange-300 text-orange-600'
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
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Kuliner Cards */}
      <div className="px-4 space-y-6 pb-20">
        {filteredData?.map((kuliner, index) => (
          <div key={kuliner.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative">
              <img
                src={kuliner.image}
                alt={kuliner.name}
                className="w-full h-56 object-cover"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-lg">
                  {kuliner.category}
                </span>
                {kuliner.isHalal && (
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ✅ HALAL
                  </span>
                )}
                {kuliner.isHot && (
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🔥 HOT
                  </span>
                )}
                {kuliner.isNew && (
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ✨ NEW
                  </span>
                )}
              </div>
              
              <button
                onClick={() => toggleFavorite(kuliner.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    favorites.has(kuliner.id) ? 'text-red-500 fill-red-500' : 'text-gray-600 hover:text-red-400'
                  }`}
                />
              </button>
              
              {/* Spicy Level */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <span className="text-white text-xs font-medium">Level:</span>
                  <span className="text-sm">{getSpicyIcon(kuliner.spicyLevel)}</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Camera className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">32+</span>
                </div>
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Award className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs text-white font-medium">Top</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{kuliner.name}</h3>
                  <div className="flex items-center space-x-1 mb-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600 font-medium">{kuliner.location}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{kuliner.distance}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{kuliner.cookTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-600 font-medium">
                        {kuliner.spicyLevel === 0 ? 'Tidak Pedas' : 
                         kuliner.spicyLevel === 1 ? 'Ringan' :
                         kuliner.spicyLevel === 2 ? 'Sedang' :
                         kuliner.spicyLevel === 3 ? 'Pedas' : 'Super Pedas'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-orange-600">{kuliner.price}</p>
                  <p className="text-xs text-gray-500">per porsi</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-gray-800">{kuliner.rating}</span>
                    <span className="text-sm text-gray-500">({kuliner.reviews} ulasan)</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                    Info
                  </button>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-xl text-sm font-bold hover:from-orange-600 hover:to-red-600 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Floating Action Button */}
      <div className="fixed bottom-6 right-4">
        <button className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300">
          <UtensilsCrossed className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
};

export default KulinerPage;