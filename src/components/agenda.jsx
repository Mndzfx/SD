// Agenda.js
import React, { useEffect, useState } from 'react';

function Agenda() {
    // --- Common Styles (Disalin dari DaftarGuru.js untuk konsistensi) ---
    const commonStyles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            boxSizing: 'border-box',
        },
        // --- sectionHeader untuk Desktop (default) ---
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
            // margin: '0 auto' dan textAlign: 'center' akan diterapkan kondisional untuk mobile
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

    // Definisi gaya khusus untuk komponen Agenda ini
    const styles = {
        agendaSection: {
            backgroundImage: `url('/img/background1.png')`, // Pastikan path gambar ini benar
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            marginTop: '50px',
            maxWidth: '100%',
            overflow: 'hidden',
            color: 'white',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
            padding: '0 0 30px 0',
        },
        agendaGridContainer: {
            display: 'flex', // Use flexbox for horizontal layout
            overflowX: 'scroll', // Enable horizontal scrolling
            scrollSnapType: 'x mandatory', // Optional: for smoother snapping to cards
            paddingBottom: '15px', // Add some padding for the scrollbar area
            msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
            scrollbarWidth: 'none', // Hide scrollbar for Firefox
            WebkitOverflowScrolling: 'touch', // Enable smooth scrolling on iOS
            gap: '25px', // Jarak antar kartu

            // Hide scrollbar for Chrome, Safari, Opera
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            flexShrink: 0, // Prevent container from shrinking
        },
        agendaCard: {
            flex: '0 0 auto', // Prevent cards from growing or shrinking, keep their auto width
            width: '300px', // Fixed width for each card (adjust as needed)
            background: '#ffffff',
            borderRadius: '12px',
            padding: '25px',
            backdropFilter: 'none',
            border: '1px solid #ddd',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            color: '#333',
            cursor: 'pointer',
            scrollSnapAlign: 'start', // Optional: for smoother snapping to cards

            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            },
        },
        agendaDateSmall: {
            fontSize: '13px',
            opacity: 0.8,
            marginBottom: '8px',
            color: '#777',
        },
        agendaTime: {
            fontSize: '15px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#e67e22',
        },
        agendaEventTitle: {
            fontSize: '19px',
            fontWeight: 'bold',
            marginBottom: '12px',
            lineHeight: 1.3,
            color: '#222',
        },
        agendaLocation: {
            fontSize: '14px',
            opacity: 0.85,
            color: '#555',
        },
    };

    const getStyle = (elementName, isHovered = false) => {
        const allStyles = { ...commonStyles, ...styles };
        const baseStyle = allStyles[elementName] || {};
        const hoverStyle = isHovered && allStyles[`${elementName}Hover`] ? allStyles[`${elementName}Hover`] : (
            isHovered && baseStyle['&:hover'] ? baseStyle['&:hover'] : {}
        );

        let combinedStyle = { ...baseStyle };

        // Handle pseudo-elements for agendaSection overlay (as inline styles don't support `&::before`)
        // This will be handled by a separate div in JSX for inline styles.
        if (elementName === 'agendaSection' && combinedStyle['&::before']) {
             // This part will not directly apply in React inline styles.
             // It's meant for CSS-in-JS libraries or external CSS.
             // We'll add a separate div in JSX for the overlay.
        }

        return { ...combinedStyle, ...hoverStyle };
    };

    const [hoveredJelajahiAgendaBtn, setHoveredJelajahiAgendaBtn] = useState(false);
    const [hoveredAgendaCard, setHoveredAgendaCard] = useState({});

    // --- State dan useEffect untuk Deteksi Ukuran Layar ---
    const MOBILE_BREAKPOINT = 768; // Sesuaikan breakpoint sesuai kebutuhan (misal: 768px untuk tablet/mobile)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobileView = windowWidth < MOBILE_BREAKPOINT;

    const agendaData = [
        { id: 1, date: "18 November 2024", time: "Start 07:00 WIB", title: "Upacara Milad Muhammadiyah", location: "Lapangan SD Muhammadiyah Plus" },
        { id: 2, date: "23 Oktober 2024", time: "07:00 WIB - Selesai", title: "Upacara Hari Santri Nasional", location: "Lapangan SD Muhammadiyah Plus" },
        { id: 3, date: "18 November 2024", time: "04:00 WIB - Selesai", title: "Wisuda Tahfidz Al-Qur'an", location: "Universitas Islam Malang" },
        { id: 4, date: "05 Desember 2024", time: "10:00 WIB - Selesai", title: "Rapat Guru Besar", location: "Ruang Rapat Utama" },
        { id: 5, date: "10 Januari 2025", time: "08:00 WIB - 12:00 WIB", title: "Pameran Karya Siswa", location: "Aula Serbaguna" },
        { id: 6, date: "15 Februari 2025", time: "09:00 WIB - Selesai", title: "Lomba Cerdas Cermat", location: "Perpustakaan Sekolah" },
    ];

    return (
        <div
            style={getStyle('agendaSection')}
        >
            {/* The overlay div for background effect (needed for inline styles) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(33, 150, 243, 0.7)',
                zIndex: 0,
            }}></div>

            <div style={{ ...getStyle('container'), position: 'relative', zIndex: 1 }}>
                <div
                    style={{
                        ...getStyle('sectionHeader'),
                        // --- Kondisi Gaya untuk Mobile View ---
                        ...(isMobileView ? {
                            flexDirection: 'column', // Tumpuk vertikal
                            alignItems: 'center',    // Pusatkan secara horizontal
                            textAlign: 'center',     // Pusatkan teks di dalamnya
                        } : {}),
                    }}
                >
                    {/* Div yang membungkus Judul dan Subjudul */}
                    <div
                        style={{
                            // Untuk subjudul, pastikan margin auto juga hanya aktif di mobile
                            ...(isMobileView ? { margin: '0 auto' } : {}),
                        }}
                    >
                        <h1 style={getStyle('sectionTitle')}>Agenda</h1>
                        <p style={getStyle('sectionSubtitle')}>Menyajikan Publikasi Artikel Berita dan Informasi dari SD Muhammadiyah Plus Kota Probolinggo</p>
                    </div>
                    <button
                        style={{
                            ...getStyle('sectionButton'),
                            ...(hoveredJelajahiAgendaBtn ? getStyle('sectionButton', true) : {}),
                        }}
                        onMouseEnter={() => setHoveredJelajahiAgendaBtn(true)}
                        onMouseLeave={() => setHoveredJelajahiAgendaBtn(false)}
                    >
                        Jelajahi Agenda
                    </button>
                </div>

                <div style={{ ...getStyle('agendaGridContainer'), ...commonStyles.container, padding: commonStyles.container.padding }}>
                    {agendaData.map((agenda) => (
                        <div
                            key={agenda.id}
                            style={{
                                ...getStyle('agendaCard'),
                                ...(hoveredAgendaCard[`${agenda.id}`] ? getStyle('agendaCard', true) : {}),
                            }}
                            onMouseEnter={() => setHoveredAgendaCard(prev => ({ ...prev, [`${agenda.id}`]: true }))}
                            onMouseLeave={() => setHoveredAgendaCard(prev => ({ ...prev, [`${agenda.id}`]: false }))}
                        >
                            <div style={getStyle('agendaDateSmall')}>{agenda.date}</div>
                            <div style={getStyle('agendaTime')}>{agenda.time}</div>
                            <h3 style={getStyle('agendaEventTitle')}>{agenda.title}</h3>
                            <div style={getStyle('agendaLocation')}>{agenda.location}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Agenda;