// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

function Dashboard() {
    // --- Styles untuk common elements ---
    const commonStyles = {
        container: {
            maxWidth: '1200px', // Set a max-width for content alignment
            margin: '0 auto', // Center the content
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
            // backgroundImage akan diatur secara dinamis oleh JavaScript
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            marginTop: '60px',
            paddingTop: '40px', // Increased padding for better initial view
            paddingBottom: '40px',
            borderRadius: '0',
            color: 'white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            boxSizing: 'border-box',
            overflow: 'hidden',
            // Transisi untuk efek fade-in gambar latar belakang
            transition: 'background-image 0.7s ease-in-out, background-color 0.7s ease-in-out',
        },
        prestasiContentWrapper: { // New style for wrapping content within the section
            position: 'relative',
            zIndex: 1,
            ...commonStyles.container, // Apply common container styles for max-width and margin
        },
        prestasiScrollContainer: {
            display: 'flex',
            overflowX: 'auto',
            gap: '25px',
            marginTop: '30px', // Increased margin
            paddingBottom: '15px', // Add padding for scrollbar
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            alignItems: 'flex-start',
            // Hide scrollbar
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        },
        prestasiCard: {
            flex: '0 0 auto',
            minWidth: '300px',
            background: 'white',
            borderRadius: '12px',
            padding: '20px', // Increased padding
            color: '#333',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            scrollSnapAlign: 'start',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            cursor: 'pointer', // Added cursor for better UX
        },
        prestasiCardHover: {
            transform: 'translateY(-8px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
        prestasiHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '10px', // Increased margin
            gap: '10px',
        },
        prestasiBadge: {
            background: '#e8f4fd',
            color: '#3498db',
            padding: '6px 12px', // Increased padding
            borderRadius: '20px',
            fontSize: '12px', // Slightly increased font size
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
        },
        prestasiIcon: {
            fontSize: '36px', // Increased icon size
            color: '#f39c12',
        },
        prestasiName: {
            fontSize: '22px', // Increased font size
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#2c3e50',
            lineHeight: '1.3',
        },
        prestasiDetails: {
            fontSize: '15px',
            color: '#7f8c8d',
            marginBottom: '10px', // Increased margin
        },
        prestasiInfoGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '10px', // Increased gap
            marginTop: '10px', // Increased margin
            paddingTop: '10px', // Increased padding
            borderTop: '1px solid #f0f0f0',
        },
        prestasiInfoItem: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
        },
        prestasiInfoLabel: {
            fontSize: '12px',
            color: '#95a5a6',
            textTransform: 'uppercase',
            fontWeight: 'bold',
        },
        prestasiInfoValue: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#2c3e50',
        },
    };

    const getStyle = (elementName, isHovered = false) => {
        const allStyles = { ...commonStyles, ...prestasiStyles };
        const baseStyle = allStyles?.[elementName] || {};
        const hoverStyle = isHovered && allStyles?.[`${elementName}Hover`] ? allStyles?.[`${elementName}Hover`] : {};
        return { ...baseStyle, ...hoverStyle };
    };

    const PrestasiCard = ({ type, name, details, rank, field, year, icon, index }) => {
        const [isCardHovered, setIsCardHovered] = useState(false);
        const animationProps = useSpring({
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0px)' },
            delay: 200 + index * 100, // Efek stagger: setiap kartu muncul dengan jeda
            config: config.molasses, // Konfigurasi animasi yang halus
        });

        return (
            <animated.div
                style={{
                    ...getStyle('prestasiCard'),
                    ...animationProps, // Aplikasi animasi muncul
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
            </animated.div>
        );
    };

    // State untuk melacak apakah gambar latar belakang sudah dimuat
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);

    // Efek samping untuk memuat gambar latar belakang
    useEffect(() => {
        const img = new Image(); // Buat objek Image baru
        img.onload = () => { // Ketika gambar selesai dimuat
            setBackgroundLoaded(true); // Set state menjadi true
        };
        img.onerror = () => { // Tangani error jika gambar gagal dimuat
            console.error('Failed to load background image: /img/background1.png');
            setBackgroundLoaded(true); // Tetap set true agar tidak stuck, meskipun gambar tidak ada
        };
        img.src = '/img/background1.png'; // Mulai memuat gambar
    }, []); // Array dependensi kosong, jalankan hanya sekali saat komponen mounted

    const [isSectionButtonHovered, setIsSectionButtonHovered] = useState(false);

    // Animasi untuk judul bagian
    const sectionHeaderAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-30px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: config.wobbly, // Efek sedikit 'goyang' saat muncul
    });

    // Animasi untuk tombol
    const sectionButtonAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(30px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        delay: 300, // Muncul setelah judul
        config: config.stiff,
    });

    // Animasi untuk container scrollable kartu prestasi
    const prestasiScrollContainerAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500, // Muncul setelah tombol
        config: config.slow,
    });

    const prestasiData = [
        { id: 1, type: "Non Akademik", name: "Aulia Rahma Putri", details: "Juara 3 Tahfidz Qur'an Festival Anak Sholeh Muhammadiyah Kota Probolinggo.", rank: "Juara 3", field: "Tahfidz Qur'an", year: "2024", icon: "🥉" },
        { id: 2, type: "Non Akademik", name: "Siti Nurhaliza Maulani", details: "Juara Harapan 3 Renang Gaya Bebas Kejuaraan Renang Pelajar Aquatik Challenge.", rank: "Harapan 3", field: "Renang", year: "2024", icon: "🏅" },
        { id: 3, type: "Non Akademik", name: "Muhammad Rizki Pratama", details: "Medali Perak Lompat Jauh Kejuaraan Atletik Pelajar Kota Probolinggo.", rank: "Medali Perak", field: "Atletik", year: "2024", icon: "🥈" },
        { id: 4, type: "Akademik", name: "Ahmad Faizal Rahman", details: "Juara 1 Bidang Matematika Olimpiade Sains Nasional Tingkat Kota Probolinggo.", rank: "Juara 1", field: "Matematika", year: "2024", icon: "🥇" },
        { id: 5, type: "Non Akademik", name: "Zahra Amelia Putri", details: "Juara 2 Tari Tradisional Festival Seni dan Budaya Pelajar Jawa Timur.", rank: "Juara 2", field: "Seni Tari", year: "2023", icon: "🥈" },
        { id: 6, type: "Akademik", name: "Bima Sakti Putra", details: "Juara 2 Lomba Mengarang Tingkat Kota Probolinggo.", rank: "Juara 2", field: "Menulis", year: "2024", icon: "🥈" },
        { id: 7, type: "Non Akademik", name: "Dewi Lestari", details: "Juara 1 Lomba Pidato Bahasa Inggris Tingkat SD Se-Jawa Timur.", rank: "Juara 1", field: "Bahasa Inggris", year: "2024", icon: "🥇" },
        { id: 8, type: "Akademik", name: "Fitriani Indah", details: "Juara 3 Olimpiade IPS Tingkat Provinsi Jawa Timur.", rank: "Juara 3", field: "Ilmu Pengetahuan Sosial", year: "2023", icon: "🥉" },
    ];

    // Style dinamis untuk bagian prestasi, termasuk lazy loading background
    const prestasiSectionDynamicStyle = {
        ...getStyle('prestasiSection'),
        // Terapkan backgroundImage hanya jika sudah dimuat
        backgroundImage: backgroundLoaded ? `url('/img/background1.png')` : 'none',
        // Opsi: Tetapkan warna solid sebagai fallback sementara jika gambar belum dimuat
        backgroundColor: backgroundLoaded ? 'transparent' : '#3498db', // Atau warna lain yang cocok
    };

    return (
        <div style={{
            backgroundColor: '#fff',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '0px 0',
        }}>
            <div style={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                backgroundColor: '#ffffff',
                color: '#333',
                lineHeight: '1.6',
                margin: '0',
                boxSizing: 'border-box',
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* Bagian Prestasi Siswa dengan background1.png */}
                <div style={prestasiSectionDynamicStyle}> {/* Menggunakan style dinamis di sini */}
                    {/* Content wrapper to apply common container styles (max-width, margin, padding) */}
                    <div style={getStyle('prestasiContentWrapper')}>
                        {/* Header bagian dengan animasi muncul dari atas */}
                        <animated.div style={{ ...getStyle('sectionHeader'), ...sectionHeaderAnimation }}>
                            <div>
                                <h1 style={getStyle('sectionTitle')}>Ragam Prestasi Siswa</h1>
                                <p style={getStyle('sectionSubtitle')}>Merayakan keberhasilan siswa-siswi SD Muhammadiyah Plus Kota Probolinggo dalam berbagai bidang.</p>
                            </div>
                            {/* Tombol dengan animasi muncul dari kanan */}
                            <animated.button
                                style={{
                                    ...getStyle('sectionButton'),
                                    ...sectionButtonAnimation, // Aplikasi animasi tombol
                                    backgroundColor: 'white',
                                    color: '#3498db',
                                    border: '1px solid white',
                                    ...(isSectionButtonHovered ? { backgroundColor: '#e8f4fd', color: '#3498db', transform: 'translateY(-2px)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' } : {})
                                }}
                                onMouseEnter={() => setIsSectionButtonHovered(true)}
                                onMouseLeave={() => setIsSectionButtonHovered(false)}
                            >
                                Lihat Semua Prestasi
                            </animated.button>
                        </animated.div>

                        {/* Scroll container untuk kartu prestasi dengan animasi fade-in */}
                        <animated.div style={{ ...getStyle('prestasiScrollContainer'), ...prestasiScrollContainerAnimation }}>
                            {prestasiData.map((prestasi, index) => (
                                <PrestasiCard
                                    key={prestasi.id}
                                    type={prestasi.type}
                                    name={prestasi.name}
                                    details={prestasi.details}
                                    rank={prestasi.rank}
                                    field={prestasi.field}
                                    year={prestasi.year}
                                    icon={prestasi.icon}
                                    index={index} // Meneruskan index untuk efek stagger animasi kartu
                                />
                            ))}
                        </animated.div>
                    </div>
                </div>
                {/* Anda bisa menambahkan bagian lain dari dashboard Anda di sini */}
            </div>
        </div>
    );
}

export default Dashboard;