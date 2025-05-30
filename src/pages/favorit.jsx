import { useState } from 'react';
import { 
  ArrowLeft, 
  Zap, 
  Heart, 
  MapPin, 
  Star, 
  Plus,
  Edit3,
  Share2,
  Filter,
  ChevronRight,
  Hotel,
  Mountain,
  UtensilsCrossed,
  Building2,
  Landmark,
  Wallet
} from 'lucide-react';
import Navbar from '../components/navbar';

const FavoritesPage = () => {
  const [activeTab, setActiveTab] = useState('Semua');
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Hotel Coral Yogyakarta",
      location: "Yogyakarta",
      rating: 4.8,
      reviews: 127,
      price: 420000,
      originalPrice: 600000,
      discount: 30,
      category: "Hotel",
      icon: Hotel,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 2,
      title: "Mataram Suites Bandung",
      location: "Bandung",
      rating: 4.7,
      reviews: 89,
      price: 350000,
      originalPrice: 465000,
      discount: 25,
      category: "Hotel",
      icon: Building2,
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Paket Wisata Bromo",
      location: "Malang, Jawa Timur",
      rating: 4.9,
      reviews: 234,
      price: 750000,
      originalPrice: 1250000,
      discount: 40,
      category: "Wisata",
      icon: Mountain,
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      id: 4,
      title: "Trip Pulau Seribu",
      location: "Jakarta",
      rating: 4.6,
      reviews: 156,
      price: 325000,
      originalPrice: 500000,
      discount: 35,
      category: "Wisata",
      icon: Landmark,
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      id: 5,
      title: "Paket Kuliner Jakarta",
      location: "Jakarta",
      rating: 4.5,
      reviews: 98,
      price: 200000,
      originalPrice: 250000,
      discount: 20,
      category: "Kuliner",
      icon: UtensilsCrossed,
      gradient: "from-red-500 to-red-600"
    },
    {
      id: 6,
      title: "Grand Hyatt Jakarta",
      location: "Jakarta Pusat",
      rating: 4.8,
      reviews: 312,
      price: 1275000,
      originalPrice: 1500000,
      discount: 15,
      category: "Hotel",
      icon: Hotel,
      gradient: "from-purple-500 to-purple-600"
    }
  ]);

  const [recentFavorites] = useState([
    {
      id: 1,
      title: "Hotel Santika Premiere",
      subtitle: "Jakarta Pusat",
      time: "2 jam lalu",
      icon: Hotel,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 2,
      title: "Gunung Rinjani Trek",
      subtitle: "Lombok, NTB",
      time: "1 hari lalu",
      icon: Mountain,
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      id: 3,
      title: "Sate Khas Senayan",
      subtitle: "Jakarta Selatan",
      time: "3 hari lalu",
      icon: UtensilsCrossed,
      gradient: "from-red-500 to-red-600"
    }
  ]);

  const tabs = [
    { name: 'Semua', count: favorites.length },
    { name: 'Hotel', count: favorites.filter(f => f.category === 'Hotel').length },
    { name: 'Wisata', count: favorites.filter(f => f.category === 'Wisata').length },
    { name: 'Kuliner', count: favorites.filter(f => f.category === 'Kuliner').length }
  ];

  const filteredFavorites = activeTab === 'Semua' 
    ? favorites 
    : favorites.filter(fav => fav.category === activeTab);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />);
    }
    return stars;
  };

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };

  const handleQuickAction = (action) => {
    switch(action) {
      case 'wishlist':
        alert('Membuka halaman buat wishlist...');
        break;
      case 'share':
        alert('Membuka opsi berbagi...');
        break;
    }
  };

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
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold flex-1">Favorit Saya</div>
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
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`relative px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 xl:px-8 xl:py-4 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.name
                      ? 'bg-white text-blue-500'
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                  }`}
                >
                  {tab.name}
                  
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 bg-gray-100 rounded-t-3xl -mt-6 relative z-10">
        {/* Desktop Layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Left Column - Stats and Quick Actions (Desktop) */}
          <div className="lg:col-span-4 xl:col-span-3 lg:space-y-6 xl:space-y-8">
            {/* Stats Summary */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 lg:p-6 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-0 shadow-lg">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8">Statistik</h3>
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-3 xl:gap-5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br from-red-400 to-red-500 text-white flex items-center justify-center mb-1 sm:mb-1.5 md:mb-2 lg:mb-0 lg:flex-shrink-0">
                    <Heart size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 fill-current" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-0.5 md:mb-1 lg:mb-1">{favorites.length}</div>
                    <div className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base text-gray-600">Total Favorit</div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-3 xl:gap-5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center mb-1 sm:mb-1.5 md:mb-2 lg:mb-0 lg:flex-shrink-0">
                    <MapPin size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-0.5 md:mb-1 lg:mb-1">8</div>
                    <div className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base text-gray-600">Kota</div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-3 xl:gap-5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 text-white flex items-center justify-center mb-1 sm:mb-1.5 md:mb-2 lg:mb-0 lg:flex-shrink-0">
                    <Wallet size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-0.5 md:mb-1 lg:mb-1">35%</div>
                    <div className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base text-gray-600">Rata-rata Diskon</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-6 mb-4 sm:mb-5 md:mb-6 lg:mb-0">
              <button 
                onClick={() => handleQuickAction('wishlist')}
                className="bg-white border-none rounded-2xl p-3 sm:p-4 md:p-5 lg:p-5 xl:p-8 text-center lg:text-left cursor-pointer shadow-lg transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="text-blue-500 mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-4 flex justify-center lg:justify-start">
                  <Edit3 size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl font-semibold text-gray-800 mb-0.5 sm:mb-0.5 md:mb-1 lg:mb-1 xl:mb-2">Buat Wishlist</div>
                <div className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base text-gray-600">Kumpulkan favorit dalam list</div>
              </button>
              <button 
                onClick={() => handleQuickAction('share')}
                className="bg-white border-none rounded-2xl p-3 sm:p-4 md:p-5 lg:p-5 xl:p-8 text-center lg:text-left cursor-pointer shadow-lg transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="text-blue-500 mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-4 flex justify-center lg:justify-start">
                  <Share2 size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl font-semibold text-gray-800 mb-0.5 sm:mb-0.5 md:mb-1 lg:mb-1 xl:mb-2">Bagikan</div>
                <div className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base text-gray-600">Share ke teman & keluarga</div>
              </button>
            </div>

            {/* Recent Favorites */}
            <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-5 lg:p-5 xl:p-8 mb-4 sm:mb-5 md:mb-6 lg:mb-0 shadow-lg">
              <div className="flex justify-between items-center mb-3 sm:mb-4 md:mb-5 lg:mb-5 xl:mb-8">
                <div className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-semibold text-gray-800 flex-1">Terakhir Ditambahkan</div>
                <button className="bg-none border-none text-blue-500 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base font-medium cursor-pointer flex items-center gap-1 hover:text-blue-600">
                  Lihat Semua <ChevronRight size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                </button>
              </div>
              
              {recentFavorites.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className={`flex gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-5 py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-4 ${index < recentFavorites.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0`}>
                      <IconComponent size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-lg font-semibold text-gray-800 mb-0.5 sm:mb-0.5 md:mb-1 lg:mb-0.5 xl:mb-1">{item.title}</div>
                      <div className="text-xs sm:text-xs md:text-sm lg:text-xs xl:text-base text-gray-600 mb-0.5 sm:mb-0.5 md:mb-1 lg:mb-0.5 xl:mb-1">{item.subtitle}</div>
                      <div className="text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm text-gray-400">{item.time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Favorites Grid (Desktop) */}
          <div className="lg:col-span-8 xl:col-span-9">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-8">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 flex-1">Semua Favorit</div>
              <button className="bg-none border-none text-blue-500 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-medium cursor-pointer flex items-center gap-1 sm:gap-2 hover:text-blue-600">
                <Filter size={12} className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" /> Filter
              </button>
            </div>

            {/* Favorites Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 mb-4 sm:mb-5 md:mb-6">
              {filteredFavorites.map((favorite) => {
                const IconComponent = favorite.icon;
                return (
                  <div
                    key={favorite.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-200 hover:-translate-y-1 cursor-pointer relative"
                  >
                    <div className={`w-full h-24 sm:h-28 md:h-32 lg:h-40 xl:h-48 bg-gradient-to-br ${favorite.gradient} flex items-center justify-center text-white relative p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8`}>
                      <IconComponent size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16" />
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-3 md:left-3 lg:top-4 lg:left-4 xl:top-5 xl:left-5 bg-red-500 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-2 md:py-1 lg:px-2.5 lg:py-1 xl:px-3 xl:py-2 rounded-lg text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base font-semibold">
                        {favorite.discount}%
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFavorite(favorite.id);
                        }}
                        className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-3 md:right-3 lg:top-4 lg:right-4 xl:top-5 xl:right-5 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full bg-white bg-opacity-90 border-none text-red-500 cursor-pointer flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white"
                      >
                        <Heart size={12} className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 fill-current" />
                      </button>
                    </div>
                    <div className="p-2 sm:p-3 md:p-4 lg:p-4 xl:p-6">
                      <div className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl font-semibold text-gray-800 mb-1 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-3 line-clamp-2 leading-tight">
                        {favorite.title}
                      </div>
                      <div className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base text-gray-600 mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-3 flex items-center gap-1">
                        <MapPin size={10} className="sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-3 lg:h-3 xl:w-4 xl:h-4" /> {favorite.location}
                      </div>
                      <div className="flex items-center gap-1 mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 xl:mb-3">
                        <div className="flex gap-0.5">{renderStars(favorite.rating)}</div>
                        <span className="text-xs sm:text-xs md:text-sm lg:text-xs xl:text-base text-gray-600">({favorite.rating}) • {favorite.reviews} ulasan</span>
                      </div>
                      <div className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl font-bold text-blue-500">
                        {formatPrice(favorite.price)}
                        <span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base text-gray-400 line-through ml-1">
                          {formatPrice(favorite.originalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom padding for navbar */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24"></div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => alert('Tambah ke favorit dari pencarian...')}
        className="fixed bottom-20 sm:bottom-22 md:bottom-24 lg:bottom-28 right-4 sm:right-5 md:right-6 lg:right-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full border-none text-white cursor-pointer transition-all hover:scale-110 flex items-center justify-center"
        style={{ 
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          boxShadow: '0 8px 24px rgba(239, 68, 68, 0.4)'
        }}
      >
        <Plus size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </button>
      
      <Navbar />
    </div>
  );
};

export default FavoritesPage;