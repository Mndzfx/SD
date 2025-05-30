import React, { useState } from 'react';
import {

  
  Building2,
  Landmark,
  TentTree,
  Hotel,
  Search, MapPin, Star, Heart, Filter, ArrowLeft, Camera, Users, Clock, Calendar, Wifi, Coffee, Award, TrendingUp, Zap, Home, Building, TreePine, Car, CheckCircle, Eye, Share2, Bed, Bath, Phone, Mail 
} from "lucide-react";


const AccommodationPage = () => {
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

  const accommodationData = {
    populer: [
      {
        id: 1,
        name: "Grand Indonesia Hotel",
        address: "Jl. Thamrin No. 1",
        location: "Jakarta Pusat",
        rating: 4.9,
        reviews: 3421,
        price: "Rp 1.250.000",
        originalPrice: "Rp 1.500.000",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=250&fit=crop",
        category: "Hotel",
        rooms: 25,
        bedrooms: 1,
        bathrooms: 1,
        maxGuests: 2,
        isHot: true,
        discount: 17,
        facilities: ["wifi", "parking", "pool", "gym", "restaurant", "spa"],
        description: "Hotel mewah di pusat kota dengan pemandangan skyline Jakarta",
        host: "Grand Indonesia Group",
        checkIn: "14:00",
        checkOut: "12:00"
      },
      {
        id: 2,
        name: "Cozy Apartment Kemang",
        address: "Jl. Kemang Raya No. 45",
        location: "Jakarta Selatan",
        rating: 4.7,
        reviews: 1876,
        price: "Rp 350.000",
        originalPrice: "Rp 450.000",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop",
        category: "Apartemen",
        rooms: 12,
        bedrooms: 2,
        bathrooms: 1,
        maxGuests: 4,
        isNew: true,
        discount: 22,
        facilities: ["wifi", "kitchen", "ac", "tv", "balcony", "security"],
        description: "Apartemen nyaman dengan akses mudah ke berbagai tempat menarik",
        host: "Kemang Properties",
        checkIn: "15:00",
        checkOut: "11:00"
      },
      {
        id: 3,
        name: "Villa Puncak Paradise",
        address: "Jl. Raya Puncak KM 87",
        location: "Bogor, Jawa Barat",
        rating: 4.8,
        reviews: 2187,
        price: "Rp 850.000",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
        category: "Villa",
        rooms: 8,
        bedrooms: 3,
        bathrooms: 2,
        maxGuests: 8,
        facilities: ["wifi", "pool", "bbq", "garden", "kitchen", "parking"],
        description: "Villa ekslusif dengan pemandangan pegunungan yang menawan",
        host: "Puncak Villa Resort",
        checkIn: "14:00",
        checkOut: "12:00"
      },
      {
        id: 4,
        name: "Modern Hostel Bandung",
        address: "Jl. Braga No. 123",
        location: "Bandung, Jawa Barat",
        rating: 4.6,
        reviews: 1243,
        price: "Rp 125.000",
        originalPrice: "Rp 175.000",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=250&fit=crop",
        category: "Hostel",
        rooms: 30,
        bedrooms: 1,
        bathrooms: 1,
        maxGuests: 1,
        isHot: true,
        discount: 29,
        facilities: ["wifi", "kitchen", "lounge", "laundry", "security", "lockers"],
        description: "Hostel modern dengan suasana yang ramah untuk backpacker",
        host: "Braga Hostel Management",
        checkIn: "15:00",
        checkOut: "11:00"
      }
    ],
    terbaru: [
      {
        id: 5,
        name: "Boutique Hotel Menteng",
        address: "Jl. Menteng Raya No. 88",
        location: "Jakarta Pusat",
        rating: 4.5,
        reviews: 876,
        price: "Rp 750.000",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop",
        category: "Hotel",
        rooms: 15,
        bedrooms: 1,
        bathrooms: 1,
        maxGuests: 2,
        isNew: true,
        facilities: ["wifi", "restaurant", "concierge", "spa", "parking", "gym"],
        description: "Hotel butik dengan desain klasik dan pelayanan premium",
        host: "Menteng Hospitality",
        checkIn: "14:00",
        checkOut: "12:00"
      },
      {
        id: 6,
        name: "Beachfront Villa Anyer",
        address: "Pantai Anyer, Serang",
        location: "Banten",
        rating: 4.4,
        reviews: 1134,
        price: "Rp 1.200.000",
        originalPrice: "Rp 1.400.000",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop",
        category: "Villa",
        rooms: 6,
        bedrooms: 4,
        bathrooms: 3,
        maxGuests: 10,
        isNew: true,
        discount: 14,
        facilities: ["wifi", "pool", "beach", "bbq", "kitchen", "parking"],
        description: "Villa tepi pantai dengan akses langsung ke pantai pribadi",
        host: "Anyer Beach Resort",
        checkIn: "15:00",
        checkOut: "11:00"
      }
    ],
    terdekat: [
      {
        id: 7,
        name: "Guest House Kebon Jeruk",
        address: "Jl. Kebon Jeruk Raya No. 15",
        location: "Jakarta Barat",
        rating: 4.3,
        reviews: 921,
        price: "Rp 200.000",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
        category: "Guest House",
        rooms: 18,
        bedrooms: 1,
        bathrooms: 1,
        maxGuests: 2,
        facilities: ["wifi", "ac", "tv", "parking", "breakfast", "laundry"],
        description: "Guest house nyaman dengan fasilitas lengkap dan harga terjangkau",
        host: "Kebon Jeruk Inn",
        checkIn: "14:00",
        checkOut: "12:00"
      },
      {
        id: 8,
        name: "Studio Apartment Kelapa Gading",
        address: "Mall of Indonesia, Kelapa Gading",
        location: "Jakarta Utara",
        rating: 4.4,
        reviews: 1576,
        price: "Rp 400.000",
        originalPrice: "Rp 500.000",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=250&fit=crop",
        category: "Apartemen",
        rooms: 20,
        bedrooms: 1,
        bathrooms: 1,
        maxGuests: 2,
        discount: 20,
        facilities: ["wifi", "kitchen", "mall", "pool", "gym", "security"],
        description: "Studio apartment modern dengan akses langsung ke mall",
        host: "MOI Residence",
        checkIn: "15:00",
        checkOut: "11:00"
      }
    ]
  };

const categories = [
  { name: "semua", label: "Semua", icon: <Home size={20} />, color: "from-sky-400 to-blue-500" },
  { name: "hotel", label: "Hotel", icon: <Hotel size={20} />, color: "from-teal-400 to-cyan-500" },
  { name: "villa", label: "Villa", icon: <Building2 size={20} />, color: "from-purple-400 to-indigo-500" },
  { name: "penginapan", label: "Penginapan", icon: <Bed size={20} />, color: "from-pink-400 to-rose-500" },
  { name: "homestay", label: "Homestay", icon: <Landmark size={20} />, color: "from-green-400 to-emerald-500" },
  { name: "camping", label: "Camping", icon: <TentTree size={20} />, color: "from-yellow-400 to-amber-500" }
];


  const getFacilityIcon = (facility) => {
    const icons = {
      wifi: <Wifi className="w-4 h-4" />,
      parking: "🚗",
      pool: "🏊‍♂",
      gym: "🏋‍♂",
      restaurant: "🍽",
      spa: "💆‍♀",
      kitchen: "👨‍🍳",
      ac: "❄",
      tv: "📺",
      balcony: "🌅",
      security: "🛡",
      bbq: "🔥",
      garden: "🌿",
      beach: "🏖",
      breakfast: "🥐",
      laundry: "👕",
      concierge: "🛎",
      lounge: "🛋",
      lockers: "🔒",
      mall: "🛍"
    };
    return icons[facility] || "✨";
  };

  const filteredData = activeCategory === 'semua' 
    ? accommodationData[activeTab] 
    : accommodationData[activeTab]?.filter(item => item.category.toLowerCase() === activeCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      'Hotel': <Building className="w-5 h-5" />,
      'Apartemen': <Building className="w-5 h-5" />,
      'Villa': <Home className="w-5 h-5" />,
      'Hostel': <Bed className="w-5 h-5" />,
      'Guest House': <Home className="w-5 h-5" />
    };
    return icons[category] || <Home className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <div className="w-full bg-gradient-to-b from-[#7B4EFF] to-[#5A2EDB] pt-6 pb-20 px-4 text-center rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <ArrowLeft className="w-6 h-6 text-white cursor-pointer" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-[#7B4EFF]" />
            </div>
            <h1 className="text-white text-xl font-bold">StayKu</h1>
          </div>
          <div className="w-6 h-6"></div>
        </div>
        
        <p className="text-blue-100 text-sm mb-4">Temukan akomodasi terbaik untuk liburan Anda</p>
      </div>

      {/* Search Card */}
      <div className="relative z-10 -mt-16 mb-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-6 mx-auto w-[90%] max-w-md shadow-xl">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari akomodasi impian Anda..."
              className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition-all"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#3A8DFF] cursor-pointer hover:text-[#1E5EDB] transition-colors" />
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
              <div className="text-lg font-bold text-[#3A8DFF]">500+</div>
              <div className="text-xs text-gray-600">Property</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[#1E5EDB]">4.7★</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">50K+</div>
              <div className="text-xs text-gray-600">Tamu</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
   <div className="px-4 mb-6">
  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
     Jenis Akomodasi
    </h3>
    <div className="flex overflow-x-auto space-x-4 pb-2 snap-x snap-mandatory scroll-smooth">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(category.name)}
          className={`flex-shrink-0 w-44 h-16 rounded-xl flex items-center px-4 transition-all duration-300 snap-start ${
            activeCategory === category.name
              ? 'bg-[#EFF6FF] ring-2 ring-blue-300 text-blue-600'
              : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
          }`}
        >
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-md mr-3`}>
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

      {/* Enhanced Accommodation Cards */}
      <div className="px-4 space-y-6 pb-20">
        {filteredData?.map((accommodation, index) => (
          <div key={accommodation.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative">
              <img
                src={accommodation.image}
                alt={accommodation.name}
                className="w-full h-56 object-cover"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  {getCategoryIcon(accommodation.category)}
                  <span className="text-xs font-semibold text-gray-800">{accommodation.category}</span>
                </div>
                {accommodation.isHot && (
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🔥 TRENDING
                  </span>
                )}
                {accommodation.isNew && (
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ✨ BARU
                  </span>
                )}
                {accommodation.discount && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    💰 {accommodation.discount}% OFF
                  </span>
                )}
              </div>
              
              <button
                onClick={() => toggleFavorite(accommodation.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    favorites.has(accommodation.id) ? 'text-red-500 fill-red-500' : 'text-gray-600 hover:text-red-400'
                  }`}
                />
              </button>
              
              {/* Room Info */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-xl px-3 py-2">
                  <div className="flex items-center gap-3 text-white text-xs">
                    <div className="flex items-center gap-1">
                      <Bed className="w-3 h-3" />
                      <span>{accommodation.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-3 h-3" />
                      <span>{accommodation.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{accommodation.maxGuests}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <span className="text-xs text-white font-medium">{accommodation.rooms} kamar</span>
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
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{accommodation.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#3A8DFF]" />
                    <span className="text-sm text-gray-600 font-medium">{accommodation.address}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-3">{accommodation.location}</div>
                  
                  <p className="text-sm text-gray-600 mb-3">{accommodation.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Check-in: {accommodation.checkIn}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-500">Host: {accommodation.host}</span>
                    </div>
                  </div>
                  
                  {/* Facilities */}
                  <div className="flex flex-wrap gap-2">
                    {accommodation.facilities.slice(0, 4).map((facility, idx) => (
                      <div key={idx} className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                        <span className="text-xs mr-1">{typeof getFacilityIcon(facility) === 'string' ? getFacilityIcon(facility) : ''}</span>
                        {typeof getFacilityIcon(facility) !== 'string' && getFacilityIcon(facility)}
                        <span className="text-xs text-gray-600 ml-1 capitalize">{facility}</span>
                      </div>
                    ))}
                    {accommodation.facilities.length > 4 && (
                      <div className="flex items-center bg-blue-100 rounded-lg px-2 py-1">
                        <span className="text-xs text-[#1E5EDB] font-medium">+{accommodation.facilities.length - 4} lainnya</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex flex-col items-end">
                    {accommodation.originalPrice && (
                      <p className="text-sm text-gray-400 line-through">{accommodation.originalPrice}</p>
                    )}
                    <p className="font-bold text-xl text-[#3A8DFF]">{accommodation.price}</p>
                    <p className="text-xs text-gray-500">per malam</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-gray-800">{accommodation.rating}</span>
                    <span className="text-sm text-gray-500">({accommodation.reviews} ulasan)</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-1">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button className="bg-gradient-to-r from-[#3A8DFF] to-[#1E5EDB] text-white px-6 py-2 rounded-xl text-sm font-bold hover:from-[#2A7BFF] hover:to-[#164ED1] hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Pesan Sekarang
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
          <MapPin className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
};

export default AccommodationPage;