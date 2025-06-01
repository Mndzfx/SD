import React, { useState } from 'react';

const Web3Page = ({ cryptoWallet, connectWallet, disconnectWallet, simulateSendTransaction, isLoading }) => {
  const [sendToAddress, setSendToAddress] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [sendCurrency, setSendCurrency] = useState('ETH');

  const handleSend = () => {
    if (!sendToAddress || !sendAmount || isNaN(parseFloat(sendAmount)) || parseFloat(sendAmount) <= 0) {
      alert('Mohon isi alamat dan jumlah yang valid.');
      return;
    }
    simulateSendTransaction(sendToAddress, parseFloat(sendAmount), sendCurrency);
    setSendToAddress('');
    setSendAmount('');
  };

  return (
    <div className="flex-grow mx-4 mt-4 overflow-y-auto">
      <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white text-center" style={{ color: '#59e094' }}>
          <i className="fas fa-wallet mr-2"></i> Dompet Web3 Fluxo
        </h2>

        {!cryptoWallet.isConnected ? (
          <div className="text-center py-8">
            <p className="text-gray-300 mb-4">Hubungkan dompet Anda untuk memulai interaksi Web3.</p>
            <button
              onClick={connectWallet}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center mx-auto"
              disabled={isLoading}
            >
              {isLoading ? (
                <i className="fas fa-spinner fa-spin mr-2"></i>
              ) : (
                <i className="fas fa-plug mr-2"></i>
              )}
              {isLoading ? 'Menghubungkan...' : 'Hubungkan Dompet'}
            </button>
            <p className="text-gray-500 text-sm mt-3">
                Ini adalah simulasi. Kunci pribadi Anda tetap aman dan tidak dikirimkan.
            </p>
          </div>
        ) : (
          <div>
            <div className="bg-gray-800 rounded-xl p-4 mb-4 text-center border border-gray-700">
              <p className="text-gray-400 text-sm mb-1">Terhubung ke: <span className="font-semibold text-white">{cryptoWallet.networkName}</span></p>
              <p className="text-gray-400 text-sm mb-2">Alamat Anda:</p>
              <p className="text-white break-all text-lg font-mono mb-2">
                {cryptoWallet.currentAccount}
              </p>
              <button
                onClick={() => navigator.clipboard.writeText(cryptoWallet.currentAccount)}
                className="text-green-400 text-sm hover:underline"
              >
                <i className="fas fa-copy mr-1"></i> Salin Alamat
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800 rounded-xl p-4 text-center">
                <p className="text-gray-300 mb-1">Saldo ETH</p>
                <p className="text-white text-2xl font-bold">{cryptoWallet.balanceETH.toFixed(4)} ETH</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 text-center">
                <p className="text-gray-300 mb-1">Saldo FLX (Rewards)</p>
                <p className="text-white text-2xl font-bold">{cryptoWallet.balanceFLX.toFixed(2)} FLX</p>
              </div>
            </div>

            {/* Send Transaction Section */}
            <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Kirim Aset</h3>
              <input
                type="text"
                placeholder="Alamat Penerima (0x...)"
                value={sendToAddress}
                onChange={(e) => setSendToAddress(e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-lg mb-3 focus:outline-none focus:ring-2"
                style={{'--tw-ring-color': '#59e094'}}
              />
              <div className="flex space-x-2 mb-3">
                <input
                  type="number"
                  placeholder="Jumlah"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                  className="flex-grow p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2"
                  style={{'--tw-ring-color': '#59e094'}}
                />
                <select
                  value={sendCurrency}
                  onChange={(e) => setSendCurrency(e.target.value)}
                  className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2"
                  style={{'--tw-ring-color': '#59e094'}}
                >
                  <option value="ETH">ETH</option>
                  <option value="FLX">FLX</option>
                </select>
              </div>
              <button
                onClick={handleSend}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <i className="fas fa-paper-plane mr-2"></i> Kirim
              </button>
            </div>

            {/* Recent Transactions */}
            <h3 className="text-lg font-semibold text-white mb-3">Transaksi Terbaru</h3>
            <div className="max-h-48 overflow-y-auto custom-scrollbar bg-gray-800 rounded-xl p-3 border border-gray-700">
              {cryptoWallet.transactions.length > 0 ? (
                cryptoWallet.transactions.map(tx => (
                  <div key={tx.id} className="flex justify-between items-center text-sm mb-2 p-2 rounded bg-gray-700">
                    <div className="flex flex-col">
                      <span className={`${tx.type === 'Reward' ? 'text-yellow-400' : tx.type === 'Send' ? 'text-red-400' : 'text-green-400'} font-medium`}>
                        {tx.type} {tx.currency} {tx.to ? `ke ${tx.to.substring(0, 6)}...` : ''}
                      </span>
                      <span className="text-gray-400 text-xs">{tx.date} - Status: <span className={tx.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}>{tx.status}</span></span>
                    </div>
                    <span className={`font-semibold ${tx.type === 'Reward' || tx.type === 'Receive' ? 'text-green-400' : 'text-red-400'}`}>
                      {tx.type === 'Receive' || tx.type === 'Reward' ? '+' : '-'} {tx.amount} {tx.currency}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-4">Belum ada transaksi.</p>
              )}
            </div>

            {/* Dapp Interaction (Placeholder) */}
            <div className="mt-6 text-center">
                <button
                    onClick={() => alert('Fitur interaksi DApp sedang dikembangkan!')}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center mx-auto"
                >
                    <i className="fas fa-puzzle-piece mr-2"></i> Jelajahi DApps
                </button>
                <p className="text-gray-500 text-sm mt-2">
                    (Simulasi: Klik untuk melihat fitur interaksi DApp)
                </p>
            </div>

            <button
              onClick={disconnectWallet}
              className="w-full mt-6 px-4 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center"
            >
              <i className="fas fa-unlink mr-2"></i> Putuskan Dompet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Web3Page;