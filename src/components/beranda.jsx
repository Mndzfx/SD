import React, { useState, useEffect, useRef } from 'react';
import "../styles/style.css"; // Pastikan path ini benar

function App() {
    // State untuk mendeteksi apakah di perangkat mobile atau tidak
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    // State untuk mengontrol visibilitas navigasi mobile (pop-up)
    const [isNavOpen, setIsNavOpen] = useState(false);
    // Ref untuk menunjuk ke elemen menu pop-up mobile
    const navRef = useRef(null);
    // Ref untuk menunjuk ke tombol hamburger
    const hamburgerRef = useRef(null); // Tambahkan ref untuk hamburger

    useEffect(() => {
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
            // Jika menu terbuka DAN klik TIDAK di dalam navRef (menu)
            // DAN klik TIDAK di dalam hamburgerRef (tombol hamburger)
            if (isNavOpen && navRef.current && !navRef.current.contains(event.target) &&
                hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
                setIsNavOpen(false);
            }
        };

        // Tambahkan event listener saat komponen di-mount
        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);

        // Bersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isNavOpen]); // Dependensi isNavOpen untuk memastikan logika terbaru

    // Fungsi untuk mengubah state isNavOpen (toggle)
    const toggleNav = (event) => {
        // Mencegah event klik menyebar ke document
        // Ini penting agar klik pada hamburger tidak langsung memicu handleClickOutside
        if (event) {
            event.stopPropagation();
        }
        setIsNavOpen(prevIsNavOpen => !prevIsNavOpen); // Toggle nilai sebelumnya
    };

    return (
        <div className="app-container">
            <div className="header-hero-wrapper">
                <div className="inner-container">
                    <header className="header">
                        <div className="navbar-wrapper">
                            {/* Logo */}
                            <div className="logo">
                                <img src="https://via.placeholder.com/120x40/8a2be2/ffffff?text=PAYZE" alt="Payze Logo" className="logo-img" />
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
                                    {/* Class 'is-open' hanya ditambahkan jika isNavOpen true */}
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
                            <p className='hero-subtitle'>SDN SEJAHTERA</p>
                            <h1 className="hero-content-h1">Pendaftaran telah dibuka</h1>
                            <p className="hero-description">
                                Sekolah yang mengedepankan prestasi dan akhlak mulia<br /><br />
                            </p>
                            <div className="hero-buttons">
                                <button className="hero-buttons-btn">Daftar Sekarang</button>
                            </div>
                        </div>
                        <div className="hero-image-wrapper">
                            {/* GAMBAR HERO TANPA ANIMASI DAN DIPRIORITASKAN */}
                            <img
                                className="hero-image"
                                src="/img/hero1.png"
                                alt="Woman holding cards"
                                loading="eager"       // Meminta browser untuk memuat gambar secepatnya
                                fetchpriority="high"  // Memberi tahu browser ini adalah aset penting
                            />
                            <div className="hero-image-background"></div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Bagian Kolom Dua */}
            <div className="inner-container">
                <div className="two-column-section-wrapper">
                    <section className="section update-section-card update-section">
                        <h2 className="update-section-h2">Kenali Sekolah Kami Lebih Dekat</h2>
                        <p className="update-section-p">Temukan berbagai fasilitas, program, dan layanan yang kami sediakan demi mendukung pendidikan anak Anda.</p>
                        <div className="update-form">
                            <input type="email" placeholder="Cari informasi..." className="update-form-input" />
                            <button type="submit" className="update-form-button">Cari</button>
                        </div>
                    </section>

                    {/* Visi dan Misi Section */}
                    <section className="section help-section-card help-section">
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
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;