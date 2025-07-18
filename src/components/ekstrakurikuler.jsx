// src/components/Ekstrakurikuler.jsx
import React, { useState } from 'react';

const Ekstrakurikuler = () => {
    // --- Common Styles (Disalin dari komponen TestimonialSection untuk konsistensi) ---
    const commonStyles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px', // Memberikan padding samping untuk konten
            boxSizing: 'border-box',
        },
        sectionHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px', // Adjusted for slightly more breathing room than 10px, but still compact
            flexWrap: 'wrap',
            gap: '10px',
            paddingTop: '30px', // Reduced from 60px to decrease top spacing
            flexDirection: 'column', // Ensure vertical stacking for centering
        },
        sectionTitle: {
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#2c3e50',
            marginBottom: '2px',
            marginTop: '0',
            textAlign: 'center',
            width: '100%',
        },
        sectionSubtitle: {
            fontSize: '15px',
            color: '#7f8c8d',
            marginTop: '0',
            textAlign: 'center',
            width: '100%',
            marginBottom: '8px',
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

    // --- Ekstrakurikuler Section Styles ---
    const ekstrakurikulerStyles = {
        ekstrakurikuler: {
            // Updated padding for the entire section
            padding: '20px 0 30px 0', // Reduced bottom padding from 60px to 30px, added 20px top padding
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        },
        ekstrakurikulerScrollContainer: {
            display: 'flex',
            overflowX: 'auto',
            gap: '25px',
            paddingBottom: '15px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            marginTop: '20px', // Maintain separation from the header
        },
        ekstrakurikulerCard: {
            flex: '0 0 auto',
            minWidth: '240px',
            maxWidth: '280px',
            background: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            scrollSnapAlign: 'start',
            display: 'flex',
            flexDirection: 'column',
        },
        ekstrakurikulerCardHover: {
            transform: 'translateY(-8px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
        ekstrakurikulerImageContainer: {
            width: '100%',
            height: '140px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            color: 'white',
            fontSize: '22px',
            fontWeight: 'bold',
            padding: '15px',
            boxSizing: 'border-box',
        },
        ekstrakurikulerImageOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: '12px 12px 0 0',
        },
        ekstrakurikulerTitleOverlay: {
            zIndex: 1,
            textAlign: 'center',
            lineHeight: '1.3',
        },
        ekstrakurikulerContent: {
            padding: '15px 20px 20px',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        ekstrakurikulerInfoRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            flexWrap: 'wrap',
            gap: '8px',
        },
        ekstrakurikulerBadge: {
            backgroundColor: '#e0e0e0',
            color: '#555',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '12px',
            fontWeight: '600',
        },
        ekstrakurikulerDescription: {
            fontSize: '14px',
            color: '#7f8c8d',
            marginBottom: '15px',
            flexGrow: 1,
        },
        ekstrakurikulerDetailButton: {
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
            textAlign: 'center',
            width: '100%',
        },
        ekstrakurikulerDetailButtonHover: {
            backgroundColor: '#2980b9',
        }
    };

    // Helper function to get styles
    const getStyle = (elementName, isHovered = false) => {
        const allStyles = { ...commonStyles, ...ekstrakurikulerStyles };
        const baseStyle = allStyles[`${elementName}`] || {};
        const hoverStyle = isHovered && allStyles[`${elementName}Hover`] ? allStyles[`${elementName}Hover`] : (
            isHovered && baseStyle['&:hover'] ? baseStyle['&:hover'] : {}
        );

        let combinedStyle = { ...baseStyle };

        // Apply media queries if they exist in the baseStyle (for consistency, though not strictly needed here)
        if (baseStyle['@media']) {
            for (const query in baseStyle['@media']) {
                if (window.matchMedia(query).matches) {
                    Object.assign(combinedStyle, baseStyle['@media'][query]);
                }
            }
        }
        return { ...combinedStyle, ...hoverStyle };
    };

    // --- Ekstrakurikuler Card Component (Nested for direct access to getStyle) ---
    const EkstrakurikulerCard = ({ imageUrl, title, description, location, time }) => {
        const [isCardHovered, setIsCardHovered] = useState(false);
        const [isButtonHovered, setIsButtonHovered] = useState(false);

        return (
            <div
                style={{
                    ...getStyle('ekstrakurikulerCard'),
                    ...(isCardHovered ? getStyle('ekstrakurikulerCard', true) : {})
                }}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
            >
                <div style={{ ...getStyle('ekstrakurikulerImageContainer'), backgroundImage: `url(${imageUrl})` }}>
                    <div style={getStyle('ekstrakurikulerImageOverlay')}></div>
                    <span style={getStyle('ekstrakurikulerTitleOverlay')}>{title}</span>
                </div>
                <div style={getStyle('ekstrakurikulerContent')}>
                    <div style={getStyle('ekstrakurikulerInfoRow')}>
                        <span style={getStyle('ekstrakurikulerBadge')}>{location}</span>
                        <span style={getStyle('ekstrakurikulerBadge')}>{time}</span>
                    </div>
                    <p style={getStyle('ekstrakurikulerDescription')}>{description}</p>
                    <button
                        style={{
                            ...getStyle('ekstrakurikulerDetailButton'),
                            ...(isButtonHovered ? getStyle('ekstrakurikulerDetailButtonHover') : {})
                        }}
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                    >
                        Lihat Detail
                    </button>
                </div>
            </div>
        );
    };

    // --- Main Component ---
    const [isSectionButtonHovered, setIsSectionButtonHovered] = useState(false);

    return (
        <section style={{ ...getStyle('ekstrakurikuler'), ...getStyle('container') }}>
            <div style={{
                ...getStyle('sectionHeader'),
                flexDirection: 'column', // Stack title, subtitle, and button
                alignItems: 'center',    // Center align them
            }}>
                <h2 style={getStyle('sectionTitle')}>Program Ekstrakurikuler</h2>
                <p style={getStyle('sectionSubtitle')}>
                    Temukan berbagai kegiatan minat dan bakat di SD Muhammadiyah Plus Kota Probolinggo.
                </p>
                <button
                    style={{
                        ...getStyle('sectionButton'),
                        ...(isSectionButtonHovered ? getStyle('sectionButtonHover') : {})
                    }}
                    onMouseEnter={() => setIsSectionButtonHovered(true)}
                    onMouseLeave={() => setIsSectionButtonHovered(false)}
                >
                    Jelajahi Ekstrakurikuler
                </button>
            </div>

            <div style={getStyle('ekstrakurikulerScrollContainer')}>
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/250x140/ff6b6b/ffffff?text=Seni+Tari"
                    title="Seni Tari"
                    description="Menjelajahi keindahan gerak tari tradisional dan modern."
                    location="Studio Seni"
                    time="Selasa, 14.00"
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/250x140/4ecdc4/ffffff?text=Futsal"
                    title="Futsal"
                    description="Mengembangkan keterampilan sepak bola dan sportivitas."
                    location="Lapangan Indoor"
                    time="Rabu, 15.00"
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/250x140/667eea/ffffff?text=Catur"
                    title="Catur"
                    description="Melatih strategi dan kemampuan berpikir logis."
                    location="Ruang Kelas C"
                    time="Jumat, 13.00"
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/250x140/f093fb/ffffff?text=Art+%26+Craft"
                    title="Art and Craft"
                    description="Mengekspresikan kreativitas melalui seni rupa dan kerajinan."
                    location="Lab. Kreativitas"
                    time="Kamis, 14.30"
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/250x140/a18cd1/ffffff?text=Paduan+Suara"
                    title="Paduan Suara"
                    description="Mengembangkan bakat vokal dan harmoni."
                    location="Aula Sekolah"
                    time="Senin, 15.00"
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/250x140/f5d020/ffffff?text=Taekwondo"
                    title="Taekwondo"
                    description="Membentuk fisik dan mental melalui seni bela diri."
                    location="Gedung Olahraga"
                    time="Selasa, 16.00"
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/250x140/56ab2f/ffffff?text=Sains+Cilik"
                    title="Sains Cilik"
                    description="Eksplorasi dunia sains dengan eksperimen seru."
                    location="Lab. Sains"
                    time="Rabu, 13.30"
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/250x140/fdc830/ffffff?text=Literasi"
                    title="Literasi & Dongeng"
                    description="Meningkatkan minat baca dan bercerita."
                    location="Perpustakaan"
                    time="Jumat, 14.00"
                />
            </div>
        </section>
    );
};

export default Ekstrakurikuler;