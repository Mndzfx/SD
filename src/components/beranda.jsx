import React, { useState, useEffect, useRef } from 'react';

function App() {
    // State untuk mendeteksi apakah perangkat adalah mobile atau bukan
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    // State untuk mengontrol visibilitas menu pop-up mobile
    const [isNavOpen, setIsNavOpen] = useState(false);
    // Ref untuk referensi elemen DOM menu pop-up, berguna untuk mendeteksi klik di luar menu
    const navRef = useRef(null);

    useEffect(() => {
        // Fungsi untuk menangani perubahan ukuran jendela
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            // Tutup menu pop-up jika ukuran jendela berubah menjadi desktop
            if (window.innerWidth >= 768 && isNavOpen) {
                setIsNavOpen(false);
            }
        };

        // Fungsi untuk mendeteksi klik di luar menu pop-up
        const handleClickOutside = (event) => {
            // Jika menu terbuka dan klik terjadi di luar elemen menu, tutup menu
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsNavOpen(false);
            }
        };

        // Menambahkan event listener untuk perubahan ukuran jendela
        window.addEventListener('resize', handleResize);
        // Menambahkan event listener untuk klik di seluruh dokumen (untuk deteksi klik di luar)
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function: Hapus event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isNavOpen]); // Efek akan dijalankan ulang jika isNavOpen berubah

    // Fungsi untuk membuka/menutup menu pop-up
    const toggleNav = (event) => {
        // Hentikan propagasi event untuk mencegah handleClickOutside langsung menutup menu
        if (event) {
            event.stopPropagation();
        }
        setIsNavOpen(!isNavOpen); // Balikkan status visibilitas menu
    };

    // Definisi warna yang digunakan di aplikasi
    const colors = {
        primaryPurple: '#8a2be2',
        lightPurple: '#e9dffc',
        darkGray: '#333333',
        mediumGray: '#666666',
        white: '#FFFFFF',
        headerHeroBg: '#EAEBF6',
        buttonColor: '#FED118',
        gradientBlue: 'linear-gradient(135deg, #64b5f6, #2196f3, #1976d2)',
    };

    // Definisi bayangan (shadows) untuk elemen
    const shadows = {
        light: '0 4px 10px rgba(0,0,0,0.05)',
        medium: '0 8px 20px rgba(0,0,0,0.08)',
        dark: '0 15px 30px rgba(0,0,0,0.1)',
    };

    // Definisi tata letak (layout) responsif
    const layout = {
        contentMaxWidth: '1200px',
        contentPaddingX: isMobile ? '15px' : '30px',
    };

    // Definisi gaya (styles) sebagai objek JavaScript
    const styles = {
        appContainer: {
            fontFamily: "'Poppins', sans-serif",
            margin: 0,
            padding: '0 0 50px 0',
            backgroundColor: colors.white,
            color: colors.darkGray,
            lineHeight: 1.6,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            overflowX: 'hidden',
        },
        img: {
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
        },
        h1h2h3h4: {
            marginTop: 0,
            fontWeight: 700,
        },
        p: {
            marginBottom: '1em',
            fontWeight: 400,
        },
        a: {
            textDecoration: 'none',
            color: 'inherit',
        },
        btn: {
            padding: '10px 24px',
            border: 'none',
            borderRadius: '25px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            fontSize: '0.9em',
        },
        btnHover: {
            transform: 'translateY(-2px)',
        },
        btnPrimary: {
            backgroundColor: colors.buttonColor,
            color: colors.darkGray,
        },
        btnPrimaryHover: {
            backgroundColor: '#e5b900',
        },
        btnSecondary: {
            backgroundColor: 'transparent',
            color: colors.darkGray,
            border: `1px solid ${colors.buttonColor}`,
        },
        btnSecondaryHover: {
            backgroundColor: colors.buttonColor,
            color: colors.darkGray,
        },
        headerHeroWrapper: {
            backgroundImage: `url('/img/background1.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: isMobile ? 'center top' : 'right top',
            backgroundSize: isMobile ? 'cover' : '100%',
            backgroundColor: colors.headerHeroBg,
            margin: 0,
            borderRadius: 0,
            boxShadow: 'none',
            overflow: 'hidden',
            paddingBottom: isMobile ? '30px' : '50px',
        },
        innerContainer: {
            maxWidth: layout.contentMaxWidth,
            margin: '0 auto',
            padding: `0 ${layout.contentPaddingX}`,
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            padding: isMobile ? '15px 0' : '20px 0',
        },
        navbarWrapper: {
            backgroundColor: colors.white,
            borderRadius: '25px',
            padding: isMobile ? '8px 15px' : '10px 30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: shadows.light,
            width: '100%',
            position: 'relative', // Penting untuk positioning absolut pop-up menu
            zIndex: 100, // Memastikan navbar berada di atas konten lain
        },
        logoImg: {
            height: isMobile ? '30px' : '35px',
            marginRight: 0,
        },
        // Icon Hamburger Menu (hanya ditampilkan di mobile)
        hamburger: {
            display: isMobile ? 'block' : 'none',
            cursor: 'pointer',
            fontSize: '1.8em',
            color: colors.darkGray,
            padding: '5px',
            zIndex: 101, // Memastikan icon hamburger berada di atas semua
            position: 'relative',
        },
        // Navigasi & Grup Tombol untuk Desktop
        navAndButtonGroup: {
            display: isMobile ? 'none' : 'flex', // Hanya tampil di desktop
            alignItems: 'center',
            flexDirection: 'row',
            gap: '0',
            flexGrow: 1, // Memungkinkan mengambil ruang yang tersedia
            justifyContent: 'flex-end', // Mendorong tautan dan tombol ke kanan
        },
        navbarUlDesktop: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: '20px', // Jarak antara tautan nav dan tombol
        },
        navbarLiDesktop: {
            margin: '0 12px',
        },
        navbarLinkDesktop: {
            color: colors.darkGray,
            fontWeight: 600,
            transition: 'color 0.3s ease, background-color 0.3s ease',
            fontSize: '0.9em',
            padding: '8px 12px',
            borderRadius: '15px',
        },
        navbarLinkHoverDesktop: {
            color: colors.darkGray,
            backgroundColor: colors.lightPurple,
        },
        headerBtn: {
            marginLeft: '15px',
            fontWeight: 600,
        },
        headerBtnImg: {
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: '6px',
            height: '14px',
            filter: 'brightness(0)',
        },

        // Gaya untuk Pop-up Menu Mobile (ala Chrome)
        mobilePopupMenu: {
            position: 'absolute',
            top: 'calc(100% + 10px)', // Posisikan 10px di bawah navbar
            right: '0', // Sejajarkan ke kanan dari navbarWrapper
            backgroundColor: colors.white,
            borderRadius: '10px',
            boxShadow: shadows.medium,
            padding: '10px 0',
            zIndex: 100, // Memastikan di atas konten lain
            minWidth: '180px',
            maxHeight: 'calc(100vh - 100px)', // Batasi tinggi agar tidak melebihi viewport
            overflowY: 'auto', // Aktifkan scroll jika konten terlalu panjang
            display: isNavOpen ? 'block' : 'none', // Kontrol visibilitas
            opacity: isNavOpen ? 1 : 0,
            transform: isNavOpen ? 'scale(1)' : 'scale(0.95)', // Animasi skala saat muncul/hilang
            transformOrigin: 'top right', // Titik asal animasi (sudut kanan atas)
            transition: 'opacity 0.2s ease-out, transform 0.2s ease-out', // Transisi halus
        },
        navbarUlMobile: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch', // Membuat item list mengisi lebar
        },
        navbarLiMobile: {
            margin: 0,
            width: '100%',
        },
        navbarLinkMobile: {
            color: colors.darkGray,
            fontWeight: 500,
            fontSize: '0.95em',
            padding: '10px 20px', // Padding di dalam item menu
            display: 'block', // Membuat seluruh area bisa diklik
            transition: 'background-color 0.2s ease',
            whiteSpace: 'nowrap', // Mencegah teks melilit
        },
        navbarLinkMobileHover: {
            backgroundColor: colors.lightPurple,
        },
        headerBtnMobile: {
            width: 'calc(100% - 40px)', // Sesuaikan lebar dengan padding
            margin: '10px 20px 0 20px', // Margin di dalam pop-up
            textAlign: 'center',
        },

        // Gaya Hero Section (tidak berubah)
        heroSection: {
            display: 'flex',
            alignItems: 'center',
            padding: isMobile ? '20px 0' : '10px 0 20px 0',
            position: 'relative',
            zIndex: 1,
            flexDirection: isMobile ? 'column' : 'row',
            textAlign: isMobile ? 'center' : 'left',
        },
        heroContent: {
            flex: 1,
            paddingRight: isMobile ? '0' : '30px',
            zIndex: 2,
            textAlign: isMobile ? 'center' : 'left',
        },
        heroSubtitle: {
            color: colors.primaryPurple,
            fontSize: isMobile ? '0.8em' : '0.9em',
            fontWeight: 600,
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'flex-start',
        },
        heroContentH1: {
            fontSize: isMobile ? '2.5em' : '3.5em',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '18px',
            color: colors.white,
            maxWidth: '800px',
            margin: isMobile ? '0 auto 18px auto' : '0 0 18px 0',
        },
        heroDescription: {
            fontSize: isMobile ? '0.9em' : '0.95em',
            color: colors.white,
            maxWidth: isMobile ? '90%' : '400px',
            marginBottom: '15px',
            lineHeight: 1.6,
            margin: isMobile ? '0 auto 15px auto' : '0 0 15px 0',
        },
        heroButtons: {
            textAlign: isMobile ? 'center' : 'left',
            marginBottom: isMobile ? '30px' : '0',
        },
        heroButtonsBtn: {
            backgroundColor: colors.buttonColor,
            color: colors.darkGray,
            fontWeight: 600,
            fontSize: isMobile ? '0.85em' : '0.9em',
            padding: '12px 28px',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            border: 'none',
            marginRight: isMobile ? '0' : '12px',
            marginBottom: isMobile ? '10px' : '0',
        },
        heroImageWrapper: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            position: 'relative',
            zIndex: 1,
            marginRight: '0',
            marginBottom: isMobile ? '0' : '-60px',
        },
        heroImage: {
            maxWidth: isMobile ? '90%' : '100%',
            maxHeight: isMobile ? '350px' : '500px',
            width: 'auto',
            objectFit: 'contain',
            boxShadow: 'none',
            position: 'relative',
            zIndex: 2,
        },
        heroImageBackground: {
            display: 'none',
        },
        section: {
            padding: isMobile ? '30px 0' : '50px 0',
            textAlign: 'center',
        },
        sectionTitle: {
            fontSize: isMobile ? '1.8em' : '2.5em',
            marginBottom: isMobile ? '20px' : '40px',
            color: colors.darkGray,
            fontWeight: 700,
            lineHeight: 1.2,
        },
        twoColumnSectionWrapper: {
            display: 'flex',
            gap: isMobile ? '20px' : '15px',
            marginTop: isMobile ? '30px' : '50px',
            position: 'relative',
            zIndex: 2,
            alignItems: 'stretch',
            flexDirection: isMobile ? 'column' : 'row',
        },
        updateSectionCard: {
            flex: isMobile ? '1 1 100%' : '1 1 40%',
            padding: isMobile ? '30px 20px' : '40px 35px',
            borderRadius: '20px',
            boxShadow: shadows.medium,
        },
        helpSectionCard: {
            flex: isMobile ? '1 1 100%' : '1 1 60%',
            padding: isMobile ? '30px 20px' : '40px 35px',
            borderRadius: '20px',
            boxShadow: shadows.medium,
        },
        updateSection: {
            backgroundImage: `url('/img/background1.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
            backgroundSize: 'cover',
            position: 'relative',
            color: colors.white,
            textAlign: 'left',
            overflow: 'hidden',
            zIndex: 1,
        },
        updateSectionH2: {
            fontSize: isMobile ? '1.8em' : '2.2em',
            color: colors.white,
            marginBottom: '20px',
            fontWeight: 700,
            lineHeight: 1.2,
            position: 'relative',
            zIndex: 1,
        },
        updateSectionP: {
            fontSize: isMobile ? '0.9em' : '1em',
            lineHeight: 1.6,
            marginBottom: '30px',
            opacity: 0.9,
            position: 'relative',
            zIndex: 1,
        },
        updateForm: {
            display: 'flex',
            gap: '12px',
            position: 'relative',
            zIndex: 1,
            flexDirection: isMobile ? 'column' : 'row',
        },
        updateFormInput: {
            flexGrow: 1,
            padding: '14px 20px',
            border: 'none',
            borderRadius: '25px',
            fontSize: '0.9em',
            outline: 'none',
            color: colors.darkGray,
            width: isMobile ? 'auto' : '100%',
        },
        updateFormButton: {
            backgroundColor: colors.buttonColor,
            color: colors.darkGray,
            padding: '14px 28px',
            borderRadius: '25px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            fontSize: '0.9em',
            border: 'none',
            width: isMobile ? 'auto' : '100%',
        },
        helpSection: {
            backgroundColor: colors.white,
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            position: 'relative',
            zIndex: 1,
            marginTop: isMobile ? '-80px' : '-100px',
        },
        helpSectionH3: {
            fontSize: isMobile ? '1.5em' : '1.8em',
            color: colors.darkGray,
            marginBottom: '30px',
            fontWeight: 600,
            width: '100%',
        },
        helpContentWrapper: {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            width: '100%',
            gap: '20px',
            flexDirection: isMobile ? 'column' : 'row',
        },
        helpColumn: {
            flex: isMobile ? '1 1 100%' : '1 1 200px',
            maxWidth: 'unset',
        },
        helpColumnUl: {
            listStyle: 'none',
            padding: 0,
        },
        helpColumnLi: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
            color: colors.mediumGray,
            fontSize: '0.95em',
            fontWeight: 500,
        },
        helpColumnLiImg: {
            height: '18px',
            marginRight: '12px',
            filter: 'invert(39%) sepia(85%) saturate(2250%) hue-rotate(240deg) brightness(85%) contrast(100%)',
        },
        readMore: {
            marginTop: '30px',
            textAlign: 'left',
            width: '100%',
        },
        readMoreLink: {
            color: colors.primaryPurple,
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '1em',
        },
        readMoreLinkHover: {
            textDecoration: 'underline',
        },
    };

    return (
        <div style={styles.appContainer}>
            <div style={styles.headerHeroWrapper}>
                <div style={styles.innerContainer}>
                    <header style={styles.header}>
                        <div style={styles.navbarWrapper}>
                            {/* Logo */}
                            <div className="logo">
                                <img src="https://via.placeholder.com/120x40/8a2be2/ffffff?text=PAYZE" alt="Payze Logo" style={styles.logoImg} />
                            </div>

                            {/* Navigasi Desktop (Hanya ditampilkan di desktop) */}
                            {!isMobile && (
                                <div style={styles.navAndButtonGroup}>
                                    <nav className="navbar-desktop">
                                        <ul style={styles.navbarUlDesktop}>
                                            <li style={styles.navbarLiDesktop}>
                                                <a
                                                    href="#"
                                                    style={styles.navbarLinkDesktop}
                                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.navbarLinkHoverDesktop.backgroundColor}
                                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li style={styles.navbarLiDesktop}>
                                                <a
                                                    href="#"
                                                    style={styles.navbarLinkDesktop}
                                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.navbarLinkHoverDesktop.backgroundColor}
                                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li style={styles.navbarLiDesktop}>
                                                <a
                                                    href="#"
                                                    style={styles.navbarLinkDesktop}
                                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.navbarLinkHoverDesktop.backgroundColor}
                                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                >
                                                    Artikel
                                                </a>
                                            </li>
                                            <li style={styles.navbarLiDesktop}>
                                                <a
                                                    href="#"
                                                    style={styles.navbarLinkDesktop}
                                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.navbarLinkHoverDesktop.backgroundColor}
                                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                >
                                                    Informasi
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <button style={{ ...styles.btn, ...styles.btnPrimary, ...styles.headerBtn }}>
                                        PPDB
                                    </button>
                                </div>
                            )}

                            {/* Icon Hamburger Menu (Hanya ditampilkan di mobile) dan Pop-up Menu */}
                            {isMobile && (
                                <>
                                    <div style={styles.hamburger} onClick={toggleNav}>
                                        &#9776; {/* Icon Hamburger */}
                                    </div>
                                    {/* Mobile Pop-up Menu */}
                                    <div style={styles.mobilePopupMenu} ref={navRef}>
                                        <nav className="mobile-navbar">
                                            <ul style={styles.navbarUlMobile}>
                                                <li style={styles.navbarLiMobile}>
                                                    <a
                                                        href="#"
                                                        style={styles.navbarLinkMobile}
                                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.navbarLinkMobileHover.backgroundColor}
                                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                        onClick={toggleNav} // Tutup menu saat tautan diklik
                                                    >
                                                        Home
                                                    </a>
                                                </li>
                                                <li style={styles.navbarLiMobile}>
                                                    <a
                                                        href="#"
                                                        style={styles.navbarLinkMobile}
                                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.navbarLinkMobileHover.backgroundColor}
                                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                        onClick={toggleNav} // Tutup menu saat tautan diklik
                                                    >
                                                        Profile
                                                    </a>
                                                </li>
                                                <li style={styles.navbarLiMobile}>
                                                    <a
                                                        href="#"
                                                        style={styles.navbarLinkMobile}
                                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.navbarLinkMobileHover.backgroundColor}
                                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                        onClick={toggleNav} // Tutup menu saat tautan diklik
                                                    >
                                                        Artikel
                                                    </a>
                                                </li>
                                                <li style={styles.navbarLiMobile}>
                                                    <a
                                                        href="#"
                                                        style={styles.navbarLinkMobile}
                                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.navbarLinkMobileHover.backgroundColor}
                                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                        onClick={toggleNav} // Tutup menu saat tautan diklik
                                                    >
                                                        Informasi
                                                    </a>
                                                </li>
                                                <li style={styles.navbarLiMobile}>
                                                    <button
                                                        style={{ ...styles.btn, ...styles.btnPrimary, ...styles.headerBtnMobile }}
                                                        onClick={toggleNav} // Tutup menu saat tombol diklik
                                                    >
                                                        PPDB
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </>
                            )}
                        </div>
                    </header>
                </div>

                {/* Hero Section */}
                <div style={styles.innerContainer}>
                    <section style={styles.heroSection}>
                        <div style={styles.heroContent}>
                            <p style={styles.heroSubtitle}>Feel The Convenience</p>
                            <h1 style={styles.heroContentH1}>Pendaftaran telah dibuka</h1>
                            <p style={styles.heroDescription}>
                                Sekolah yang mengedepankan prestasi dan akhlak mulia<br /><br />
                            </p>
                            <div style={styles.heroButtons}>
                                <button style={styles.heroButtonsBtn}>Daftar Sekarang</button>
                            </div>
                        </div>
                        <div style={styles.heroImageWrapper}>
                            <img className="hero-image" src="/img/hero1.png" alt="Woman holding cards" style={styles.heroImage} />
                            <div style={styles.heroImageBackground}></div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Bagian Kolom Dua */}
            <div style={styles.innerContainer}>
                {isMobile ? (
                    <div style={styles.twoColumnSectionWrapper}>
                        {/* Di Mobile, "How Can I Help You?" muncul lebih dulu */}
                        <section style={{ ...styles.section, ...styles.helpSectionCard, ...styles.helpSection }}>
                            <h3 style={styles.helpSectionH3}>How Can I Help You?</h3>
                            <div style={styles.helpContentWrapper}>
                                <div style={styles.helpColumn}>
                                    <ul style={styles.helpColumnUl}>
                                        <li style={styles.helpColumnLi}><img src="https://via.placeholder.com/18x18/8a2be2/ffffff?text=✓" alt="Check" style={styles.helpColumnLiImg} /> Online Payment</li>
                                        <li style={styles.helpColumnLi}><img src="https://via.placeholder.com/18x18/8a2be2/ffffff?text=✓" alt="Check" style={styles.helpColumnLiImg} /> Platform Support</li>
                                        <li style={styles.helpColumnLi}><img src="https://via.placeholder.com/18x18/8a2be2/ffffff?text=✓" alt="Check" style={styles.helpColumnLiImg} /> Global Recognition</li>
                                    </ul>
                                </div>
                                <div style={styles.helpColumn}>
                                    <ul style={styles.helpColumnUl}>
                                        <li style={styles.helpColumnLi}><img src="https://via.placeholder.com/18x18/8a2be2/ffffff?text=✓" alt="Check" style={styles.helpColumnLiImg} /> Responsive Web App</li>
                                        <li style={styles.helpColumnLi}><img src="https://via.placeholder.com/18x18/8a2be2/ffffff?text=✓" alt="Check" style={styles.helpColumnLiImg} /> Easy Top-Up Payments</li>
                                        <li style={styles.helpColumnLi}><img src="https://via.placeholder.com/18x18/8a2be2/ffffff?text=✓" alt="Check" style={styles.helpColumnLiImg} /> Lock Protection</li>
                                    </ul>
                                </div>
                            </div>
                            <div style={styles.readMore}>
                                <a href="#" style={styles.readMoreLink}>Read More &rarr;</a>
                            </div>
                        </section>
                        {/* Kemudian "Always Update Every Day" */}
                        <section style={{ ...styles.section, ...styles.updateSectionCard, ...styles.updateSection }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: colors.gradientBlue,
                                zIndex: 0,
                                borderRadius: 'inherit',
                            }}></div>
                            <h2 style={styles.updateSectionH2}>Always Update Every Day</h2>
                            <p style={styles.updateSectionP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div style={styles.updateForm}>
                                <input type="email" placeholder="Your Email" style={styles.updateFormInput} />
                                <button type="submit" style={styles.updateFormButton}>Request</button>
                            </div>
                        </section>
                    </div>
                ) : (
                    <div style={styles.twoColumnSectionWrapper}>
                        {/* Di Desktop, "Always Update Every Day" muncul lebih dulu */}
                        <section style={{ ...styles.section, ...styles.updateSectionCard, ...styles.updateSection }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: colors.gradientBlue,
                                zIndex: 0,
                                borderRadius: 'inherit',
                            }}></div>
                            <h2 style={styles.updateSectionH2}>Always Update Every Day</h2>
                            <p style={styles.updateSectionP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div style={styles.updateForm}>
                                <input type="email" placeholder="Your Email" style={styles.updateFormInput} />
                                <button type="submit" style={styles.updateFormButton}>Request</button>
                            </div>
                        </section>

                        <section style={{ ...styles.section, ...styles.helpSectionCard, ...styles.helpSection }}>
                            <h3 style={styles.helpSectionH3}>How Can I Help You?</h3>
                            <div style={styles.helpContentWrapper}>
                                <div style={styles.helpColumn}>
                                    <ul style={styles.helpColumnUl}>
                                        <li style={styles.helpColumnLi}><img src="https://via.placeholder.com/18x18/8a2be2/ffffff?text=✓" alt="Check" style={styles.helpColumnLiImg} /> Online Payment</li>
                                        <li style={styles.helpColumnLi}><img src="https://via.placeholder.com/18x18/8a2be2/ffffff?text=✓" alt="Check" style={styles.helpColumnLiImg} /> Platform Support</li>
                                        <li style={styles.helpColumnLi}><img src="https://via.placeholder.com/18x18/8a2be2/ffffff?text=✓" alt="Check" style={styles.helpColumnLiImg} /> Global Recognition</li>
                                    </ul>
                                </div>
                                <div style={styles.helpColumn}>
                                    <ul style={styles.helpColumnUl}>
                                        <li style={styles.helpColumnLi}><img src="https://via.placeholder.com/18x18/8a2be2/ffffff?text=✓" alt="Check" style={styles.helpColumnLiImg} /> Responsive Web App</li>
                                        <li style={styles.helpColumnLi}><img src="https://via.placeholder.com/18x18/8a2be2/ffffff?text=✓" alt="Check" style={styles.helpColumnLiImg} /> Easy Top-Up Payments</li>
                                        <li style={styles.helpColumnLi}><img src="https://via.placeholder.com/18x18/8a2be2/ffffff?text=✓" alt="Check" style={styles.helpColumnLiImg} /> Lock Protection</li>
                                    </ul>
                                </div>
                            </div>
                            <div style={styles.readMore}>
                                <a href="#" style={styles.readMoreLink}>Read More &rarr;</a>
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;