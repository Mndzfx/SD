// src/components/Dashboard.jsx
import React, { useState } from 'react';

function Dashboard() {
    // --- Styles untuk common elements ---
    const commonStyles = {
        container: {
            maxWidth: '100%', // Changed to 100% for full width
            margin: '0', // Removed auto margin for full width
            padding: '0 20px', // Memberikan padding samping untuk konten
            boxSizing: 'border-box',
        },
        sectionHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '15px',
        },
        sectionTitle: {
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '5px',
            marginTop: '0',
        },
        sectionSubtitle: {
            fontSize: '15px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginTop: '0',
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

    // --- Prestasi Section Styles ---
    const prestasiStyles = {
        prestasiSection: {
            width: '100%',
            backgroundImage: `url('/img/background1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            marginTop: '60px',
            padding: '20px 0',
            borderRadius: '0',
            color: 'white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            boxSizing: 'border-box',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(33, 150, 243, 0.7)',
                zIndex: 0,
            },
            '> *': {
                position: 'relative',
                zIndex: 1,
            },
        },
        prestasiScrollContainer: {
            display: 'flex',
            overflowX: 'auto',
            gap: '25px',
            marginTop: '20px',
            paddingBottom: '0px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            alignItems: 'flex-start',
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        },
        prestasiCard: {
            flex: '0 0 auto',
            minWidth: '300px',
            background: 'white',
            borderRadius: '12px',
            padding: '10px 20px',
            color: '#333',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            scrollSnapAlign: 'start',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        prestasiCardHover: {
            transform: 'translateY(-8px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
        prestasiHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '5px',
            gap: '10px',
        },
        prestasiBadge: {
            background: '#e8f4fd',
            color: '#3498db',
            padding: '4px 10px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
        },
        prestasiIcon: {
            fontSize: '32px',
            color: '#f39c12',
        },
        prestasiName: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '3px',
            color: '#2c3e50',
            lineHeight: '1.2',
        },
        prestasiDetails: {
            fontSize: '14px',
            color: '#7f8c8d',
            marginBottom: '5px',
        },
        prestasiInfoGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '8px',
            marginTop: '5px',
            paddingTop: '5px',
            borderTop: '1px solid #f0f0f0',
        },
        prestasiInfoItem: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
        },
        prestasiInfoLabel: {
            fontSize: '11px',
            color: '#95a5a6',
            textTransform: 'uppercase',
            fontWeight: 'bold',
        },
        prestasiInfoValue: {
            fontSize: '15px',
            fontWeight: 'bold',
            color: '#2c3e50',
        },
    };

    const getStyle = (elementName, isHovered = false) => {
        const allStyles = { ...commonStyles, ...prestasiStyles };
        const baseStyle = allStyles[elementName] || {};
        const hoverStyle = isHovered && allStyles[`${elementName}Hover`] ? allStyles[`${elementName}Hover`] : (
            isHovered && baseStyle['&:hover'] ? baseStyle['&:hover'] : {}
        );
        return { ...baseStyle, ...hoverStyle };
    };

    const PrestasiCard = ({ type, name, details, rank, field, year, icon }) => {
        const [isCardHovered, setIsCardHovered] = useState(false);

        return (
            <div
                style={{
                    ...getStyle('prestasiCard'),
                    ...(isCardHovered ? getStyle('prestasiCard', true) : {})
                }}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
            >
                <div style={getStyle('prestasiHeader')}>
                    <div style={getStyle('prestasiBadge')}>{type}</div>
                    <span style={getStyle('prestasiIcon')}>{icon}</span>
                </div>
                <h3 style={getStyle('prestasiName')}>{name}</h3>
                <p style={getStyle('prestasiDetails')}>{details}</p>
                <div style={getStyle('prestasiInfoGrid')}>
                    <div style={getStyle('prestasiInfoItem')}>
                        <span style={getStyle('prestasiInfoLabel')}>Peringkat</span>
                        <span style={getStyle('prestasiInfoValue')}>{rank}</span>
                    </div>
                    <div style={getStyle('prestasiInfoItem')}>
                        <span style={getStyle('prestasiInfoLabel')}>Bidang</span>
                        <span style={getStyle('prestasiInfoValue')}>{field}</span>
                    </div>
                    <div style={getStyle('prestasiInfoItem')}>
                        <span style={getStyle('prestasiInfoLabel')}>Tahun</span>
                        <span style={getStyle('prestasiInfoValue')}>{year}</span>
                    </div>
                </div>
            </div>
        );
    };

    const [isSectionButtonHovered, setIsSectionButtonHovered] = useState(false);

    return (
        // Outermost container with black background
        <div style={{
            backgroundColor: '#fff', // Latar belakang hitam
            width: '100%', // Pastikan memenuhi lebar
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Pusatkan konten secara horizontal
            justifyContent: 'flex-start', // Mulai dari atas
            padding: '0px 0', // Padding atas/bawah untuk memberikan sedikit ruang
            // Kunci: Tidak ada 'minHeight: 100vh' di sini.
            // Tingginya akan sepenuhnya ditentukan oleh konten anak-anaknya.
        }}>
            <div style={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                backgroundColor: '#ffffff', // Latar belakang putih untuk "kartu" utama
                color: '#333',
                lineHeight: '1.6',
                margin: '0',
                boxSizing: 'border-box',
                width: '100%', // Changed from maxWidth to width for full width
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* Bagian Prestasi Siswa dengan background1.png */}
                <div style={{
                    ...getStyle('prestasiSection'),
                    // Ini adalah div yang memiliki background1.png.
                    // Tingginya akan ditentukan oleh konten di dalamnya.
                }}>
                    {/* The container here will now take 100% width, but its internal padding will keep content from the very edges */}
                    <div style={commonStyles.container}>
                        <div style={{
                            ...getStyle('sectionHeader'),
                            paddingTop: '0',
                        }}>
                            <div>
                                <h1 style={{ ...getStyle('sectionTitle') }}>Ragam Prestasi Siswa</h1>
                                <p style={{ ...getStyle('sectionSubtitle') }}>Merayakan keberhasilan siswa-siswi SD Muhammadiyah Plus Kota Probolinggo dalam berbagai bidang.</p>
                            </div>
                            <button
                                style={{
                                    ...getStyle('sectionButton'),
                                    backgroundColor: 'white',
                                    color: '#3498db',
                                    border: '1px solid white',
                                    ...(isSectionButtonHovered ? { backgroundColor: '#e8f4fd', color: '#3498db', transform: 'translateY(-2px)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' } : {})
                                }}
                                onMouseEnter={() => setIsSectionButtonHovered(true)}
                                onMouseLeave={() => setIsSectionButtonHovered(false)}
                            >
                                Lihat Semua Prestasi
                            </button>
                        </div>

                        <div style={{
                            ...getStyle('prestasiScrollContainer'),
                            // Ensure the padding inside the scroll container matches the common container's horizontal padding
                            paddingLeft: commonStyles.container.padding,
                            paddingRight: commonStyles.container.padding,
                        }}>
                            <PrestasiCard
                                type="Non Akademik"
                                name="Aulia Rahma Putri"
                                details="Juara 3 Tahfidz Qur'an Festival Anak Sholeh Muhammadiyah Kota Probolinggo."
                                rank="Juara 3"
                                field="Tahfidz Qur'an"
                                year="2024"
                                icon="🥉"
                            />
                            <PrestasiCard
                                type="Non Akademik"
                                name="Siti Nurhaliza Maulani"
                                details="Juara Harapan 3 Renang Gaya Bebas Kejuaraan Renang Pelajar Aquatik Challenge."
                                rank="Harapan 3"
                                field="Renang"
                                year="2024"
                                icon="🏅"
                            />
                            <PrestasiCard
                                type="Non Akademik"
                                name="Muhammad Rizki Pratama"
                                details="Medali Perak Lompat Jauh Kejuaraan Atletik Pelajar Kota Probolinggo."
                                rank="Medali Perak"
                                field="Atletik"
                                year="2024"
                                icon="🥈"
                            />
                            <PrestasiCard
                                type="Akademik"
                                name="Ahmad Faizal Rahman"
                                details="Juara 1 Bidang Matematika Olimpiade Sains Nasional Tingkat Kota Probolinggo."
                                rank="Juara 1"
                                field="Matematika"
                                year="2024"
                                icon="🥇"
                            />
                            <PrestasiCard
                                type="Non Akademik"
                                name="Zahra Amelia Putri"
                                details="Juara 2 Tari Tradisional Festival Seni dan Budaya Pelajar Jawa Timur."
                                rank="Juara 2"
                                field="Seni Tari"
                                year="2023"
                                icon="🥈"
                            />
                            <PrestasiCard
                                type="Akademik"
                                name="Bima Sakti Putra"
                                details="Juara 2 Lomba Mengarang Tingkat Kota Probolinggo."
                                rank="Juara 2"
                                field="Menulis"
                                year="2024"
                                icon="🥈"
                            />
                            <PrestasiCard
                                type="Non Akademik"
                                name="Dewi Lestari"
                                details="Juara 1 Lomba Pidato Bahasa Inggris Tingkat SD Se-Jawa Timur."
                                rank="Juara 1"
                                field="Bahasa Inggris"
                                year="2024"
                                icon="🥇"
                            />
                            <PrestasiCard
                                type="Akademik"
                                name="Fitriani Indah"
                                details="Juara 3 Olimpiade IPS Tingkat Provinsi Jawa Timur."
                                rank="Juara 3"
                                field="Ilmu Pengetahuan Sosial"
                                year="2023"
                                icon="🥉"
                            />
                        </div>
                    </div>
                </div>
                {/* Anda bisa menambahkan bagian lain dari dashboard Anda di sini */}
            </div>
        </div>
    );
}

export default Dashboard;