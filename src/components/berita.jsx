import React, { useState } from 'react';

function Berita() {
    // Mock data for articles with author, read time, and description
    const artikelData = [
        {
            id: 1,
            imgSrc: "https://images.unsplash.com/photo-1510797176523-2895964d3996?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example for "Floating Lines"
            title: "Floating Lines",
            author: "Steve Duda",
            readTime: "6 min Read",
            description: "A journey through the untouched wilderness, following winding rivers and vast landscapes, capturing the essence of nature's raw beauty and the thrill of discovery.",
        },
        {
            id: 2,
            imgSrc: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Cochamó Por Siempre",
            author: "Daniel Seeliger & Rodrigo Condeza",
            readTime: "10 min Read",
            description: "An ode to the majestic granite walls of Cochamó, exploring the challenges and rewards of climbing in this Chilean paradise, and the deep connection formed with its landscapes.",
        },
        {
            id: 3,
            imgSrc: "https://images.unsplash.com/photo-1621373507116-20092ac9b06f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Chess Not Checkers",
            author: "Moona Whyte",
            readTime: "3 min Read",
            description: "A strategic approach to life and sports, drawing parallels between the calculated moves of chess and the dynamic flow of kitesurfing, emphasizing foresight and adaptability.",
        },
        {
            id: 4,
            imgSrc: "https://images.unsplash.com/photo-1549419163-547e17094d48?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Protecting the Right to Protest",
            author: "Annie Leonard",
            readTime: "5 min Read",
            description: "An examination of the fundamental right to peaceful assembly and protest, highlighting its importance in democratic societies and the ongoing challenges to its preservation.",
        },
        {
            id: 5,
            imgSrc: "https://images.unsplash.com/photo-1533284074218-c70503f56860?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // This one is meant to be the "A Seventh Chance" example from your second image
            title: "A Seventh Chance",
            author: "Pete Whittaker",
            readTime: "5 min Read",
            description: "For routes like Crown Royale, a lot of what goes into putting them up is falling down. This piece delves into the perseverance required for high-stakes climbing.",
        },
        {
            id: 6,
            imgSrc: "https://images.unsplash.com/photo-1517457371079-c09a80579e0a?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Exploring Ancient Ruins",
            author: "Dr. Evelyn Reed",
            readTime: "8 min Read",
            description: "A fascinating look into archaeological discoveries and the secrets they reveal about ancient civilizations, bringing history to life through compelling narratives.",
        },
    ];

    // --- Inline Styles (for basic properties) ---
    const commonStyles = {
        fontFamily: "'Inter', sans-serif",
        color: '#333',
        boxSizing: 'border-box',
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '30px 20px 50px 20px',
        backgroundColor: '#f7f9fc',
        ...commonStyles,
    };

    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '20px',
        marginBottom: '40px',
        textAlign: 'center',
        gap: '10px',
    };

    const titleStyle = {
        fontSize: '38px',
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: '10px',
        marginTop: '0',
        lineHeight: '1.2',
    };

    const subtitleStyle = {
        fontSize: '16px',
        color: '#7f8c8d',
        marginTop: '0',
        marginBottom: '20px',
        maxWidth: '700px',
        lineHeight: '1.6',
    };

    const buttonBaseStyle = {
        backgroundColor: '#e8f4fd',
        color: '#3498db',
        border: '1px solid #3498db',
        padding: '12px 28px',
        borderRadius: '30px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    };

    const artikelGridStyle = {
        display: 'flex',
        gap: '30px',
        overflowX: 'scroll',
        paddingBottom: '20px',
        paddingTop: '10px',
        WebkitOverflowScrolling: 'touch',
        alignItems: 'stretch',
    };

    const artikelCardBaseStyle = {
        background: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden', // Crucial for overlay animation
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        transition: 'box-shadow 0.3s ease', // Only shadow transition here
        display: 'flex',
        flexDirection: 'column',
        width: '320px',
        flexShrink: 0,
        position: 'relative', // Crucial for absolute positioning of overlay
        cursor: 'pointer',
    };

    const artikelImageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    };

    // Styles for the content visible when NOT hovered
    const artikelDefaultContentStyle = {
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        position: 'relative',
        zIndex: 1,
    };

    const artikelTitleDefaultStyle = {
        fontSize: '20px',
        fontWeight: '700',
        color: '#34495e',
        marginBottom: '10px',
        lineHeight: '1.4',
    };

    const artikelAuthorDefaultStyle = {
        fontSize: '15px',
        color: '#7f8c8d',
        marginBottom: '15px',
        fontWeight: '500',
    };

    const artikelReadTimeTextStyle = {
        fontSize: '13px',
        color: '#7f8c8d',
        marginTop: 'auto', // Pushes it to the bottom
        alignSelf: 'flex-start', // Aligns to left
        padding: '5px 0', // Small padding to match image
    };

    // --- CSS String for styles not supported by inline styles (including the new hover effect) ---
    const globalCss = `
        /* General body font if not set globally */
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f7f9fc; /* Match section background */
        }

        /* Berita Button Hover */
        .berita-button:hover {
            background-color: #3498db;
            color: white;
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        /* Artikel Grid Scrollbar Hiding */
        .artikel-grid::-webkit-scrollbar {
            display: none; /* Hide scrollbar for Webkit browsers */
        }
        .artikel-grid {
            scrollbar-width: none; /* Hide scrollbar for Firefox */
            -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
        }

        /* Artikel Card Hover Effects (for the card itself, not the overlay) */
        .artikel-card:hover {
            box-shadow: 0 18px 45px rgba(0,0,0,0.25); /* Stronger shadow on hover */
        }

        /* Artikel Overlay */
        .artikel-card .artikel-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #ffffff; /* Fully opaque white */
            border-radius: 16px; /* Match card border-radius */
            display: flex;
            flex-direction: column;
            justify-content: flex-start; /* Align content to top of overlay */
            padding: 25px;
            box-sizing: border-box;
            transform: translateY(100%); /* Start completely below the card */
            transition: transform 0.4s ease-out, opacity 0.4s ease-out; /* Smooth slide-up transition */
            z-index: 2; /* Ensure it's above default content */
            opacity: 0; /* Start invisible */
            pointer-events: none; /* Allow clicks to pass through when hidden */
        }

        .artikel-card:hover .artikel-overlay {
            transform: translateY(0); /* Slide up to cover the card */
            opacity: 1; /* Fade in */
            pointer-events: all; /* Enable clicks when visible */
        }

        /* Content inside Overlay */
        .artikel-overlay-content {
            display: flex;
            flex-direction: column;
            flex-grow: 1; /* Allows content to take up space */
            text-align: left;
            padding-top: 15px; /* Space between top edge and content */
        }

        .artikel-overlay-title {
            font-size: 20px;
            font-weight: 700;
            color: #34495e;
            margin-bottom: 10px;
            line-height: 1.4;
        }

        .artikel-overlay-author {
            font-size: 15px;
            color: #7f8c8d;
            margin-bottom: 15px;
            font-weight: 500;
        }

        .artikel-overlay-description {
            font-size: 14px;
            color: #555;
            line-height: 1.6;
            margin-bottom: 25px; /* Space before button */
            flex-grow: 1; /* Allows description to push button down */
        }

        .artikel-overlay .read-time-btn-black {
            background: #FED219; /* Updated to new color */
            color: #333; /* Text color for the yellow button */
            padding: 8px 18px;
            border: none;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s ease;
            align-self: flex-start; /* Aligns to left within overlay */
            text-decoration: none; /* Ensure no underline */
            display: inline-block; /* For padding */
            white-space: nowrap;
        }

        .artikel-overlay .read-time-btn-black:hover {
            background: #FFD700; /* Slightly darker yellow on hover */
        }


        /* Media Queries (Responsive Adjustments) - Applied to classes */
        @media (max-width: 1024px) {
            .berita-title { font-size: 34px; }
            .artikel-card { width: 280px; }
            .artikel-image { height: 180px; }
            .artikel-default-content, .artikel-overlay { padding: 20px; }
            .artikel-title-default, .artikel-overlay-title { font-size: 18px; }
        }

        @media (max-width: 768px) {
            .berita-title { font-size: 30px; }
            .berita-subtitle { font-size: 15px; margin-bottom: 15px; }
            .berita-button { padding: 10px 24px; font-size: 15px; }
            .artikel-card { width: 250px; border-radius: 12px; }
            .artikel-image { height: 160px; }
            .artikel-default-content, .artikel-overlay { padding: 18px; }
            .artikel-title-default, .artikel-overlay-title { font-size: 17px; margin-bottom: 8px;}
            .artikel-author-default, .artikel-overlay-author { font-size: 14px; margin-bottom: 10px;}
            .artikel-overlay-description { font-size: 13px; margin-bottom: 20px;}
            .artikel-read-time-text { font-size: 12px; }
            .read-time-btn-black { padding: 8px 18px; font-size: 12px; }
            .artikel-grid { gap: 20px; }
        }

        @media (max-width: 480px) {
            .berita-container { padding: 20px 15px 40px 15px; }
            .berita-title { font-size: 26px; margin-bottom: 5px; }
            .berita-subtitle { font-size: 14px; margin-bottom: 10px; max-width: 90%; }
            .berita-button { padding: 8px 18px; font-size: 13px; }
            .artikel-card { width: 220px; border-radius: 10px; }
            .artikel-image { height: 140px; }
            .artikel-default-content, .artikel-overlay { padding: 15px; }
            .artikel-title-default, .artikel-overlay-title { font-size: 16px; margin-bottom: 5px; }
            .artikel-author-default, .artikel-overlay-author { font-size: 13px; margin-bottom: 8px; }
            .artikel-overlay-description { font-size: 12px; margin-bottom: 15px;}
            .artikel-read-time-text { font-size: 11px; }
            .read-time-btn-black { padding: 6px 15px; font-size: 11px; }
            .artikel-grid { gap: 15px; }
        }
    `;

    return (
        <section style={containerStyle}>
            {/* Inject global styles using a style tag */}
            <style>{globalCss}</style>

            <div style={headerStyle}>
                <h2 style={titleStyle}>Artikel & Berita</h2>
                <p style={subtitleStyle}>Menyajikan Publikasi Artikel Berita dan Informasi dari SD Muhammadiyah Plus Kota Probolinggo</p>
                <button
                    className="berita-button" // Uses className for hover effect (handled by injected CSS)
                    style={buttonBaseStyle} // Applies base inline styles
                >
                    Jelajahi Artikel
                </button>
            </div>

            <div className="artikel-grid" style={artikelGridStyle}>
                {artikelData.map((artikel) => (
                    <div
                        key={artikel.id}
                        className="artikel-card" // Uses className for hover effect (handled by injected CSS)
                        style={artikelCardBaseStyle} // Applies base inline styles
                    >
                        {/* Always visible image */}
                        <img src={artikel.imgSrc} alt={artikel.title} style={artikelImageStyle} />

                        {/* Default Content (visible when NOT hovered) */}
                        <div className="artikel-default-content" style={artikelDefaultContentStyle}>
                            <h3 className="artikel-title-default" style={artikelTitleDefaultStyle}>{artikel.title}</h3>
                            <p className="artikel-author-default" style={artikelAuthorDefaultStyle}>{artikel.author}</p>
                            {/* Read time as simple text in default state */}
                            <span className="artikel-read-time-text" style={artikelReadTimeTextStyle}>
                                {artikel.readTime}
                            </span>
                        </div>

                        {/* Overlay Content (slides up on hover) */}
                        <div className="artikel-overlay">
                            <div className="artikel-overlay-content">
                                <h3 className="artikel-overlay-title">{artikel.title}</h3>
                                <p className="artikel-overlay-author">{artikel.author}</p>
                                {/* Description is now part of the overlay content */}
                                {artikel.description && <p className="artikel-overlay-description">{artikel.description}</p>}
                                {/* Black button appears as part of the overlay content */}
                                <button className="read-time-btn-black">
                                    {artikel.readTime}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Berita;