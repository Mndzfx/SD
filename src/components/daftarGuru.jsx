import React, { useEffect, useState } from 'react';

function DaftarGuru() {
    // Data dummy untuk daftar guru
    const teachersData = [
        {
            id: 1,
            name: "Budi Santoso, S.Pd.",
            subject: "Matematika",
            image: "https://images.unsplash.com/photo-1549068106-b024baf5062d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            name: "Dewi Lestari, M.Hum.",
            subject: "Bahasa Indonesia",
            image: "https://images.unsplash.com/photo-1552058544-eedfd0560c5e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            name: "Rizky Firmansyah, S.Kom.",
            subject: "TIK",
            image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            name: "Siti Aminah, S.Ag.",
            subject: "Pendidikan Agama Islam",
            image: "https://images.unsplash.com/photo-1596495578065-6f9175249f3e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 5,
            name: "Andi Wijaya, S.Pd.",
            subject: "Penjasorkes",
            image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 6,
            name: "Kartika Sari, S.Psi.",
            subject: "Bimbingan Konseling",
            image: "https://images.unsplash.com/photo-1573497019236-02e06d49925e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ];

    // State untuk mendeteksi apakah perangkat adalah mobile atau tidak
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Efek untuk mendengarkan perubahan ukuran jendela
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- Common Styles (Disalin dari komponen TestimonialSection untuk konsistensi) ---
    const commonStyles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto', // Menggunakan '0 auto' agar selalu di tengah
            marginTop: isMobile ? '0px' : '0px', // Margin atas disesuaikan untuk mobile
            padding: isMobile ? '0 15px' : '0 20px', // Padding samping disesuaikan untuk mobile
            boxSizing: 'border-box',
        },
        sectionHeader: {
            display: 'flex',
            flexDirection: 'column', // Selalu kolom agar title, subtitle, dan button menumpuk
            alignItems: 'center', // Selalu di tengah
            marginBottom: '0px',
            gap: '8px',
            paddingTop: isMobile ? '30px' : '40px', // Padding atas disesuaikan
            textAlign: 'center', // Memastikan teks di tengah
        },
        sectionTitle: {
            fontSize: isMobile ? '28px' : '32px', // Ukuran font disesuaikan
            fontWeight: 'bold',
            color: '#2c3e50',
            marginBottom: '0px',
            marginTop: '0',
            width: '100%',
        },
        sectionSubtitle: {
            fontSize: isMobile ? '14px' : '15px', // Ukuran font disesuaikan
            color: '#7f8c8d',
            marginTop: '0',
            width: '100%',
            marginBottom: '10px',
        },
        sectionButton: {
            backgroundColor: '#e8f4fd',
            color: '#3498db',
            border: '1px solid #3498db',
            padding: isMobile ? '8px 16px' : '10px 20px', // Padding tombol disesuaikan
            borderRadius: '25px',
            fontSize: isMobile ? '14px' : '15px', // Ukuran font tombol disesuaikan
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

    // Definisi gaya khusus untuk komponen DaftarGuru ini
    const daftarGuruStyles = {
        teacherSection: {
            marginBottom: isMobile ? '30px' : '40px', // Margin bawah disesuaikan
            paddingTop: '0',
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        },
        teacherList: {
            display: 'grid', // Menggunakan grid untuk tata letak kolom
            gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '10px' : '20px', // Jarak antar kartu lebih rapat di mobile
            marginTop: '15px',
            listStyle: 'none',
            padding: '0',
        },
        teacherListItem: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '8px', // Changed to 8px to match Fasilitas card border-radius
            padding: isMobile ? '12px 18px' : '15px 25px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)', // Changed to match Fasilitas card box-shadow
            transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Adjusted transition duration
            cursor: 'pointer',
            border: 'none', // Removed border to match Fasilitas card
            textAlign: 'left',
            minHeight: isMobile ? '90px' : '100px',
            boxSizing: 'border-box',
        },
        teacherListItemHover: {
            transform: 'translateY(-2px)', // Adjusted to match Fasilitas card hover transform
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)', // Adjusted to match Fasilitas card hover box-shadow
        },
        teacherImageContainer: {
            width: isMobile ? '50px' : '60px',
            height: isMobile ? '50px' : '60px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginRight: isMobile ? '15px' : '20px',
            flexShrink: 0,
            boxShadow: 'none', // Removed shadow from image container to match Fasilitas (which has no inner shadow for image)
            border: 'none', // Removed border from image container to match Fasilitas
            transition: 'transform 0.3s ease',
        },
        teacherImageContainerHover: {
            transform: 'scale(1.05)', // Kept original image hover for visual interest
        },
        teacherImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        teacherInfo: {
            flexGrow: 1,
        },
        teacherName: {
            fontSize: isMobile ? '16px' : '20px',
            fontWeight: '700',
            color: '#34495e',
            margin: '0 0 5px 0',
        },
        teacherSubject: {
            fontSize: isMobile ? '13px' : '15px',
            fontWeight: '500',
            color: '#2980b9',
            margin: 0,
        },
    };

    // Helper function for applying styles (lokal)
    const getStyle = (elementName, isHovered = false) => {
        const allStyles = { ...commonStyles, ...daftarGuruStyles };
        const baseStyle = allStyles[elementName] || {};
        const hoverStyle = isHovered && allStyles[`${elementName}Hover`] ? allStyles[`${elementName}Hover`] : {};
        return { ...baseStyle, ...hoverStyle };
    };

    // State untuk efek hover
    const [hoveredListItem, setHoveredListItem] = useState({});
    const [hoveredImage, setHoveredImage] = useState({}); // Kept this for independent image hover
    const [isSectionButtonHovered, setIsSectionButtonHovered] = useState(false);

    return (
        <section style={getStyle('teacherSection')}>
            <div style={getStyle('container')}>
                <div style={getStyle('sectionHeader')}>
                    <h2 style={getStyle('sectionTitle')}>Tim Pengajar Profesional</h2>
                    <p style={getStyle('sectionSubtitle')}>
                        Guru-guru kami adalah pendidik berdedikasi yang membimbing siswa meraih potensi terbaiknya.
                    </p>
                    <button
                        style={{
                            ...getStyle('sectionButton'),
                            ...(isSectionButtonHovered ? getStyle('sectionButtonHover') : {}),
                        }}
                        onMouseEnter={() => setIsSectionButtonHovered(true)}
                        onMouseLeave={() => setIsSectionButtonHovered(false)}
                    >
                        Lihat Semua Guru
                    </button>
                </div>

                <ul style={getStyle('teacherList')}>
                    {teachersData.map((teacher) => (
                        <li
                            key={teacher.id}
                            style={{
                                ...getStyle('teacherListItem'),
                                ...(hoveredListItem[teacher.id] ? getStyle('teacherListItem', true) : {}),
                            }}
                            onMouseEnter={() => setHoveredListItem(prev => ({ ...prev, [teacher.id]: true }))}
                            onMouseLeave={() => setHoveredListItem(prev => ({ ...prev, [teacher.id]: false }))}
                        >
                            <div
                                style={{
                                    ...getStyle('teacherImageContainer'),
                                    // Apply image hover only when image container is hovered, not necessarily the whole list item
                                    ...(hoveredImage[teacher.id] ? getStyle('teacherImageContainer', true) : {}),
                                }}
                                onMouseEnter={() => setHoveredImage(prev => ({ ...prev, [teacher.id]: true }))}
                                onMouseLeave={() => setHoveredImage(prev => ({ ...prev, [teacher.id]: false }))}
                            >
                                <img
                                    src={teacher.image}
                                    alt={teacher.name}
                                    style={getStyle('teacherImage')}
                                />
                            </div>
                            <div style={getStyle('teacherInfo')}>
                                <h3 style={getStyle('teacherName')}>{teacher.name}</h3>
                                <p style={getStyle('teacherSubject')}>{teacher.subject}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default DaftarGuru;