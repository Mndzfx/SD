import React, { useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring'; // Import useSpring, animated, and config

function Agenda() {
    // --- Common Styles (REVERTED TO ORIGINAL FOR HEADER ELEMENTS) ---
    const commonStyles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            boxSizing: 'border-box',
        },
        // --- sectionHeader untuk Desktop (default from original) ---
        sectionHeader: {
            display: 'flex',
            justifyContent: 'space-between', // Default: sejajar kiri-kanan
            alignItems: 'center',
            paddingTop: '30px', // **Nilai disesuaikan dari 60px menjadi 30px**
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '15px',
        },
        sectionTitle: {
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '5px',
            marginTop: 0,
        },
        sectionSubtitle: {
            fontSize: '15px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginTop: 0,
            maxWidth: '750px',
            lineHeight: '1.6',
        },
        sectionButton: {
            backgroundColor: '#e8f4fd',
            color: '#3498db',
            border: '1px solid #3498db',
            padding: '10px 20px',
            borderRadius: '25px',
            fontSize: '15px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            whiteSpace: 'nowrap',
        },
        sectionButtonHover: {
            backgroundColor: '#3498db',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        },
    };

    // --- Specific styles for the Agenda component and card internals (KEPT NEW DESIGN) ---
    const styles = {
        agendaSection: {
            // backgroundImage akan diatur secara dinamis oleh JavaScript
            backgroundSize: 'cover',
            backgroundPosition: 'right top',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            marginTop: '50px',
            maxWidth: '100%',
            overflow: 'hidden',
            color: 'white',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
            padding: '0 0 30px 0',
            // Transisi untuk efek fade-in gambar latar belakang
            transition: 'background-image 0.7s ease-in-out, background-color 0.7s ease-in-out',
        },
        agendaGridContainer: {
            display: 'flex',
            overflowX: 'scroll',
            scrollSnapType: 'x mandatory',
            paddingBottom: '15px',
            gap: '30px',
            padding: '0 20px',

            // --- HIDE SCROLLBAR (Kept) ---
            MsOverflowStyle: 'none',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        },
        agendaCard: {
            flex: '0 0 auto',
            width: '320px',
            background: '#ffffff',
            borderRadius: '16px',
            padding: '25px',
            border: 'none',
            transition: 'all 0.4s ease',
            color: '#333',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '220px',
            position: 'relative',
            overflow: 'hidden',
            scrollSnapAlign: 'start',
            '&:hover': {
                transform: 'translateY(-10px) scale(1.03)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
            },
        },
        // --- CARD INTERNAL STYLES (KEPT NEW DESIGN) ---
        cardHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '15px',
        },
        agendaDateSmall: {
            fontSize: '13px',
            fontWeight: '600',
            color: '#777',
            opacity: 0.9,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
        },
        agendaTime: {
            fontSize: '20px',
            fontWeight: '700',
            color: '#1E90FF',
            flexShrink: 0,
            marginLeft: '15px',
        },
        agendaEventTitle: {
            fontSize: '22px',
            fontWeight: '800',
            color: '#2c3e50',
            lineHeight: 1.3,
            marginBottom: '15px',
        },
        agendaLocation: {
            fontSize: '14px',
            color: '#666',
            opacity: 0.8,
            marginTop: 'auto',
            paddingTop: '15px',
            borderTop: '1px dashed #eee',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
        },
        locationIcon: {
            fontSize: '16px',
            color: '#3498db',
        },
        cardCornerAccent: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '40px',
            height: '40px',
            backgroundColor: '#FFD700',
            borderBottomLeftRadius: '16px',
        }
    };

    const getStyle = (elementName, isHovered = false) => {
        const allStyles = { ...commonStyles, ...styles };
        const baseStyle = allStyles[elementName] || {};
        const hoverStyle = isHovered && allStyles[`${elementName}Hover`] ? allStyles[`${elementName}Hover`] : (
            isHovered && baseStyle['&:hover'] ? baseStyle['&:hover'] : {}
        );

        return { ...baseStyle, ...hoverStyle };
    };

    // State untuk lazy loading gambar latar belakang
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);

    // Efek untuk memuat gambar latar belakang
    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setBackgroundLoaded(true);
        };
        img.onerror = () => {
            console.error('Failed to load background image for Agenda: /img/background1.png');
            setBackgroundLoaded(true); // Tetap set true agar tidak stuck
        };
        img.src = '/img/background1.png';
    }, []);

    const [hoveredJelajahiAgendaBtn, setHoveredJelajahiAgendaBtn] = useState(false);
    const [hoveredAgendaCard, setHoveredAgendaCard] = useState({});

    // --- State dan useEffect untuk Deteksi Ukuran Layar ---
    const MOBILE_BREAKPOINT = 768;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobileView = windowWidth < MOBILE_BREAKPOINT;

    // --- Animasi dengan react-spring ---
    const sectionHeaderAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-30px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: config.wobbly,
    });

    const sectionButtonAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(30px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        delay: 300,
        config: config.stiff,
    });

    const agendaGridContainerAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500,
        config: config.slow,
    });

    const agendaData = [
        { id: 1, date: "18 November 2024", time: "Start 07:00 WIB", title: "Upacara Milad Muhammadiyah", location: "Lapangan SD Muhammadiyah Plus" },
        { id: 2, date: "23 Oktober 2024", time: "07:00 WIB - Selesai", title: "Upacara Hari Santri Nasional", location: "Lapangan SD Muhammadiyah Plus" },
        { id: 3, date: "18 November 2024", time: "04:00 WIB - Selesai", title: "Wisuda Tahfidz Al-Qur'an", location: "Universitas Islam Malang" },
        { id: 4, date: "05 Desember 2024", time: "10:00 WIB - Selesai", title: "Rapat Guru Besar", location: "Ruang Rapat Utama" },
        { id: 5, date: "10 Januari 2025", time: "08:00 WIB - 12:00 WIB", title: "Pameran Karya Siswa", location: "Aula Serbaguna" },
        { id: 6, date: "15 Februari 2025", time: "09:00 WIB - Selesai", title: "Lomba Cerdas Cermat", location: "Perpustakaan Sekolah" },
    ];

    // Style dinamis untuk bagian agenda, termasuk lazy loading background
    const agendaSectionDynamicStyle = {
        ...getStyle('agendaSection'),
        // Terapkan backgroundImage hanya jika sudah dimuat
        backgroundImage: backgroundLoaded ? `url('/img/background1.png')` : 'none',
        // Opsi: Tetapkan warna solid sebagai fallback sementara jika gambar belum dimuat
        backgroundColor: backgroundLoaded ? 'transparent' : '#3498db', // Warna placeholder sebelum gambar dimuat
    };

    return (
        <div style={agendaSectionDynamicStyle}> {/* Gunakan style dinamis untuk agendaSection */}
            {/* REMOVED the overlay div. The background image will now be fully visible. */}
            {/* If you ever want an overlay again, you can re-add it here with a different color or opacity. */}

            <div style={{ ...getStyle('container'), position: 'relative', zIndex: 1 }}>
                {/* Header bagian dengan animasi muncul dari atas */}
                <animated.div
                    style={{
                        ...getStyle('sectionHeader'),
                        ...sectionHeaderAnimation, // Aplikasi animasi header
                        // --- Kondisi Gaya untuk Mobile View (Reverted to original) ---
                        ...(isMobileView ? {
                            flexDirection: 'column', // Tumpuk vertikal
                            alignItems: 'center',    // Pusatkan secara horizontal
                            textAlign: 'center',     // Pusatkan teks di dalamnya
                        } : {}),
                    }}
                >
                    {/* Div yang membungkus Judul dan Subjudul */}
                    <div
                        style={{
                            // Untuk subjudul, pastikan margin auto juga hanya aktif di mobile (Reverted to original)
                            ...(isMobileView ? { margin: '0 auto' } : {}),
                        }}
                    >
                        <h1 style={getStyle('sectionTitle')}>Agenda</h1>
                        <p style={getStyle('sectionSubtitle')}>Menyajikan Publikasi Artikel Berita dan Informasi dari SD Muhammadiyah Plus Kota Probolinggo</p>
                    </div>
                    {/* Tombol dengan animasi muncul dari kanan */}
                    <animated.button // Gunakan animated.button
                        style={{
                            ...getStyle('sectionButton'),
                            ...sectionButtonAnimation, // Aplikasi animasi tombol
                            ...(hoveredJelajahiAgendaBtn ? getStyle('sectionButton', true) : {}),
                        }}
                        onMouseEnter={() => setHoveredJelajahiAgendaBtn(true)}
                        onMouseLeave={() => setHoveredJelajahiAgendaBtn(false)}
                    >
                        Jelajahi Agenda
                    </animated.button>
                </animated.div>

                {/* Agenda Cards Container (Horizontal Scroll with hidden scrollbar and new card design) */}
                <animated.div style={{ ...getStyle('agendaGridContainer'), ...agendaGridContainerAnimation }}> {/* Aplikasi animasi ke container kartu */}
                    {agendaData.map((agenda, index) => { // Tambahkan 'index' untuk stagger animation
                        const cardAnimation = useSpring({
                            from: { opacity: 0, transform: 'translateY(50px)' }, // Muncul dari bawah
                            to: { opacity: 1, transform: 'translateY(0px)' },
                            delay: 600 + index * 120, // Stagger delay for each card
                            config: config.gentle, // Animasi lembut
                        });

                        return (
                            <animated.div // Gunakan animated.div untuk kartu
                                key={agenda.id}
                                style={{
                                    ...getStyle('agendaCard', hoveredAgendaCard[`${agenda.id}`]),
                                    ...cardAnimation, // Aplikasi animasi muncul kartu
                                }}
                                onMouseEnter={() => setHoveredAgendaCard(prev => ({ ...prev, [`${agenda.id}`]: true }))}
                                onMouseLeave={() => setHoveredAgendaCard(prev => ({ ...prev, [`${agenda.id}`]: false }))}
                            >
                                <div style={getStyle('cardCornerAccent')}></div>
                                <div style={getStyle('cardHeader')}>
                                    <div style={getStyle('agendaDateSmall')}>{agenda.date}</div>
                                    <div style={getStyle('agendaTime')}>{agenda.time}</div>
                                </div>
                                <h3 style={getStyle('agendaEventTitle')}>{agenda.title}</h3>
                                <div style={getStyle('agendaLocation')}>
                                    <span style={getStyle('locationIcon')}>📍</span> {agenda.location}
                                </div>
                            </animated.div>
                        );
                    })}
                </animated.div>
            </div>
        </div>
    );
}

export default Agenda;