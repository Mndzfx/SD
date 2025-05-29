import React, { useState } from 'react';
import { TrendingUp, DollarSign, PieChart, BarChart3, Shield, Star, ArrowUp, ArrowDown, Eye, Plus, Minus, ChevronRight, Coins, Building, Landmark, Zap } from 'lucide-react';

// Mock data untuk produk investasi
const investmentProducts = [
  {
    category: 'Reksa Dana',
    gradient: 'from-blue-500 to-indigo-600',
    items: [
      { 
        name: 'Saham Agresif', 
        icon: TrendingUp, 
        gradient: 'from-green-500 to-emerald-600',
        return: '+12.5%',
        risk: 'Tinggi',
        minInvest: 'Rp 10.000',
        popular: true,
        type: 'equity'
      },
      { 
        name: 'Campuran', 
        icon: PieChart, 
        gradient: 'from-blue-500 to-cyan-500',
        return: '+8.2%',
        risk: 'Sedang',
        minInvest: 'Rp 10.000',
        type: 'balanced'
      },
      { 
        name: 'Pendapatan Tetap', 
        icon: Shield, 
        gradient: 'from-purple-500 to-indigo-500',
        return: '+6.1%',
        risk: 'Rendah',
        minInvest: 'Rp 10.000',
        type: 'fixed'
      },
      { 
        name: 'Pasar Uang', 
        icon: DollarSign, 
        gradient: 'from-teal-500 to-green-500',
        return: '+4.8%',
        risk: 'Sangat Rendah',
        minInvest: 'Rp 10.000',
        type: 'money_market'
      }
    ]
  },
  {
    category: 'Saham Individual',
    gradient: 'from-green-500 to-teal-600',
    items: [
      { 
        name: 'BBCA', 
        icon: Landmark, 
        gradient: 'from-blue-600 to-indigo-600',
        return: '+15.2%',
        risk: 'Tinggi',
        price: 'Rp 8.725',
        change: '+2.1%',
        popular: true,
        type: 'stock',
        sector: 'Perbankan'
      },
      { 
        name: 'BBRI', 
        icon: Landmark, 
        gradient: 'from-green-600 to-emerald-600',
        return: '+18.7%',
        risk: 'Tinggi',
        price: 'Rp 4.580',
        change: '+1.8%',
        type: 'stock',
        sector: 'Perbankan'
      },
      { 
        name: 'TLKM', 
        icon: Zap, 
        gradient: 'from-red-500 to-pink-500',
        return: '+7.3%',
        risk: 'Sedang',
        price: 'Rp 3.210',
        change: '-0.5%',
        type: 'stock',
        sector: 'Telekomunikasi'
      },
      { 
        name: 'UNVR', 
        icon: Building, 
        gradient: 'from-purple-500 to-pink-500',
        return: '+5.8%',
        risk: 'Sedang',
        price: 'Rp 2.890',
        change: '+0.9%',
        type: 'stock',
        sector: 'Konsumer'
      }
    ]
  },
  {
    category: 'Emas Digital',
    gradient: 'from-yellow-500 to-orange-600',
    items: [
      { 
        name: 'Emas Antam', 
        icon: Coins, 
        gradient: 'from-yellow-500 to-orange-500',
        return: '+8.9%',
        risk: 'Sedang',
        price: 'Rp 1.068.000/gram',
        change: '+0.3%',
        popular: true,
        type: 'gold'
      },
      { 
        name: 'Emas UBS', 
        icon: Coins, 
        gradient: 'from-orange-500 to-red-500',
        return: '+8.7%',
        risk: 'Sedang',
        price: 'Rp 1.065.000/gram',
        change: '+0.2%',
        type: 'gold'
      },
      { 
        name: 'Tabungan Emas', 
        icon: Coins, 
        gradient: 'from-yellow-600 to-orange-600',
        return: '+8.5%',
        risk: 'Sedang',
        price: 'Mulai Rp 5.000',
        change: '+0.1%',
        type: 'gold_saving'
      },
      { 
        name: 'Perhiasan Emas', 
        icon: Star, 
        gradient: 'from-amber-500 to-yellow-500',
        return: '+7.2%',
        risk: 'Sedang',
        price: 'Mulai Rp 100.000',
        change: '+0.4%',
        type: 'jewelry'
      }
    ]
  },
  {
    category: 'Obligasi',
    gradient: 'from-purple-500 to-pink-600',
    items: [
      { 
        name: 'SBN Ritel', 
        icon: Shield, 
        gradient: 'from-blue-500 to-indigo-500',
        return: '+6.25%',
        risk: 'Sangat Rendah',
        price: 'Rp 1.000.000',
        tenor: '3 Tahun',
        popular: true,
        type: 'government_bond'
      },
      { 
        name: 'Sukuk Ritel', 
        icon: Shield, 
        gradient: 'from-green-500 to-teal-500',
        return: '+5.9%',
        risk: 'Sangat Rendah',
        price: 'Rp 1.000.000',
        tenor: '2 Tahun',
        type: 'sukuk'
      },
      { 
        name: 'Obligasi Korporasi', 
        icon: Building, 
        gradient: 'from-purple-500 to-indigo-500',
        return: '+7.8%',
        risk: 'Rendah',
        price: 'Rp 5.000.000',
        tenor: '5 Tahun',
        type: 'corporate_bond'
      },
      { 
        name: 'ORI', 
        icon: Landmark, 
        gradient: 'from-red-500 to-pink-500',
        return: '+6.1%',
        risk: 'Sangat Rendah',
        price: 'Rp 1.000.000',
        tenor: '3 Tahun',
        type: 'ori'
      }
    ]
  }
];

// Mock portfolio data
const portfolioData = {
  totalValue: 'Rp 45.750.000',
  totalReturn: '+Rp 8.250.000',
  returnPercent: '+22.0%',
  dayChange: '+Rp 125.000',
  dayChangePercent: '+0.27%'
};

const Investment = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [viewMode, setViewMode] = useState('products'); // 'products' or 'portfolio'

  const handleSelect = (product, category) => {
    setSelectedProduct({ ...product, category });
    console.log('Selected:', { ...product, category });
  };

  const getRiskColor = (risk) => {
    switch(risk.toLowerCase()) {
      case 'sangat rendah': return 'text-green-600 bg-green-100';
      case 'rendah': return 'text-blue-600 bg-blue-100';
      case 'sedang': return 'text-yellow-600 bg-yellow-100';
      case 'tinggi': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen pb-20">
      <header className="bg-gradient-to-r from-[#1E50D8] to-[#3B82F6] text-white py-8 md:py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h1 className="font-bold text-2xl md:text-4xl leading-tight mb-2 tracking-tight">
                Investasi Cerdas
              </h1>
              <p className="text-base md:text-lg opacity-90 max-w-md mx-auto lg:mx-0">
                Mulai investasi dari Rp 10.000 dan raih masa depan yang lebih cerah
              </p>
            </div>
            <div className="text-center lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-sm opacity-80 mb-1">Total Portofolio</p>
                <p className="text-xl md:text-2xl font-bold">{portfolioData.totalValue}</p>
                <p className="text-sm text-green-300">
                  {portfolioData.returnPercent} ({portfolioData.totalReturn})
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute -top-8 -left-8 w-40 h-40 bg-white/5 rounded-full"></div>
      </header>

      <main className="flex justify-center px-4 -mt-8 relative z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-8 w-full max-w-7xl border border-white/20">
          
          {/* View Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-xl p-1 inline-flex">
              <button
                onClick={() => setViewMode('products')}
                className={`px-4 md:px-6 py-2 rounded-lg font-medium transition-all text-sm md:text-base ${
                  viewMode === 'products'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Produk Investasi
              </button>
              <button
                onClick={() => setViewMode('portfolio')}
                className={`px-4 md:px-6 py-2 rounded-lg font-medium transition-all text-sm md:text-base ${
                  viewMode === 'portfolio'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Portofolio Saya
              </button>
            </div>
          </div>

          {viewMode === 'products' ? (
            <>
              {/* Category Navigation */}
              <div className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-gray-100/50 rounded-xl">
                {investmentProducts.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
                      activeCategory === index
                        ? 'bg-white text-blue-600 shadow-md'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                    }`}
                  >
                    {category.category}
                  </button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="space-y-12">
                {investmentProducts.map((category, categoryIndex) => (
                  <div 
                    key={categoryIndex} 
                    className={`transition-all duration-500 ${
                      activeCategory === categoryIndex ? 'block' : 'hidden'
                    }`}
                  >
                    <div className={`text-center mb-8 p-4 md:p-6 rounded-xl bg-gradient-to-r ${category.gradient} text-white`}>
                      <h2 className="text-xl md:text-2xl font-bold mb-2">{category.category}</h2>
                      <p className="text-white/80 text-sm md:text-base">Pilih instrumen investasi yang sesuai dengan profil risiko Anda</p>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                      {category.items.map((product, index) => {
                        const IconComponent = product.icon;
                        return (
                          <div key={index} className="group">
                            <button
                              type="button"
                              onClick={() => handleSelect(product, category.category)}
                              className={`w-full p-3 md:p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden ${
                                selectedProduct?.name === product.name
                                  ? 'border-blue-500 shadow-xl ring-4 ring-blue-200'
                                  : 'border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
                              }`}
                            >
                              {/* Background Gradient */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                              
                              {/* Popular Badge */}
                              {product.popular && (
                                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                                  POPULER
                                </div>
                              )}
                              
                              {/* Icon Container */}
                              <div className={`w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
                                <IconComponent className="w-5 h-5 md:w-8 md:h-8 text-white relative z-10" />
                              </div>
                              
                              {/* Content */}
                              <div className="text-center relative z-10 space-y-1 md:space-y-2">
                                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors text-xs md:text-base leading-tight">
                                  {product.name}
                                </h3>
                                
                                {/* Return */}
                                <div className="flex items-center justify-center space-x-1">
                                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                                  <span className="text-green-600 font-semibold text-xs md:text-base">{product.return}</span>
                                </div>
                                
                                {/* Risk Level */}
                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(product.risk)}`}>
                                  {product.risk}
                                </span>
                                
                                {/* Price/Min Investment */}
                                <p className="text-xs text-gray-500 leading-tight">
                                  {product.price || product.minInvest || product.tenor}
                                </p>
                                
                                {/* Additional Info */}
                                {product.change && (
                                  <div className="flex items-center justify-center space-x-1">
                                    {product.change.startsWith('+') ? 
                                      <ArrowUp className="w-3 h-3 text-green-500" /> : 
                                      <ArrowDown className="w-3 h-3 text-red-500" />
                                    }
                                    <span className={`text-xs ${product.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                      {product.change}
                                    </span>
                                  </div>
                                )}
                                
                                {product.sector && (
                                  <p className="text-xs text-gray-400">{product.sector}</p>
                                )}
                              </div>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Portfolio View */
            <div className="space-y-8">
              {/* Portfolio Summary */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 md:p-8 text-white">
                <h2 className="text-xl md:text-2xl font-bold mb-6">Ringkasan Portofolio</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  <div>
                    <p className="text-blue-100 text-sm mb-1">Total Nilai</p>
                    <p className="text-lg md:text-2xl font-bold">{portfolioData.totalValue}</p>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm mb-1">Total Return</p>
                    <p className="text-base md:text-xl font-bold text-green-300">{portfolioData.totalReturn}</p>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm mb-1">Persentase Return</p>
                    <p className="text-base md:text-xl font-bold text-green-300">{portfolioData.returnPercent}</p>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm mb-1">Hari Ini</p>
                    <p className="text-sm md:text-lg font-bold text-green-300">{portfolioData.dayChange}</p>
                  </div>
                </div>
              </div>

              {/* Holdings */}
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border">
                <h3 className="text-lg md:text-xl font-bold mb-6">Kepemilikan Investasi</h3>
                <div className="space-y-4">
                  {[
                    { name: 'RD Saham Agresif', value: 'Rp 15.500.000', return: '+18.2%', allocation: '34%' },
                    { name: 'BBCA', value: 'Rp 12.250.000', return: '+15.2%', allocation: '27%' },
                    { name: 'Emas Antam', value: 'Rp 8.750.000', return: '+8.9%', allocation: '19%' },
                    { name: 'SBN Ritel', value: 'Rp 9.250.000', return: '+6.25%', allocation: '20%' }
                  ].map((holding, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm md:text-base">{holding.name}</h4>
                        <p className="text-xs md:text-sm text-gray-500">Alokasi: {holding.allocation}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900 text-sm md:text-base">{holding.value}</p>
                        <p className="text-xs md:text-sm text-green-600">{holding.return}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Investment Tips */}
          <div className="mt-16 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">💡 Tips Investasi Cerdas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold mb-2">Diversifikasi</h4>
                  <p className="text-sm opacity-90">Jangan taruh semua telur dalam satu keranjang</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold mb-2">Investasi Rutin</h4>
                  <p className="text-sm opacity-90">Konsisten lebih baik daripada sekali besar</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold mb-2">Jangka Panjang</h4>
                  <p className="text-sm opacity-90">Kesabaran adalah kunci keberhasilan investasi</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                <button className="bg-white text-teal-600 px-6 md:px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                  Mulai Investasi
                </button>
                <button className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-teal-600 transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Investment;