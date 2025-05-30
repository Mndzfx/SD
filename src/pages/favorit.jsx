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
      stars.push(<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />);
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
      {/* Container with responsive width - Full width on desktop */}
      <div className="max-w-sm mx-auto lg:max-w-none lg:w-full">
        {/* Blue Section */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 pb-10 lg:pb-16 rounded-b-3xl lg:rounded-b-2xl">
          {/* Header */}
          <div className="flex items-center p-6 lg:p-8 text-white">
           
            <div className="text-xl lg:text-3xl font-semibold flex-1">Favorit Saya</div>
            <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white bg-opacity-20 border-none text-white cursor-pointer flex items-center justify-center hover:bg-opacity-30 transition-all">
              <Zap size={16} className="lg:w-5 lg:h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="px-6 lg:px-8 pb-5">
            <div className="flex gap-2 lg:gap-4 flex-wrap lg:justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`relative px-4 py-2.5 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-medium cursor-pointer transition-all duration-200 ${
                    activeTab === tab.name
                      ? 'bg-white text-blue-500'
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                  }`}
                >
                  {tab.name}
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-4 text-center leading-none">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:px-12 lg:py-10 bg-gray-100 rounded-t-3xl lg:rounded-none -mt-6 lg:mt-0 relative z-10">
          {/* Desktop Layout */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-12">
            {/* Left Column - Stats and Quick Actions (Desktop) */}
            <div className="lg:col-span-4 xl:col-span-3 lg:space-y-8">
              {/* Stats Summary */}
              <div className="bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-8 mb-6 lg:mb-0 shadow-lg">
                <h3 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4 lg:mb-8">Statistik</h3>
                <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-8 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-5">
                    <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-red-400 to-red-500 text-white flex items-center justify-center mb-2 lg:mb-0 lg:flex-shrink-0">
                      <Heart size={18} className="lg:w-8 lg:h-8 fill-current" />
                    </div>
                    <div>
                      <div className="text-lg lg:text-3xl font-bold text-gray-800 mb-1">{favorites.length}</div>
                      <div className="text-xs lg:text-base text-gray-600">Total Favorit</div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-5">
                    <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center mb-2 lg:mb-0 lg:flex-shrink-0">
                      <MapPin size={18} className="lg:w-8 lg:h-8" />
                    </div>
                    <div>
                      <div className="text-lg lg:text-3xl font-bold text-gray-800 mb-1">8</div>
                      <div className="text-xs lg:text-base text-gray-600">Kota</div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-5">
                    <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 text-white flex items-center justify-center mb-2 lg:mb-0 lg:flex-shrink-0">
                      <Wallet size={18} className="lg:w-8 lg:h-8" />
                    </div>
                    <div>
                      <div className="text-lg lg:text-3xl font-bold text-gray-800 mb-1">35%</div>
                      <div className="text-xs lg:text-base text-gray-600">Rata-rata Diskon</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-6 mb-6 lg:mb-0">
                <button 
                  onClick={() => handleQuickAction('wishlist')}
                  className="bg-white border-none rounded-2xl lg:rounded-3xl p-4 lg:p-8 text-center lg:text-left cursor-pointer shadow-lg transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="text-blue-500 mb-2 flex justify-center lg:justify-start lg:mb-4">
                    <Edit3 size={24} className="lg:w-10 lg:h-10" />
                  </div>
                  <div className="text-sm lg:text-xl font-semibold text-gray-800 mb-1 lg:mb-2">Buat Wishlist</div>
                  <div className="text-xs lg:text-base text-gray-600">Kumpulkan favorit dalam list</div>
                </button>
                <button 
                  onClick={() => handleQuickAction('share')}
                  className="bg-white border-none rounded-2xl lg:rounded-3xl p-4 lg:p-8 text-center lg:text-left cursor-pointer shadow-lg transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="text-blue-500 mb-2 flex justify-center lg:justify-start lg:mb-4">
                    <Share2 size={24} className="lg:w-10 lg:h-10" />
                  </div>
                  <div className="text-sm lg:text-xl font-semibold text-gray-800 mb-1 lg:mb-2">Bagikan</div>
                  <div className="text-xs lg:text-base text-gray-600">Share ke teman & keluarga</div>
                </button>
              </div>

              {/* Recent Favorites */}
              <div className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-8 mb-6 lg:mb-0 shadow-lg">
                <div className="flex justify-between items-center mb-4 lg:mb-8">
                  <div className="text-lg lg:text-2xl font-semibold text-gray-800 flex-1">Terakhir Ditambahkan</div>
                  <button className="bg-none border-none text-blue-500 text-sm lg:text-base font-medium cursor-pointer flex items-center gap-1 hover:text-blue-600">
                    Lihat Semua <ChevronRight size={14} className="lg:w-5 lg:h-5" />
                  </button>
                </div>
                
                {recentFavorites.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.id} className={`flex gap-3 lg:gap-5 py-2 lg:py-4 ${index < recentFavorites.length - 1 ? 'border-b border-gray-100' : ''}`}>
                      <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0`}>
                        <IconComponent size={20} className="lg:w-8 lg:h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm lg:text-lg font-semibold text-gray-800 mb-0.5 lg:mb-1">{item.title}</div>
                        <div className="text-xs lg:text-base text-gray-600 mb-1">{item.subtitle}</div>
                        <div className="text-xs lg:text-sm text-gray-400">{item.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Favorites Grid (Desktop) */}
            <div className="lg:col-span-8 xl:col-span-9">
              {/* Section Header */}
              <div className="flex justify-between items-center mb-4 lg:mb-8">
                <div className="text-lg lg:text-3xl font-semibold text-gray-800 flex-1">Semua Favorit</div>
                <button className="bg-none border-none text-blue-500 text-sm lg:text-lg font-medium cursor-pointer flex items-center gap-2 hover:text-blue-600">
                  <Filter size={14} className="lg:w-5 lg:h-5" /> Filter
                </button>
              </div>

              {/* Favorites Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-8 mb-6">
                {filteredFavorites.map((favorite) => {
                  const IconComponent = favorite.icon;
                  return (
                    <div
                      key={favorite.id}
                      className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg transition-transform duration-200 hover:-translate-y-1 cursor-pointer relative"
                    >
                      <div className={`w-full h-30 lg:h-56 xl:h-48 bg-gradient-to-br ${favorite.gradient} flex items-center justify-center text-white relative p-4 lg:p-8`}>
                        <IconComponent size={36} className="lg:w-16 lg:h-16" />
                        <div className="absolute top-3 left-3 lg:top-5 lg:left-5 bg-red-500 text-white px-2 py-1 lg:px-3 lg:py-2 rounded-lg text-xs lg:text-base font-semibold">
                          {favorite.discount}%
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFavorite(favorite.id);
                          }}
                          className="absolute top-3 right-3 lg:top-5 lg:right-5 w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white bg-opacity-90 border-none text-red-500 cursor-pointer flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white"
                        >
                          <Heart size={16} className="lg:w-6 lg:h-6 fill-current" />
                        </button>
                      </div>
                      <div className="p-3 lg:p-6">
                        <div className="text-sm lg:text-xl font-semibold text-gray-800 mb-1 lg:mb-3 line-clamp-2 leading-tight">
                          {favorite.title}
                        </div>
                        <div className="text-xs lg:text-base text-gray-600 mb-2 lg:mb-3 flex items-center gap-1">
                          <MapPin size={12} className="lg:w-4 lg:h-4" /> {favorite.location}
                        </div>
                        <div className="flex items-center gap-1 mb-2 lg:mb-3">
                          <div className="flex gap-0.5">{renderStars(favorite.rating)}</div>
                          <span className="text-xs lg:text-base text-gray-600">({favorite.rating}) • {favorite.reviews} ulasan</span>
                        </div>
                        <div className="text-sm lg:text-xl font-bold text-blue-500">
                          {formatPrice(favorite.price)}
                          <span className="text-xs lg:text-base text-gray-400 line-through ml-1">
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
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => alert('Tambah ke favorit dari pencarian...')}
        className="fixed bottom-6 right-6 lg:bottom-12 lg:right-12 w-14 h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-full border-none text-white cursor-pointer shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <Plus size={24} className="lg:w-8 lg:h-8" />
      </button>
       <Navbar />
    </div>
  );
};

export default FavoritesPage;