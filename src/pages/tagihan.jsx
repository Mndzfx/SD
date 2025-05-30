import React, { useState } from 'react';
import {
  Phone,
  Wifi,
  Lightbulb,
  Droplets,
  Banknote,
  ShieldCheck,
   Search, Star, Heart, Filter, ArrowLeft, Users, Clock, Download, Award, TrendingUp, Zap, Calendar, Smartphone, Code, Camera, Music, BookOpen, Palette, Shield, UserCheck, CheckCircle, Play, FileText, Headphones, ShoppingCart, Package, Truck, MapPin, User, Bell, Menu, Car, Coffee, Bath, Bed, Home, Building, Mountain, TreePine, Waves, Plane, Hotel, CreditCard, DollarSign, AlertCircle, Eye, Plus, MoreHorizontal, Receipt, Wallet
} from "lucide-react";


const BillingPage = () => {
  const [activeTab, setActiveTab] = useState('semua');
  const [selectedBills, setSelectedBills] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('semua');
  const [totalOutstanding, setTotalOutstanding] = useState(15750000);

  const toggleSelectBill = (id) => {
    const newSelected = new Set(selectedBills);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedBills(newSelected);
  };

  const payBill = (bill) => {
    setTotalOutstanding(prev => prev - parseInt(bill.amount.replace(/[^\d]/g, '')));
    // Add payment animation or notification here
  };

  const billsData = {
    semua: [
      {
        id: 1,
        title: "Tagihan Listrik PLN",
        company: "PT PLN (Persero)",
        amount: "Rp 850.000",
        originalAmount: "Rp 850.000",
        dueDate: "2025-06-05",
        issueDate: "2025-05-01",
        billNumber: "PLN202505001234",
        category: "Utilities",
        status: "Belum Bayar",
        isOverdue: false,
        isPriority: true,
        paymentMethod: "Transfer Bank",
        description: "Tagihan listrik bulan Mei 2025",
        details: ["Pemakaian: 450 kWh", "Tarif: R1/900VA", "Denda: Rp 0", "Admin: Rp 2.500"],
        discount: 0,
        badge: "Prioritas",
        location: "Jakarta Pusat",
        accountNumber: "54123456789"
      },
      {
        id: 2,
        title: "Internet Indihome",
        company: "PT Telkom Indonesia",
        amount: "Rp 389.000",
        originalAmount: "Rp 389.000",
        dueDate: "2025-06-10",
        issueDate: "2025-05-10",
        billNumber: "TLK202505002456",
        category: "Internet",
        status: "Belum Bayar",
        isOverdue: false,
        isPriority: false,
        paymentMethod: "Auto Debit",
        description: "Paket internet 50 Mbps unlimited",
        details: ["Paket: IndiHome 50 Mbps", "TV Cable: 150 Channel", "Telepon: Unlimited", "PPN: 11%"],
        discount: 0,
        badge: "Bulanan",
        location: "Jakarta Selatan",
        accountNumber: "121234567890"
      },
      {
        id: 3,
        title: "Kartu Kredit BCA",
        company: "Bank Central Asia",
        amount: "Rp 3.250.000",
        originalAmount: "Rp 3.450.000",
        dueDate: "2025-06-02",
        issueDate: "2025-05-02",
        billNumber: "BCA202505003789",
        category: "Credit Card",
        status: "Belum Bayar",
        isOverdue: true,
        isPriority: true,
        paymentMethod: "Transfer Bank",
        description: "Tagihan kartu kredit periode Mei 2025",
        details: ["Limit: Rp 15.000.000", "Sisa Limit: Rp 11.750.000", "Min Payment: Rp 325.000", "Cashback: Rp 200.000"],
        discount: 6,
        badge: "Terlambat",
        location: "Jakarta Pusat",
        accountNumber: "4532 **** **** 1234"
      },
      {
        id: 4,
        title: "Asuransi Kesehatan",
        company: "Allianz Indonesia",
        amount: "Rp 1.250.000",
        originalAmount: "Rp 1.350.000",
        dueDate: "2025-06-15",
        issueDate: "2025-05-15",
        billNumber: "ALZ202505004567",
        category: "Insurance",
        status: "Belum Bayar",
        isOverdue: false,
        isPriority: false,
        paymentMethod: "Auto Debit",
        description: "Premi asuransi kesehatan keluarga",
        details: ["Coverage: Keluarga (4 orang)", "Limit Tahunan: Rp 500 Juta", "Cashless: 1000+ RS", "Diskon: 7%"],
        discount: 7,
        badge: "Premi",
        location: "Jakarta Barat",
        accountNumber: "POL789012345"
      }
    ],
    jatuhTempo: [
      {
        id: 5,
        title: "PDAM Air Minum",
        company: "PDAM Jakarta",
        amount: "Rp 175.000",
        originalAmount: "Rp 175.000",
        dueDate: "2025-05-30",
        issueDate: "2025-05-01",
        billNumber: "PDM202505005678",
        category: "Utilities",
        status: "Jatuh Tempo",
        isOverdue: true,
        isPriority: true,
        paymentMethod: "Transfer Bank",
        description: "Tagihan air bulan Mei 2025",
        details: ["Pemakaian: 15 m³", "Tarif: Rp 10.500/m³", "Beban Tetap: Rp 17.500", "Denda: Rp 5.000"],
        discount: 0,
        badge: "Terlambat",
        location: "Jakarta Timur",
        accountNumber: "PDM123456789"
      },
      {
        id: 6,
        title: "Netflix Premium",
        company: "Netflix Inc.",
        amount: "Rp 186.000",
        originalAmount: "Rp 199.000",
        dueDate: "2025-05-29",
        issueDate: "2025-04-29",
        billNumber: "NET202505006789",
        category: "Subscription",
        status: "Jatuh Tempo",
        isOverdue: true,
        isPriority: false,
        paymentMethod: "Credit Card",
        description: "Langganan Netflix Premium 4K",
        details: ["Plan: Premium 4K", "Devices: 4 simultan", "Download: Unlimited", "Promo: 7% off"],
        discount: 7,
        badge: "Berlangganan",
        location: "Global Service",
        accountNumber: "user@email.com"
      }
    ],
    terbayar: [
      {
        id: 7,
        title: "Shopee PayLater",
        company: "ShopeePay Indonesia",
        amount: "Rp 2.450.000",
        originalAmount: "Rp 2.650.000",
        dueDate: "2025-05-25",
        issueDate: "2025-05-01",
        billNumber: "SPL202505007890",
        category: "PayLater",
        status: "Lunas",
        isOverdue: false,
        isPriority: false,
        paymentMethod: "ShopeePay",
        description: "Cicilan PayLater bulan Mei 2025",
        details: ["Limit: Rp 10.000.000", "Sisa Limit: Rp 7.550.000", "Tenor: 12 bulan", "Cashback: Rp 200.000"],
        discount: 8,
        badge: "Lunas",
        location: "Digital Payment",
        accountNumber: "081234567890"
      },
      {
        id: 8,
        title: "Spotify Premium",
        company: "Spotify AB",
        amount: "Rp 54.990",
        originalAmount: "Rp 64.990",
        dueDate: "2025-05-20",
        issueDate: "2025-04-20",
        billNumber: "SPT202505008901",
        category: "Subscription",
        status: "Lunas",
        isOverdue: false,
        isPriority: false,
        paymentMethod: "Credit Card",
        description: "Langganan Spotify Premium Individual",
        details: ["Plan: Premium Individual", "Audio: High Quality", "Download: Unlimited", "Student: 15% off"],
        discount: 15,
        badge: "Lunas",
        location: "Digital Service",
        accountNumber: "user@email.com"
      }
    ]
  };

const categories = [
  { name: "semua", label: "Semua", icon: <CreditCard size={20} />, color: "from-cyan-400 to-teal-500" },
  { name: "pulsa", label: "Pulsa", icon: <Phone size={20} />, color: "from-pink-400 to-rose-500" },
  { name: "internet", label: "Internet", icon: <Wifi size={20} />, color: "from-purple-400 to-indigo-500" },
  { name: "listrik", label: "Listrik", icon: <Lightbulb size={20} />, color: "from-yellow-400 to-amber-500" },
  { name: "air", label: "Air", icon: <Droplets size={20} />, color: "from-blue-400 to-cyan-500" },
  { name: "bank", label: "Bank", icon: <Banknote size={20} />, color: "from-green-400 to-emerald-500" },
  { name: "asuransi", label: "Asuransi", icon: <ShieldCheck size={20} />, color: "from-orange-400 to-red-500" }
];


  const getDetailIcon = (detail) => {
    if (detail.includes('kWh') || detail.includes('Listrik')) return <Zap className="w-3 h-3" />;
    if (detail.includes('Mbps') || detail.includes('Internet')) return <Wifi className="w-3 h-3" />;
    if (detail.includes('Limit') || detail.includes('Credit')) return <CreditCard className="w-3 h-3" />;
    if (detail.includes('Coverage') || detail.includes('Asuransi')) return <Shield className="w-3 h-3" />;
    if (detail.includes('Plan') || detail.includes('Premium')) return <Star className="w-3 h-3" />;
    if (detail.includes('Cashback') || detail.includes('Diskon')) return <DollarSign className="w-3 h-3" />;
    return <FileText className="w-3 h-3" />;
  };

  const filteredData = activeCategory === 'semua' 
    ? billsData[activeTab] 
    : billsData[activeTab]?.filter(item => item.category.toLowerCase() === activeCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      'Utilities': <Zap className="w-5 h-5" />,
      'Internet': <Wifi className="w-5 h-5" />,
      'Credit Card': <CreditCard className="w-5 h-5" />,
      'Insurance': <Shield className="w-5 h-5" />,
      'Subscription': <Play className="w-5 h-5" />,
      'PayLater': <Wallet className="w-5 h-5" />
    };
    return icons[category] || <FileText className="w-5 h-5" />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Belum Bayar': return 'text-orange-600 bg-orange-100';
      case 'Jatuh Tempo': return 'text-red-600 bg-red-100';
      case 'Lunas': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
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
                <Receipt className="w-5 h-5 text-cyan-600" />
              </div>
              <h1 className="text-white text-xl font-bold">BillHub</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="w-6 h-6 text-white cursor-pointer" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="relative">
              <Wallet className="w-6 h-6 text-white cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <User className="w-4 h-4 text-cyan-200" />
          <p className="text-cyan-100 text-sm">John Doe - Premium Account</p>
        </div>
      </div>

      {/* Summary Card */}
      <div className="relative z-10 -mt-16 mb-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-6 mx-auto w-[90%] max-w-md shadow-xl">
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Total Tagihan Tertunda</h2>
            <div className="text-3xl font-bold text-red-600 mb-1">
              Rp {totalOutstanding.toLocaleString('id-ID')}
            </div>
            <p className="text-sm text-gray-600">4 tagihan belum dibayar</p>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button className="bg-cyan-50 rounded-xl p-3 hover:bg-cyan-100 transition-colors">
              <div className="text-xs text-cyan-600 mb-1 flex items-center gap-1">
                <CreditCard className="w-3 h-3" />
                Bayar Semua
              </div>
              <div className="text-sm font-bold text-cyan-700">Auto Payment</div>
            </button>
            <button className="bg-green-50 rounded-xl p-3 hover:bg-green-100 transition-colors">
              <div className="text-xs text-green-600 mb-1 flex items-center gap-1">
                <Download className="w-3 h-3" />
                Download
              </div>
              <div className="text-sm font-bold text-green-700">Laporan PDF</div>
            </button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-red-600">4</div>
              <div className="text-xs text-gray-600">Tertunda</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">2</div>
              <div className="text-xs text-gray-600">Lunas</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600">2</div>
              <div className="text-xs text-gray-600">Jatuh Tempo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
   <div className="px-4 mb-6">
  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
    <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
       Kategori Tagihan
    </h3>
    <div className="flex overflow-x-auto space-x-4 pb-2 snap-x snap-mandatory scroll-smooth">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(category.name)}
          className={`flex-shrink-0 w-40 h-16 rounded-xl flex items-center px-4 transition-all duration-300 snap-start ${
            activeCategory === category.name
              ? 'bg-[#ECFEFF] ring-2 ring-[#06B6D4] text-[#06B6D4]'
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
            { key: 'semua', label: 'Semua', icon: FileText },
            { key: 'jatuhTempo', label: 'Jatuh Tempo', icon: AlertCircle },
            { key: 'terbayar', label: 'Terbayar', icon: CheckCircle }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Bill Cards */}
      <div className="px-4 space-y-6 pb-20">
        {filteredData?.map((bill, index) => (
          <div key={bill.id} className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
            bill.isOverdue ? 'ring-2 ring-red-200' : ''
          }`}>
            <div className="relative">
              <div className={`h-2 ${
                bill.status === 'Lunas' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                bill.isOverdue ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                'bg-gradient-to-r from-cyan-500 to-cyan-600'
              }`}></div>
              
              {/* Header Section */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        {getCategoryIcon(bill.category)}
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-lg text-xs font-bold ${getStatusColor(bill.status)}`}>
                          {bill.badge}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{bill.company}</p>
                      </div>
                      {bill.isOverdue && (
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{bill.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{bill.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Jatuh tempo: {new Date(bill.dueDate).toLocaleDateString('id-ID')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>{bill.billNumber}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    {bill.originalAmount !== bill.amount && (
                      <p className="text-sm text-gray-400 line-through">{bill.originalAmount}</p>
                    )}
                    <p className={`font-bold text-2xl ${
                      bill.status === 'Lunas' ? 'text-green-600' : 
                      bill.isOverdue ? 'text-red-600' : 'text-cyan-600'
                    }`}>
                      {bill.amount}
                    </p>
                    {bill.discount > 0 && (
                      <p className="text-xs text-green-600 font-medium">Hemat {bill.discount}%</p>
                    )}
                  </div>
                </div>
                
                {/* Account Info */}
                <div className="bg-gray-50 rounded-xl p-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">No. Akun/Pelanggan:</span>
                    <span className="font-mono font-medium">{bill.accountNumber}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-gray-600">Metode Pembayaran:</span>
                    <span className="font-medium">{bill.paymentMethod}</span>
                  </div>
                </div>
                
                {/* Bill Details */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Detail Tagihan:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {bill.details.slice(0, 4).map((detail, idx) => (
                      <div key={idx} className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
                        {getDetailIcon(detail)}
                        <span className="text-xs text-gray-700 ml-2">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleSelectBill(bill.id)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        selectedBills.has(bill.id) 
                          ? 'bg-cyan-600 border-cyan-600' 
                          : 'border-gray-300 hover:border-cyan-400'
                      }`}
                    >
                      {selectedBills.has(bill.id) && (
                        <CheckCircle className="w-3 h-3 text-white" />
                      )}
                    </button>
                    <span className="text-sm text-gray-600">Pilih untuk pembayaran massal</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      Detail
                    </button>
                    {bill.status !== 'Lunas' && (
                      <button 
                        onClick={() => payBill(bill)}
                        className={`px-6 py-2 rounded-xl text-sm font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-1 ${
                          bill.isOverdue 
                            ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700'
                            : 'bg-gradient-to-r from-cyan-600 to-cyan-700 text-white hover:from-cyan-700 hover:to-cyan-800'
                        }`}
                      >
                        <CreditCard className="w-4 h-4" />
                        {bill.isOverdue ? 'Bayar Sekarang' : 'Bayar'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Floating Action Button */}
      <div className="fixed bottom-6 right-4 flex flex-col gap-3">
        <button className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
          <Plus className="w-6 h-6 text-white" />
        </button>
        <button className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-full shadow-2xl flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300">
          <CreditCard className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
};

export default BillingPage;