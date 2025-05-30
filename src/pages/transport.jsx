import React, { useState } from 'react';
import {
  Bus,
  Car,
  Bike,
  TrainFront,
  Plane,
  Ship,
  TramFront,
  Search, MapPin, Star, Heart, Filter, ArrowLeft, Camera, Users, Clock,  Wifi, Coffee, Award, TrendingUp, Zap, Calendar,  Train, Navigation, Fuel, Shield, UserCheck, CheckCircle
} from "lucide-react";


const TransportPage = () => {
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

  const transportData = {
    populer: [
      {
        id: 1,
        name: "Garuda Indonesia",
        route: "Jakarta → Bali",
        rating: 4.8,
        reviews: 2341,
        price: "Rp 1.850.000",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop",
        category: "Pesawat",
        duration: "2j 15m",
        departure: "08:30",
        arrival: "11:45",
        isHot: true,
        class: "Economy",
        facilities: ["wifi", "meal", "entertainment", "baggage"],
        seatsLeft: 8
      },
      {
        id: 2,
        name: "Kereta Api Argo Bromo",
        route: "Jakarta → Surabaya",
        rating: 4.7,
        reviews: 1876,
        price: "Rp 320.000",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop",
        category: "Kereta",
        duration: "8j 30m",
        departure: "19:00",
        arrival: "03:30",
        isNew: true,
        class: "Eksekutif",
        facilities: ["wifi", "meal", "ac", "comfortable"],
        seatsLeft: 15
      },
      {
        id: 3,
        name: "PO Haryanto",
        route: "Jakarta → Yogyakarta",
        rating: 4.5,
        reviews: 1543,
        price: "Rp 180.000",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=250&fit=crop",
        category: "Bus",
        duration: "6j 45m",
        departure: "20:00",
        arrival: "02:45",
        class: "Executive",
        facilities: ["wifi", "ac", "reclining", "entertainment"],
        seatsLeft: 12
      },
      {
        id: 4,
        name: "Lion Air",
        route: "Jakarta → Medan",
        rating: 4.6,
        reviews: 3241,
        price: "Rp 1.420.000",
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=250&fit=crop",
        category: "Pesawat",
        duration: "2j 5m",
        departure: "14:20",
        arrival: "16:25",
        isHot: true,
        class: "Economy",
        facilities: ["baggage", "meal", "entertainment"],
        seatsLeft: 5
      }
    ],
    terbaru: [
      {
        id: 5,
        name: "Citilink",
        route: "Jakarta → Makassar",
        rating: 4.4,
        reviews: 987,
        price: "Rp 1.650.000",
        image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=400&h=250&fit=crop",
        category: "Pesawat",
        duration: "2j 40m",
        departure: "16:15",
        arrival: "19:55",
        isNew: true,
        class: "Economy",
        facilities: ["baggage", "meal"],
        seatsLeft: 20
      },
      {
        id: 6,
        name: "Kereta Luxury Gajayana",
        route: "Jakarta → Malang",
        rating: 4.8,
        reviews: 654,
        price: "Rp 450.000",
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=250&fit=crop",
        category: "Kereta",
        duration: "9j 15m",
        departure: "18:30",
        arrival: "03:45",
        isNew: true,
        class: "Luxury",
        facilities: ["wifi", "meal", "ac", "comfortable", "entertainment"],
        seatsLeft: 8
      }
    ],
    terdekat: [
      {
        id: 7,
        name: "TransJakarta",
        route: "Blok M → Kota",
        rating: 4.2,
        reviews: 5432,
        price: "Rp 4.000",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop",
        category: "Bus",
        duration: "45m",
        departure: "Setiap 10 menit",
        arrival: "Real-time",
        class: "Regular",
        facilities: ["ac", "accessible"],
        seatsLeft: "Tersedia"
      },
      {
        id: 8,
        name: "Grab Car",
        route: "Pickup → Destination",
        rating: 4.7,
        reviews: 12876,
        price: "Rp 25.000",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
        category: "Mobil",
        duration: "15-30m",
        departure: "Sekarang",
        arrival: "Estimasi",
        class: "Economy",
        facilities: ["ac", "gps"],
        seatsLeft: "Tersedia"
      }
    ]
  };

const categories = [
  { name: "semua", label: "Semua", icon: <TramFront size={20} />, color: "from-blue-400 to-indigo-500" },
  { name: "bus", label: "Bus", icon: <Bus size={20} />, color: "from-yellow-400 to-amber-500" },
  { name: "mobil", label: "Mobil", icon: <Car size={20} />, color: "from-green-400 to-emerald-500" },
  { name: "motor", label: "Motor", icon: <Bike size={20} />, color: "from-red-400 to-pink-500" },
  { name: "kereta", label: "Kereta", icon: <TrainFront size={20} />, color: "from-purple-400 to-fuchsia-500" },
  { name: "pesawat", label: "Pesawat", icon: <Plane size={20} />, color: "from-cyan-400 to-blue-500" },
  { name: "kapal", label: "Kapal", icon: <Ship size={20} />, color: "from-orange-400 to-red-500" }
];


  const getFacilityIcon = (facility) => {
    const icons = {
      wifi: <Wifi className="w-4 h-4" />,
      meal: "🍽",
      entertainment: "📺",
      baggage: "🧳",
      ac: "❄",
      comfortable: "🛏",
      reclining: "🪑",
      gps: <Navigation className="w-4 h-4" />,
      accessible: "♿"
    };
    return icons[facility] || "✨";
  };

  const getStarRating = (stars) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(stars) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const filteredData = activeCategory === 'semua' 
    ? transportData[activeTab] 
    : transportData[activeTab]?.filter(item => item.category.toLowerCase() === activeCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      'Pesawat': <Plane className="w-5 h-5" />,
      'Kereta': <Train className="w-5 h-5" />,
      'Bus': <Bus className="w-5 h-5" />,
      'Mobil': <Car className="w-5 h-5" />
    };
    return icons[category] || <Car className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <div className="w-full bg-gradient-to-b from-[#3A8DFF] to-[#1E5EDB] pt-6 pb-20 px-4 text-center rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <ArrowLeft className="w-6 h-6 text-white cursor-pointer" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Car className="w-6 h-6 text-[#3A8DFF]" />
            </div>
            <h1 className="text-white text-xl font-bold">TravelKu Transport</h1>
          </div>
          <div className="w-6 h-6"></div>
        </div>
        
        <p className="text-blue-100 text-sm mb-4">Pilih kendaraan terbaik untuk perjalanan Anda</p>
      </div>

      {/* Search Card */}
      <div className="relative z-10 -mt-16 mb-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-6 mx-auto w-[90%] max-w-md shadow-xl">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari rute perjalanan..."
              className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition-all"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#3A8DFF] cursor-pointer hover:text-[#1E5EDB] transition-colors" />
          </div>
          
          {/* Quick Booking Info */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-600 mb-1">Dari</div>
              <div className="text-sm font-bold text-gray-800">Jakarta</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-600 mb-1">Ke</div>
              <div className="text-sm font-bold text-gray-800">Bali</div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-[#3A8DFF]">500+</div>
              <div className="text-xs text-gray-600">Rute</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">4.7★</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">100K+</div>
              <div className="text-xs text-gray-600">Tiket</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
     <div className="px-4 mb-6">
  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
      Jenis Transportasi
    </h3>
    <div className="flex overflow-x-auto space-x-4 pb-2 snap-x snap-mandatory scroll-smooth">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(category.name)}
          className={`flex-shrink-0 w-40 h-16 rounded-xl flex items-center px-4 transition-all duration-300 snap-start ${
            activeCategory === category.name
              ? 'bg-[#E6F0FF] ring-2 ring-[#3A8DFF] text-[#3A8DFF]'
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
                  ? 'bg-gradient-to-r from-[#3A8DFF] to-[#1E5EDB] text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Transport Cards */}
      <div className="px-4 space-y-6 pb-20">
        {filteredData?.map((transport, index) => (
          <div key={transport.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative">
              <img
                src={transport.image}
                alt={transport.name}
                className="w-full h-56 object-cover"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  {getCategoryIcon(transport.category)}
                  <span className="text-xs font-semibold text-gray-800">{transport.category}</span>
                </div>
                {transport.isHot && (
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🔥 PROMO
                  </span>
                )}
                {transport.isNew && (
                  <span className="bg-gradient-to-r from-[#3A8DFF] to-[#1E5EDB] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ✨ BARU
                  </span>
                )}
                {typeof transport.seatsLeft === 'number' && transport.seatsLeft <= 10 && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⚡ {transport.seatsLeft} kursi tersisa
                  </span>
                )}
              </div>
              
              <button
                onClick={() => toggleFavorite(transport.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    favorites.has(transport.id) ? 'text-red-500 fill-red-500' : 'text-gray-600 hover:text-red-400'
                  }`}
                />
              </button>
              
              {/* Class Badge */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs text-white font-medium">{transport.class}</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">{transport.duration}</span>
                </div>
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-white font-medium">Verified</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{transport.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#3A8DFF]" />
                    <span className="text-sm text-gray-600 font-medium">{transport.route}</span>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-500">Berangkat:</span>
                      <span className="text-sm font-semibold text-gray-800">{transport.departure}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-500">Tiba:</span>
                      <span className="text-sm font-semibold text-gray-800">{transport.arrival}</span>
                    </div>
                  </div>
                  
                  {/* Facilities */}
                  <div className="flex flex-wrap gap-2">
                    {transport.facilities.slice(0, 4).map((facility, idx) => (
                      <div key={idx} className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                        <span className="text-xs mr-1">{typeof getFacilityIcon(facility) === 'string' ? getFacilityIcon(facility) : ''}</span>
                        {typeof getFacilityIcon(facility) !== 'string' && getFacilityIcon(facility)}
                        <span className="text-xs text-gray-600 ml-1 capitalize">{facility}</span>
                      </div>
                    ))}
                    {transport.facilities.length > 4 && (
                      <div className="flex items-center bg-blue-100 rounded-lg px-2 py-1">
                        <span className="text-xs text-[#3A8DFF] font-medium">+{transport.facilities.length - 4} lainnya</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-[#3A8DFF]">{transport.price}</p>
                  <p className="text-xs text-gray-500">per orang</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-gray-800">{transport.rating}</span>
                    <span className="text-sm text-gray-500">({transport.reviews} ulasan)</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                    Detail
                  </button>
                  <button className="bg-gradient-to-r from-[#3A8DFF] to-[#1E5EDB] text-white px-6 py-2 rounded-xl text-sm font-bold hover:from-[#2979FF] hover:to-[#1565C0] hover:shadow-lg transform hover:scale-105 transition-all duration-200">
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
        <button className="w-16 h-16 bg-gradient-to-r from-[#3A8DFF] to-[#1E5EDB] rounded-full shadow-2xl flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300">
          <Navigation className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
};

export default TransportPage;