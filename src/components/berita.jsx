// Berita.js
import React, { useEffect, useState } from 'react';

function Berita() {
    // Definisi gaya umum yang disesuaikan dari komponen lain untuk konsistensi
    const commonStyles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px', // Horizontal padding for consistency
            boxSizing: 'border-box',
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        },
        sectionHeader: {
            display: 'flex',
            flexDirection: 'column', // Stack items vertically
            alignItems: 'center',    // Center items horizontally
            justifyContent: 'center',
            paddingTop: '30px', // Reduced spacing from the top
            marginBottom: '20px', // Reduced margin-bottom
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

    // Definisi gaya khusus untuk komponen Berita ini
    const styles = {
        artikelSection: {
            padding: '20px 0 30px 0', // Reduced top and bottom padding for the section
            fontFamily: "'Inter', sans-serif",
            color: '#333',
            backgroundColor: '#FFFFFF',
            width: '100%',
            boxSizing: 'border-box',
        },
        artikelGrid: {
            display: 'flex', // Change to flex to ensure items stay in a single row
            gap: '25px',
            overflowX: 'scroll', // Allow horizontal scrolling
            paddingBottom: '15px', // Still good for potential scrollbar space on some systems
            marginTop: '20px',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none', // For Firefox
            msOverflowStyle: 'none', // For IE/Edge
            // Removed '&::-webkit-scrollbar' from here. It will be handled by a global or parent CSS if needed,
            // but the `scrollbarWidth` and `msOverflowStyle` already hide it for many browsers.
            // For a complete hide across all webkit browsers, usually a global CSS rule for ::-webkit-scrollbar is used.
            // If you want it only for this specific div, you'd need a separate stylesheet or a more complex solution for inline styles.
            // For now, these are generally sufficient.
            alignItems: 'stretch', // Ensure cards stretch to the same height if needed
        },
        artikelCard: {
            background: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            height: 'auto', // Allow height to adjust based on content
            cursor: 'pointer',
            flexShrink: 0, // Prevent cards from shrinking
            width: '280px', // Define a fixed width for each card
            // Add responsive widths here to adjust card size based on screen width
            '@media (max-width: 768px)': {
                width: '250px', // Slightly smaller cards on tablets
            },
            '@media (max-width: 480px)': {
                width: '220px', // Even smaller cards on mobile
            },
        },
        artikelCardHover: {
            transform: 'translateY(-7px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
        },
        artikelImage: {
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderBottom: '1px solid #eee',
        },
        artikelContent: {
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
        },
        artikelDate: {
            fontSize: '13px',
            color: '#95a5a6',
            marginBottom: '10px',
        },
        artikelJudul: {
            fontSize: '18px',
            fontWeight: '700',
            color: '#34495e',
            marginBottom: '15px',
            lineHeight: 1.4,
            flexGrow: 1,
        },
        bacaBtn: {
            background: '#e67e22',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '25px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background 0.3s ease, transform 0.2s ease',
            marginTop: 'auto',
            alignSelf: 'flex-start',
        },
        bacaBtnHover: {
            background: '#d35400',
            transform: 'scale(1.03)',
        },
    };

    // Helper function for applying styles (lokal)
    const getStyle = (elementName, isHovered = false) => {
        const allStyles = { ...commonStyles, ...styles };
        let baseStyle = allStyles[elementName] || {};
        const hoverStyle = isHovered && allStyles[`${elementName}Hover`] ? allStyles[`${elementName}Hover`] : {};

        // Apply media queries directly if they exist in the baseStyle
        if (typeof baseStyle === 'object') {
            const currentWidth = window.innerWidth;
            for (const key in baseStyle) {
                if (key.startsWith('@media')) {
                    // Simple media query parsing for max-width
                    const matches = key.match(/@media \(max-width: (\d+)px\)/);
                    if (matches && currentWidth <= parseInt(matches[1])) {
                        baseStyle = { ...baseStyle, ...baseStyle[key] };
                        delete baseStyle[key]; // Remove the media query key
                    }
                }
            }
        }

        return { ...baseStyle, ...hoverStyle };
    };

    // State for hover effects specific to Berita section
    const [isSectionButtonHovered, setIsSectionButtonHovered] = useState(false);
    const [hoveredArtikelCard, setHoveredArtikelCard] = useState({});
    const [hoveredBacaBtn, setHoveredBacaBtn] = useState({});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const artikelData = [
        { id: 1, imgSrc: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=150&fit=crop", date: "20 April 2024", title: "Kegiatan Outdoor Education Siswa" },
        { id: 2, imgSrc: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&h=150&fit=crop", date: "15 April 2023", title: "Lomba Cerdas Cermat Sekolah" },
        { id: 3, imgSrc: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=300&h=150&fit=crop", date: "15 April 2024", title: "Peringatan Nuzulul Qur'an" },
        { id: 4, imgSrc: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=150&fit=crop", date: "20 April 2024", title: "Kegiatan Outdoor Education Siswa" },
        { id: 5, imgSrc: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=150&fit=crop", date: "25 April 2024", title: "Studi Banding Pendidikan" },
        { id: 6, imgSrc: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&h=150&fit=crop", date: "30 April 2024", title: "Perayaan Hari Guru Nasional" },
    ];

    return (
        <section style={{ ...getStyle('artikelSection'), ...getStyle('container') }}>
            <div style={getStyle('sectionHeader')}>
                <h2 style={getStyle('sectionTitle')}>Artikel & Berita</h2>
                <p style={getStyle('sectionSubtitle')}>Menyajikan Publikasi Artikel Berita dan Informasi dari SD Muhammadiyah Plus Kota Probolinggo</p>
                <button
                    style={{
                        ...getStyle('sectionButton'),
                        ...(isSectionButtonHovered ? getStyle('sectionButtonHover') : {}),
                    }}
                    onMouseEnter={() => setIsSectionButtonHovered(true)}
                    onMouseLeave={() => setIsSectionButtonHovered(false)}
                >
                    Jelajahi Artikel
                </button>
            </div>

            <div style={getStyle('artikelGrid')}>
                {artikelData.map((artikel) => (
                    <div
                        key={artikel.id}
                        style={{
                            ...getStyle('artikelCard'),
                            ...(hoveredArtikelCard[`${artikel.id}`] ? getStyle('artikelCard', true) : {}),
                        }}
                        onMouseEnter={() => setHoveredArtikelCard(prev => ({ ...prev, [`${artikel.id}`]: true }))}
                        onMouseLeave={() => setHoveredArtikelCard(prev => ({ ...prev, [`${artikel.id}`]: false }))}
                    >
                        <img src={artikel.imgSrc} alt={artikel.title} style={getStyle('artikelImage')} />
                        <div style={getStyle('artikelContent')}>
                            <div style={getStyle('artikelDate')}>{artikel.date}</div>
                            <h3 style={getStyle('artikelJudul')}>{artikel.title}</h3>
                            <button
                                style={{
                                    ...getStyle('bacaBtn'),
                                    ...(hoveredBacaBtn[`${artikel.id}`] ? getStyle('bacaBtn', true) : {}),
                                }}
                                onMouseEnter={() => setHoveredBacaBtn(prev => ({ ...prev, [`${artikel.id}`]: true }))}
                                onMouseLeave={() => setHoveredBacaBtn(prev => ({ ...prev, [`${artikel.id}`]: false }))}
                            >
                                Baca Selengkapnya
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Berita;