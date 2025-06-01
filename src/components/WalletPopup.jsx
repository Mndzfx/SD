import React from 'react';

const WalletPopup = ({ cryptoWallet, setShowWalletPopup }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Dompet Fluxo Anda</h2>
          <button onClick={() => setShowWalletPopup(false)} className="text-gray-400 hover:text-white text-xl">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="mb-4 text-center">
          <p className="text-gray-400 text-sm mb-1">Alamat Dompet:</p>
          <p className="text-white break-all text-lg font-mono">{cryptoWallet.address}</p>
          <button
            onClick={() => navigator.clipboard.writeText(cryptoWallet.address)}
            className="text-green-400 text-sm hover:underline mt-1"
          >
            <i className="fas fa-copy mr-1"></i> Salin Alamat
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-300">Saldo ETH:</p>
            <p className="text-white text-lg font-semibold">{cryptoWallet.balanceETH.toFixed(4)} ETH</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-300">Saldo FLX (Rewards):</p>
            <p className="text-white text-lg font-semibold">{cryptoWallet.balanceFLX.toFixed(2)} FLX</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">Transaksi Terbaru</h3>
        <div className="max-h-40 overflow-y-auto custom-scrollbar">
          {cryptoWallet.transactions.length > 0 ? (
            cryptoWallet.transactions.map(tx => (
              <div key={tx.id} className="flex justify-between items-center text-sm mb-2 p-2 rounded bg-gray-700">
                <div className="flex flex-col">
                  <span className={`${tx.type === 'Reward' ? 'text-yellow-400' : 'text-green-400'}`}>
                    {tx.type} {tx.currency}
                  </span>
                  <span className="text-gray-400 text-xs">{tx.date}</span>
                </div>
                <span className={`font-semibold ${tx.type === 'Reward' ? 'text-yellow-400' : 'text-green-400'}`}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount} {tx.currency}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">Belum ada transaksi.</p>
          )}
        </div>

        <div className="mt-6 flex justify-around space-x-2">
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <i className="fas fa-arrow-down"></i>
            <span>Terima</span>
          </button>
          <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
            <i className="fas fa-arrow-up"></i>
            <span>Kirim</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletPopup;