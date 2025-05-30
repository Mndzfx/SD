import React, { useState } from 'react';
import {
  CalendarCheck2,
  Music,
  Palette,
  Mic2,
  Ticket,
  Landmark,
  PartyPopper,
   Search, MapPin, Star, Heart, Filter, ArrowLeft, Camera, Users, Clock, Calendar, Wifi, Coffee, Award, TrendingUp, Zap, Gamepad2, BookOpen, Utensils, ShoppingBag, CheckCircle, Eye, Share2 
} from "lucide-react";


const EventPage = () => {
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

  const eventData = {
    populer: [
      {
        id: 1,
        name: "Java Jazz Festival 2025",
        venue: "JIExpo Kemayoran",
        location: "Jakarta",
        rating: 4.9,
        reviews: 5432,
        price: "Rp 850.000",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
        category: "Musik",
        date: "15-17 Jun 2025",
        time: "19:00 - 23:00",
        isHot: true,
        organizer: "Java Festival Production",
        capacity: 15000,
        facilities: ["parking", "food", "merchandise", "security"],
        ticketsLeft: 250,
        duration: "3 hari"
      },
      {
        id: 2,
        name: "Jakarta Food Festival",
        venue: "Gelora Bung Karno",
        location: "Jakarta Pusat",
        rating: 4.7,
        reviews: 3876,
        price: "Rp 75.000",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
        category: "Kuliner",
        date: "22-24 Jun 2025",
        time: "10:00 - 22:00",
        isNew: true,
        organizer: "Jakarta Food Community",
        capacity: 8000,
        facilities: ["parking", "family", "halal", "wheelchair"],
        ticketsLeft: 450,
        duration: "3 hari"
      },
      {
        id: 3,
        name: "Indonesia Comic Con",
        venue: "Indonesia Convention Exhibition",
        location: "BSD, Tangerang",
        rating: 4.8,
        reviews: 2987,
        price: "Rp 150.000",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
        category: "Hiburan",
        date: "05-07 Jul 2025",
        time: "09:00 - 18:00",
        organizer: "Reed Panorama Events",
        capacity: 12000,
        facilities: ["cosplay", "gaming", "merchandise", "photo"],
        ticketsLeft: 800,
        duration: "3 hari"
      },
      {
        id: 4,
        name: "TEDx Jakarta",
        venue: "Ciputra Artpreneur Theater",
        location: "Jakarta Selatan",
        rating: 4.6,
        reviews: 1543,
        price: "Rp 300.000",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop",
        category: "Edukasi",
        date: "28 Jun 2025",
        time: "14:00 - 18:00",
        isHot: true,
        organizer: "TEDx Jakarta Team",
        capacity: 800,
        facilities: ["networking", "certificate", "snacks", "recording"],
        ticketsLeft: 45,
        duration: "4 jam"
      }
    ],
    terbaru: [
      {
        id: 5,
        name: "Startup Grind Conference",
        venue: "Ritz Carlton Ballroom",
        location: "Jakarta",
        rating: 4.5,
        reviews: 876,
        price: "Rp 500.000",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
        category: "Bisnis",
        date: "12 Jul 2025",
        time: "08:00 - 17:00",
        isNew: true,
        organizer: "Startup Grind Jakarta",
        capacity: 500,
        facilities: ["networking", "lunch", "certificate", "wifi"],
        ticketsLeft: 120,
        duration: "9 jam"
      },
      {
        id: 6,
        name: "Wonderland Music Festival",
        venue: "Ancol Beach City",
        location: "Jakarta Utara",
        rating: 4.4,
        reviews: 2134,
        price: "Rp 650.000",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=250&fit=crop",
        category: "Musik",
        date: "20-21 Jul 2025",
        time: "16:00 - 02:00",
        isNew: true,
        organizer: "Wonderland Productions",
        capacity: 10000,
        facilities: ["camping", "food", "merchandise", "shuttle"],
        ticketsLeft: 350,
        duration: "2 hari"
      }
    ],
    terdekat: [
      {
        id: 7,
        name: "Pasar Malam Ramadan",
        venue: "Lapangan Banteng",
        location: "Jakarta Pusat",
        rating: 4.3,
        reviews: 4321,
        price: "Gratis",
        image: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=400&h=250&fit=crop",
        category: "Kuliner",
        date: "Setiap Hari",
        time: "17:00 - 24:00",
        organizer: "Pemda DKI Jakarta",
        capacity: 5000,
        facilities: ["family", "halal", "prayer", "parking"],
        ticketsLeft: "Unlimited",
        duration: "7 jam"
      },
      {
        id: 8,
        name: "Weekend Market PIK",
        venue: "Pantai Indah Kapuk",
        location: "Jakarta Utara",
        rating: 4.4,
        reviews: 2876,
        price: "Rp 25.000",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
        category: "Shopping",
        date: "Sabtu-Minggu",
        time: "15:00 - 22:00",
        organizer: "PIK Market Management",
        capacity: 3000,
        facilities: ["family", "food", "entertainment", "parking"],
        ticketsLeft: "Available",
        duration: "7 jam"
      }
    ]
  };

const categories = [
  { name: "semua", label: "Semua", icon: <CalendarCheck2 size={20} />, color: "from-blue-400 to-indigo-500" },
  { name: "konser", label: "Konser", icon: <Music size={20} />, color: "from-pink-400 to-rose-500" },
  { name: "seni", label: "Seni", icon: <Palette size={20} />, color: "from-purple-400 to-fuchsia-500" },
  { name: "teater", label: "Teater", icon: <Mic2 size={20} />, color: "from-yellow-400 to-orange-500" },
  { name: "festival", label: "Festival", icon: <PartyPopper size={20} />, color: "from-green-400 to-emerald-500" },
  { name: "budaya", label: "Budaya", icon: <Landmark size={20} />, color: "from-cyan-400 to-blue-500" },
  { name: "tiket", label: "Tiket", icon: <Ticket size={20} />, color: "from-red-400 to-pink-500" }
];


  const getFacilityIcon = (facility) => {
    const icons = {
      parking: "🚗",
      food: "🍽",
      merchandise: "🛍",
      security: "🛡",
      family: "👨‍👩‍👧‍👦",
      halal: "🥘",
      wheelchair: "♿",
      cosplay: "🎭",
      gaming: <Gamepad2 className="w-4 h-4" />,
      photo: <Camera className="w-4 h-4" />,
      networking: "🤝",
      certificate: "📜",
      snacks: "🍪",
      recording: "📹",
      lunch: "🍱",
      wifi: <Wifi className="w-4 h-4" />,
      camping: "⛺",
      shuttle: "🚌",
      prayer: "🕌",
      entertainment: "🎪"
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
    ? eventData[activeTab] 
    : eventData[activeTab]?.filter(item => item.category.toLowerCase() === activeCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      'Musik': <Music className="w-5 h-5" />,
      'Kuliner': <Utensils className="w-5 h-5" />,
      'Hiburan': <PartyPopper className="w-5 h-5" />,
      'Edukasi': <BookOpen className="w-5 h-5" />,
      'Bisnis': <Users className="w-5 h-5" />,
      'Shopping': <ShoppingBag className="w-5 h-5" />
    };
    return icons[category] || <PartyPopper className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <div className="w-full bg-gradient-to-b from-[#3A8DFF] to-[#1E5EDB] pt-6 pb-20 px-4 text-center rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <ArrowLeft className="w-6 h-6 text-white cursor-pointer" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <PartyPopper className="w-6 h-6 text-[#3A8DFF]" />
            </div>
            <h1 className="text-white text-xl font-bold">EventKu</h1>
          </div>
          <div className="w-6 h-6"></div>
        </div>
        
        <p className="text-blue-100 text-sm mb-4">Temukan event menarik di sekitar Anda</p>
      </div>

      {/* Search Card */}
      <div className="relative z-10 -mt-16 mb-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-6 mx-auto w-[90%] max-w-md shadow-xl">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari event favorit Anda..."
              className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition-all"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#3A8DFF] cursor-pointer hover:text-[#1E5EDB] transition-colors" />
          </div>
          
          {/* Quick Booking Info */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-600 mb-1">Tanggal</div>
              <div className="text-sm font-bold text-gray-800">29 Mei 2025</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-600 mb-1">Lokasi</div>
              <div className="text-sm font-bold text-gray-800">Jakarta</div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-[#3A8DFF]">800+</div>
              <div className="text-xs text-gray-600">Event</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[#1E5EDB]">4.6★</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">200K+</div>
              <div className="text-xs text-gray-600">Pengunjung</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mb-6">
  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
       Kategori Event
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

      {/* Enhanced Event Cards */}
      <div className="px-4 space-y-6 pb-20">
        {filteredData?.map((event, index) => (
          <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-56 object-cover"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  {getCategoryIcon(event.category)}
                  <span className="text-xs font-semibold text-gray-800">{event.category}</span>
                </div>
                {event.isHot && (
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🔥 TRENDING
                  </span>
                )}
                {event.isNew && (
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ✨ BARU
                  </span>
                )}
                {typeof event.ticketsLeft === 'number' && event.ticketsLeft <= 100 && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⚡ {event.ticketsLeft} tiket tersisa
                  </span>
                )}
              </div>
              
              <button
                onClick={() => toggleFavorite(event.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    favorites.has(event.id) ? 'text-red-500 fill-red-500' : 'text-gray-600 hover:text-red-400'
                  }`}
                />
              </button>
              
              {/* Date Badge */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-xl px-3 py-2">
                  <div className="text-center">
                    <div className="text-xs text-white font-medium">{event.date}</div>
                    <div className="text-xs text-gray-300">{event.duration}</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Users className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">{event.capacity.toLocaleString()}</span>
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
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{event.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#3A8DFF]" />
                    <span className="text-sm text-gray-600 font-medium">{event.venue}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-500">by</span>
                      <span className="text-sm font-semibold text-gray-800">{event.organizer}</span>
                    </div>
                  </div>
                  
                  {/* Facilities */}
                  <div className="flex flex-wrap gap-2">
                    {event.facilities.slice(0, 4).map((facility, idx) => (
                      <div key={idx} className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                        <span className="text-xs mr-1">{typeof getFacilityIcon(facility) === 'string' ? getFacilityIcon(facility) : ''}</span>
                        {typeof getFacilityIcon(facility) !== 'string' && getFacilityIcon(facility)}
                        <span className="text-xs text-gray-600 ml-1 capitalize">{facility}</span>
                      </div>
                    ))}
                    {event.facilities.length > 4 && (
                      <div className="flex items-center bg-blue-100 rounded-lg px-2 py-1">
                        <span className="text-xs text-[#1E5EDB] font-medium">+{event.facilities.length - 4} lainnya</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-[#3A8DFF]">{event.price}</p>
                  <p className="text-xs text-gray-500">per tiket</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-gray-800">{event.rating}</span>
                    <span className="text-sm text-gray-500">({event.reviews} ulasan)</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-1">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button className="bg-gradient-to-r from-[#3A8DFF] to-[#1E5EDB] text-white px-6 py-2 rounded-xl text-sm font-bold hover:from-[#2A7BFF] hover:to-[#164ED1] hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-1">
                    <Ticket className="w-4 h-4" />
                    Beli Tiket
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
          <Calendar className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
};

export default EventPage;