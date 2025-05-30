import React, { useState } from 'react';
import { 
  Hotel, 
  Mountain, 
  Building2, 
  Waves, 
  Zap,
  UtensilsCrossed,
  ArrowLeft,
  Search,
  Settings,
  Package
} from 'lucide-react';
import Navbar from '../components/navbar';


const JelajahinOrders = () => {
  const [activeTab, setActiveTab] = useState('Semua');

  const orders = [
    {
      id: 'JLJ-240530-001',
      date: '30 Mei 2025',
      title: 'Hotel Coral Yogyakarta',
      subtitle: '2 malam • Check-in: 5 Jun 2025',
      price: 'Rp 840.000',
      quantity: '1 kamar',
      status: 'Dikonfirmasi',
      icon: Hotel,
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
      actions: ['Detail', 'E-Voucher']
    },
    {
      id: 'JLJ-240529-002',
      date: '29 Mei 2025',
      title: 'Paket Wisata Bromo',
      subtitle: '3D2N • Keberangkatan: 15 Jun 2025',
      price: 'Rp 750.000',
      quantity: '1 orang',
      status: 'Menunggu Konfirmasi',
      icon: Mountain,
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      actions: ['Batalkan', 'Detail']
    },
    {
      id: 'JLJ-240528-003',
      date: '28 Mei 2025',
      title: 'Mataram Suites Bandung',
      subtitle: '1 malam • Check-out: 25 Mei 2025',
      price: 'Rp 350.000',
      quantity: '1 kamar',
      status: 'Selesai',
      icon: Building2,
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      actions: ['Ulasan', 'Pesan Lagi']
    },
    {
      id: 'JLJ-240525-004',
      date: '25 Mei 2025',
      title: 'Trip Pulau Seribu',
      subtitle: 'Day trip • Tanggal: 20 Mei 2025',
      price: 'Rp 325.000',
      quantity: '1 orang',
      status: 'Selesai',
      icon: Waves,
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
      actions: ['Ulasan', 'Pesan Lagi']
    },
    {
      id: 'JLJ-240520-005',
      date: '20 Mei 2025',
      title: 'Paket Kuliner Jakarta',
      subtitle: 'Food tour • Tanggal: 18 Mei 2025',
      price: 'Rp 200.000',
      quantity: '1 orang',
      status: 'Dibatalkan',
      icon: UtensilsCrossed,
      gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
      actions: ['Detail', 'Pesan Lagi']
    }
  ];

  const [orderList, setOrderList] = useState(orders);

  const tabs = [
    { name: 'Semua', count: 5 },
    { name: 'Menunggu', count: 1 },
    { name: 'Dikonfirmasi', count: 1 },
    { name: 'Selesai', count: 2 },
    { name: 'Dibatalkan', count: 1 }
  ];

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'menunggu konfirmasi':
        return 'bg-yellow-100 text-yellow-800';
      case 'dikonfirmasi':
        return 'bg-blue-100 text-blue-800';
      case 'selesai':
        return 'bg-green-100 text-green-800';
      case 'dibatalkan':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filterOrders = (filter) => {
    if (filter === 'Semua') return orderList;
    return orderList.filter(order => {
      if (filter === 'Menunggu') return order.status.includes('Menunggu');
      if (filter === 'Dikonfirmasi') return order.status.includes('Dikonfirmasi');
      if (filter === 'Selesai') return order.status.includes('Selesai');
      if (filter === 'Dibatalkan') return order.status.includes('Dibatalkan');
      return true;
    });
  };

  const handleAction = (action, orderId) => {
    switch (action) {
      case 'Batalkan':
        if (window.confirm('Apakah Anda yakin ingin membatalkan pesanan ini?')) {
          setOrderList(prev => prev.map(order => 
            order.id === orderId 
              ? { ...order, status: 'Dibatalkan', actions: ['Detail', 'Pesan Lagi'] }
              : order
          ));
        }
        break;
      case 'E-Voucher':
        alert('E-Voucher akan diunduh');
        break;
      case 'Pesan Lagi':
        alert('Mengarahkan ke halaman pemesanan...');
        break;
      case 'Ulasan':
        alert('Membuka halaman ulasan...');
        break;
      case 'Detail':
        alert('Membuka detail pesanan...');
        break;
      default:
        break;
    }
  };

  const filteredOrders = filterOrders(activeTab);

  return (
    <div className="max-w-sm mx-auto min-h-screen bg-gray-100 relative overflow-x-hidden">
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
       <div className="bg-gradient-to-br from-blue-500 to-blue-600 pb-10 lg:pb-16 rounded-b-3xl lg:rounded-b-2xl">
          {/* Header */}
          <div className="flex items-center p-6 lg:p-8 text-white">
           
            <div className="text-xl lg:text-3xl font-semibold flex-1">Pesanan Saya</div>
            <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white bg-opacity-20 border-none text-white cursor-pointer flex items-center justify-center hover:bg-opacity-30 transition-all">
              <Zap size={16} className="lg:w-5 lg:h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="px-6 lg:px-8 pb-5">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 lg:gap-4 lg:justify-center" style={{ minWidth: 'max-content' }}>
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`relative px-4 py-2.5 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-medium cursor-pointer transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
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
      <div className="p-6 bg-gray-100 rounded-t-3xl -mt-6 relative z-10">
        {/* Summary */}
        <div className="bg-white rounded-2xl p-5 mb-4 shadow-lg">
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-gray-600">Total Pesanan Bulan Ini</span>
            <span className="text-gray-900">5 pesanan</span>
          </div>
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-gray-600">Total Pengeluaran</span>
            <span className="text-gray-900">Rp 2.845.000</span>
          </div>
          <div className="flex justify-between text-sm pt-2 border-t border-gray-100 font-semibold">
            <span className="text-gray-600">Poin Terkumpul</span>
            <span className="text-gray-900">1.425 poin</span>
          </div>
        </div>

        {/* Order Cards */}
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl mb-4 overflow-hidden shadow-lg hover:transform hover:-translate-y-1 transition-all cursor-pointer"
          >
            {/* Order Header */}
            <div className="px-5 py-4 pb-3 border-b border-gray-100 flex justify-between items-center">
              <div className="text-sm text-gray-600 font-medium">{order.id}</div>
              <div className="text-xs text-gray-400">{order.date}</div>
            </div>

            {/* Order Body */}
            <div className="p-5">
              <div className="flex gap-3 mb-3">
                <div
                  className="w-15 h-15 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: order.gradient }}
                >
                  <order.icon size={28} />
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold text-gray-900 mb-1 leading-tight">
                    {order.title}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {order.subtitle}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-base font-bold text-blue-500">
                      {order.price}
                    </div>
                    <div className="text-sm text-gray-600">
                      {order.quantity}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Footer */}
            <div className="px-5 py-3 bg-gray-50 flex justify-between items-center">
              <div className={`px-3 py-1.5 rounded-2xl text-xs font-semibold ${getStatusClass(order.status)}`}>
                {order.status}
              </div>
              <div className="flex gap-2">
                {order.actions.map((action) => (
                  <button
                    key={action}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction(action, order.id);
                    }}
                    className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all hover:scale-105 ${
                      action === 'Batalkan'
                        ? 'bg-red-500 text-white'
                        : action === 'E-Voucher' || action === 'Pesan Lagi'
                        ? 'text-white'
                        : 'bg-white text-blue-500 border border-blue-500'
                    }`}
                    style={
                      action === 'E-Voucher' || action === 'Pesan Lagi'
                        ? { background: 'linear-gradient(135deg, #5B7FFF 0%, #4A6EE8 100%)' }
                        : {}
                    }
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}

        {filteredOrders.length === 0 && (
          <div className="text-center py-15 text-gray-600">
            <div className="flex justify-center mb-4 opacity-50">
              <Package size={64} />
            </div>
            <div className="text-lg font-semibold mb-2 text-gray-900">
              Tidak ada pesanan
            </div>
            <div className="text-sm mb-6 leading-relaxed">
              Belum ada pesanan pada kategori ini
            </div>
            <button 
              className="text-white border-none px-6 py-3 rounded-3xl text-sm font-semibold cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #5B7FFF 0%, #4A6EE8 100%)' }}
            >
              Mulai Jelajah
            </button>
          </div>
        )}

        {/* Bottom padding for navbar */}
        <div className="h-20"></div>
      </div>

      {/* Floating Filter Button */}
      <button
        onClick={() => alert('Membuka filter dan pengaturan...')}
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full border-none text-white cursor-pointer transition-all hover:scale-110 flex items-center justify-center"
        style={{ 
          background: 'linear-gradient(135deg, #5B7FFF 0%, #4A6EE8 100%)',
          boxShadow: '0 8px 24px rgba(91, 127, 255, 0.4)'
        }}
      >
        <Settings size={20} />
      </button>
      
      <Navbar />
    </div>
  );
};

export default JelajahinOrders;