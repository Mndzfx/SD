import React, { useEffect, useState } from 'react';
import FluxoLogo from '../assets/logo1.png'; // IMPOR GAMBAR LOGO

const SplashScreen = ({ onFinishLoading }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const totalSplashDuration = 3500; // Durasi total splash screen (termasuk fade out)
    const contentShowDuration = 2500; // Durasi konten splash screen terlihat sebelum fade out
    const fadeOutDuration = 500; // Durasi fade out

    // Mulai fade out splash screen setelah contentShowDuration
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false); // Mengatur isVisible ke false untuk memicu transisi opacity
      // Setelah fade out selesai, panggil onFinishLoading
      setTimeout(() => {
        onFinishLoading();
      }, fadeOutDuration);
    }, contentShowDuration); // Timer ini memicu fade-out

    // Cleanup timer jika komponen di-unmount lebih awal
    return () => clearTimeout(fadeOutTimer);
  }, [onFinishLoading]);

  // Hindari rendering konten splash screen jika tidak terlihat (setelah transisi opacity selesai)
  if (!isVisible) {
    return (
      <div
        className="fixed inset-0 z-[9999] transition-opacity duration-500 ease-in-out"
        style={{ opacity: 0,
                 background: 'linear-gradient(180deg, #02252A 0%, #002D30 50%, #01373C 100%)' // Gradien vertikal yang konsisten
        }}
      >
        {/* Kosongkan konten saat fade out */}
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        // Warna background hijau gelap seperti referensi gambar
        background: 'linear-gradient(180deg, #02252A 0%, #002D30 50%, #01373C 100%)', // Gradien vertikal yang konsisten
        animation: 'splashFadeIn 0.8s ease-out forwards' // Animasi fade in untuk background splash screen
      }}
    >
      {/* Kontainer Logo dan Teks */}
      <div
        className="flex flex-col items-center justify-center mb-8"
        style={{
          animation: 'logoTextAppear 1.2s ease-out forwards', // Animasi gabungan untuk logo & teks
          animationDelay: '0.6s', // LOGO DAN TEKS MUNCUL SETELAH BACKGROUND SEDIKIT MUNCUL
        }}
      >
        {/* Menggunakan GAMBAR LOGO LOKAL */}
        <div
          className="w-24 h-24 md:w-28 md:h-28 mb-4 flex justify-center items-center overflow-hidden relative"
        >
            <img src={FluxoLogo} alt="Fluxo Logo" className="w-full h-full object-contain" />
        </div>

        {/* Teks "FLUXO" */}
        <h1
          className="text-white text-5xl md:text-6xl font-semibold tracking-widest uppercase"
          style={{
            fontFamily: 'Inter, sans-serif', // Menggunakan font 'Inter'
            color: '#E0E0E0' // Warna teks sedikit off-white
          }}
        >
          FLUXO
        </h1>
      </div>

      {/* Bagian Disclaimer dan Ikon OJK/Sertifikasi */}
      <div
        className="absolute bottom-16 text-center text-gray-300 text-xs px-4"
        style={{ animation: 'disclaimerAppear 0.8s ease-out forwards', animationDelay: '2s' }}
      >
        <p className="mb-4">Fluxo diatur dan diawasi oleh OJK. Bersertifikasi ISO 27001 dan dilindungi CFX.</p>
        <div className="flex justify-center space-x-6 items-center flex-wrap">
          {/* Ganti ini dengan gambar/ikon logo asli Anda */}
          {/* Pastikan Anda memiliki gambar-gambar ini di folder public/assets atau serupa */}
          <img src="https://via.placeholder.com/60x30?text=OJK" alt="OJK" className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://via.placeholder.com/60x30?text=CFX" alt="CFX" className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://via.placeholder.com/60x30?text=ISO" alt="ISO 27001" className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300" />
          {/* Jika ada logo lain, tambahkan di sini */}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;