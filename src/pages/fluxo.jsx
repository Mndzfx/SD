import React, { useState, useEffect } from 'react';

const FluxoBrowser = () => {
  const [searchValue, setSearchValue] = useState('');
  const [privacyStats, setPrivacyStats] = useState({
    blocked: 0,
    dataSaved: 0,
    timeSaved: 0
  });
  const [showStats, setShowStats] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMorePopup, setShowMorePopup] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Halaman Baru', url: '', isActive: true, favicon: 'fas fa-globe' },
  ]);
  const [activeTabId, setActiveTabId] = useState(1);
  const [nextTabId, setNextTabId] = useState(2);

  // Load Google Custom Search script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse.js?cx=e28407b1e91854f6d';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const bookmarks = [
    { title: 'GitHub', url: 'github.com', icon: 'fab fa-github' },
    { title: 'Stack Overflow', url: 'stackoverflow.com', icon: 'fab fa-stack-overflow' },
    { title: 'Reddit', url: 'reddit.com', icon: 'fab fa-reddit' },
    { title: 'YouTube', url: 'youtube.com', icon: 'fab fa-youtube' }
  ];

  const messages = [
    { from: 'System', message: 'Fluxo Browser siap digunakan!', time: '10:30' },
    { from: 'Security', message: '15 tracker berhasil diblokir', time: '10:25' }
  ];

  const moreOptions = [
    { title: 'Pengaturan', icon: 'fas fa-cog' },
    { title: 'Riwayat', icon: 'fas fa-history' },
    { title: 'Download', icon: 'fas fa-download' },
    { title: 'Mode Privat', icon: 'fas fa-user-secret' },
    { title: 'Bantuan', icon: 'fas fa-question-circle' },
    { title: 'Tentang', icon: 'fas fa-info-circle' }
  ];

  const keyboardKeys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  const handleKeyPress = (key) => {
    if (key === 'backspace') {
      setSearchQuery(prev => prev.slice(0, -1));
    } else if (key === 'space') {
      setSearchQuery(prev => prev + ' ');
    } else {
      setSearchQuery(prev => prev + key);
    }
  };

  const performSearch = () => {
    if (searchQuery.trim()) {
      setShowSearchOverlay(false);
      setSearchValue(searchQuery);
      setShowSearchResults(true);
      setCurrentPage('search');
      
      // Update active tab title
      setTabs(prev => prev.map(tab => 
        tab.id === activeTabId 
          ? { 
              ...tab, 
              title: searchQuery.length > 20 ? searchQuery.substring(0, 20) + '...' : searchQuery, 
              url: `search?q=${encodeURIComponent(searchQuery)}`,
              favicon: 'fas fa-search'
            }
          : tab
      ));

      // Trigger Google Custom Search
      setTimeout(() => {
        if (window.google && window.google.search && window.google.search.cse) {
          const element = window.google.search.cse.element.getElement('searchbox-001');
          if (element) {
            element.execute(searchQuery);
          }
        }
      }, 100);
    }
  };

  const addNewTab = () => {
    const newTab = {
      id: nextTabId,
      title: 'Halaman Baru',
      url: '',
      isActive: false,
      favicon: 'fas fa-globe'
    };
    setTabs(prev => prev.map(tab => ({ ...tab, isActive: false })).concat(newTab));
    setActiveTabId(nextTabId);
    setNextTabId(prev => prev + 1);
    setCurrentPage('home');
    setShowSearchResults(false);
  };

  const closeTab = (tabId, e) => {
    e.stopPropagation();
    if (tabs.length === 1) return;
    
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    
    if (tabId === activeTabId && newTabs.length > 0) {
      const newActiveTab = newTabs[newTabs.length - 1];
      setActiveTabId(newActiveTab.id);
      setCurrentPage('home');
      setShowSearchResults(false);
    }
  };

  const switchTab = (tabId) => {
    setTabs(prev => prev.map(tab => ({ ...tab, isActive: tab.id === tabId })));
    setActiveTabId(tabId);
    
    const selectedTab = tabs.find(tab => tab.id === tabId);
    if (selectedTab && selectedTab.url.startsWith('search?q=')) {
      setCurrentPage('search');
      setShowSearchResults(true);
    } else {
      setCurrentPage('home');
      setShowSearchResults(false);
    }
  };

  const renderSearchResults = () => (
    <div className="flex-grow mx-4 mt-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2" style={{ color: '#59e094' }}>
          Hasil Pencarian
        </h2>
        <div className="text-sm text-gray-400 mb-4">
          Mencari: "{searchValue}"
        </div>
      </div>
      
      {/* Google Custom Search Container */}
      <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-4">
        <div id="google-search-container">
          <div className="gcse-search" data-enablehistory="true"></div>
        </div>
      </div>

      {/* Custom styling for Google Search */}
      <style >{`
        :global(.gsc-control-cse) {
          background-color: transparent !important;
          border: none !important;
          padding: 0 !important;
        }
        
        :global(.gsc-search-box) {
          background-color: rgba(31, 41, 55, 0.8) !important;
          border: 1px solid rgba(75, 85, 99, 0.5) !important;
          border-radius: 12px !important;
          margin-bottom: 20px !important;
        }
        
        :global(.gsc-input) {
          background-color: transparent !important;
          color: white !important;
          border: none !important;
          padding: 12px !important;
          font-size: 14px !important;
        }
        
        :global(.gsc-input::placeholder) {
          color: #9CA3AF !important;
        }
        
        :global(.gsc-search-button) {
          background-color: #59e094 !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 8px 16px !important;
          margin: 4px !important;
        }
        
        :global(.gsc-results) {
          background-color: transparent !important;
        }
        
        :global(.gsc-webResult) {
          background-color: rgba(31, 41, 55, 0.6) !important;
          border: 1px solid rgba(75, 85, 99, 0.3) !important;
          border-radius: 12px !important;
          margin-bottom: 16px !important;
          padding: 16px !important;
        }
        
        :global(.gsc-webResult .gs-title) {
          color: #59e094 !important;
        }
        
        :global(.gsc-webResult .gs-snippet) {
          color: #D1D5DB !important;
        }
        
        :global(.gsc-webResult .gs-visibleUrl) {
          color: #9CA3AF !important;
        }
        
        :global(.gsc-cursor-page) {
          color: #59e094 !important;
          background-color: rgba(89, 224, 148, 0.1) !important;
          border: 1px solid #59e094 !important;
          border-radius: 6px !important;
        }
        
        :global(.gsc-cursor-current-page) {
          background-color: #59e094 !important;
          color: #002631 !important;
        }
      `}</style>
    </div>
  );

  const renderHomePage = () => (
    <>
      {showStats && (
        <section className="relative mx-4 mt-4 bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-5 flex justify-between text-xs select-none shadow-lg">
          <div className="flex flex-col items-center space-y-1 w-1/3">
            <div className="flex items-center space-x-1 text-[11px] font-semibold" style={{ color: '#59e094' }}>
              <i className="fas fa-shield-alt"></i>
              <span>Status Privasi</span>
            </div>
            <div className="text-3xl font-light leading-none" style={{ color: '#59e094' }}>
              {privacyStats.blocked}
            </div>
            <div className="text-center leading-tight text-gray-300">
              Pelacak & Iklan
              <br />
              Diblokir
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1 w-1/3">
            <div className="text-indigo-400 text-3xl font-light leading-none">
              {privacyStats.dataSaved}
              <span className="text-sm align-top">KB</span>
            </div>
            <div className="text-center leading-tight text-gray-300">
              Perkiraan Data
              <br />
              Dihemat
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1 w-1/3">
            <div className="text-white text-3xl font-light leading-none">
              {privacyStats.timeSaved}
              <span className="text-sm align-top">s</span>
            </div>
            <div className="text-center leading-tight text-gray-300">
              Est. Penghematan Waktu
            </div>
          </div>
          <button
            aria-label="Toggle Privacy Stats"
            className="absolute top-3 right-3 text-white text-xs cursor-pointer focus:outline-none"
            title="Sembunyikan Statistik"
            onClick={() => setShowStats(false)}
          >
            <i className="fas fa-eye-slash"></i>
          </button>
        </section>
      )}

      <main className="relative flex-grow mx-4 mt-5 rounded-3xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful mountain landscape"
          className="w-full object-cover rounded-3xl"
          style={{ height: '450px' }}
        />
        <div className="absolute bottom-4 left-4 text-xs text-white font-semibold select-none bg-black bg-opacity-40 rounded-md px-2 py-1">
          Pemandangan Alam <span className="font-bold">Pegunungan Alpen</span>
        </div>
      </main>
    </>
  );

  const renderBookmarksPage = () => (
    <div className="flex-grow mx-4 mt-4">
      <h2 className="text-xl font-bold mb-4" style={{ color: '#59e094' }}>Bookmark</h2>
      <div className="space-y-3">
        {bookmarks.map((bookmark, index) => (
          <div key={index} className="bg-black bg-opacity-40 backdrop-blur-md rounded-xl p-4 flex items-center space-x-3">
            <i className={`${bookmark.icon} text-lg`} style={{ color: '#59e094' }}></i>
            <div>
              <div className="text-white font-medium">{bookmark.title}</div>
              <div className="text-gray-400 text-sm">{bookmark.url}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMessagesPage = () => (
    <div className="flex-grow mx-4 mt-4">
      <h2 className="text-xl font-bold mb-4" style={{ color: '#59e094' }}>Pesan</h2>
      <div className="space-y-3">
        {messages.map((message, index) => (
          <div key={index} className="bg-black bg-opacity-40 backdrop-blur-md rounded-xl p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="text-white font-medium">{message.from}</div>
              <div className="text-gray-400 text-xs">{message.time}</div>
            </div>
            <div className="text-gray-300 text-sm">{message.message}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMorePopup = () => (
    <div 
      className="fixed inset-0 z-40"
      onClick={() => setShowMorePopup(false)}
    >
      <div 
        className="absolute bottom-16 right-4 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 min-w-[200px]"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'slideUpFade 0.2s ease-out'
        }}
      >
        <style >{`
          @keyframes slideUpFade {
            from {
              opacity: 0;
              transform: translateY(10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>
        
        <div className="py-2">
          {moreOptions.map((option, index) => (
            <button
              key={index}
              className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-700 transition-colors text-left"
              onClick={() => {
                setShowMorePopup(false);
              }}
            >
              <i className={`${option.icon} text-lg`} style={{ color: '#59e094' }}></i>
              <div className="text-white text-sm font-medium">{option.title}</div>
            </button>
          ))}
        </div>
        
        <div className="border-t border-gray-700"></div>
        
        <div className="px-4 py-2">
          <div className="text-gray-400 text-xs">
            Fluxo Browser v1.0
          </div>
        </div>
      </div>
    </div>
  );

  const renderSearchOverlay = () => (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex flex-col">
      <div className="p-4 flex items-center space-x-3">
        <button 
          onClick={() => setShowSearchOverlay(false)}
          className="text-white text-xl"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="flex-grow bg-gray-800 rounded-xl px-4 py-3 flex items-center space-x-3">
          <i className="fas fa-search text-gray-400"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && performSearch()}
            placeholder="Cari di Google..."
            className="bg-transparent text-white flex-grow focus:outline-none"
            autoFocus
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-gray-400"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>

      <div className="flex-grow flex items-end">
        <div className="w-full bg-gray-800 p-4 rounded-t-2xl">
          <div className="space-y-2">
            {keyboardKeys.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center space-x-1">
                {row.map((key) => (
                  <button
                    key={key}
                    onClick={() => handleKeyPress(key)}
                    className="bg-gray-700 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors min-w-[40px]"
                  >
                    {key.toUpperCase()}
                  </button>
                ))}
              </div>
            ))}
            
            <div className="flex justify-center space-x-1 mt-3">
              <button
                onClick={() => handleKeyPress('space')}
                className="bg-gray-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                Space
              </button>
              <button
                onClick={() => handleKeyPress('backspace')}
                className="bg-gray-700 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                <i className="fas fa-backspace"></i>
              </button>
              <button
                onClick={performSearch}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Cari
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col text-white"
         style={{
           fontFamily: 'Inter, sans-serif',
           backgroundColor: '#002631',
           scrollBehavior: 'smooth',
           overflowY: 'scroll',
         }}>

      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `}</style>

      <header className="pt-4 px-4 pb-2 flex items-center justify-between" style={{ backgroundColor: '#002631' }}>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#59e094' }}>
            <i className="fas fa-globe text-sm" style={{ color: '#002631' }}></i>
          </div>
          <div className="font-bold text-lg tracking-wide" style={{ color: '#59e094' }}>
            Fluxo
          </div>
        </div>
        
        <div className="text-xs text-gray-400">
          {tabs.length} tab{tabs.length > 1 ? 's' : ''}
        </div>
      </header>

      <div className="px-4 pb-2" style={{ backgroundColor: '#002631' }}>
        <div className="flex items-center space-x-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style >{`
            .tab-container::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <div className="flex space-x-2 tab-container">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`relative flex items-center space-x-2 px-3 py-2 rounded-t-lg cursor-pointer transition-all duration-200 min-w-[120px] max-w-[180px] ${
                  tab.id === activeTabId 
                    ? 'bg-gray-800 border-b-2' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                style={{
                  borderBottomColor: tab.id === activeTabId ? '#59e094' : 'transparent'
                }}
              >
                <i className={`${tab.favicon} text-xs text-gray-400`}></i>
                <span className="text-xs text-white truncate flex-grow">
                  {tab.title}
                </span>
                {tabs.length > 1 && (
                  <button
                    onClick={(e) => closeTab(tab.id, e)}
                    className="ml-1 w-4 h-4 rounded-full hover:bg-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fas fa-times text-xs"></i>
                  </button>
                )}
              </div>
            ))}
          </div>
          
          <button
            onClick={addNewTab}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-700 transition-colors"
            style={{ color: '#59e094' }}
            title="Tab Baru"
          >
            <i className="fas fa-plus text-sm"></i>
          </button>
        </div>
      </div>

      <div className="flex items-center bg-gray-800 rounded-2xl px-4 py-2 mx-4 mt-2 space-x-3 shadow-lg">
        <button
          aria-label="Tor Network Status"
          className="text-lg focus:outline-none"
          style={{ color: '#59e094' }}
          title="Connected to Fluxo Secure Network"
        >
          <i className="fas fa-onion"></i>
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
            setSearchValue('');
            setShowSearchResults(false);
            setCurrentPage('home');
          }}
        >
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>

      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'bookmarks' && renderBookmarksPage()}
      {currentPage === 'messages' && renderMessagesPage()}
      {currentPage === 'search' && showSearchResults && renderSearchResults()}

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
          }}
        >
          <i className="fas fa-bookmark text-xl"></i>
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
          aria-label="Notifications" 
          className="relative flex items-center justify-center focus:outline-none hover:opacity-80 transition-all transform hover:scale-110"
          style={{ color: currentPage === 'messages' ? '#59e094' : '#9CA3AF' }}
          onClick={() => {
            setCurrentPage('messages');
            setShowSearchResults(false);
          }}
        >
          <div className="relative">
            <i className="fas fa-comment-alt text-xl"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center font-semibold">
              1
            </span>
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

      {showSearchOverlay && renderSearchOverlay()}
      {showMorePopup && renderMorePopup()}

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
    </div>
  );
};

export default FluxoBrowser;