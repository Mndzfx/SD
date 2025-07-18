// src/components/Pengumuman.jsx
import React, { useState } from 'react';

const Pengumuman = () => {
    // --- Common Styles (Disalin dari komponen lain untuk konsistensi) ---
    const commonStyles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto', // Mengatur margin otomatis untuk centering
            padding: '0 20px', // Memberikan padding samping untuk konten
            boxSizing: 'border-box',
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        },
        sectionHeader: {
            display: 'flex',
            // PERUBAHAN: Set flexDirection to 'column' and alignItems to 'center'
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '15px', // Adjusted to 15px (was 10px, originally more)
            flexWrap: 'wrap',
            gap: '10px',
            paddingTop: '30px', // Reduced from 60px
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
            marginBottom: '8px',
            textAlign: 'center',
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

    // --- Pengumuman Section Styles ---
    const pengumumanStyles = {
        pengumumanSection: {
            // Updated padding for the entire section
            padding: '20px 0 30px 0', // Reduced bottom from 60px to 30px, added 20px top padding
        },
        pengumumanScrollContainer: {
            display: 'flex',
            overflowX: 'auto',
            gap: '25px',
            paddingBottom: '15px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            marginTop: '20px', // Add top margin to separate from the header
        },
        pengumumanCard: {
            flex: '0 0 auto',
            minWidth: '320px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            scrollSnapAlign: 'start',
            overflow: 'hidden',
        },
        pengumumanCardHover: {
            transform: 'translateY(-8px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
        cardHeader: {
            backgroundColor: '#e8f4fd',
            padding: '15px 25px',
            borderBottom: '1px solid #d0e7fb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
        },
        cardLabel: {
            fontSize: '12px',
            color: '#3498db',
            fontWeight: 'bold',
            backgroundColor: '#c4e0f9',
            padding: '5px 10px',
            borderRadius: '5px',
        },
        cardDate: {
            fontSize: '14px',
            color: '#555',
            fontWeight: '600',
        },
        cardContent: {
            padding: '25px',
            flexGrow: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        cardTitle: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#2c3e50',
            lineHeight: '1.4',
        },
        cardDescription: {
            fontSize: '15px',
            color: '#7f8c8d',
            marginBottom: '20px',
        },
        cardButtons: {
            display: 'flex',
            gap: '12px',
            marginTop: 'auto',
        },
        btnLihat: {
            backgroundColor: 'transparent',
            border: '1px solid #95a5a6',
            color: '#7f8c8d',
            padding: '10px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '15px',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            flexGrow: 1,
            textAlign: 'center',
        },
        btnLihatHover: {
            backgroundColor: '#dfe4ea',
            color: '#2c3e50',
            borderColor: '#2c3e50',
        },
        btnUnduh: {
            backgroundColor: '#3498db',
            border: '1px solid #3498db',
            color: 'white',
            padding: '10px 18px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '15px',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            flexGrow: 1,
            textAlign: 'center',
        },
        btnUnduhHover: {
            backgroundColor: '#2980b9',
            borderColor: '#2980b9',
            transform: 'scale(1.02)',
        },
    };

    // Helper function to get styles
    const getStyle = (elementName, isHovered = false) => {
        const allStyles = { ...commonStyles, ...pengumumanStyles };
        const baseStyle = allStyles[`${elementName}`] || {};
        const hoverStyle = isHovered && allStyles[`${elementName}Hover`] ? allStyles[`${elementName}Hover`] : (
            isHovered && baseStyle['&:hover'] ? baseStyle['&:hover'] : {}
        );

        let combinedStyle = { ...baseStyle };

        // Apply media queries if they exist in the baseStyle (not strictly needed here but good for consistency)
        if (baseStyle['@media']) {
            for (const query in baseStyle['@media']) {
                if (window.matchMedia(query).matches) {
                    Object.assign(combinedStyle, baseStyle['@media'][query]);
                }
            }
        }
        return { ...combinedStyle, ...hoverStyle };
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
                <div style={getStyle('cardHeader')}>
                    <div style={getStyle('cardLabel')}>PENGUMUMAN</div>
                    <div style={getStyle('cardDate')}>{date}</div>
                </div>
                <div style={getStyle('cardContent')}>
                    <h3 style={getStyle('cardTitle')}>{title}</h3>
                    <p style={getStyle('cardDescription')}>{description}</p>
                    <div style={getStyle('cardButtons')}>
                        <button
                            style={{
                                ...getStyle('btnLihat'),
                                ...(isLihatHovered ? getStyle('btnLihatHover') : {})
                            }}
                            onMouseEnter={() => setIsLihatHovered(true)}
                            onMouseLeave={() => setIsLihatHovered(false)}
                        >
                            Baca Selengkapnya
                        </button>
                        <button
                            style={{
                                ...getStyle('btnUnduh'),
                                ...(isUnduhHovered ? getStyle('btnUnduhHover') : {})
                            }}
                            onMouseEnter={() => setIsUnduhHovered(true)}
                            onMouseLeave={() => setIsUnduhHovered(false)}
                        >
                            Unduh
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // --- Main Component ---
    const [isSectionButtonHovered, setIsSectionButtonHovered] = useState(false);

    return (
        <section style={{ ...getStyle('pengumumanSection'), ...getStyle('container') }}>
            <div style={getStyle('sectionHeader')}>
                <h2 style={getStyle('sectionTitle')}>Pengumuman Terbaru</h2>
                <p style={getStyle('sectionSubtitle')}>
                    Informasi penting dan kegiatan terbaru dari SD Muhammadiyah Plus Kota Probolinggo.
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
                    description="Surat pemberitahuan resmi mengenai jadwal liburan semester genap tahun ajaran 2024/2025."
                    date="17 Juli 2025"
                />
                <PengumumanCard
                    title="Jadwal Asesmen Akhir Semester"
                    description="Informasi lengkap jadwal pelaksanaan Asesmen Akhir Semester (AAS) untuk semua kelas."
                    date="15 Juli 2025"
                />
                <PengumumanCard
                    title="Milad SD Muhammadiyah Plus ke-20"
                    description="Rangkaian acara peringatan Milad SD Muhammadiyah Plus ke-20. Mari meriahkan!"
                    date="10 Juli 2025"
                />
                <PengumumanCard
                    title="Kegiatan Hari Kemerdekaan"
                    description="Detail kegiatan dan lomba dalam rangka memperingati Hari Kemerdekaan Republik Indonesia."
                    date="05 Juli 2025"
                />
                <PengumumanCard
                    title="Pendaftaran Siswa Baru 2025/2026"
                    description="Informasi lengkap persyaratan dan prosedur pendaftaran siswa baru tahun ajaran 2025/2026."
                    date="01 Juli 2025"
                />
            </div>
        </section>
    );
};

export default Pengumuman;