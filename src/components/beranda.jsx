import React, { useState, useEffect, useRef } from 'react';
import "../styles/style.css"; // Pastikan path ini benar

function App() {
    // State untuk mendeteksi apakah di perangkat mobile atau tidak
    // Set nilai awal ke false, lalu biarkan useEffect menyesuaikan setelah mount
    const [isMobile, setIsMobile] = useState(false); 
    
    // State untuk mengontrol visibilitas navigasi mobile (pop-up)
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    // Ref untuk menunjuk ke elemen menu pop-up mobile
    const navRef = useRef(null);
    
    // Ref untuk menunjuk ke tombol hamburger
    const hamburgerRef = useRef(null);

    // Refs untuk elemen teks di dalam card yang akan dianimasikan
    const updateTextRef = useRef(null);
    const helpTextRef = useRef(null);

    // useEffect untuk mendeteksi ukuran layar dan Intersection Observer
    useEffect(() => {
        // Inisialisasi isMobile setelah komponen di-mount
        setIsMobile(window.innerWidth < 768);

        // Handler untuk mengubah state isMobile saat ukuran jendela berubah
        const handleResize = () => {
            const currentIsMobile = window.innerWidth < 768;
            setIsMobile(currentIsMobile);
            // Jika beralih ke desktop, pastikan menu mobile tertutup
            if (!currentIsMobile && isNavOpen) {
                setIsNavOpen(false);
            }
        };

        // Handler untuk menutup menu ketika klik di luar menu atau hamburger
        const handleClickOutside = (event) => {
            if (isNavOpen && 
                navRef.current && !navRef.current.contains(event.target) &&
                hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
                setIsNavOpen(false);
            }
        };

        // Tambahkan event listener saat komponen di-mount
        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);

        // Intersection Observer untuk animasi scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Pastikan kelas 'hidden' dihapus sebelum menambahkan 'show'
                    entry.target.classList.remove('hidden'); 
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target); // Berhenti mengamati setelah terlihat
                }
            });
        }, {
            threshold: 0.1 // Sedikit saja elemen terlihat sudah dianggap intersecting (10% dari elemen)
        });

        // Amati elemen teks di dalam card
        if (updateTextRef.current) {
            observer.observe(updateTextRef.current);
        }
        if (helpTextRef.current) {
            observer.observe(helpTextRef.current);
        }

        // Bersihkan event listener dan observer saat komponen di-unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
            // Penting: Hapus pengamatan hanya jika ref.current masih ada
            if (updateTextRef.current) {
                observer.unobserve(updateTextRef.current);
            }
            if (helpTextRef.current) {
                observer.unobserve(helpTextRef.current);
            }
            observer.disconnect(); // Pastikan observer berhenti mengamati sepenuhnya
        };
    }, [isNavOpen]); // Dependensi isNavOpen untuk memastikan logika terbaru

    // Fungsi untuk mengubah state isNavOpen (toggle)
    const toggleNav = (event) => {
        if (event) {
            event.stopPropagation(); 
        }
        setIsNavOpen(prevIsNavOpen => !prevIsNavOpen); 
    };

    return (
        <div className="app-container">
            <div className="header-hero-wrapper">
                <div className="inner-container">
                    <header className="header">
                        <div className="navbar-wrapper">
                            {/* Logo */}
                            <div className="logo">
                                {/* PERBAIKAN KRITIS: GANTI DENGAN GAMBAR LOKAL ANDA */}
                                {/* Contoh: Jika logo Anda ada di folder public/img/logo.png */}
                                <img src="/img/logo.png" alt="Payze Logo" className="logo-img" />
                                {/* Atau jika tidak punya, gunakan gambar placeholder lokal/generik sementara */}
                                {/* <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'%3E%3Crect width='120' height='40' fill='%238a2be2'/%3E%3Ctext x='60' y='25' font-family='Arial' font-size='14' fill='%23ffffff' text-anchor='middle'%3ELOGO HERE%3C/text%3E%3C/svg%3E" alt="Payze Logo" className="logo-img" /> */}
                            </div>

                            {/* Navigasi Desktop (Hanya ditampilkan di desktop) */}
                            {!isMobile && (
                                <div className="nav-and-button-group">
                                    <nav className="navbar-desktop">
                                        <ul className="navbar-ul-desktop">
                                            <li className="navbar-li-desktop">
                                                <a href="#home" className="navbar-link-desktop">Home</a>
                                            </li>
                                            <li className="navbar-li-desktop">
                                                <a href="#profile" className="navbar-link-desktop">Profile</a>
                                            </li>
                                            <li className="navbar-li-desktop">
                                                <a href="#artikel" className="navbar-link-desktop">Artikel</a>
                                            </li>
                                            <li className="navbar-li-desktop">
                                                <a href="#informasi" className="navbar-link-desktop">Informasi</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <button className="btn btn-primary header-btn">
                                        PPDB
                                    </button>
                                </div>
                            )}

                            {/* Icon Hamburger Menu (Hanya ditampilkan di mobile) dan Pop-up Menu */}
                            {isMobile && (
                                <>
                                    {/* Hamburger Button */}
                                    <div className="hamburger" onClick={toggleNav} ref={hamburgerRef}>
                                        &#9776; {/* Icon Hamburger */}
                                    </div>

                                    {/* Mobile Pop-up Menu */}
                                    <div className={`mobile-popup-menu ${isNavOpen ? 'is-open' : ''}`} ref={navRef}>
                                        <nav className="mobile-navbar">
                                            <ul className="navbar-ul-mobile">
                                                <li className="navbar-li-mobile">
                                                    <a href="#home" className="navbar-link-mobile" onClick={toggleNav}>Home</a>
                                                </li>
                                                <li className="navbar-li-mobile">
                                                    <a href="#profile" className="navbar-link-mobile" onClick={toggleNav}>Profile</a>
                                                </li>
                                                <li className="navbar-li-mobile">
                                                    <a href="#artikel" className="navbar-link-mobile" onClick={toggleNav}>Artikel</a>
                                                </li>
                                                <li className="navbar-li-mobile">
                                                    <a href="#informasi" className="navbar-link-mobile" onClick={toggleNav}>Informasi</a>
                                                </li>
                                                <li className="navbar-li-mobile">
                                                    <button className="btn btn-primary header-btn-mobile" onClick={toggleNav}>
                                                        PPDB
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                    {/* Overlay (untuk menutup menu saat klik di luar) */}
                                    <div className={`mobile-overlay ${isNavOpen ? 'is-open' : ''}`} onClick={() => setIsNavOpen(false)}></div>
                                </>
                            )}
                        </div>
                    </header>
                </div>

                {/* Hero Section */}
                <div className="inner-container">
                    <section className="hero-section">
                        <div className="hero-content">
                            <p className='hero-subtitle'>SDN SEJAHTER INDONESIA</p>
                            <h1 className="hero-content-h1">Pendaftaran telah dibuka</h1>
                            <p className="hero-description">
                                Sekolah yang mengedepankan prestasi dan akhlak mulia<br /><br />
                            </p>
                            <div className="hero-buttons">
                                <button className="hero-buttons-btn">Daftar Sekarang</button>
                            </div>
                        </div>
                        <div className="hero-image-wrapper">
                            <img
                                className="hero-image"
                                src="/img/hero1.png" // Pastikan path ini juga benar (relatif terhadap folder public)
                                alt="Woman holding cards"
                                loading="eager"
                                fetchpriority="high" // PERBAIKAN: Huruf kecil
                            />
                            <div className="hero-image-background"></div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Bagian Kolom Dua */}
            <div className="inner-container">
                <div className="two-column-section-wrapper">
                    <section className="section update-section-card">
                        <div ref={updateTextRef} className="update-section hidden">
                            <h2 className="update-section-h2">Kenali Sekolah Kami Lebih Dekat</h2>
                            <p className="update-section-p">Temukan berbagai fasilitas, program, dan layanan yang kami sediakan demi mendukung pendidikan anak Anda.</p>
                            <div className="update-form">
                                <input type="email" placeholder="Cari informasi..." className="update-form-input" />
                                <button type="submit" className="update-form-button">Cari</button>
                            </div>
                        </div>
                    </section>

                    {/* Visi dan Misi Section */}
                    <section className="section help-section-card">
                        <div ref={helpTextRef} className="help-section hidden">
                            <h3 className="help-section-h3">Visi dan Misi SD Sejahtera Indonesia</h3>
                            <div className="help-content-wrapper">
                                <h4>Visi</h4>
                                <p className="help-section-p">
                                    Menjadi sekolah dasar unggulan yang membentuk generasi berakhlak mulia, cerdas, kreatif, dan mandiri, siap menghadapi tantangan global.
                                </p>

                                <h4>Misi</h4>
                                <ul className="help-section-list">
                                    <li>Mengembangkan potensi peserta didik secara holistik (akademik, non-akademik, spiritual, dan sosial).</li>
                                    <li>Menciptakan lingkungan belajar yang aman, nyaman, dan inspiratif.</li>
                                    <li>Membentuk karakter peserta didik yang Islami, nasionalis, dan berwawasan global.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;