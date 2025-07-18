// src/components/Pengumuman.jsx
import React, { useState } from 'react';
// Import icons if you decide to use them later:
// import { FaCalendarAlt, FaFileDownload, FaExternalLinkAlt } from 'react-icons/fa';

const Pengumuman = () => {
    // --- Global & New Design Styles ---
    const componentStyles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 25px',
            boxSizing: 'border-box',
            fontFamily: '"Poppins", sans-serif',
        },
        sectionWrapper: {
            padding: '80px 0',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #f0f0f0',
        },
        sectionHeader: {
            textAlign: 'center',
            marginBottom: '60px',
            position: 'relative',
        },
        sectionTitle: {
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#2c3e50',
            marginBottom: '15px',
            lineHeight: '1.2',
            letterSpacing: '-0.04em',
        },
        sectionSubtitle: {
            fontSize: '1.2rem',
            color: '#7f8c8d',
            maxWidth: '750px',
            margin: '0 auto 30px auto',
            lineHeight: '1.7',
        },
        sectionButton: {
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '16px 35px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            textDecoration: 'none',
            boxShadow: '0 8px 20px rgba(0, 123, 255, 0.25)',
        },
        sectionButtonHover: {
            backgroundColor: '#0056b3',
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 28px rgba(0, 123, 255, 0.35)',
        },

        // Pengumuman Cards Specific Styles (Optimized for Horizontal Scroll with Fixed Width)
        pengumumanScrollContainer: {
            display: 'flex',
            overflowX: 'auto', // Enable horizontal scrollbar
            gap: '25px', // Slightly reduced gap for a more compact look
            paddingBottom: '20px', // Space for scrollbar
            scrollSnapType: 'x mandatory', // Smooth snapping effect
            WebkitOverflowScrolling: 'touch', // For smooth scrolling on iOS

            // Scrollbar styling (for customization if desired, otherwise browser default will apply)
            '&::-webkit-scrollbar': {
                height: '8px',
                backgroundColor: '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
                borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#a0a0a0',
            },
            msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
            scrollbarWidth: 'none', // Hide scrollbar for Firefox (can't fully hide, but makes it minimal)
        },
        pengumumanCard: {
            flex: '0 0 auto', // Crucial: Prevents shrinking/growing, maintains width
            width: '300px', // Explicitly set a fixed width for the card
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            // --- SHADOW BARU SESUAI PERMINTAAN ---
            boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Durasi transisi disesuaikan
            // ------------------------------------
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid #e8e8e8',
            position: 'relative',
            scrollSnapAlign: 'start',
        },
        pengumumanCardHover: {
            // --- SHADOW BARU SAAT HOVER SESUAI PERMINTAAN ---
            transform: 'translateY(-7px)', // Efek lift disesuaikan
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)', // Shadow saat hover disesuaikan
            // ---------------------------------------------
        },
        cardDateBadge: {
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: '#e6f0ff',
            color: '#007bff',
            padding: '8px 15px',
            borderRadius: '25px',
            fontSize: '0.85rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            boxShadow: '0 2px 8px rgba(0, 123, 255, 0.1)',
        },
        cardContent: {
            padding: '30px',
            flexGrow: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: '80px',
        },
        cardTitle: {
            fontSize: '1.4rem',
            fontWeight: 700,
            marginBottom: '15px',
            color: '#2c3e50',
            lineHeight: '1.3',
        },
        cardDescription: {
            fontSize: '0.95rem',
            color: '#7f8c8d',
            marginBottom: '30px',
            lineHeight: '1.6',
        },
        cardActions: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: 'auto',
            paddingTop: '20px',
            borderTop: '1px solid #f0f0f0',
        },
        btnPrimary: {
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.95rem',
            fontWeight: 600,
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            textDecoration: 'none',
            boxShadow: '0 4px 10px rgba(0, 123, 255, 0.15)',
        },
        btnPrimaryHover: {
            backgroundColor: '#0056b3',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 15px rgba(0, 123, 255, 0.25)',
        },
        btnSecondary: {
            backgroundColor: 'white',
            border: '1px solid #ced4da',
            color: '#6c757d',
            padding: '12px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.95rem',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            textDecoration: 'none',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
        },
        btnSecondaryHover: {
            backgroundColor: '#e9ecef',
            borderColor: '#adb5bd',
            color: '#495057',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        },
    };

    // Helper function to get styles
    const getStyle = (elementName, isHovered = false) => {
        const baseStyle = componentStyles[`${elementName}`] || {};
        const hoverStyle = isHovered && componentStyles[`${elementName}Hover`] ? componentStyles[`${elementName}Hover`] : {};

        return { ...baseStyle, ...hoverStyle };
    };

    // --- Pengumuman Card Component (Nested for direct access to getStyle) ---
    const PengumumanCard = ({ title, description, date }) => {
        const [isCardHovered, setIsCardHovered] = useState(false);
        const [isLihatHovered, setIsLihatHovered] = useState(false);
        const [isUnduhHovered, setIsUnduhHovered] = useState(false);

        return (
            <div
                style={{
                    ...getStyle('pengumumanCard'),
                    ...(isCardHovered ? getStyle('pengumumanCard', true) : {})
                }}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
            >
                <div style={getStyle('cardDateBadge')}>
                    {/* You can uncomment and use the icon if you reinstall react-icons */}
                    {/* <FaCalendarAlt size={14} /> */}
                    <span>{date}</span>
                </div>
                <div style={getStyle('cardContent')}>
                    <h3 style={getStyle('cardTitle')}>{title}</h3>
                    <p style={getStyle('cardDescription')}>{description}</p>
                    <div style={getStyle('cardActions')}>
                        <button
                            style={{
                                ...getStyle('btnPrimary'),
                                ...(isLihatHovered ? getStyle('btnPrimaryHover') : {})
                            }}
                            onMouseEnter={() => setIsLihatHovered(true)}
                            onMouseLeave={() => setIsLihatHovered(false)}
                        >
                            {/* <FaExternalLinkAlt size={14} /> */} Baca Selengkapnya
                        </button>
                        <button
                            style={{
                                ...getStyle('btnSecondary'),
                                ...(isUnduhHovered ? getStyle('btnSecondaryHover') : {})
                            }}
                            onMouseEnter={() => setIsUnduhHovered(true)}
                            onMouseLeave={() => setIsUnduhHovered(false)}
                        >
                            {/* <FaFileDownload size={14} /> */} Unduh
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // --- Main Component ---
    const [isSectionButtonHovered, setIsSectionButtonHovered] = useState(false);

    return (
        <section style={getStyle('sectionWrapper')}>
            <div style={getStyle('container')}>
                <div style={getStyle('sectionHeader')}>
                    <h2 style={getStyle('sectionTitle')}>Pengumuman & Berita Sekolah</h2>
                    <p style={getStyle('sectionSubtitle')}>
                        Temukan informasi terbaru, pengumuman penting, dan kegiatan sekolah kami di sini.
                    </p>
                    <button
                        style={{
                            ...getStyle('sectionButton'),
                            ...(isSectionButtonHovered ? getStyle('sectionButtonHover') : {})
                        }}
                        onMouseEnter={() => setIsSectionButtonHovered(true)}
                        onMouseLeave={() => setIsSectionButtonHovered(false)}
                    >
                        Lihat Semua Pengumuman
                    </button>
                </div>

                <div style={getStyle('pengumumanScrollContainer')}>
                    <PengumumanCard
                        title="Liburan Semester Genap"
                        description="Surat pemberitahuan resmi mengenai jadwal liburan semester genap tahun ajaran 2024/2025 telah diterbitkan."
                        date="17 Juli 2025"
                    />
                    <PengumumanCard
                        title="Jadwal Asesmen Akhir Semester"
                        description="Informasi lengkap dan detail jadwal pelaksanaan Asesmen Akhir Semester (AAS) untuk semua kelas."
                        date="15 Juli 2025"
                    />
                    <PengumumanCard
                        title="Milad SD Muhammadiyah Plus ke-20"
                        description="Rangkaian acara spesial peringatan Milad SD Muhammadiyah Plus ke-20 tahun. Mari meriahkan!"
                        date="10 Juli 2025"
                    />
                    <PengumumanCard
                        title="Kegiatan Hari Kemerdekaan RI"
                        description="Detail kegiatan dan berbagai lomba seru dalam rangka memperingati Hari Kemerdekaan Republik Indonesia."
                        date="05 Juli 2025"
                    />
                    <PengumumanCard
                        title="Pendaftaran Siswa Baru 2025/2026"
                        description="Informasi lengkap persyaratan dan prosedur pendaftaran siswa baru tahun ajaran 2025/2026 telah dibuka."
                        date="01 Juli 2025"
                    />
                     <PengumumanCard
                        title="Rapat Wali Murid Kelas 4"
                        description="Undangan resmi rapat wali murid kelas 4 untuk pembahasan program semester dan persiapan ujian."
                        date="28 Juni 2025"
                    />
                     <PengumumanCard
                        title="Lomba Kreativitas Siswa"
                        description="Pengumuman hasil lomba kreativitas siswa tingkat sekolah dasar. Selamat kepada para pemenang!"
                        date="25 Juni 2025"
                    />
                </div>
            </div>
        </section>
    );
};

export default Pengumuman;