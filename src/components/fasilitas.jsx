import React, { useEffect, useState, useRef } from 'react';

function Fasilitas() {
    const scrollContainerRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDetailClick = (categoryName) => {
        console.log(`Tombol 'Detail' diklik untuk kategori: ${categoryName}`);
        // Add your navigation logic or other actions here
    };

    // Data fasilitas/kategori dengan gambar placeholder
    const fasilitasData = [
        { id: 1, imgSrc: "https://picsum.photos/id/1015/280/280", name: "Men's" },
        { id: 2, imgSrc: "https://picsum.photos/id/1025/280/280", name: "Women's" },
        { id: 3, imgSrc: "https://picsum.photos/id/1062/280/280", name: "Kids' & Baby" },
        { id: 4, imgSrc: "https://picsum.photos/id/1070/280/280", name: "Packs & Gear" },
        { id: 5, imgSrc: "https://picsum.photos/id/1080/280/280", name: "Equipment" },
        { id: 6, imgSrc: "https://picsum.photos/id/1084/280/280", name: "Accessories" },
        { id: 7, imgSrc: "https://picsum.photos/id/1057/280/280", name: "Camping Gear" },
        { id: 8, imgSrc: "https://picsum.photos/id/1043/280/280", name: "Water Sports" },
    ];

    // --- Common Styles (Disalin dari komponen lain untuk konsistensi) ---
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
            marginBottom: '0px', // FURTHER REDUCED: Remove bottom margin to let elements dictate spacing
            flexWrap: 'wrap',
            gap: '8px', // FURTHER REDUCED: Smaller gap between stacked elements
            paddingTop: '40px', // REDUCED from 60px: Less top padding for the section header
        },
        sectionTitle: {
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#2c3e50',
            marginBottom: '0px', // FURTHER REDUCED to 0px
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
            marginBottom: '10px', // SLIGHTLY INCREASED to give a bit more space before the button
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

    // Inline styles (cleaned up and adjusted for the new layout)
    const fasilitasSpecificStyles = {
        fasilitasSection: {
            padding: '40px 0',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            color: '#1a1a1a',
            backgroundColor: '#fff',
            width: '100%',
            boxSizing: 'border-box',
            position: 'relative',
        },
        // The commonStyles.container will be used for padding and max-width
        // The commonStyles.sectionHeader will be used, forcing column layout for title, subtitle, button
        fasilitasGridContainer: {
            overflowX: 'scroll', // Tetap 'scroll' agar bisa digulir manual
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            paddingBottom: '20px',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            marginTop: '20px', // Added margin top to separate from the header
        },
        fasilitasGrid: {
            display: 'flex',
            gap: '20px',
            paddingRight: '20px',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: 'fit-content',
            paddingLeft: '0px',
        },
        fasilitasCard: {
            flexShrink: 0,
            background: '#ffffff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            border: 'none',
            width: '280px',
            height: 'auto',
        },
        fasilitasCardImageWrapper: {
            width: '100%',
            height: '280px',
            overflow: 'hidden',
            borderRadius: '8px 8px 0 0',
        },
        fasilitasImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
        },
        fasilitasImageHover: {
            transform: 'scale(1.05)',
        },
        fasilitasCardContent: {
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        fasilitasName: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '15px',
            marginTop: '0',
            whiteSpace: 'normal',
        },
        shopBtn: {
            backgroundColor: '#FED219',
            color: 'black',
            padding: '8px 18px',
            border: 'none',
            borderRadius: '9999px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
            textDecoration: 'none',
            display: 'inline-block',
        },
        shopBtnHover: {
            backgroundColor: '#FDD94A',
            transform: 'scale(1.02)',
        },
        // Responsive adjustments
        '@media (max-width: 768px)': {
            fasilitasCard: {
                width: 'calc(50vw - 30px)',
            },
            fasilitasCardImageWrapper: {
                height: 'calc(50vw - 30px)',
            },
            fasilitasName: {
                fontSize: '16px',
                marginBottom: '10px',
            },
            shopBtn: {
                padding: '6px 14px',
                fontSize: '13px',
            },
            // Using commonStyles.container for padding instead, but this could be a fallback
            // contentWrapper: {
            //     padding: '0 15px',
            // }
        },
        '@media (max-width: 480px)': {
            fasilitasCard: {
                width: 'calc(100vw - 40px)',
            },
            fasilitasCardImageWrapper: {
                height: 'calc(100vw - 40px)',
            },
            // Using commonStyles.container for padding instead, but this could be a fallback
            // contentWrapper: {
            //     padding: '0 10px',
            // }
        }
    };

    // Helper to apply responsive styles and hover styles
    const getCombinedStyle = (baseStyle, isHovered, hoverStyle, mobileStyle = null, superMobileStyle = null) => {
        let combined = { ...baseStyle };

        if (windowWidth <= 480 && superMobileStyle) {
            combined = { ...combined, ...superMobileStyle };
        } else if (windowWidth <= 768 && mobileStyle) {
            combined = { ...combined, ...mobileStyle };
        }

        if (isHovered && hoverStyle) {
            combined = { ...combined, ...hoverStyle };
        }
        return combined;
    };

    // Helper to get styles from either commonStyles or fasilitasSpecificStyles
    const getStyle = (elementName, isHovered = false) => {
        const allStyles = { ...commonStyles, ...fasilitasSpecificStyles };
        const baseStyle = allStyles[elementName] || {};
        const hoverStyle = isHovered && allStyles[`${elementName}Hover`] ? allStyles[`${elementName}Hover`] : {};
        return { ...baseStyle, ...hoverStyle };
    };

    const [isSectionButtonHovered, setIsSectionButtonHovered] = useState(false);

    return (
        <section style={getStyle('fasilitasSection')}>
            <div style={getStyle('container')}> {/* Using commonStyles.container */}
                <div style={{
                    ...getStyle('sectionHeader'),
                    flexDirection: 'column', // Force column layout for title, subtitle, button
                    alignItems: 'center', // Center items horizontally when in column
                    marginBottom: '20px', // Adjust as needed to separate header from cards
                }}>
                    <h2 style={getStyle('sectionTitle')}>Fasilitas Sekolah Kami</h2>
                    <p style={getStyle('sectionSubtitle')}>
                        Jelajahi berbagai fasilitas modern yang mendukung kegiatan belajar mengajar dan pengembangan siswa.
                    </p>
                    <button
                        style={{
                            ...getStyle('sectionButton'),
                            ...(isSectionButtonHovered ? getStyle('sectionButtonHover') : {}),
                        }}
                        onMouseEnter={() => setIsSectionButtonHovered(true)}
                        onMouseLeave={() => setIsSectionButtonHovered(false)}
                    >
                        Lihat Semua Fasilitas
                    </button>
                </div>

                <div style={getStyle('fasilitasGridContainer')} ref={scrollContainerRef}>
                    <div style={getStyle('fasilitasGrid')}>
                        {fasilitasData.map(fasilitas => {
                            const [isCardHovered, setIsCardHovered] = useState(false);
                            const [isBtnHovered, setIsBtnHovered] = useState(false);

                            return (
                                <div
                                    key={fasilitas.id}
                                    style={getCombinedStyle(
                                        getStyle('fasilitasCard'),
                                        isCardHovered,
                                        getStyle('fasilitasCardHover'),
                                        fasilitasSpecificStyles['@media (max-width: 768px)'].fasilitasCard,
                                        fasilitasSpecificStyles['@media (max-width: 480px)'].fasilitasCard
                                    )}
                                    onMouseEnter={() => setIsCardHovered(true)}
                                    onMouseLeave={() => setIsCardHovered(false)}
                                >
                                    <div
                                        style={getCombinedStyle(
                                            getStyle('fasilitasCardImageWrapper'),
                                            false, null,
                                            fasilitasSpecificStyles['@media (max-width: 768px)'].fasilitasCardImageWrapper,
                                            fasilitasSpecificStyles['@media (max-width: 480px)'].fasilitasCardImageWrapper
                                        )}
                                    >
                                        <img
                                            src={fasilitas.imgSrc}
                                            alt={fasilitas.name}
                                            style={getCombinedStyle(
                                                getStyle('fasilitasImage'),
                                                isCardHovered,
                                                getStyle('fasilitasImageHover')
                                            )}
                                        />
                                    </div>
                                    <div style={getStyle('fasilitasCardContent')}>
                                        <h3
                                            style={getCombinedStyle(
                                                getStyle('fasilitasName'), false, null,
                                                fasilitasSpecificStyles['@media (max-width: 768px)'].fasilitasName,
                                                fasilitasSpecificStyles['@media (max-width: 480px)'].fasilitasName
                                            )}
                                        >
                                            {fasilitas.name}
                                        </h3>
                                        <button
                                            style={getCombinedStyle(
                                                getStyle('shopBtn'),
                                                isBtnHovered,
                                                getStyle('shopBtnHover'),
                                                fasilitasSpecificStyles['@media (max-width: 768px)'].shopBtn,
                                                fasilitasSpecificStyles['@media (max-width: 480px)'].shopBtn
                                            )}
                                            onMouseEnter={() => setIsBtnHovered(true)}
                                            onMouseLeave={() => setIsBtnHovered(false)}
                                            onClick={() => handleDetailClick(fasilitas.name)}
                                        >
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fasilitas;