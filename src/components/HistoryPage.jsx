import React from 'react';

const HistoryPage = () => {
  // Data riwayat simulasi
  const historyItems = [
    { id: 1, url: 'https://www.github.com', title: 'GitHub: Where the world builds software', time: '10:05 AM', date: 'Hari Ini' },
    { id: 2, url: 'https://www.stackoverflow.com', title: 'Stack Overflow - Where Developers Learn', time: '09:45 AM', date: 'Hari Ini' },
    { id: 3, url: 'https://fluxobrowser.app/web3', title: 'Fluxo Web3 Wallet', time: '09:10 AM', date: 'Hari Ini' },
    { id: 4, url: 'https://news.cryptocurrency.com/latest-prices', title: 'Cryptocurrency News: Latest Prices', time: 'Kemarin', date: 'Kemarin' },
    { id: 5, url: 'https://medium.com/blockchain-tech', title: 'Blockchain Technology Explained', time: 'Kemarin', date: 'Kemarin' },
    { id: 6, url: 'https://www.google.com/search?q=web3+defi', title: 'web3 defi - Google Search', time: 'Minggu Lalu', date: 'Minggu Lalu' },
    { id: 7, url: 'https://www.youtube.com/watch?v=blockchain-intro', title: 'Introduction to Blockchain - YouTube', time: 'Minggu Lalu', date: 'Minggu Lalu' },
  ];

  const groupedHistory = historyItems.reduce((acc, item) => {
    (acc[item.date] = acc[item.date] || []).push(item);
    return acc;
  }, {});

  return (
    <div className="flex-grow mx-4 mt-4 overflow-y-auto custom-scrollbar">
      <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Riwayat Penjelajahan</h2>

        {Object.entries(groupedHistory).map(([date, items]) => (
          <div key={date} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-3" style={{ color: '#59e094' }}>{date}</h3>
            <div className="space-y-3">
              {items.map(item => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <p className="text-white font-medium truncate">{item.title}</p>
                  <p className="text-gray-400 text-sm truncate">{item.url}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.time}</p>
                </a>
              ))}
            </div>
          </div>
        ))}

        {historyItems.length === 0 && (
          <p className="text-gray-400 text-center py-10">Tidak ada riwayat penjelajahan.</p>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;