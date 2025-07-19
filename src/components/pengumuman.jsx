// src/components/Pengumuman.jsx
import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

// Import icons if you decide to use them later:
// import { FaCalendarAlt, FaFileDownload, FaExternalLinkAlt } from 'react-icons/fa';

const Pengumuman = () => {
    // --- Common Styles (Copied from TestimonialSection for consistency) ---
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

    // --- Pengumuman Specific Styles ---
    const pengumumanStyles = {
        sectionWrapper: {
            padding: '50px 0 80px 0',
            backgroundColor: '#ffffff',
            borderTop: 'none',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            fontFamily: '"Poppins", sans-serif', // Keep Poppins for this section
        },
        sectionHeader: {
            display: 'flex',
            flexDirection: 'column', // Force column layout for title, subtitle, button
            alignItems: 'center', // Center items horizontally when in column
            marginBottom: '60px', // Keep original margin for more space before cards
            position: 'relative',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            paddingTop: '40px', // Apply padding top as per common
        },
        pengumumanScrollContainer: {
            display: 'flex',
            overflowX: 'auto',
            gap: '25px',
            paddingBottom: '20px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            // --- REMOVED THE CAUSING ERROR STYLES BELOW ---
            // '&::-webkit-scrollbar': {
            //     height: '8px',
            //     backgroundColor: '#f1f1f1',
            // },
            // '&::-webkit-scrollbar-thumb': {
            //     backgroundColor: '#ccc',
            //     borderRadius: '10px',
            // },
            // '&::-webkit-scrollbar-thumb:hover': {
            //     backgroundColor: '#a0a0a0',
            // },
            msOverflowStyle: 'none', // For IE/Edge, still works inline for hiding default scrollbar
            scrollbarWidth: 'none', // For Firefox, still works inline for hiding default scrollbar
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
        },
        pengumumanCard: {
            flex: '0 0 auto',
            width: '300px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: 'none',
            outline: 'none',
            position: 'relative',
            scrollSnapAlign: 'start',
        },
        pengumumanCardHover: {
            transform: 'translateY(-7px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
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
            border: 'none',
            outline: 'none',
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
            outline: 'none',
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
            outline: 'none',
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
        const allStyles = { ...commonStyles, ...pengumumanStyles }; // Merge common and pengumuman specific styles
        const baseStyle = allStyles[elementName] || {};
        const hoverStyle = isHovered && allStyles[`${elementName}Hover`] ? allStyles[`${elementName}Hover`] : {};

        // REMOVED: Special handling for Webkit scrollbar pseudo-element styles as they were causing the error.
        // if (elementName === 'pengumumanScrollContainer' && (baseStyle['&::-webkit-scrollbar'] || baseStyle['&::-webkit-scrollbar-thumb'])) {
        //     return { ...baseStyle, ...hoverStyle };
        // }

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

    // Floating animation for the "Lihat Semua Pengumuman" button
    const floatAnimation = useSpring({
        from: { transform: 'translateY(0px)' },
        to: async (next) => {
            while (1) {
                await next({ transform: 'translateY(-5px)', config: config.gentle });
                await next({ transform: 'translateY(0px)', config: config.gentle });
            }
        },
        loop: true, // This property handles the infinite loop when 'to' is an async function
    });


    return (
        <section style={getStyle('sectionWrapper')}>
            <div style={getStyle('container')}>
                <div style={{
                    ...getStyle('sectionHeader'),
                    flexDirection: 'column', // Ensure vertical stacking
                    alignItems: 'center', // Center content horizontally
                }}>
                    <h2 style={getStyle('sectionTitle')}>Pengumuman & Berita Sekolah</h2>
                    <p style={getStyle('sectionSubtitle')}>
                        Temukan informasi terbaru, pengumuman penting, dan kegiatan sekolah kami di sini.
                    </p>
                    {/* Apply the floating animation to the button */}
                    <animated.button
                        style={{
                            ...getStyle('sectionButton'),
                            ...(isSectionButtonHovered ? getStyle('sectionButtonHover') : {}),
                            ...floatAnimation, // Apply the float animation here
                        }}
                        onMouseEnter={() => setIsSectionButtonHovered(true)}
                        onMouseLeave={() => setIsSectionButtonHovered(false)}
                    >
                        Lihat Semua Pengumuman
                    </animated.button>
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