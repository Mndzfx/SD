import React, { useState } from 'react';
import { Phone, Wifi, Zap, Gamepad2, Tv, CreditCard, ShoppingCart, Car, Droplets, Home, Music, Play, Star, Gift } from 'lucide-react';

// Mock data untuk produk digital dengan design yang lebih keren
const digitalProducts = [
  {
    category: 'Pulsa & Paket Data',
    gradient: 'from-red-500 to-pink-500',
    items: [
      { 
        name: 'Telkomsel', 
        icon: Phone, 
        gradient: 'from-red-500 to-red-600',
        description: 'Pulsa & Paket',

      },
      { 
        name: 'Indosat', 
        icon: Phone, 
        gradient: 'from-yellow-500 to-orange-500',
        description: 'IM3 & Mentari'
      },
      { 
        name: 'XL Axiata', 
        icon: Phone, 
        gradient: 'from-blue-500 to-blue-600',
        description: 'XL & AXIS'
      },
      { 
        name: 'Tri', 
        icon: Phone, 
        gradient: 'from-orange-500 to-red-500',
        description: '3 (Tri)'
      },
      { 
        name: 'Smartfren', 
        icon: Wifi, 
        gradient: 'from-pink-500 to-purple-500',
        description: 'Unlimited'
      },
      { 
        name: 'By.U', 
        icon: Phone, 
        gradient: 'from-purple-500 to-indigo-500',
        description: 'Digital Only'
      },
      { 
        name: 'Paket Data', 
        icon: Wifi, 
        gradient: 'from-green-500 to-teal-500',
        description: 'All Operator'
      },
      { 
        name: 'Roaming', 
        icon: Wifi, 
        gradient: 'from-indigo-500 to-purple-500',
        description: 'International'
      }
    ]
  },
  {
    category: 'Tagihan Bulanan',
    gradient: 'from-blue-500 to-cyan-500',
    items: [
      { 
        name: 'PLN', 
        icon: Zap, 
        gradient: 'from-yellow-500 to-orange-600',
        description: 'Token Listrik',
       
      },
      { 
        name: 'PDAM', 
        icon: Droplets, 
        gradient: 'from-blue-400 to-cyan-500',
        description: 'Air Bersih'
      },
      { 
        name: 'IndiHome', 
        icon: Home, 
        gradient: 'from-red-500 to-pink-500',
        description: 'Internet & TV'
      },
      { 
        name: 'MyRepublic', 
        icon: Wifi, 
        gradient: 'from-green-500 to-emerald-500',
        description: 'Fiber Internet'
      },
      { 
        name: 'Biznet', 
        icon: Wifi, 
        gradient: 'from-blue-600 to-indigo-600',
        description: 'Home Internet'
      },
      { 
        name: 'First Media', 
        icon: Tv, 
        gradient: 'from-purple-500 to-pink-500',
        description: 'Cable TV'
      },
      { 
        name: 'MNC Vision', 
        icon: Tv, 
        gradient: 'from-orange-500 to-red-500',
        description: 'Pay TV'
      },
      { 
        name: 'Telkom', 
        icon: Phone, 
        gradient: 'from-gray-500 to-gray-600',
        description: 'Telepon Rumah'
      }
    ]
  },
  {
    category: 'Streaming & Hiburan',
    gradient: 'from-purple-500 to-pink-500',
    items: [
      { 
        name: 'Netflix', 
        icon: Play, 
        gradient: 'from-red-600 to-red-700',
        description: 'Movies & Series',

      },
      { 
        name: 'Disney+', 
        icon: Star, 
        gradient: 'from-blue-600 to-indigo-600',
        description: 'Family Content'
      },
      { 
        name: 'Spotify', 
        icon: Music, 
        gradient: 'from-green-500 to-green-600',
        description: 'Music Streaming'
      },
      { 
        name: 'YouTube Premium', 
        icon: Play, 
        gradient: 'from-red-500 to-pink-500',
        description: 'Ad-free Videos'
      },
      { 
        name: 'Apple Music', 
        icon: Music, 
        gradient: 'from-pink-500 to-rose-500',
        description: 'Music & Podcasts'
      },
      { 
        name: 'Amazon Prime', 
        icon: Play, 
        gradient: 'from-blue-500 to-cyan-500',
        description: 'Video & Music'
      },
      { 
        name: 'Vidio', 
        icon: Tv, 
        gradient: 'from-purple-500 to-indigo-500',
        description: 'Local Content'
      },
      { 
        name: 'WeTV', 
        icon: Tv, 
        gradient: 'from-teal-500 to-cyan-500',
        description: 'Asian Drama'
      }
    ]
  },
  {
    category: 'Voucher Game',
    gradient: 'from-indigo-500 to-purple-500',
    items: [
      { 
        name: 'Mobile Legends', 
        icon: Gamepad2, 
        gradient: 'from-blue-500 to-purple-600',
        description: 'Diamond ML',

      },
      { 
        name: 'Free Fire', 
        icon: Gamepad2, 
        gradient: 'from-orange-500 to-red-500',
        description: 'Diamond FF'
      },
      { 
        name: 'PUBG Mobile', 
        icon: Gamepad2, 
        gradient: 'from-yellow-500 to-orange-500',
        description: 'UC PUBG'
      },
      { 
        name: 'Genshin Impact', 
        icon: Gamepad2, 
        gradient: 'from-purple-500 to-pink-500',
        description: 'Genesis Crystal'
      },
      { 
        name: 'Valorant', 
        icon: Gamepad2, 
        gradient: 'from-red-500 to-pink-500',
        description: 'VP Points'
      },
      { 
        name: 'Steam Wallet', 
        icon: Gamepad2, 
        gradient: 'from-gray-700 to-gray-800',
        description: 'Steam Credit'
      },
      { 
        name: 'Google Play', 
        icon: Play, 
        gradient: 'from-green-500 to-teal-500',
        description: 'Play Store Credit'
      },
      { 
        name: 'Roblox', 
        icon: Gamepad2, 
        gradient: 'from-green-400 to-blue-500',
        description: 'Robux'
      }
    ]
  },
  {
    category: 'E-Wallet & Transport',
    gradient: 'from-green-500 to-teal-500',
    items: [
      { 
        name: 'GoPay', 
        icon: CreditCard, 
        gradient: 'from-green-500 to-emerald-600',
        description: 'Gojek Wallet',

      },
      { 
        name: 'OVO', 
        icon: CreditCard, 
        gradient: 'from-purple-500 to-indigo-500',
        description: 'Digital Wallet'
      },
      { 
        name: 'DANA', 
        icon: CreditCard, 
        gradient: 'from-blue-500 to-cyan-500',
        description: 'Digital Payment'
      },
      { 
        name: 'ShopeePay', 
        icon: CreditCard, 
        gradient: 'from-orange-500 to-red-500',
        description: 'Shopee Wallet'
      },
      { 
        name: 'LinkAja', 
        icon: CreditCard, 
        gradient: 'from-red-500 to-pink-500',
        description: 'BUMN Wallet'
      },
      { 
        name: 'Grab', 
        icon: Car, 
        gradient: 'from-green-600 to-emerald-700',
        description: 'GrabPay'
      },
      { 
        name: 'E-Toll', 
        icon: CreditCard, 
        gradient: 'from-blue-500 to-indigo-500',
        description: 'Tol Card'
      },
      { 
        name: 'Jakcard', 
        icon: CreditCard, 
        gradient: 'from-orange-500 to-amber-500',
        description: 'TransJakarta'
      }
    ]
  },
  {
    category: 'Voucher Belanja',
    gradient: 'from-orange-500 to-red-500',
    items: [
      { 
        name: 'Shopee', 
        icon: ShoppingCart, 
        gradient: 'from-orange-500 to-red-500',
        description: 'ShopeePay Coins',
   
      },
      { 
        name: 'Tokopedia', 
        icon: ShoppingCart, 
        gradient: 'from-green-500 to-emerald-500',
        description: 'TopCash'
      },
      { 
        name: 'Bukalapak', 
        icon: ShoppingCart, 
        gradient: 'from-red-500 to-pink-500',
        description: 'BukaDompet'
      },
      { 
        name: 'Lazada', 
        icon: ShoppingCart, 
        gradient: 'from-blue-500 to-indigo-500',
        description: 'LazWallet'
      },
      { 
        name: 'Blibli', 
        icon: ShoppingCart, 
        gradient: 'from-blue-400 to-cyan-500',
        description: 'BlibliPay'
      },
      { 
        name: 'JD.ID', 
        icon: ShoppingCart, 
        gradient: 'from-red-600 to-pink-600',
        description: 'JDPay'
      },
      { 
        name: 'Zalora', 
        icon: ShoppingCart, 
        gradient: 'from-pink-500 to-rose-500',
        description: 'Fashion Voucher'
      },
      { 
        name: 'Indomaret', 
        icon: Gift, 
        gradient: 'from-blue-600 to-indigo-600',
        description: 'Voucher Belanja'
      }
    ]
  }
];

const DigitalProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const handleSelect = (product, category) => {
    setSelectedProduct({ ...product, category });
    console.log('Selected:', { ...product, category });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen pb-8 sm:pb-12 lg:pb-20">
      <header className="bg-gradient-to-r from-[#1E50D8] to-[#2563EB] text-white text-center py-6 sm:py-8 lg:py-12 px-4 relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-2 sm:mb-4 tracking-tight">
            Produk Digital
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mt-2 max-w-xs sm:max-w-md mx-auto leading-relaxed opacity-90">
            Beli pulsa, bayar tagihan, top up game, dan voucher belanja dengan mudah
          </p>
        </div>
        <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-white/10 rounded-full"></div>
        <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-16 sm:w-20 lg:w-32 h-16 sm:h-20 lg:h-32 bg-white/5 rounded-full"></div>
      </header>

      <main className="flex justify-center px-2 sm:px-4 -mt-8 sm:-mt-12 lg:-mt-16 relative z-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-7xl border border-white/20">
          
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-6 sm:mb-8 p-1 sm:p-2 bg-gray-100/50 rounded-lg sm:rounded-xl">
            {digitalProducts.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === index
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                <span className="hidden sm:inline">{category.category}</span>
                <span className="sm:hidden">{category.category.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {digitalProducts.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className={`transition-all duration-500 ${
                  activeCategory === categoryIndex ? 'block' : 'hidden'
                }`}
              >
                <div className={`text-center mb-6 sm:mb-8 p-4 sm:p-6 rounded-lg sm:rounded-xl bg-gradient-to-r ${category.gradient} text-white`}>
                  <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{category.category}</h2>
                  <p className="text-sm sm:text-base text-white/80">Pilih produk yang Anda butuhkan</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                  {category.items.map((product, index) => {
                    const IconComponent = product.icon;
                    return (
                      <div key={index} className="group">
                        <button
                          type="button"
                          onClick={() => handleSelect(product, category.category)}
                          className={`w-full p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden ${
                            selectedProduct?.name === product.name
                              ? 'border-blue-500 shadow-xl ring-2 sm:ring-4 ring-blue-200'
                              : 'border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
                          }`}
                        >
                          {/* Background Gradient */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                          
                          {/* Popular Badge */}
                          {product.popular && (
                            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded-full font-bold shadow-lg">
                              <span className="hidden sm:inline">POPULER</span>
                              <span className="sm:hidden">⭐</span>
                            </div>
                          )}
                          
                          {/* Icon Container */}
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 lg:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white relative z-10" />
                          </div>
                          
                          {/* Content */}
                          <div className="text-center relative z-10">
                            <h3 className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base mb-0.5 sm:mb-1 group-hover:text-blue-600 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600">
                              {product.description}
                            </p>
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Promo Section */}
          <div className="mt-12 sm:mt-14 lg:mt-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">🎉 Promo Spektakuler!</h3>
              <p className="text-sm sm:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90">
                Dapatkan cashback hingga 75% + bonus poin untuk setiap transaksi
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                <button className="bg-white text-purple-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base">
                  Klaim Promo
                </button>
                <button className="border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-colors text-sm sm:text-base">
                  Lihat Syarat
                </button>
              </div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 bg-white/5 rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DigitalProducts;