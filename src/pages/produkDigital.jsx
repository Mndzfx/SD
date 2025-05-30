import React, { useState } from 'react';
import {
  Sparkles,


 
  Paintbrush,
  LayoutTemplate,
  LibraryBig,
  Target,
  Search, Star, Heart, Filter, ArrowLeft, Users, Clock, Download, Award, TrendingUp, Zap, Calendar, Smartphone, Code, Camera, Music, BookOpen, Palette, Shield, UserCheck, CheckCircle, Play, FileText, Headphones
} from "lucide-react";


const DigitalProductsPage = () => {
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

  const digitalProductsData = {
    populer: [
      {
        id: 1,
        name: "UI/UX Design System Pro",
        creator: "DesignStudio Co.",
        rating: 4.9,
        reviews: 3241,
        price: "Rp 299.000",
        originalPrice: "Rp 499.000",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        category: "Design",
        type: "Template",
        downloads: "12.5K",
        updateDate: "2 hari lalu",
        isHot: true,
        isNew: false,
        license: "Commercial",
        features: ["100+ Components", "Figma & Sketch", "Documentation", "Lifetime Updates"],
        discount: 40,
        badge: "Bestseller"
      },
      {
        id: 2,
        name: "React Native Course Complete",
        creator: "CodeMaster Academy",
        rating: 4.8,
        reviews: 2876,
        price: "Rp 199.000",
        originalPrice: "Rp 399.000",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
        category: "Kursus",
        type: "Video Course",
        downloads: "8.2K",
        duration: "45 jam",
        isHot: false,
        isNew: true,
        license: "Personal",
        features: ["45 Hours Video", "Source Code", "Certificate", "Live Support"],
        discount: 50,
        badge: "Editor's Choice"
      },
      {
        id: 3,
        name: "Stock Photography Bundle",
        creator: "PhotoPro Studio",
        rating: 4.7,
        reviews: 1943,
        price: "Rp 149.000",
        originalPrice: "Rp 299.000",
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=250&fit=crop",
        category: "Foto",
        type: "Image Pack",
        downloads: "15.7K",
        updateDate: "1 minggu lalu",
        isHot: true,
        isNew: false,
        license: "Commercial",
        features: ["500+ Photos", "High Resolution", "Multiple Formats", "Commercial Use"],
        discount: 50,
        badge: "Premium"
      },
      {
        id: 4,
        name: "Mobile App UI Kit",
        creator: "AppDesign Pro",
        rating: 4.6,
        reviews: 2341,
        price: "Rp 179.000",
        originalPrice: "Rp 299.000",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
        category: "Template",
        type: "UI Kit",
        downloads: "9.8K",
        updateDate: "3 hari lalu",
        isHot: false,
        isNew: true,
        license: "Commercial",
        features: ["50+ Screens", "iOS & Android", "Sketch & Figma", "Free Updates"],
        discount: 40,
        badge: "Trending"
      }
    ],
    terbaru: [
      {
        id: 5,
        name: "AI Prompt Engineering Guide",
        creator: "TechInnovator",
        rating: 4.5,
        reviews: 587,
        price: "Rp 89.000",
        originalPrice: "Rp 149.000",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
        category: "E-book",
        type: "Digital Book",
        downloads: "2.1K",
        updateDate: "Hari ini",
        isHot: false,
        isNew: true,
        license: "Personal",
        features: ["200+ Pages", "PDF Format", "Bonus Templates", "ChatGPT Tips"],
        discount: 40,
        badge: "New Release"
      },
      {
        id: 6,
        name: "Meditation Music Collection",
        creator: "ZenSounds",
        rating: 4.8,
        reviews: 1234,
        price: "Rp 79.000",
        originalPrice: "Rp 129.000",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=250&fit=crop",
        category: "Audio",
        type: "Music Pack",
        downloads: "5.6K",
        duration: "12 jam",
        isHot: false,
        isNew: true,
        license: "Personal",
        features: ["20 Tracks", "High Quality", "Royalty Free", "Meditation Guide"],
        discount: 39,
        badge: "Relaxation"
      }
    ],
    terlaris: [
      {
        id: 7,
        name: "WordPress Theme Bundle",
        creator: "WebMaster Pro",
        rating: 4.7,
        reviews: 4532,
        price: "Rp 249.000",
        originalPrice: "Rp 499.000",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf9d?w=400&h=250&fit=crop",
        category: "Template",
        type: "Website Theme",
        downloads: "25.3K",
        updateDate: "1 minggu lalu",
        isHot: true,
        isNew: false,
        license: "Commercial",
        features: ["10 Premium Themes", "Responsive Design", "Documentation", "Support"],
        discount: 50,
        badge: "Bundle Deal"
      },
      {
        id: 8,
        name: "Digital Marketing Masterclass",
        creator: "MarketingGuru",
        rating: 4.9,
        reviews: 6789,
        price: "Rp 399.000",
        originalPrice: "Rp 799.000",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        category: "Kursus",
        type: "Online Course",
        downloads: "18.9K",
        duration: "60 jam",
        isHot: true,
        isNew: false,
        license: "Personal",
        features: ["60 Hours Content", "Live Sessions", "Certificate", "Community Access"],
        discount: 50,
        badge: "Bestseller"
      }
    ]
  };

  const categories = [
    { name: "semua", label: "Semua", icon: <Target />, color: "from-blue-400 to-indigo-500" },
  { name: "template", label: "Template", icon: <LayoutTemplate />, color: "from-purple-400 to-pink-600" },
  { name: "kursus", label: "Kursus", icon: <LibraryBig />, color: "from-green-400 to-emerald-600" },
  { name: "foto", label: "Foto", icon: <Camera />, color: "from-orange-400 to-red-500" },
  { name: "audio", label: "Audio", icon: <Music />, color: "from-cyan-400 to-teal-600" },
  { name: "e-book", label: "E-book", icon: <BookOpen />, color: "from-yellow-400 to-orange-500" },
  { name: "design", label: "Design", icon: <Paintbrush />, color: "from-rose-400 to-pink-600" }
];


  const getFeatureIcon = (feature) => {
    if (feature.includes('Video') || feature.includes('Hours')) return <Play className="w-3 h-3" />;
    if (feature.includes('Code') || feature.includes('Source')) return <Code className="w-3 h-3" />;
    if (feature.includes('Photo') || feature.includes('Image')) return <Camera className="w-3 h-3" />;
    if (feature.includes('Certificate')) return <Award className="w-3 h-3" />;
    if (feature.includes('Support') || feature.includes('Updates')) return <Shield className="w-3 h-3" />;
    if (feature.includes('Documentation')) return <FileText className="w-3 h-3" />;
    if (feature.includes('Music') || feature.includes('Audio')) return <Headphones className="w-3 h-3" />;
    return <CheckCircle className="w-3 h-3" />;
  };

  const filteredData = activeCategory === 'semua' 
    ? digitalProductsData[activeTab] 
    : digitalProductsData[activeTab]?.filter(item => item.category.toLowerCase() === activeCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      'Template': <Palette className="w-5 h-5" />,
      'Kursus': <BookOpen className="w-5 h-5" />,
      'Foto': <Camera className="w-5 h-5" />,
      'Audio': <Music className="w-5 h-5" />,
      'E-book': <FileText className="w-5 h-5" />,
      'Design': <Palette className="w-5 h-5" />
    };
    return icons[category] || <Smartphone className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <div className="w-full bg-gradient-to-b from-[#7B4EFF] to-[#5A2EDB] pt-6 pb-20 px-4 text-center rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <ArrowLeft className="w-6 h-6 text-white cursor-pointer" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Download className="w-6 h-6 text-purple-600" />
            </div>
            <h1 className="text-white text-xl font-bold">DigitalHub Store</h1>
          </div>
          <div className="w-6 h-6"></div>
        </div>
        
        <p className="text-purple-100 text-sm mb-4">Temukan produk digital terbaik untuk kebutuhan Anda</p>
      </div>

      {/* Search Card */}
      <div className="relative z-10 -mt-16 mb-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-6 mx-auto w-[90%] max-w-md shadow-xl">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari template, kursus, foto..."
              className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition-all"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-600 cursor-pointer hover:text-purple-700 transition-colors" />
          </div>
          
          {/* Quick Categories */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-600 mb-1">Populer</div>
              <div className="text-sm font-bold text-gray-800">UI/UX Design</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-600 mb-1">Trending</div>
              <div className="text-sm font-bold text-gray-800">AI Tools</div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">5000+</div>
              <div className="text-xs text-gray-600">Produk</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">4.8★</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-indigo-600">50K+</div>
              <div className="text-xs text-gray-600">Download</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
     <div className="px-4 mb-6">
  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">

      Kategori Produk
    </h3>
    <div className="flex overflow-x-auto space-x-4 pb-2 snap-x snap-mandatory scroll-smooth">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(category.name)}
          className={`flex-shrink-0 w-40 h-16 rounded-xl flex items-center px-4 transition-all duration-300 snap-start ${
            activeCategory === category.name
              ? 'bg-purple-50 ring-2 ring-purple-300 text-purple-600'
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
            { key: 'terlaris', label: 'Terlaris', icon: Award }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Product Cards */}
      <div className="px-4 space-y-6 pb-20">
        {filteredData?.map((product, index) => (
          <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  {getCategoryIcon(product.category)}
                  <span className="text-xs font-semibold text-gray-800">{product.category}</span>
                </div>
                {product.isHot && (
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🔥 HOT
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ✨ BARU
                  </span>
                )}
                {product.discount && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    -{product.discount}% OFF
                  </span>
                )}
              </div>
              
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    favorites.has(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-600 hover:text-red-400'
                  }`}
                />
              </button>
              
              {/* License Badge */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs text-white font-medium">{product.license} License</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Download className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">{product.downloads}</span>
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-2 py-1 rounded-lg text-xs font-bold">
                      {product.badge}
                    </span>
                    <span className="text-xs text-gray-500">{product.type}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-gray-600 font-medium">{product.creator}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                        {getFeatureIcon(feature)}
                        <span className="text-xs text-gray-600 ml-1">{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 3 && (
                      <div className="flex items-center bg-purple-100 rounded-lg px-2 py-1">
                        <span className="text-xs text-purple-600 font-medium">+{product.features.length - 3} fitur</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Additional Info */}
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    {product.duration && (
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{product.duration}</span>
                      </div>
                    )}
                    {product.updateDate && (
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>Update: {product.updateDate}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  {product.originalPrice && (
                    <p className="text-sm text-gray-400 line-through">{product.originalPrice}</p>
                  )}
                  <p className="font-bold text-xl text-purple-600">{product.price}</p>
                  <p className="text-xs text-gray-500">sekali beli</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-gray-800">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviews} review)</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                    Preview
                  </button>
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Beli
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Floating Action Button */}
      <div className="fixed bottom-6 right-4">
        <button className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300">
          <Download className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
};

export default DigitalProductsPage;