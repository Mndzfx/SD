import React, { useEffect, useState } from 'react';
// Remove useSpring and animated import as they are no longer used for entrance animations
// import { useSpring, animated, config } from 'react-spring'; // This line is commented out

function Agenda() {
    // --- Common Styles (DISINKRONKAN DENGAN DASHBOARD.JSX) ---
    const commonStyles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            boxSizing: 'border-box',
        },
        sectionHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '30px',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '15px',
        },
        // --- SESUAI DENGAN DASHBOARD.JSX ---
        sectionTitle: {
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white', // Pastikan warna putih
            marginBottom: '5px',
            marginTop: 0,
        },
        // --- SESUAI DENGAN DASHBOARD.JSX ---
        sectionSubtitle: {
            fontSize: '15px',
            color: 'rgba(255, 255, 255, 0.9)', // Pastikan warna putih semi-transparan
            marginTop: 0,
            maxWidth: '750px',
            lineHeight: '1.6',
        },
        // --- SESUAI DENGAN DASHBOARD.JSX ---
        sectionButton: {
            backgroundColor: '#e8f4fd', // Default background button
            color: '#3498db',           // Default text color button
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
        // --- SESUAI DENGAN DASHBOARD.JSX ---
        sectionButtonHover: {
            backgroundColor: '#3498db',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        },
    };

    // --- Specific styles for the Agenda component and card internals ---
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
            color: 'white', // Tetap white karena konten di atasnya putih
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
            padding: '0 0 30px 0',
            transition: 'background-image 0.7s ease-in-out, background-color 0.7s ease-in-out',
        },
        agendaGridContainer: {
            display: 'flex',
            overflowX: 'scroll',
            scrollSnapType: 'x mandatory',
            paddingBottom: '15px',
            gap: '30px',
            padding: '0 20px',
            MsOverflowStyle: 'none', // For IE/Edge, still works inline for hiding default scrollbar
            scrollbarWidth: 'none', // For Firefox, still works inline for hiding default scrollbar
            WebkitOverflowScrolling: 'touch',
            // --- REMOVED THE CAUSING ERROR STYLES BELOW ---
            // '&::-webkit-scrollbar': {
            //     display: 'none',
            // },
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

        // --- REMOVED THE CAUSING ERROR CHECK ---
        // if (elementName === 'agendaGridContainer' && baseStyle['&::-webkit-scrollbar']) {
        //     return { ...baseStyle, ...hoverStyle };
        // }

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
            setBackgroundLoaded(true); // Fallback: tetap set true agar konten terlihat
        };
        img.src = '/img/background1.png';
    }, []);

    const [isSectionButtonHovered, setIsSectionButtonHovered] = useState(false);
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

    // --- Removed react-spring animations ---
    // const sectionHeaderAnimation = useSpring({...});
    // const sectionButtonAnimation = useSpring({...});
    // const agendaGridContainerAnimation = useSpring({...});

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
        <div style={agendaSectionDynamicStyle}>
            <div style={{ ...getStyle('container'), position: 'relative', zIndex: 1 }}>
                {/* Removed animated.div for sectionHeader */}
                <div
                    style={{
                        ...getStyle('sectionHeader'),
                        ...(isMobileView ? {
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        } : {}),
                    }}
                >
                    <div>
                        {/* Judul: Warna dan ukuran sama dengan Dashboard */}
                        <h1 style={getStyle('sectionTitle')}>Agenda Sekolah</h1> {/* Ganti teks judul */}
                        {/* Subjudul: Warna dan ukuran sama dengan Dashboard */}
                        <p style={getStyle('sectionSubtitle')}>Lihat jadwal kegiatan penting dan acara terbaru di SD Muhammadiyah Plus Kota Probolinggo.</p> {/* Ganti teks deskripsi */}
                    </div>
                    {/* Removed animated.button */}
                    <button
                        style={{
                            // --- SESUAI DENGAN DASHBOARD.JSX UNTUK TOMBOL PUTIH DENGAN HOVER ---
                            ...getStyle('sectionButton'),
                            backgroundColor: 'white', // Latar belakang putih
                            color: '#3498db',           // Warna teks biru
                            border: '1px solid white', // Border putih
                            ...(isSectionButtonHovered ? {
                                backgroundColor: '#e8f4fd', // Background saat hover
                                color: '#3498db',           // Text saat hover
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                            } : {})
                        }}
                        onMouseEnter={() => setIsSectionButtonHovered(true)}
                        onMouseLeave={() => setIsSectionButtonHovered(false)}
                    >
                        Jelajahi Agenda
                    </button>
                </div>

                {/* Removed animated.div for agendaGridContainer */}
                <div style={getStyle('agendaGridContainer')}>
                    {agendaData.map((agenda) => { // Removed index as it's not used for entrance animation
                        // Removed cardAnimation useSpring hook
                        // const cardAnimation = useSpring({...});

                        return (
                            // Changed animated.div back to a regular div
                            <div
                                key={agenda.id}
                                style={{
                                    ...getStyle('agendaCard', hoveredAgendaCard[`${agenda.id}`]),
                                    // Removed ...cardAnimation,
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Agenda;