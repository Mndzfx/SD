import { useState } from 'react';

const useBrowserState = () => {
  const [searchValue, setSearchValue] = useState('');
  const [privacyStats, setPrivacyStats] = useState({
    blocked: 0,
    dataSaved: 0,
    timeSaved: 0,
    threatsDetected: 0
  });
  const [showStats, setShowStats] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMorePopup, setShowMorePopup] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Halaman Baru', url: '', isActive: true, favicon: 'fas fa-globe' },
  ]);
  const [activeTabId, setActiveTabId] = useState(1);
  const [nextTabId, setNextTabId] = useState(2);
  const [currentSearchType, setCurrentSearchType] = useState('all');

  // --- Web3 / Wallet State (Mirip MetaMask) ---
  const [cryptoWallet, setCryptoWallet] = useState({
    isConnected: false,
    currentAccount: null,
    chainId: '0x1',
    networkName: 'Ethereum Mainnet',
    balanceETH: 0.00,
    balanceFLX: 0.00,
    transactions: [],
    pendingRequests: [],
  });
  // --- End Web3 / Wallet State ---

  // --- News Feed State ---
  const [newsFeed, setNewsFeed] = useState([]);
  // --- End News Feed State ---

  // --- New Features State ---
  const [isIncognitoMode, setIsIncognitoMode] = useState(false);
  const [isAntiPhishingActive, setIsAntiPhishingActive] = useState(true);
  const [isAdBlockerActive, setIsAdBlockerActive] = useState(true);
  const [isNetworkOptimized, setIsNetworkOptimized] = useState(false);
  const [performanceStats, setPerformanceStats] = useState({
    memorySaved: 0,
    cpuReduced: 0,
    networkSpeedBoost: 0
  });
  // --- End New Features State ---

  // --- Bookmarks yang Ditambahkan ---
  const bookmarks = [
    { title: 'GitHub', url: 'github.com', icon: 'fab fa-github' },
    { title: 'Stack Overflow', url: 'stackoverflow.com', icon: 'fab fa-stack-overflow' },
    { title: 'Reddit', url: 'reddit.com', icon: 'fab fa-reddit' },
    { title: 'YouTube', url: 'youtube.com', icon: 'fab fa-youtube' },
    { title: 'CoinGecko', url: 'coingecko.com', icon: 'fas fa-chart-line' }, // Baru
    { title: 'Etherscan', url: 'etherscan.io', icon: 'fas fa-search-dollar' }, // Baru
    { title: 'Decentraland', url: 'decentraland.org', icon: 'fas fa-vr-cardboard' }, // Baru
    { title: 'Medium', url: 'medium.com', icon: 'fab fa-medium' }, // Baru
    { title: 'Twitter', url: 'twitter.com', icon: 'fab fa-twitter' }, // Baru
    { title: 'Wikipedia', url: 'wikipedia.org', icon: 'fas fa-book' }, // Baru
    { title: 'Figma', url: 'figma.com', icon: 'fab fa-figma' }, // Baru
  ];
  // --- Akhir Bookmarks yang Ditambahkan ---


  const moreOptions = [
    {
      title: 'Pengaturan', icon: 'fas fa-cog',
      action: () => setCurrentPage('settings'),
      description: 'Sesuaikan preferensi dan fitur browser Anda.'
    },
    {
      title: 'Riwayat', icon: 'fas fa-history',
      action: () => setCurrentPage('history'),
      description: 'Lihat daftar situs web yang telah Anda kunjungi.'
    },
    {
      title: 'Download', icon: 'fas fa-download',
      action: () => setCurrentPage('downloads'),
      description: 'Kelola semua file yang telah Anda unduh.'
    },
    {
      title: 'Mode Privat', icon: 'fas fa-user-secret',
      action: () => setIsIncognitoMode(prev => !prev),
      isToggle: true, toggleState: isIncognitoMode,
      description: 'Menjelajah tanpa menyimpan riwayat atau cookie.'
    },
    {
      title: 'Anti-Phishing', icon: 'fas fa-shield-alt',
      action: () => setIsAntiPhishingActive(prev => !prev),
      isToggle: true, toggleState: isAntiPhishingActive,
      description: 'Melindungi dari situs berbahaya dan penipuan.'
    },
    {
      title: 'Pemblokir Iklan', icon: 'fas fa-ban',
      action: () => setIsAdBlockerActive(prev => !prev),
      isToggle: true, toggleState: isAdBlockerActive,
      description: 'Memblokir iklan dan pelacak untuk pengalaman bersih.'
    },
    {
      title: 'Optimalisasi Jaringan', icon: 'fas fa-tachometer-alt',
      action: () => setIsNetworkOptimized(prev => !prev),
      isToggle: true, toggleState: isNetworkOptimized,
      description: 'Meningkatkan kecepatan muat halaman secara signifikan.'
    },
    {
      title: 'Bantuan', icon: 'fas fa-question-circle',
      action: () => alert('Bantuan sedang dikembangkan!'),
      description: 'Dapatkan bantuan dan FAQ.'
    },
    {
      title: 'Tentang', icon: 'fas fa-info-circle',
      action: () => alert('Informasi tentang Fluxo Browser.'),
      description: 'Lihat informasi versi dan lisensi.'
    }
  ];

  // --- Simulating MetaMask-like Wallet Functions ---
  const connectWallet = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCryptoWallet(prev => ({
        ...prev,
        isConnected: true,
        currentAccount: '0xFluxoUserWalletAddress789abc',
        balanceETH: 0.52,
        balanceFLX: 125.75,
        transactions: [
          { id: 1, type: 'Receive', amount: 0.1, currency: 'ETH', date: '2024-05-28', status: 'Completed' },
          { id: 2, type: 'Reward', amount: 5.0, currency: 'FLX', date: '2024-05-29', status: 'Completed' },
        ]
      }));
      setIsLoading(false);
      alert('Dompet Fluxo berhasil terhubung!');
    }, 1500);
  };

  const disconnectWallet = () => {
    setCryptoWallet(prev => ({
      ...prev,
      isConnected: false,
      currentAccount: null,
      balanceETH: 0.00,
      balanceFLX: 0.00,
      transactions: [],
    }));
    alert('Dompet Fluxo terputus.');
  };

  const simulateSendTransaction = (toAddress, amount, currency) => {
    if (!cryptoWallet.isConnected) {
      alert('Dompet belum terhubung.');
      return;
    }
    if (currency === 'ETH' && cryptoWallet.balanceETH < amount) {
      alert('Saldo ETH tidak mencukupi.');
      return;
    }
    if (currency === 'FLX' && cryptoWallet.balanceFLX < amount) {
      alert('Saldo FLX tidak mencukupi.');
      return;
    }

    const txId = cryptoWallet.transactions.length + 1;
    const newTx = {
      id: txId,
      type: 'Send',
      amount: amount,
      currency: currency,
      date: new Date().toISOString().split('T')[0],
      to: toAddress,
      status: 'Pending'
    };

    setCryptoWallet(prev => ({
      ...prev,
      pendingRequests: [...prev.pendingRequests, newTx]
    }));

    setTimeout(() => {
      setCryptoWallet(prev => {
        const updatedTransactions = prev.transactions.map(tx =>
          tx.id === txId ? { ...tx, status: 'Completed' } : tx
        );
        const newBalanceETH = currency === 'ETH' ? prev.balanceETH - amount : prev.balanceETH;
        const newBalanceFLX = currency === 'FLX' ? prev.balanceFLX - amount : prev.balanceFLX;

        return {
          ...prev,
          balanceETH: newBalanceETH,
          balanceFLX: newBalanceFLX,
          transactions: [...updatedTransactions, { ...newTx, status: 'Completed' }],
          pendingRequests: prev.pendingRequests.filter(req => req.id !== txId)
        };
      });
      alert(`Transaksi ${amount} ${currency} berhasil dikirim ke ${toAddress.substring(0,6)}...`);
    }, 3000);
  };
  // --- End Wallet Functions ---

  // --- Fungsi untuk menghasilkan data simulasi hasil pencarian dengan fokus topik ---
  const generateMockResults = (query, type) => {
    const cryptoKeywords = ['bitcoin', 'ethereum', 'blockchain', 'defi', 'nft', 'web3', 'kripto'];
    const financeKeywords = ['saham', 'investasi', 'ekonomi', 'inflasi', 'pasar modal', 'dividen'];
    const techKeywords = ['ai', 'kecerdasan buatan', 'inovasi', 'gadget', 'software', 'hardware', 'teknologi'];
    const dangerousKeywords = ['scam', 'phishing', 'virus', 'malware', 'hack', 'gratis token']; // Keywords untuk simulasi situs berbahaya

    const isCrypto = cryptoKeywords.some(keyword => query.toLowerCase().includes(keyword));
    const isFinance = financeKeywords.some(keyword => query.toLowerCase().includes(keyword));
    const isTech = techKeywords.some(keyword => query.toLowerCase().includes(keyword));
    const isDangerous = dangerousKeywords.some(keyword => query.toLowerCase().includes(keyword));

    if (isDangerous && isAntiPhishingActive) {
        alert('Peringatan Fluxo: Situs ini mungkin berbahaya atau upaya phishing! Kami telah memblokirnya.');
        setPrivacyStats(prev => ({
            ...prev,
            threatsDetected: prev.threatsDetected + 1
        }));
        return []; // Mengembalikan hasil kosong jika situs berbahaya terdeteksi
    }

    let relevantTitles = [];
    let relevantSnippets = [];
    let relevantImageUrls = [];
    let relevantSites = [];

    if (isCrypto) {
      relevantTitles = [
        `Analisis Mendalam Harga ${query}`, `Prediksi Pasar ${query} 2025`,
        `Teknologi di Balik ${query} Blockchain`, `Panduan Investasi ${query}`,
        `Regulasi ${query} Terbaru`
      ];
      relevantSnippets = [
        `Pelajari faktor-faktor yang memengaruhi harga **${query}** dan analisis teknis untuk pengambilan keputusan.`,
        `Para ahli memprediksi tren **${query}** di tahun 2025 dengan fokus pada adopsi dan regulasi.`,
        `Memahami dasar-dasar teknologi blockchain yang mendukung **${query}** dan aplikasinya.`,
        `Strategi investasi **${query}** yang aman dan menguntungkan untuk pemula dan profesional.`,
        `Berita terbaru tentang perubahan regulasi **${query}** yang berdampak pada pasar.`
      ];
      relevantImageUrls = [
          'https://images.unsplash.com/photo-1621379361730-80a5e8c1e4c7?q=80&w=600&h=400', // Crypto coin
          'https://images.unsplash.com/photo-1620321021798-1e4e3a4e9b6e?q=80&w=600&h=400', // Blockchain concept
          'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=600&h=400' // Wallet
      ];
      relevantSites = ['cryptonews.id', 'blockchaininsight.com', 'defiweekly.net', 'web3journal.org'];
    } else if (isFinance) {
        relevantTitles = [
            `Prospek Saham ${query} di Bursa Efek`, `Strategi Investasi ${query} Jangka Panjang`,
            `Analisis Fundamental Perusahaan ${query}`, `Dampak Kebijakan Fiskal pada ${query}`
        ];
        relevantSnippets = [
            `Menganalisis kinerja saham **${query}** di pasar saat ini dan potensi pertumbuhannya.`,
            `Membangun portofolio investasi **${query}** yang tangguh untuk tujuan finansial masa depan.`,
            `Panduan langkah demi langkah untuk menganalisis laporan keuangan perusahaan **${query}**.`,
            `Bagaimana kebijakan pemerintah memengaruhi sektor **${query}** dan strategi adaptasi.`
        ];
        relevantImageUrls = [
            'https://images.unsplash.com/photo-1590283603348-1502476b701c?q=80&w=600&h=400', // Stock chart
            'https://images.unsplash.com/photo-1563986768-49406326e95c?q=80&w=600&h=400', // Investment
            'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=600&h=400' // Finance desk
        ];
        relevantSites = ['financeinsight.id', 'stockmarketdaily.com', 'investopedia.co', 'ekonomiterkini.net'];
    } else if (isTech) {
        relevantTitles = [
            `Inovasi Terbaru ${query} di Tahun Ini`, `Masa Depan ${query} dan Dampaknya`,
            `Review Gadget ${query} Terbaik`, `Tutorial Pemrograman ${query}`
        ];
        relevantSnippets = [
            `Jelajahi terobosan terbaru dalam bidang **${query}** yang akan mengubah dunia.`,
            `Diskusi tentang bagaimana **${query}** akan membentuk lanskap sosial dan ekonomi global.`,
            `Ulasan mendalam tentang perangkat **${query}** terbaru yang wajib Anda miliki.`,
            `Panduan langkah demi langkah untuk menguasai teknik pemrograman **${query}**.`
        ];
        relevantImageUrls = [
            'https://images.unsplash.com/photo-1517694711087-abc7d363715e?q=80&w=600&h=400', // Coding
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&h=400', // AI concept
            'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=600&h=400' // Abstract tech
        ];
        relevantSites = ['techflux.id', 'innovationhub.com', 'gadgetreview.net', 'devjournal.org'];
    } else { // Default to general if no specific keywords
        relevantTitles = [
            `Panduan Lengkap ${query}`, `Sejarah dan Evolusi ${query}`,
            `Manfaat ${query} untuk Kehidupan`, `Teknik Terbaik Menguasai ${query}`
        ];
        relevantSnippets = [
            `Jelajahi panduan komprehensif kami tentang **${query}**. Dari konsep dasar hingga aplikasi lanjutan, kami memiliki semua yang Anda butuhkan untuk memulai.`,
            `Pelajari tentang asal-usul dan bagaimana **${query}** berkembang sepanjang waktu. Sebuah perjalanan menelusuri inovasi.`,
            `Temukan mengapa **${query}** semakin relevan dalam kehidupan sehari-hari dan bagaimana ia dapat meningkatkan produktivitas Anda.`,
            `Panduan langkah demi langkah untuk menjadi ahli dalam bidang **${query}**, mencakup tips dan trik profesional.`
        ];
        relevantImageUrls = [
            'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=600&h=400',
            'https://images.unsplash.com/photo-1507525428034-b723cf961cfe?auto=format&fit=crop&q=80&w=600&h=400',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600&h=400'
        ];
        relevantSites = ['fluxo.info.id', 'generalinsight.com', 'dailynews.net', 'informasi-terkini.org'];
    }

    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const getRandomSnippet = (arr) => {
        let snippet = getRandomElement(arr);
        while (snippet.length < 120) {
            snippet += " " + getRandomElement(arr.filter(s => s !== snippet));
        }
        return snippet.substring(0, 200) + "...";
    };

    const results = [];
    if (type === 'image') {
      for (let i = 0; i < 12; i++) {
        results.push({
          title: `${query} Gambar ${i + 1}`,
          link: getRandomElement(relevantImageUrls).replace('w=600&h=400', 'w=1200&h=800'),
          imageUrl: getRandomElement(relevantImageUrls),
          displayLink: `${getRandomElement(relevantSites).split('.')[0]}.img`
        });
      }
    } else if (type === 'news') {
      for (let i = 0; i < 5; i++) {
        results.push({
          title: getRandomElement(relevantTitles),
          link: `https://${getRandomElement(relevantSites)}/artikel/${query.toLowerCase().replace(/\s/g, '-')}-${i}`,
          snippet: getRandomSnippet(relevantSnippets),
          displayLink: getRandomElement(relevantSites)
        });
      }
    } else { // 'all' (default web results)
      for (let i = 0; i < 8; i++) {
        results.push({
          title: getRandomElement(relevantTitles),
          link: `https://${getRandomElement(relevantSites)}/detail/${query.toLowerCase().replace(/\s/g, '-')}-${i}`,
          snippet: getRandomSnippet(relevantSnippets),
          displayLink: getRandomElement(relevantSites)
        });
      }
    }
    return results;
  };
  // --- Akhir Fungsi untuk menghasilkan data simulasi hasil pencarian dengan fokus topik ---

  // --- Fungsi untuk menghasilkan data simulasi berita terkurasi ---
  const generateCuratedNews = () => {
    return [
      { id: 1, category: 'Kripto', title: 'Harga Ethereum Melonjak Pasca Upgrade Dencun', snippet: 'Upgrade Dencun sukses meningkatkan efisiensi transaksi di jaringan Ethereum, mendorong harga naik signifikan.', link: 'https://example.com/crypto-news-1', imageUrl: 'https://images.unsplash.com/photo-1627811910609-b427b0c3f5d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMzd8MHwxfHxldGhlcmV1bSUyMHByaWNlJTIwZ3JhcGh8ZW58MHx8fHwxNzE3MjI4NDI1fDA&ixlib=rb-4.0.3&q=80&w=400' },
      { id: 2, category: 'Saham', title: 'IHSG Menguat, Sektor Teknologi Pimpin Kenaikan', snippet: 'Indeks Harga Saham Gabungan (IHSG) ditutup positif hari ini, didorong oleh performa kuat saham-saham teknologi papan atas.', link: 'https://example.com/stock-news-1', imageUrl: 'https://images.unsplash.com/photo-1590283603348-1502476b701c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMzd8MHwxfHxzdG9jayUyMG1hcmtldCUyMGRhdGF8ZW58MHx8fHwxNzE3MjI4NjczfDA&ixlib=rb-4.0.3&q=80&w=400' },
      { id: 3, category: 'Teknologi', title: 'Terobosan AI Terbaru: Model Bahasa Generatif Lebih Cerdas', snippet: 'Peneliti berhasil mengembangkan model AI yang menunjukkan kemampuan pemahaman dan penalaran bahasa yang jauh lebih baik.', link: 'https://example.com/tech-news-1', imageUrl: 'https://images.unsplash.com/photo-1563986768-49406326e95c?crop=entropy&cs=tinysrgb&fit=max&fm%20=jpg&ixid=M3w1NzcxMzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE3MjI4ODQ3fDA&ixlib=rb-4.0.3&q=80&w=400' },
      { id: 4, category: 'Keuangan', title: 'Inflasi Global Turun, Bank Sentral Bersiap Longgarkan Kebijakan', snippet: 'Data inflasi terbaru menunjukkan tren penurunan di berbagai negara, memicu spekulasi bank sentral akan segera memangkas suku bunga.', link: 'https://example.com/finance-news-1', imageUrl: 'https://images.unsplash.com/photo-1590283603348-1502476b701c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMzd8MHwxfHxpbmZsYXRpb24lMjBjaGFydHxlbnwwfHx8fDE3MTcyMjkxMzh8MA&ixlib=rb-4.0.3&q=80&w=400' },
      { id: 5, category: 'Kripto', title: 'NFT Gaming Makin Populer: Peluang atau Gelembung?', snippet: 'Tren game blockchain berbasis NFT terus meningkat, memunculkan pertanyaan tentang keberlanjutan dan risiko investasinya.', link: 'https://example.com/crypto-news-2', imageUrl: 'https://images.unsplash.com/photo-1620321021798-1e4e3a4e9b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzcxMzd8MHwxfHxuZnQlMjBnYW1lJTIwYXJ0fGVufDB8fHwxNzE3MjI5MzYyfDA&ixlib=rb-4.0.3&q=80&w=400' },
    ];
  };
  // --- Akhir Fungsi generateCuratedNews ---

  // Simulate initial states and data
  useState(() => {
    setNewsFeed(generateCuratedNews());
    setPerformanceStats({
        memorySaved: (Math.random() * 50 + 20).toFixed(2),
        cpuReduced: (Math.random() * 10 + 5).toFixed(2),
        networkSpeedBoost: (Math.random() * 20 + 10).toFixed(2)
    });
  }, []);


  const performSearch = async (type = currentSearchType) => {
    if (!searchQuery.trim()) return;

    setShowSearchOverlay(false);
    setSearchValue(searchQuery);
    setShowSearchResults(true);
    setCurrentPage('search');
    setIsLoading(true);
    setCurrentSearchType(type);

    setTabs(prev => prev.map(tab =>
      tab.id === activeTabId
        ? {
            ...tab,
            title: `Cari: ${searchQuery.length > 15 ? searchQuery.substring(0, 15) + '...' : searchQuery}`,
            url: `internal-search?q=${encodeURIComponent(searchQuery)}&type=${type}`,
            favicon: type === 'image' ? 'fas fa-image' : 'fas fa-search'
          }
        : tab
    ));

    setTimeout(() => {
      const mockResults = generateMockResults(searchQuery, type);
      setSearchResults(mockResults);
      setIsLoading(false);

      if (cryptoWallet.isConnected) {
        setCryptoWallet(prev => ({
          ...prev,
          balanceFLX: prev.balanceFLX + 0.1,
          transactions: [...prev.transactions, { id: prev.transactions.length + 1, type: 'Reward', amount: 0.1, currency: 'FLX', date: new Date().toISOString().split('T')[0], status: 'Completed' }]
        }));
      }

      setPrivacyStats(prev => ({
        blocked: prev.blocked + (isAdBlockerActive ? (Math.floor(Math.random() * 5) + 1) : 0),
        dataSaved: prev.dataSaved + (isAdBlockerActive ? (Math.floor(Math.random() * 100) + 20) : (Math.floor(Math.random() * 30) + 5)),
        timeSaved: prev.timeSaved + (isAdBlockerActive ? (Math.floor(Math.random() * 5) + 1) : (Math.random() * 2 + 1)),
        threatsDetected: prev.threatsDetected + (isAntiPhishingActive && searchQuery.toLowerCase().includes('scam') ? 1 : 0)
      }));

      // Simulate performance improvement
      setPerformanceStats(prev => ({
        memorySaved: (parseFloat(prev.memorySaved) + Math.random() * 5).toFixed(2),
        cpuReduced: (parseFloat(prev.cpuReduced) + Math.random() * 1).toFixed(2),
        networkSpeedBoost: (parseFloat(prev.networkSpeedBoost) + (isNetworkOptimized ? (Math.random() * 3) : 0)).toFixed(2)
      }));

      // Simulate data usage warning for current tab
      if (Math.random() < 0.2) { // 20% chance to show data warning
          const currentTab = tabs.find(tab => tab.id === activeTabId);
          if (currentTab && currentTab.url !== '') {
            alert(`Peringatan: Tab "${currentTab.title}" telah menggunakan sekitar ${Math.floor(Math.random() * 50 + 50)}MB data.`);
          }
      }

    }, 800);
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
    setSearchResults([]);
    setSearchValue('');
    setSearchQuery('');
    setCurrentSearchType('all');
  };

  const closeTab = (tabId, e) => {
    e.stopPropagation();
    if (tabs.length === 1) return;

    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);

    if (tabId === activeTabId) {
      const newActiveTab = newTabs[newTabs.length - 1];
      setActiveTabId(newActiveTab.id);
      setCurrentPage('home');
      setShowSearchResults(false);
      setSearchResults([]);
      setSearchValue('');
      setSearchQuery('');
      setCurrentSearchType('all');
    }
  };

  const switchTab = (tabId) => {
    setTabs(prev => prev.map(tab => ({ ...tab, isActive: tab.id === tabId })));
    setActiveTabId(tabId);

    const selectedTab = tabs.find(tab => tab.id === tabId);
    if (selectedTab) {
      if (selectedTab.url.startsWith('internal-search?q=')) {
        setCurrentPage('search');
        setShowSearchResults(true);
        const urlParams = new URLSearchParams(selectedTab.url.split('?')[1]);
        const queryFromUrl = decodeURIComponent(urlParams.get('q') || '');
        const typeFromUrl = urlParams.get('type') || 'all';

        setSearchQuery(queryFromUrl);
        setSearchValue(queryFromUrl);
        setCurrentSearchType(typeFromUrl);
        setSearchResults(generateMockResults(queryFromUrl, typeFromUrl));
      } else if (selectedTab.url === 'web3-page') {
        setCurrentPage('web3');
      } else if (selectedTab.url === 'news-page') {
        setCurrentPage('news');
      }
      else if (selectedTab.url === 'settings-page') {
        setCurrentPage('settings');
      } else if (selectedTab.url === 'history-page') {
        setCurrentPage('history');
      } else if (selectedTab.url === 'downloads-page') {
        setCurrentPage('downloads');
      }
      else {
        setCurrentPage('home');
        setShowSearchResults(false);
        setSearchResults([]);
        setSearchValue('');
        setSearchQuery('');
        setCurrentSearchType('all');
      }
    }
  };

  return {
    searchValue, setSearchValue,
    privacyStats, setPrivacyStats,
    showStats, setShowStats,
    currentPage, setCurrentPage,
    showSearchOverlay, setShowSearchOverlay,
    searchQuery, setSearchQuery,
    showMorePopup, setShowMorePopup,
    showSearchResults, setShowSearchResults,
    searchResults, setSearchResults,
    isLoading, setIsLoading,
    tabs, setTabs,
    activeTabId, setActiveTabId,
    nextTabId, setNextTabId,
    bookmarks,
    newsFeed,
    moreOptions,
    performSearch,
    addNewTab,
    closeTab,
    switchTab,
    currentSearchType, setCurrentSearchType,
    cryptoWallet, setCryptoWallet,
    connectWallet, disconnectWallet, simulateSendTransaction,
    isIncognitoMode, setIsIncognitoMode,
    isAntiPhishingActive, setIsAntiPhishingActive,
    isAdBlockerActive, setIsAdBlockerActive,
    isNetworkOptimized, setIsNetworkOptimized,
    performanceStats, setPerformanceStats
  };
};

export default useBrowserState;