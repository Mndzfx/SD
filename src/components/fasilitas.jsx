import React, { useEffect, useState, useRef } from 'react';

function Fasilitas() {
    const scrollContainerRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll handlers for the arrows
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            // Scroll by one card width + gap (280px + 20px = 300px)
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            // Scroll by one card width + gap (280px + 20px = 300px)
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    const handleDetailClick = (categoryName) => { // Mengganti nama fungsi dari handleShopClick
        console.log(`Tombol 'Detail' diklik untuk kategori: ${categoryName}`);
        // Add your navigation logic or other actions here
    };

    // Data fasilitas/kategori dengan gambar placeholder yang lebih andal
    const fasilitasData = [
        // Menggunakan picsum.photos untuk gambar acak
        { id: 1, imgSrc: "https://picsum.photos/id/1015/280/280", name: "Men's" }, // Gambar pemandangan gunung
        { id: 2, imgSrc: "https://picsum.photos/id/1025/280/280", name: "Women's" }, // Gambar anjing
        { id: 3, imgSrc: "https://picsum.photos/id/1062/280/280", name: "Kids' & Baby" }, // Gambar balon udara
        { id: 4, imgSrc: "https://picsum.photos/id/1070/280/280", name: "Packs & Gear" }, // Gambar gurun
        { id: 5, imgSrc: "https://picsum.photos/id/1080/280/280", name: "Equipment" }, // Gambar pohon
        { id: 6, imgSrc: "https://picsum.photos/id/1084/280/280", name: "Accessories" }, // Gambar hutan pinus
        { id: 7, imgSrc: "https://picsum.photos/id/1057/280/280", name: "Camping Gear" }, // Gambar api unggun
        { id: 8, imgSrc: "https://picsum.photos/id/1043/280/280", name: "Water Sports" }, // Gambar perahu
    ];

    // Inline styles (cleaned up and adjusted for the new layout)
    const styles = {
        fasilitasSection: {
            padding: '40px 0', // Increased padding to match the image spacing
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', // Closest to the image's font
            color: '#1a1a1a', // Darker text color
            backgroundColor: '#f7f7f7', // Light gray background to match the image
            width: '100%',
            boxSizing: 'border-box',
            position: 'relative', // Needed for scroll buttons
        },
        contentWrapper: {
            maxWidth: '1200px', // Example max width, adjust as needed
            margin: '0 auto',
            padding: '0 20px', // Add horizontal padding
            boxSizing: 'border-box',
            position: 'relative', // Needed for scroll buttons within this wrapper
        },
        fasilitasGridContainer: {
            overflowX: 'scroll', // Use scroll to enable native scroll but we'll hide the bar
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            paddingBottom: '20px', // Space for potential scrollbar (even if hidden)
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch', // For smoother scrolling on iOS
            scrollbarWidth: 'none', // For Firefox
            msOverflowStyle: 'none', // For IE and Edge
            marginTop: '20px', // Added some top margin for spacing
            position: 'relative',
        },
        // Hide scrollbar for Webkit browsers (Chrome, Safari)
        // Note: Direct pseudo-element styling like ::-webkit-scrollbar is tricky with inline styles.
        // It's best handled in a CSS file or with CSS-in-JS libraries.
        // For demonstration, we keep it in mind, but it won't directly work as an inline style property.
        // If you move to a .css file, you'd add:
        // .fasilitasGridContainer::-webkit-scrollbar { display: none; }
        fasilitasGrid: {
            display: 'flex', // Changed to flex for better control of items
            gap: '20px', // Increased gap between cards
            paddingRight: '20px', // Ensure space for last item to fully scroll into view
            justifyContent: 'flex-start',
            alignItems: 'flex-start', // Align items to the top
            width: 'fit-content', // Allow content to dictate width for horizontal scroll
            paddingLeft: '0px', // No padding on the left of the grid itself, padding comes from contentWrapper
        },
        fasilitasCard: {
            flexShrink: 0, // Prevent cards from shrinking
            background: '#ffffff',
            borderRadius: '8px', // Slightly less rounded corners
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)', // Subtle shadow
            transition: 'transform 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            border: 'none',
            width: '280px', // Fixed width for desktop, adjust based on image analysis
            height: 'auto', // Auto height to accommodate text below
        },
        fasilitasCardHover: {
            // No explicit hover transform for the card itself, as per image
        },
        fasilitasCardImageWrapper: {
            width: '100%',
            height: '280px', // Fixed height for the image area to match card width
            overflow: 'hidden',
            borderRadius: '8px 8px 0 0', // Top corners rounded
        },
        fasilitasImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
        },
        fasilitasImageHover: {
            transform: 'scale(1.05)', // Image scales on card hover
        },
        fasilitasCardContent: {
            padding: '15px', // Padding around the text and button
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Align text and button to the left
        },
        fasilitasName: {
            fontSize: '18px', // Smaller font size
            fontWeight: '600', // Semi-bold
            color: '#1a1a1a',
            marginBottom: '15px', // Spacing below name
            marginTop: '0',
            whiteSpace: 'normal', // Allow text to wrap if needed
        },
        shopBtn: { // Mengganti nama style dari shopBtn menjadi detailBtn jika mau lebih deskriptif
            backgroundColor: '#FED219', // Ganti warna latar belakang tombol
            color: 'black', // Ganti warna teks agar terlihat kontras
            padding: '8px 18px', // Slightly smaller padding
            border: 'none',
            borderRadius: '9999px', // Fully rounded "pill" button
            fontSize: '14px', // Smaller font
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
            textDecoration: 'none',
            display: 'inline-block',
        },
        shopBtnHover: { // Tetap gunakan shopBtnHover untuk transisi hover
            backgroundColor: '#FDD94A', // Sedikit lebih terang atau gelap untuk efek hover
            transform: 'scale(1.02)',
        },
        scrollButton: {
            position: 'absolute',
            top: 'calc(20px + 140px)', // Roughly center vertical position
            transform: 'translateY(-50%)', // Ensure perfect vertical centering
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            zIndex: 10,
            transition: 'background-color 0.2s ease, border-color 0.2s ease',
            fontSize: '20px', // Ukuran ikon panah (jika menggunakan ikon font)
            fontWeight: 'bold',
            color: '#555', // Warna ikon panah
        },
        scrollButtonHover: {
            backgroundColor: '#f0f0f0',
            borderColor: '#bbb',
        },
        scrollButtonLeft: {
            left: '0px', // Position relative to contentWrapper's padding
            transform: 'translateX(-50%) translateY(-50%)', // Pull half of button outside padding + vertical center
        },
        scrollButtonRight: {
            right: '0px', // Position relative to contentWrapper's padding
            transform: 'translateX(50%) translateY(-50%)', // Push half of button outside padding + vertical center
        },
        // Responsive adjustments
        '@media (max-width: 768px)': {
            fasilitasCard: {
                width: 'calc(50vw - 30px)', // Two cards per row with gap (20px gap, 20px * 2 for contentWrapper padding)
            },
            fasilitasCardImageWrapper: {
                height: 'calc(50vw - 30px)', // Make image height proportional to width
            },
            fasilitasName: {
                fontSize: '16px',
                marginBottom: '10px',
            },
            shopBtn: {
                padding: '6px 14px',
                fontSize: '13px',
            },
            scrollButton: {
                display: 'none', // Hide scroll buttons on smaller screens
            },
            contentWrapper: {
                padding: '0 15px', // Slightly less padding on smaller screens
            }
        },
        '@media (max-width: 480px)': {
            fasilitasCard: {
                width: 'calc(100vw - 40px)', // One card per row on very small screens (20px * 2 for contentWrapper padding)
            },
            fasilitasCardImageWrapper: {
                height: 'calc(100vw - 40px)',
            },
            contentWrapper: {
                padding: '0 10px', // Even less padding on very small screens
            }
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

    // For the scroll buttons, we need separate hover states
    const [isLeftBtnHovered, setIsLeftBtnHovered] = useState(false);
    const [isRightBtnHovered, setIsRightBtnHovered] = useState(false);


    return (
        <section style={styles.fasilitasSection}>
            <div style={getCombinedStyle(
                styles.contentWrapper, false, null,
                styles['@media (max-width: 768px)'].contentWrapper,
                styles['@media (max-width: 480px)'].contentWrapper
            )}>
                <div style={styles.fasilitasGridContainer} ref={scrollContainerRef}>
                    <div style={styles.fasilitasGrid}>
                        {fasilitasData.map(fasilitas => {
                            const [isCardHovered, setIsCardHovered] = useState(false);
                            const [isBtnHovered, setIsBtnHovered] = useState(false);

                            return (
                                <div
                                    key={fasilitas.id}
                                    style={getCombinedStyle(
                                        styles.fasilitasCard,
                                        isCardHovered, // pass card hover state
                                        styles.fasilitasCardHover,
                                        styles['@media (max-width: 768px)'].fasilitasCard,
                                        styles['@media (max-width: 480px)'].fasilitasCard
                                    )}
                                    onMouseEnter={() => setIsCardHovered(true)}
                                    onMouseLeave={() => setIsCardHovered(false)}
                                >
                                    <div
                                        style={getCombinedStyle(
                                            styles.fasilitasCardImageWrapper,
                                            false, null, // Image wrapper itself doesn't have hover state
                                            styles['@media (max-width: 768px)'].fasilitasCardImageWrapper,
                                            styles['@media (max-width: 480px)'].fasilitasCardImageWrapper
                                        )}
                                    >
                                        <img
                                            src={fasilitas.imgSrc}
                                            alt={fasilitas.name}
                                            style={getCombinedStyle(
                                                styles.fasilitasImage,
                                                isCardHovered, // Image hover depends on card hover
                                                styles.fasilitasImageHover
                                            )}
                                        />
                                    </div>
                                    <div style={styles.fasilitasCardContent}>
                                        <h3
                                            style={getCombinedStyle(
                                                styles.fasilitasName, false, null,
                                                styles['@media (max-width: 768px)'].fasilitasName,
                                                styles['@media (max-width: 480px)'].fasilitasName
                                            )}
                                        >
                                            {fasilitas.name}
                                        </h3>
                                        <button
                                            style={getCombinedStyle(
                                                styles.shopBtn, // Menggunakan shopBtn karena namanya tidak diganti di sini
                                                isBtnHovered,
                                                styles.shopBtnHover,
                                                styles['@media (max-width: 768px)'].shopBtn,
                                                styles['@media (max-width: 480px)'].shopBtn
                                            )}
                                            onMouseEnter={() => setIsBtnHovered(true)}
                                            onMouseLeave={() => setIsBtnHovered(false)}
                                            onClick={() => handleDetailClick(fasilitas.name)} // Menggunakan handleDetailClick
                                        >
                                            Detail {/* Mengganti teks tombol */}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Scroll buttons placed within contentWrapper for correct positioning */}
                <button
                    style={getCombinedStyle(
                        { ...styles.scrollButton, ...styles.scrollButtonLeft },
                        isLeftBtnHovered,
                        styles.scrollButtonHover,
                        styles['@media (max-width: 768px)'].scrollButton // Hide on mobile
                    )}
                    onMouseEnter={() => setIsLeftBtnHovered(true)}
                    onMouseLeave={() => setIsLeftBtnHovered(false)}
                    onClick={scrollLeft}
                >
                    {/* Teks panah dihapus di sini */}
                </button>

                <button
                    style={getCombinedStyle(
                        { ...styles.scrollButton, ...styles.scrollButtonRight },
                        isRightBtnHovered,
                        styles.scrollButtonHover,
                        styles['@media (max-width: 768px)'].scrollButton // Hide on mobile
                    )}
                    onMouseEnter={() => setIsRightBtnHovered(true)}
                    onMouseLeave={() => setIsRightBtnHovered(false)}
                    onClick={scrollRight}
                >
                    {/* Teks panah dihapus di sini */}
                </button>
            </div>
        </section>
    );
}

export default Fasilitas;