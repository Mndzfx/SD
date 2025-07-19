import React, { useState } from 'react';

function Berita() {
    // Mock data for articles with author, read time, and description
    const artikelData = [
        {
            id: 1,
            imgSrc: "https://via.placeholder.com/600x400/FFD700/FFFFFF?text=Pekan+Olahraga+Sekolah", // Placeholder for school sports event
            title: "Pekan Olahraga Sekolah Sukses Digelar",
            author: "Humas Sekolah",
            readTime: "4 min Read",
            description: "Semangat sportifitas membara! Pekan Olahraga Sekolah (POS) tahun ini berhasil dilaksanakan dengan meriah, melibatkan seluruh siswa dalam berbagai cabang olahraga.",
        },
        {
            id: 2,
            imgSrc: "https://via.placeholder.com/600x400/ADD8E6/FFFFFF?text=Kunjungan+Edukasi", // Placeholder for educational visit
            title: "Kunjungan Edukasi ke Museum Sejarah",
            author: "Guru Sejarah",
            readTime: "6 min Read",
            description: "Siswa kelas 5 dan 6 melakukan kunjungan edukasi ke Museum Sejarah Nasional, memperkaya pengetahuan mereka tentang warisan budaya bangsa.",
        },
        {
            id: 3,
            imgSrc: "https://via.placeholder.com/600x400/90EE90/FFFFFF?text=Lomba+Sains", // Placeholder for science competition
            title: "Siswa Berprestasi di Lomba Sains Nasional",
            author: "Tim IPA Sekolah",
            readTime: "3 min Read",
            description: "Dua siswa perwakilan sekolah berhasil meraih juara dalam ajang Lomba Sains Nasional, mengharumkan nama sekolah dengan inovasi mereka.",
        },
        {
            id: 4,
            imgSrc: "https://via.placeholder.com/600x400/DDA0DD/FFFFFF?text=Kegiatan+Ekstrakurikuler", // Placeholder for extracurricular activities
            title: "Pengembangan Diri Melalui Ekstrakurikuler Baru",
            author: "Koordinator Ekskul",
            readTime: "5 min Read",
            description: "Tahun ajaran baru membawa semangat baru dengan peluncuran beberapa kegiatan ekstrakurikuler menarik untuk mendukung pengembangan minat dan bakat siswa.",
        },
        {
            id: 5,
            imgSrc: "https://via.placeholder.com/600x400/FFA07A/FFFFFF?text=Perpisahan+Kelas+6", // Placeholder for graduation/farewell
            title: "Momen Haru Perpisahan Kelas VI",
            author: "Panitia Acara",
            readTime: "5 min Read",
            description: "Acara pelepasan siswa-siswi kelas VI berlangsung penuh kehangatan dan haru, menandai akhir perjalanan mereka di jenjang SD dan siap melangkah ke jenjang selanjutnya.",
        },
        {
            id: 6,
            imgSrc: "https://via.placeholder.com/600x400/87CEEB/FFFFFF?text=Renovasi+Sekolah", // Placeholder for school renovation
            title: "Renovasi Perpustakaan Rampung",
            author: "Sarana Prasarana",
            readTime: "4 min Read",
            description: "Perpustakaan sekolah kini tampil dengan wajah baru setelah proses renovasi, siap memberikan kenyamanan lebih bagi siswa dalam membaca dan belajar.",
        },
    ];

    // --- Inline Styles (for basic properties) ---
    const commonStyles = {
        fontFamily: "'Inter', sans-serif",
        color: '#333',
        boxSizing: 'border-box',
    };

    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '30px',
        paddingBottom: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        gap: '10px',
        backgroundColor: '#FFFFFF', // Changed to white
        ...commonStyles,
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
        paddingBottom: '50px',
        paddingTop: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        WebkitOverflowScrolling: 'touch',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF', // Changed to white
        ...commonStyles,
    };

    const artikelCardBaseStyle = {
        background: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        transition: 'box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        width: '320px',
        flexShrink: 0,
        position: 'relative',
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
        marginTop: 'auto',
        alignSelf: 'flex-start',
        padding: '5px 0',
    };

    // --- CSS String for styles not supported by inline styles (including the new hover effect) ---
    const globalCss = `
        /* General body font if not set globally */
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f7f9fc; /* Maintain a light grey background for the overall page */
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
            display: none;
        }
        .artikel-grid {
            scrollbar-width: none;
            -ms-overflow-style: none;
        }

        /* Artikel Card Hover Effects (for the card itself, not the overlay) */
        .artikel-card:hover {
            box-shadow: 0 18px 45px rgba(0,0,0,0.25);
        }

        /* Artikel Overlay */
        .artikel-card .artikel-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #ffffff;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 25px;
            box-sizing: border-box;
            transform: translateY(100%);
            transition: transform 0.4s ease-out, opacity 0.4s ease-out;
            z-index: 2;
            opacity: 0;
            pointer-events: none;
        }

        .artikel-card:hover .artikel-overlay {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
        }

        /* Content inside Overlay */
        .artikel-overlay-content {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            text-align: left;
            padding-top: 15px;
        }

        .artikel-overlay-title {
            font-size: 20px;
            fontWeight: 700;
            color: '#34495e';
            margin-bottom: 10px;
            line-height: 1.4;
        }

        .artikel-overlay-author {
            font-size: 15px;
            color: '#7f8c8d';
            margin-bottom: 15px;
            font-weight: 500;
        }

        .artikel-overlay-description {
            font-size: 14px;
            color: '#555';
            line-height: 1.6;
            margin-bottom: 25px;
            flex-grow: 1;
        }

        .artikel-overlay .read-time-btn-black {
            background: #FED219;
            color: #333;
            padding: 8px 18px;
            border: none;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s ease;
            align-self: flex-start;
            text-decoration: none;
            display: inline-block;
            white-space: nowrap;
        }

        .artikel-overlay .read-time-btn-black:hover {
            background: #FFD700;
        }


        /* Media Queries (Responsive Adjustments) - Applied to classes */
        @media (max-width: 1024px) {
            .berita-header, .artikel-grid {
                padding-left: 15px;
                padding-right: 15px;
            }
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
        <>
            <style>{globalCss}</style>

            <div className="berita-header" style={headerStyle}>
                <h2 style={titleStyle}>Artikel & Berita Sekolah</h2>
                <p style={subtitleStyle}>Kumpulan berita dan informasi terbaru seputar kegiatan sekolah, prestasi siswa, dan pengumuman penting dari SD Muhammadiyah Plus Kota Probolinggo.</p>
                <button
                    className="berita-button"
                    style={buttonBaseStyle}
                >
                    Jelajahi Semua Artikel
                </button>
            </div>

            <div className="artikel-grid" style={artikelGridStyle}>
                {artikelData.map((artikel) => (
                    <div
                        key={artikel.id}
                        className="artikel-card"
                        style={artikelCardBaseStyle}
                    >
                        <img src={artikel.imgSrc} alt={artikel.title} style={artikelImageStyle} />

                        <div className="artikel-default-content" style={artikelDefaultContentStyle}>
                            <h3 className="artikel-title-default" style={artikelTitleDefaultStyle}>{artikel.title}</h3>
                            <p className="artikel-author-default" style={artikelAuthorDefaultStyle}>{artikel.author}</p>
                            <span className="artikel-read-time-text" style={artikelReadTimeTextStyle}>
                                {artikel.readTime}
                            </span>
                        </div>

                        <div className="artikel-overlay">
                            <div className="artikel-overlay-content">
                                <h3 className="artikel-overlay-title">{artikel.title}</h3>
                                <p className="artikel-overlay-author">{artikel.author}</p>
                                {artikel.description && <p className="artikel-overlay-description">{artikel.description}</p>}
                                <button className="read-time-btn-black">
                                    {artikel.readTime}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Berita;