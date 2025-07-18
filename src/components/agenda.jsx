import React, { useEffect, useState } from 'react';

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
            // Reverted background to original image with overlay, but kept other properties
            backgroundImage: `url('/img/background1.png')`, // Original image background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            marginTop: '50px', // Original margin
            maxWidth: '100%',
            overflow: 'hidden',
            color: 'white',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)', // Original shadow
            padding: '0 0 30px 0', // Original padding
        },
        agendaGridContainer: {
            display: 'flex',
            overflowX: 'scroll', // Enable horizontal scrolling
            scrollSnapType: 'x mandatory',
            paddingBottom: '15px',
            gap: '30px', // Gap between cards (kept new value)
            padding: '0 20px', // Padding for the container itself (kept new value)

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
            width: '320px', // Fixed width for each card (kept new value)
            background: '#ffffff', // Clean white background (kept new value)
            borderRadius: '16px', // More rounded corners (kept new value)
            padding: '25px', // Increased padding inside card (kept new value)
            border: 'none', // No border (kept new value)
            transition: 'all 0.4s ease', // Slower transition (kept new value)
            color: '#333',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)', // Lighter, modern shadow (kept new value)
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '220px', // Adjusted minimum height (kept new value)
            position: 'relative',
            overflow: 'hidden',
            scrollSnapAlign: 'start',
            '&:hover': {
                transform: 'translateY(-10px) scale(1.03)', // More prominent lift and slight scale (kept new value)
                boxShadow: '0 15px 35px rgba(0,0,0,0.15)', // Stronger hover shadow (kept new value)
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
            color: '#1E90FF', // Dodger Blue for time
            flexShrink: 0,
            marginLeft: '15px',
        },
        agendaEventTitle: {
            fontSize: '22px',
            fontWeight: '800',
            color: '#2c3e50', // Darker blue-grey for title
            lineHeight: 1.3,
            marginBottom: '15px',
        },
        agendaLocation: {
            fontSize: '14px',
            color: '#666',
            opacity: 0.8,
            marginTop: 'auto',
            paddingTop: '15px',
            borderTop: '1px dashed #eee', // Dashed line for a softer separator
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
            backgroundColor: '#FFD700', // Gold accent
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

    const isMobileView = windowWidth < MOBILE_BREAKPOINT; // Kept for sectionHeader responsiveness

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
            {/* The overlay div for background effect (needed for inline styles with background image) */}
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
                        // --- Kondisi Gaya untuk Mobile View (Reverted to original) ---
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
                            // Untuk subjudul, pastikan margin auto juga hanya aktif di mobile (Reverted to original)
                            ...(isMobileView ? { margin: '0 auto' } : {}),
                        }}
                    >
                        {/* REVERTED: Original Title */}
                        <h1 style={getStyle('sectionTitle')}>Agenda</h1>
                        {/* REVERTED: Original Subtitle */}
                        <p style={getStyle('sectionSubtitle')}>Menyajikan Publikasi Artikel Berita dan Informasi dari SD Muhammadiyah Plus Kota Probolinggo</p>
                    </div>
                    {/* REVERTED: Original Button */}
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

                {/* Agenda Cards Container (Horizontal Scroll with hidden scrollbar and new card design) */}
                <div style={getStyle('agendaGridContainer')}>
                    {agendaData.map((agenda) => (
                        <div
                            key={agenda.id}
                            style={getStyle('agendaCard', hoveredAgendaCard[`${agenda.id}`])}
                            onMouseEnter={() => setHoveredAgendaCard(prev => ({ ...prev, [`${agenda.id}`]: true }))}
                            onMouseLeave={() => setHoveredAgendaCard(prev => ({ ...prev, [`${agenda.id}`]: false }))}
                        >
                            <div style={getStyle('cardCornerAccent')}></div> {/* New accent element */}
                            <div style={getStyle('cardHeader')}>
                                <div style={getStyle('agendaDateSmall')}>{agenda.date}</div>
                                <div style={getStyle('agendaTime')}>{agenda.time}</div>
                            </div>
                            <h3 style={getStyle('agendaEventTitle')}>{agenda.title}</h3>
                            <div style={getStyle('agendaLocation')}>
                                <span style={getStyle('locationIcon')}>📍</span> {agenda.location}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Agenda;