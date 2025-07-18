import React, { useEffect, useState, useRef } from 'react';

function Fasilitas() {
    const commonStyles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            boxSizing: 'border-box',
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        },
        sectionHeader: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '30px',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '10px',
            textAlign: 'center',
        },
        sectionTitle: {
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#2c3e50',
            marginBottom: '2px',
            marginTop: 0,
            width: '100%',
        },
        sectionSubtitle: {
            fontSize: '15px',
            color: '#7f8c8d',
            marginTop: 0,
            marginBottom: '8px',
            maxWidth: '750px',
            lineHeight: '1.6',
            width: '100%',
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

    const styles = {
        fasilitasSection: {
            padding: '20px 0 30px 0',
            fontFamily: "'Inter', sans-serif",
            color: '#333',
            backgroundColor: '#FFFFFF',
            width: '100%',
            boxSizing: 'border-box',
        },
        contentWrapper: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
        },
        fasilitasGridContainer: {
            overflowX: 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            paddingBottom: '20px',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            marginTop: '20px',
        },
        fasilitasGrid: {
            display: 'inline-flex',
            gap: '15px',
            paddingRight: '20px',
            justifyContent: 'flex-start',
        },
        fasilitasCard: {
            flexShrink: 0,
            background: '#ffffff',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            cursor: 'pointer',
            border: 'none',
            height: '280px',
        },
        fasilitasCardHover: {
            transform: 'translateY(-12px) scale(1.02)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
        },
        fasilitasImageWrapper: {
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'hidden',
            borderRadius: '15px',
        },
        fasilitasImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease-out, filter 0.5s ease-out',
            filter: 'brightness(0.7) grayscale(0.1)',
        },
        fasilitasImageHover: {
            transform: 'scale(1.1)',
            filter: 'brightness(1) grayscale(0)',
        },
        fasilitasContent: {
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            padding: '20px 25px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
            color: 'white',
            minHeight: '100px',
            zIndex: 1,
        },
        fasilitasName: {
            fontSize: '24px',
            fontWeight: '800',
            color: 'white',
            marginBottom: '10px',
            lineHeight: 1.2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        },
        lihatDetailBtn: {
            background: '#FED219',
            color: 'black',
            padding: '10px 22px',
            border: 'none',
            borderRadius: '25px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease', // Transisi untuk opasitas dan transform
            boxShadow: 'none',
            marginTop: 'auto',
            alignSelf: 'flex-start',
            opacity: 0, // Awalnya tidak terlihat
            transform: 'translateY(10px)', // Awalnya sedikit ke bawah
            pointerEvents: 'none', // Mencegah interaksi saat tidak terlihat
            zIndex: 2,
        },
        // --- Ini adalah gaya untuk tombol saat kartu di-hover ---
        fasilitasCardHoverButton: {
            opacity: 1, // Jadi terlihat
            transform: 'translateY(0)', // Kembali ke posisi semula
            pointerEvents: 'auto', // Memungkinkan interaksi
        },
        // Media query untuk menyesuaikan ukuran kartu di mobile
        '@media (max-width: 767px)': {
            fasilitasCard: {
                width: 'calc(50vw - 30px)',
                height: 'calc((50vw - 30px) * 280 / 300)',
            },
            fasilitasName: {
                fontSize: '18px',
            },
            lihatDetailBtn: {
                padding: '8px 16px',
                fontSize: '14px',
            },
        },
        '@media (max-width: 480px)': {
            fasilitasCard: {
                width: 'calc(50vw - 25px)',
                height: 'calc((50vw - 25px) * 280 / 300)',
            },
            fasilitasName: {
                fontSize: '16px',
            },
            lihatDetailBtn: {
                padding: '7px 14px',
                fontSize: '13px',
            },
        }
    };

    const getStyle = (elementName, isHovered = false) => {
        const allStyles = { ...commonStyles, ...styles };
        let baseStyle = allStyles[elementName] || {};
        const hoverStyle = isHovered && allStyles[`${elementName}Hover`] ? allStyles[`${elementName}Hover`] : {};

        // Apply responsive styles for mobile first
        if (windowWidth < 768 && allStyles['@media (max-width: 767px)'] && allStyles['@media (max-width: 767px)'][elementName]) {
            baseStyle = { ...baseStyle, ...allStyles['@media (max-width: 767px)'][elementName] };
        }
        if (windowWidth < 481 && allStyles['@media (max-width: 480px)'] && allStyles['@media (max-width: 480px)'][elementName]) {
            baseStyle = { ...baseStyle, ...allStyles['@media (max-width: 480px)'][elementName] };
        }

        // Default desktop styles (if not overridden by mobile)
        if (elementName === 'fasilitasCard' && windowWidth >= 768) {
            baseStyle = { ...baseStyle, width: '300px', height: '280px' };
        }

        return { ...baseStyle, ...hoverStyle };
    };

    const [hoveredCard, setHoveredCard] = useState({});
    const [isJelajahiBtnHovered, setIsJelajahiBtnHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLihatDetailClick = (fasilitasName) => {
        console.log(`Tombol 'Lihat Detail' diklik untuk fasilitas: ${fasilitasName}`);
        // Logika detail di sini (misal: navigasi, buka modal, dll.)
    };

    const fasilitasData = [
        { id: 1, imgSrc: "https://images.unsplash.com/photo-1532631627993-801264c1f964?q=80", name: "Ruang Kelas Modern" },
        { id: 2, imgSrc: "https://images.unsplash.com/photo-1596495578065-6f9175249f3e?q=80", name: "Perpustakaan Lengkap" },
        { id: 3, imgSrc: "https://images.unsplash.com/photo-1588196749597-9ff0b68d6ce7?q=80", name: "Laboratorium Komputer" },
        { id: 4, imgSrc: "https://images.unsplash.com/photo-1576442654378-01e4a35cf525?q=80", name: "Lapangan Olahraga Luas" },
        { id: 5, imgSrc: "https://images.unsplash.com/photo-1627883907409-f8d9519c50c0?q=80", name: "Ruang Kesenian & Musik" },
        { id: 6, imgSrc: "https://images.unsplash.com/photo-1579707129532-c65191c94d1f?q=80", name: "Kantin Sehat & Bersih" },
        { id: 7, imgSrc: "https://images.unsplash.com/photo-1542478951-b8474246830d?q=80", name: "Area Rekreasi" },
        { id: 8, imgSrc: "https://images.unsplash.com/photo-1549880153-ddc41ff77fdd?q=80", name: "Klinik Kesehatan" },
        { id: 9, imgSrc: "https://images.unsplash.com/photo-1533035336040-349ce6b9c9dc?q=80", name: "Studio Tari" },
        { id: 10, imgSrc: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80", name: "Asrama Nyaman" },
        { id: 11, imgSrc: "https://images.unsplash.com/photo-1542831371-d68a9c72f10b?q=80", name: "Auditorium Besar" },
    ];

    return (
        <section style={{ ...getStyle('fasilitasSection'), ...getStyle('container') }}>
            <div style={getStyle('sectionHeader')}>
                <h2 style={getStyle('sectionTitle')}>Fasilitas Unggulan</h2>
                <p style={getStyle('sectionSubtitle')}>
                    Menyediakan Sarana dan Prasarana Terbaik untuk Mendukung Proses Belajar Mengajar
                </p>
                <button
                    style={{
                        ...getStyle('sectionButton'),
                        ...(isJelajahiBtnHovered ? getStyle('sectionButtonHover') : {}),
                    }}
                    onMouseEnter={() => setIsJelajahiBtnHovered(true)}
                    onMouseLeave={() => setIsJelajahiBtnHovered(false)}
                >
                    Lihat Semua Fasilitas
                </button>
            </div>

            <div style={styles.fasilitasGridContainer} ref={scrollContainerRef}>
                <div style={styles.fasilitasGrid}>
                    {fasilitasData.map(fasilitas => (
                        <div
                            key={fasilitas.id}
                            style={{
                                ...getStyle('fasilitasCard', hoveredCard[fasilitas.id]),
                            }}
                            onMouseEnter={() => setHoveredCard(prev => ({ ...prev, [fasilitas.id]: true }))}
                            onMouseLeave={() => setHoveredCard(prev => ({ ...prev, [fasilitas.id]: false }))}
                        >
                            <div style={styles.fasilitasImageWrapper}>
                                <img
                                    src={fasilitas.imgSrc}
                                    alt={fasilitas.name}
                                    style={{
                                        ...styles.fasilitasImage,
                                        ...(hoveredCard[fasilitas.id] ? styles.fasilitasImageHover : {}),
                                    }}
                                />
                            </div>
                            <div style={styles.fasilitasContent}>
                                <h3 style={getStyle('fasilitasName')}>{fasilitas.name}</h3>
                                <button
                                    style={{
                                        ...styles.lihatDetailBtn, // Gaya dasar tombol "Lihat Detail"
                                        // Terapkan gaya hover hanya jika kartu sedang di-hover
                                        ...(hoveredCard[fasilitas.id] ? styles.fasilitasCardHoverButton : {}),
                                    }}
                                    onClick={() => handleLihatDetailClick(fasilitas.name)}
                                >
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Fasilitas;