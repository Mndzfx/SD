// src/components/Ekstrakurikuler.jsx
import React, { useState } from 'react';

const Ekstrakurikuler = () => {
    // --- Common Styles (Disalin dari komponen TestimonialSection untuk konsistensi) ---
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
            marginBottom: '15px',
            flexWrap: 'wrap',
            gap: '10px',
            paddingTop: '30px',
            flexDirection: 'column',
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
            padding: '20px 0 30px 0',
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
            marginTop: '20px',
        },
        ekstrakurikulerCard: {
            flex: '0 0 auto',
            width: '240px',
            height: '300px',
            background: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            scrollSnapAlign: 'start',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
        },
        ekstrakurikulerCardHover: {
            transform: 'translateY(-8px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
        ekstrakurikulerImageContainer: {
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end', // Push content to the bottom
            padding: '15px',
            boxSizing: 'border-box',
            borderRadius: '12px',
        },
        ekstrakurikulerImageOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)', // Base overlay for text visibility
            borderRadius: '12px',
            transition: 'background-color 0.3s ease', // Smooth transition for darkening
        },
        ekstrakurikulerImageOverlayHover: {
            backgroundColor: 'rgba(0,0,0,0.7)', // Darker on hover
        },
        ekstrakurikulerTitleWrapper: { // NEW: Wrapper for title and schedule when not hovered
            zIndex: 2,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingBottom: '15px', // Space from bottom of card
        },
        ekstrakurikulerTitleOverlay: {
            color: 'white',
            fontSize: '18px',
            fontWeight: '600',
            textAlign: 'left',
            lineHeight: '1.2',
            textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            marginBottom: '10px', // <--- ADJUSTED: Increased margin-bottom here
        },
        ekstrakurikulerScheduleBadge: {
            backgroundColor: 'rgba(0,0,0,0.6)', // Semi-transparent dark background
            color: 'white',
            padding: '4px 8px',
            borderRadius: '5px',
            fontSize: '12px',
            fontWeight: 'bold',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
        },

        ekstrakurikulerDescriptionContainer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
            color: 'white',
            padding: '15px',
            paddingTop: '30px',
            boxSizing: 'border-box',
            transform: 'translateY(100%)', // Start hidden below
            transition: 'transform 0.4s ease-out, opacity 0.4s ease-out', // Animation for slide and fade
            opacity: 0, // Start invisible
            zIndex: 3, // Above other overlays
            borderRadius: '0 0 12px 12px', // Rounded bottom corners
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
        },
        ekstrakurikulerDescriptionContainerHover: {
            transform: 'translateY(0%)', // Slide up to visible position
            opacity: 1, // Become fully visible
        },
        ekstrakurikulerDescriptionText: {
            fontSize: '14px',
            lineHeight: '1.5',
            marginBottom: '10px',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
        },
        ekstrakurikulerRegisterButton: {
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '10px',
            alignSelf: 'flex-start',
        },
        ekstrakurikulerRegisterButtonHover: {
            backgroundColor: '#2980b9',
            transform: 'translateY(-2px)',
        }
    };

    // Helper function to get styles
    const getStyle = (elementName, isHovered = false) => {
        const allStyles = { ...commonStyles, ...ekstrakurikulerStyles };
        const baseStyle = allStyles[`${elementName}`] || {};
        const hoverStyle = isHovered && allStyles[`${elementName}Hover`] ? allStyles[`${elementName}Hover`] : {};
        return { ...baseStyle, ...hoverStyle };
    };

    // --- Ekstrakurikuler Card Component (Nested for direct access to getStyle) ---
    const EkstrakurikulerCard = ({ imageUrl, title, description, schedule }) => {
        const [isCardHovered, setIsCardHovered] = useState(false);
        const [isRegisterButtonHovered, setIsRegisterButtonHovered] = useState(false);

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
                    <div
                        style={{
                            ...getStyle('ekstrakurikulerImageOverlay'),
                            ...(isCardHovered ? getStyle('ekstrakurikulerImageOverlayHover') : {})
                        }}
                    ></div>

                    {/* Content visible when NOT hovered (Title and Schedule) */}
                    {!isCardHovered && (
                        <div style={getStyle('ekstrakurikulerTitleWrapper')}>
                            <span style={getStyle('ekstrakurikulerTitleOverlay')}>{title}</span>
                            {schedule && (
                                <span style={getStyle('ekstrakurikulerScheduleBadge')}>{schedule}</span>
                            )}
                        </div>
                    )}


                    {/* Description and Register Button that appear on hover */}
                    <div
                        style={{
                            ...getStyle('ekstrakurikulerDescriptionContainer'),
                            ...(isCardHovered ? getStyle('ekstrakurikulerDescriptionContainerHover') : {})
                        }}
                    >
                        {isCardHovered && (
                            <>
                                <h3 style={{
                                    color: 'white',
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    marginBottom: '5px',
                                    textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                                    alignSelf: 'flex-start'
                                }}>{title}</h3>
                                <p style={getStyle('ekstrakurikulerDescriptionText')}>{description}</p>
                                <button
                                    style={{
                                        ...getStyle('ekstrakurikulerRegisterButton'),
                                        ...(isRegisterButtonHovered ? getStyle('ekstrakurikulerRegisterButtonHover') : {})
                                    }}
                                    onMouseEnter={() => setIsRegisterButtonHovered(true)}
                                    onMouseLeave={() => setIsRegisterButtonHovered(false)}
                                >
                                    Daftar Sekarang
                                </button>
                            </>
                        )}
                    </div>
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
                flexDirection: 'column',
                alignItems: 'center',
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
                    imageUrl="https://via.placeholder.com/240x300/607d8b/ffffff?text=PRAMUKA"
                    title="Pramuka"
                    schedule="Setiap Jumat"
                    description="Kegiatan kepramukaan melatih kemandirian, kepemimpinan, dan kecintaan pada alam. Belajar sandi, tali-temali, dan survival dasar."
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/240x300/4CAF50/ffffff?text=QIROATI"
                    title="Qiroati"
                    schedule="Senin & Rabu"
                    description="Membimbing siswa dalam membaca Al-Qur'an dengan tajwid yang benar dan suara yang indah."
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/240x300/FF9800/ffffff?text=TAPAKSUCI"
                    title="Tapak Suci"
                    schedule="Selasa & Kamis"
                    description="Seni bela diri Tapak Suci untuk membentuk karakter disiplin, keberanian, dan ketangguhan fisik serta mental."
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/240x300/9C27B0/ffffff?text=FUTSAL"
                    title="Futsal"
                    schedule="Setiap Sabtu"
                    description="Mengembangkan bakat dan keterampilan dalam olahraga futsal, melatih kerjasama tim dan strategi permainan."
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/240x300/03A9F4/ffffff?text=ANGKLUNG"
                    title="Angklung"
                    schedule="Setiap Kamis"
                    description="Mengenalkan seni musik tradisional angklung, melatih kekompakan dan harmoni dalam bermusik."
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/240x300/E91E63/ffffff?text=ROBOTIK"
                    title="Robotik"
                    schedule="Setiap Rabu"
                    description="Belajar dasar-dasar robotika, pemrograman, dan desain, merangsang kreativitas dalam teknologi."
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/240x300/795548/ffffff?text=SENITARI"
                    title="Seni Tari"
                    schedule="Setiap Selasa"
                    description="Menjelajahi berbagai jenis tari, baik tradisional maupun modern, untuk mengembangkan ekspresi dan kelenturan tubuh."
                />
                <EkstrakurikulerCard
                    imageUrl="https://via.placeholder.com/240x300/607D8B/ffffff?text=PANAHAN"
                    title="Panahan"
                    schedule="Setiap Minggu"
                    description="Melatih fokus, konsentrasi, dan ketepatan melalui olahraga panahan, membentuk mental yang tenang."
                />
            </div>
        </section>
    );
};

export default Ekstrakurikuler;