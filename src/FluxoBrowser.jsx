import React from 'react';
import useBrowserState from './hooks/useBrowserState.jsx';
import HomeContent from './components/HomeContent';
import SearchResults from './components/SearchResults';
import BookmarksPage from './components/BookmarksPage';
import MessagesPage from './components/MessagesPage';
import MoreOptionsPopup from './components/MoreOptionsPopup';
import SearchOverlay from './components/SearchOverlay';
import TabBar from './components/TabBar';
import Web3Page from './components/Web3Page';
// Import halaman-halaman baru
import SettingsPage from './components/SettingsPage';
import HistoryPage from './components/HistoryPage';
import FluxoLogo from './assets/logo2.png'; // Pastikan ini path yang benar ke logo Anda
import DownloadsPage from './components/DownloadsPage';

const FluxoBrowser = () => {
  const {
    searchValue, setSearchValue,
    privacyStats,
    showStats, setShowStats,
    currentPage, setCurrentPage, // <-- Pastikan ini ada dari useBrowserState
    showSearchOverlay, setShowSearchOverlay,
    searchQuery, setSearchQuery,
    showMorePopup, setShowMorePopup,
    showSearchResults, setShowSearchResults, // <-- Pastikan ini ada dari useBrowserState
    searchResults, setSearchResults, // <-- Pastikan setSearchResults ini ada dari useBrowserState
    isLoading,
    tabs, setTabs,
    activeTabId, setActiveTabId,
    bookmarks,
    newsFeed,
    moreOptions,
    performSearch,
    addNewTab,
    closeTab,
    switchTab,
    currentSearchType, setCurrentSearchType, // <-- Pastikan ini ada dari useBrowserState
    cryptoWallet, connectWallet, disconnectWallet, simulateSendTransaction,
    isIncognitoMode,
    isAntiPhishingActive, setIsAntiPhishingActive,
    isAdBlockerActive, setIsAdBlockerActive,
    isNetworkOptimized, setIsNetworkOptimized,
    performanceStats
  } = useBrowserState(); // Destrukturisasi semua yang dibutuhkan dari hook

  return (
    <div className="min-h-screen flex flex-col text-white"
      style={{
        fontFamily: 'Inter, sans-serif',
        backgroundColor: '#002631',
        scrollBehavior: 'smooth',
        overflowY: 'scroll',
      }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #333;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #59e094;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #47b875;
        }
      `}</style>

      <header className="pt-4 px-4 pb-2 flex items-center justify-between" style={{ backgroundColor: '#002631' }}>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#59e094' }}>
            {/* Perbaiki kelas untuk logo di header */}
            <img src={FluxoLogo} alt="Fluxo Icon" className="w-6 h-6 object-contain" />
          </div>
          <div className="font-bold text-lg tracking-wide" style={{ color: '#59e094' }}>
            Fluxo
          </div>
        </div>

        <div className="text-xs text-gray-400">
          {tabs.length} tab{tabs.length > 1 ? 's' : ''}
        </div>
      </header>

      <TabBar
        tabs={tabs}
        activeTabId={activeTabId}
        switchTab={switchTab}
        closeTab={closeTab}
        addNewTab={addNewTab}
      />

      <div className="flex items-center bg-gray-800 rounded-2xl px-4 py-2 mx-4 mt-2 space-x-3 shadow-lg">
        <button
          aria-label="Tor Network Status"
          className="text-lg focus:outline-none"
          style={{ color: '#59e094' }}
          title="Connected to Fluxo Secure Network"
        >
          <i className="fas fa-shield-alt"></i>
        </button>
        <input
          type="text"
          placeholder="Telusuri dengan Google atau ketik URL"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClick={() => setShowSearchOverlay(true)}
          className="bg-gray-800 text-gray-300 placeholder-gray-400 rounded-xl flex-grow text-sm focus:outline-none px-3 py-2 cursor-pointer"
          readOnly
        />
        <button
          aria-label="Refresh"
          className="text-lg focus:outline-none"
          style={{ color: '#59e094' }}
          onClick={() => {
            // Pastikan semua setter ini berasal dari destructuring useBrowserState()
            setSearchValue('');
            setShowSearchResults(false);
            setSearchResults([]); // <-- Ini yang menyebabkan error, sekarang sudah didefinisikan
            setCurrentPage('home'); // <-- Ini juga
            setCurrentSearchType('all'); // <-- Dan ini
          }}
        >
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>

      {/* Conditional Rendering of Pages */}
      {currentPage === 'home' && (
        <HomeContent
          showStats={showStats}
          privacyStats={privacyStats}
          setShowStats={setShowStats}
          performanceStats={performanceStats}
          isIncognitoMode={isIncognitoMode}
        />
      )}
      {currentPage === 'bookmarks' && <BookmarksPage bookmarks={bookmarks} />}
      {currentPage === 'news' && <MessagesPage newsFeed={newsFeed} />}
      {currentPage === 'web3' && (
        <Web3Page
          cryptoWallet={cryptoWallet}
          connectWallet={connectWallet}
          disconnectWallet={disconnectWallet}
          simulateSendTransaction={simulateSendTransaction}
          isLoading={isLoading}
        />
      )}
      {currentPage === 'search' && showSearchResults && (
        <SearchResults
          searchValue={searchValue}
          searchResults={searchResults}
          isLoading={isLoading}
          currentSearchType={currentSearchType}
          setCurrentSearchType={setCurrentSearchType}
          performSearch={performSearch}
        />
      )}
      {/* Render halaman-halaman baru */}
      {currentPage === 'settings' && (
        <SettingsPage
          isAntiPhishingActive={isAntiPhishingActive}
          setIsAntiPhishingActive={setIsAntiPhishingActive}
          isAdBlockerActive={isAdBlockerActive}
          setIsAdBlockerActive={setIsAdBlockerActive}
          isNetworkOptimized={isNetworkOptimized}
          setIsNetworkOptimized={setIsNetworkOptimized}
        />
      )}
      {currentPage === 'history' && <HistoryPage />}
      {currentPage === 'downloads' && <DownloadsPage />}


      <div style={{ height: '60px' }}></div>

      <nav className="fixed bottom-0 left-0 right-0 px-8 py-3 flex justify-between items-center text-white select-none rounded-t-2xl shadow-2xl border-t z-10"
        style={{ backgroundColor: '#002631', borderTopColor: '#1a4a54', height: '50px' }}>
        <button
          aria-label="Home"
          className="flex items-center justify-center focus:outline-none hover:opacity-80 transition-all transform hover:scale-110"
          style={{ color: currentPage === 'home' ? '#59e094' : '#9CA3AF' }}
          onClick={() => {
            setCurrentPage('home');
            setShowSearchResults(false);
            setSearchResults([]);
            setCurrentSearchType('all');
          }}
        >
          <i className="fas fa-home text-xl"></i>
        </button>
        <button
          aria-label="Bookmarks"
          className="flex items-center justify-center focus:outline-none hover:opacity-80 transition-all transform hover:scale-110"
          style={{ color: currentPage === 'bookmarks' ? '#59e094' : '#9CA3AF' }}
          onClick={() => {
            setCurrentPage('bookmarks');
            setShowSearchResults(false);
            setSearchResults([]);
            setCurrentSearchType('all');
          }}
        >
          <i className="fas fa-bookmark text-xl"></i>
        </button>
        <button
          aria-label="Web3 Wallet"
          className="flex items-center justify-center focus:outline-none hover:opacity-80 transition-all transform hover:scale-110"
          style={{ color: currentPage === 'web3' ? '#59e094' : '#9CA3AF' }}
          onClick={() => {
            setCurrentPage('web3');
            setShowSearchResults(false);
            setSearchResults([]);
            setCurrentSearchType('all');
          }}
        >
          <i className="fas fa-wallet text-xl"></i>
        </button>
        <button
          aria-label="Search"
          className="flex items-center justify-center focus:outline-none hover:opacity-80 transition-all transform hover:scale-110"
          style={{ color: showSearchOverlay || currentPage === 'search' ? '#59e094' : '#9CA3AF' }}
          onClick={() => setShowSearchOverlay(true)}
        >
          <i className="fas fa-search text-xl"></i>
        </button>
        <button
          aria-label="News and Updates"
          className="relative flex items-center justify-center focus:outline-none hover:opacity-80 transition-all transform hover:scale-110"
          style={{ color: currentPage === 'news' ? '#59e094' : '#9CA3AF' }}
          onClick={() => {
            setCurrentPage('news');
            setShowSearchResults(false);
            setSearchResults([]);
            setCurrentSearchType('all');
          }}
        >
          <div className="relative">
            <i className="fas fa-newspaper text-xl"></i>
          </div>
        </button>
        <button
          aria-label="More options"
          className="flex items-center justify-center focus:outline-none hover:opacity-80 transition-all transform hover:scale-110"
          style={{ color: showMorePopup ? '#59e094' : '#9CA3AF' }}
          onClick={() => setShowMorePopup(true)}
        >
          <i className="fas fa-ellipsis-h text-xl"></i>
        </button>
      </nav>

      {showSearchOverlay && (
        <SearchOverlay
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          performSearch={performSearch}
          setShowSearchOverlay={setShowSearchOverlay}
          currentSearchType={currentSearchType} // Pastikan ini juga dilewatkan
          setCurrentSearchType={setCurrentSearchType} // Dan ini
        />
      )}
      {showMorePopup && (
        <MoreOptionsPopup
          moreOptions={moreOptions}
          setShowMorePopup={setShowMorePopup}
          setCurrentPage={setCurrentPage} // Jika pop-up ini bisa mengubah halaman
          setShowSearchResults={setShowSearchResults} // Jika pop-up ini bisa memengaruhi hasil pencarian
          setSearchResults={setSearchResults} // Jika pop-up ini bisa mereset hasil pencarian
          setCurrentSearchType={setCurrentSearchType} // Jika pop-up ini bisa mereset tipe pencarian
        />
      )}

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
    </div>
  );
};

export default FluxoBrowser;