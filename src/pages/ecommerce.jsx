import React, { useState } from 'react';
import {
  ShoppingBag,
  Shirt,
  Watch,
  ShoppingCart,
  Gift,
  Store,
  Package,
  Search, Star, Heart, Filter, ArrowLeft, Users, Clock, Download, Award, TrendingUp, Zap, Calendar, Smartphone, Code, Camera, Music, BookOpen, Palette, Shield, UserCheck, CheckCircle, Play, FileText, Headphones,  Truck, MapPin, User, Bell, Menu 
} from "lucide-react";


const ECommerceStore = () => {
  const [activeTab, setActiveTab] = useState('populer');
  const [favorites, setFavorites] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('semua');
  const [cartCount, setCartCount] = useState(3);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const addToCart = (product) => {
    setCartCount(prev => prev + 1);
    // Add cart animation or notification here
  };

  const productsData = {
    populer: [
      {
        id: 1,
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        rating: 4.9,
        reviews: 3241,
        price: "Rp 20.999.000",
        originalPrice: "Rp 23.999.000",
        image: "https://images.unsplash.com/photo-1592286049469-9ff29570e1fc?w=400&h=250&fit=crop",
        category: "Electronics",
        type: "Smartphone",
        stock: "15 tersisa",
        sold: "2.5K terjual",
        isHot: true,
        isNew: false,
        shipping: "Gratis Ongkir",
        features: ["256GB Storage", "Pro Camera", "Titanium Design", "USB-C"],
        discount: 13,
        badge: "Bestseller",
        location: "Jakarta Pusat"
      },
      {
        id: 2,
        name: "MacBook Air M3",
        brand: "Apple",
        rating: 4.8,
        reviews: 2876,
        price: "Rp 18.999.000",
        originalPrice: "Rp 21.999.000",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=250&fit=crop",
        category: "Electronics",
        type: "Laptop",
        stock: "8 tersisa",
        sold: "1.2K terjual",
        isHot: false,
        isNew: true,
        shipping: "Gratis Ongkir",
        features: ["M3 Chip", "16GB RAM", "512GB SSD", "Retina Display"],
        discount: 14,
        badge: "Editor's Choice",
        location: "Surabaya"
      },
      {
        id: 3,
        name: "Nike Air Jordan 1",
        brand: "Nike",
        rating: 4.7,
        reviews: 1943,
        price: "Rp 2.499.000",
        originalPrice: "Rp 2.999.000",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=250&fit=crop",
        category: "Fashion",
        type: "Sneakers",
        stock: "25 tersisa",
        sold: "5.7K terjual",
        isHot: true,
        isNew: false,
        shipping: "Gratis Ongkir",
        features: ["Premium Leather", "Air Cushioning", "Iconic Design", "Limited Edition"],
        discount: 17,
        badge: "Premium",
        location: "Bandung"
      },
      {
        id: 4,
        name: "Sony WH-1000XM5",
        brand: "Sony",
        rating: 4.6,
        reviews: 2341,
        price: "Rp 4.299.000",
        originalPrice: "Rp 4.999.000",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop",
        category: "Electronics",
        type: "Headphones",
        stock: "12 tersisa",
        sold: "3.1K terjual",
        isHot: false,
        isNew: true,
        shipping: "Gratis Ongkir",
        features: ["Noise Cancelling", "30H Battery", "Hi-Res Audio", "Touch Control"],
        discount: 14,
        badge: "Trending",
        location: "Jakarta Selatan"
      }
    ],
    terbaru: [
      {
        id: 5,
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        rating: 4.5,
        reviews: 587,
        price: "Rp 17.999.000",
        originalPrice: "Rp 19.999.000",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
        category: "Electronics",
        type: "Smartphone",
        stock: "20 tersisa",
        sold: "856 terjual",
        isHot: false,
        isNew: true,
        shipping: "Gratis Ongkir",
        features: ["S Pen", "200MP Camera", "5000mAh Battery", "AI Features"],
        discount: 10,
        badge: "New Release",
        location: "Medan"
      },
      {
        id: 6,
        name: "Adidas Ultraboost 22",
        brand: "Adidas",
        rating: 4.8,
        reviews: 1234,
        price: "Rp 2.799.000",
        originalPrice: "Rp 3.199.000",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=250&fit=crop",
        category: "Fashion",
        type: "Running Shoes",
        stock: "18 tersisa",
        sold: "2.3K terjual",
        isHot: false,
        isNew: true,
        shipping: "Gratis Ongkir",
        features: ["Boost Technology", "Primeknit Upper", "Continental Rubber", "Energy Return"],
        discount: 13,
        badge: "Sport",
        location: "Yogyakarta"
      }
    ],
    terlaris: [
      {
        id: 7,
        name: "Xiaomi 13T Pro",
        brand: "Xiaomi",
        rating: 4.7,
        reviews: 4532,
        price: "Rp 7.999.000",
        originalPrice: "Rp 9.999.000",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=250&fit=crop",
        category: "Electronics",
        type: "Smartphone",
        stock: "30 tersisa",
        sold: "15.3K terjual",
        isHot: true,
        isNew: false,
        shipping: "Gratis Ongkir",
        features: ["Leica Camera", "120W Charging", "144Hz Display", "IP68 Rating"],
        discount: 20,
        badge: "Bundle Deal",
        location: "Semarang"
      },
      {
        id: 8,
        name: "Uniqlo Heattech T-Shirt",
        brand: "Uniqlo",
        rating: 4.9,
        reviews: 6789,
        price: "Rp 199.000",
        originalPrice: "Rp 299.000",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=250&fit=crop",
        category: "Fashion",
        type: "Clothing",
        stock: "50+ tersedia",
        sold: "25.9K terjual",
        isHot: true,
        isNew: false,
        shipping: "Gratis Ongkir",
        features: ["Heattech Technology", "Ultra Soft", "Moisture Wicking", "Anti-Odor"],
        discount: 33,
        badge: "Bestseller",
        location: "Jakarta Barat"
      }
    ]
  };


const categories = [
  { name: "semua", label: "Semua", icon: <ShoppingCart size={20} />, color: "from-teal-400 to-cyan-500" },
  { name: "fashion", label: "Fashion", icon: <Shirt size={20} />, color: "from-pink-400 to-rose-500" },
  { name: "elektronik", label: "Elektronik", icon: <Watch size={20} />, color: "from-purple-400 to-indigo-500" },
  { name: "daily", label: "Harian", icon: <ShoppingBag size={20} />, color: "from-green-400 to-emerald-500" },
  { name: "hadiah", label: "Hadiah", icon: <Gift size={20} />, color: "from-yellow-400 to-amber-500" },
  { name: "toko", label: "Toko", icon: <Store size={20} />, color: "from-blue-400 to-sky-500" },
  { name: "pengiriman", label: "Pengiriman", icon: <Package size={20} />, color: "from-orange-400 to-red-500" }
];


  const getFeatureIcon = (feature) => {
    if (feature.includes('Camera') || feature.includes('MP')) return <Camera className="w-3 h-3" />;
    if (feature.includes('Battery') || feature.includes('mAh')) return <Zap className="w-3 h-3" />;
    if (feature.includes('Storage') || feature.includes('GB') || feature.includes('SSD')) return <Package className="w-3 h-3" />;
    if (feature.includes('Display') || feature.includes('Screen')) return <Smartphone className="w-3 h-3" />;
    if (feature.includes('Audio') || feature.includes('Sound')) return <Headphones className="w-3 h-3" />;
    if (feature.includes('Design') || feature.includes('Premium')) return <Award className="w-3 h-3" />;
    return <CheckCircle className="w-3 h-3" />;
  };

  const filteredData = activeCategory === 'semua' 
    ? productsData[activeTab] 
    : productsData[activeTab]?.filter(item => item.category.toLowerCase() === activeCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      'Electronics': <Smartphone className="w-5 h-5" />,
      'Fashion': <Palette className="w-5 h-5" />,
      'Beauty': <Heart className="w-5 h-5" />,
      'Home': <Shield className="w-5 h-5" />,
      'Sports': <Award className="w-5 h-5" />,
      'Books': <BookOpen className="w-5 h-5" />
    };
    return icons[category] || <Package className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Navigation */}
      <div className="w-full bg-gradient-to-b from-[#3AC1D9] to-[#1E9DB3] pt-6 pb-20 px-4 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Menu className="w-6 h-6 text-white cursor-pointer" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-teal-600" />
              </div>
              <h1 className="text-white text-xl font-bold">ShopHub</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="w-6 h-6 text-white cursor-pointer" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-white cursor-pointer" />
              {cartCount > 0 && (
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">{cartCount}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-cyan-200" />
          <p className="text-cyan-100 text-sm">Dikirim ke Jakarta Pusat</p>
        </div>
      </div>

      {/* Search Card */}
      <div className="relative z-10 -mt-16 mb-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-6 mx-auto w-[90%] max-w-md shadow-xl">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari produk, brand, kategori..."
              className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:bg-white transition-all"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-600 cursor-pointer hover:text-teal-700 transition-colors" />
          </div>
          
          {/* Quick Categories */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-600 mb-1">Flash Sale</div>
              <div className="text-sm font-bold text-red-600">Diskon 70%</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-600 mb-1">Gratis Ongkir</div>
              <div className="text-sm font-bold text-green-600">Min. 50rb</div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-teal-600">1M+</div>
              <div className="text-xs text-gray-600">Produk</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-cyan-600">4.9★</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-teal-700">24/7</div>
              <div className="text-xs text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
    <div className="px-4 mb-6">
  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
      Kategori Belanja
    </h3>
    <div className="flex overflow-x-auto space-x-4 pb-2 snap-x snap-mandatory scroll-smooth">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(category.name)}
          className={`flex-shrink-0 w-40 h-16 rounded-xl flex items-center px-4 transition-all duration-300 snap-start ${
            activeCategory === category.name
              ? 'bg-[#F0FDFA] ring-2 ring-teal-300 text-teal-600'
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
                  ? 'bg-gradient-to-r from-[#3AC1D9] to-[#1E9DB3] text-white shadow-lg transform scale-105'
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
                  <span className="bg-gradient-to-r from-[#3AC1D9] to-[#1E9DB3] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
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
              
              {/* Shipping Badge */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Truck className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">{product.shipping}</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Users className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">{product.sold}</span>
                </div>
                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Package className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-white font-medium">{product.stock}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gradient-to-r from-[#3AC1D9] to-[#1E9DB3] text-white px-2 py-1 rounded-lg text-xs font-bold">
                      {product.badge}
                    </span>
                    <span className="text-xs text-gray-500">{product.brand}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{product.location}</span>
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
                      <div className="flex items-center bg-teal-100 rounded-lg px-2 py-1">
                        <span className="text-xs text-teal-600 font-medium">+{product.features.length - 3} fitur</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  {product.originalPrice && (
                    <p className="text-sm text-gray-400 line-through">{product.originalPrice}</p>
                  )}
                  <p className="font-bold text-xl text-teal-600">{product.price}</p>
                  <p className="text-xs text-gray-500">Harga terbaik</p>
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
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    Simpan
                  </button>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-gradient-to-r from-[#3AC1D9] to-[#1E9DB3] text-white px-6 py-2 rounded-xl text-sm font-bold hover:from-[#35B5CC] hover:to-[#1A8FA9] hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-1"
                  >
                    <ShoppingCart className="w-4 h-4" />
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
        <button className="w-16 h-16 bg-gradient-to-r from-[#3AC1D9] to-[#1E9DB3] rounded-full shadow-2xl flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300">
          <ShoppingCart className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ECommerceStore;