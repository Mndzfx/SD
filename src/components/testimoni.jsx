import React, { useState } from 'react';

// TestimonialSection component to display testimonials
function TestimonialSection() {
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

    // Array of testimonial data
    const testimonialsData = [
        {
            id: 1,
            content: "Proses pendaftaran sangat mudah dan transparan. Pelayanan panitia PPDB juga sangat ramah dan membantu.",
            authorName: "Ibu Siti",
            authorTitle: "Orang Tua Siswa",
            avatarSrc: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/989d367d-257a-4ca3-bf0b-ef50c365cae3.png",
            avatarAlt: "Potret Ibu Siti, wanita berusia 40-an dengan jilbab warna biru muda, tersenyum ramah"
        },
        {
            id: 2,
            content: "Senang bisa diterima melalui jalur prestasi. Semua proses pendaftaran online sehingga tidak perlu mengantri.",
            authorName: "Andi Pratama",
            authorTitle: "Siswa Kelas X",
            avatarSrc: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/435d317b-f02f-496f-9fe4-8c12e12a21e9.png",
            avatarAlt: "Potret Andi, siswa SMP dengan seragam putih merah, memegang buku sambil tersenyum"
        },
        {
            id: 3,
            content: "Informasi sangat jelas dan sistem pendaftaran terstruktur dengan baik. Sekolah juga memberikan panduan lengkap.",
            authorName: "Bapak Ahmad",
            authorTitle: "Orang Tua Siswa",
            avatarSrc: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9c46a95f-e270-4400-b5e7-3ae7ec817547.png",
            avatarAlt: "Potret Bapak Ahmad, pria berusia 45-an dengan kacamata, mengenakan kemeja coklat"
        }
    ];

    // --- Styles khusus untuk TestimonialSection ---
    const testimonialStyles = {
        testimonialsSection: {
            backgroundColor: '#FFFFFF',
            padding: '0 0 40px 0', // REDUCED from 60px: Less bottom padding for the entire section
            color: '#333',
            boxSizing: 'border-box',
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        },
        testimonialGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '15px', // REDUCED from 24px: Smaller gap between testimonial cards
            marginTop: '15px', // REDUCED from 20px: Smaller top margin for the grid
        },
        testimonialCard: {
            backgroundColor: '#f3f4f6',
            borderRadius: '0.5rem',
            padding: '32px',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        testimonialContent: {
            fontStyle: 'italic',
            color: '#6b7280',
            marginBottom: '20px', // REDUCED from 24px: Less space below content
            position: 'relative',
            padding: '0 10px',
        },
        testimonialContentBeforeAfter: {
            content: '""',
            fontSize: '3rem',
            lineHeight: 1,
            color: 'rgba(52, 152, 219, 0.2)',
            position: 'absolute',
        },
        testimonialAuthor: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: 'auto',
        },
        testimonialAvatar: {
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
        },
        testimonialAvatarImg: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
        },
        testimonialInfoH4: {
            fontWeight: '600',
            marginBottom: '4px',
            color: '#1f2937',
        },
        testimonialInfoP: {
            color: '#6b7280',
            fontSize: '0.875rem',
            margin: 0,
        },
    };

    const getStyle = (elementName, isHovered = false) => {
        const allStyles = { ...commonStyles, ...testimonialStyles };
        const baseStyle = allStyles[elementName] || {};
        const hoverStyle = isHovered && allStyles[`${elementName}Hover`] ? allStyles[`${elementName}Hover`] : (
            isHovered && baseStyle['&:hover'] ? baseStyle['&:hover'] : {}
        );
        return { ...baseStyle, ...hoverStyle };
    };

    const [isButtonHovered, setIsButtonHovered] = useState(false);

    return (
        <section id="testimoni" style={getStyle('testimonialsSection')}>
            <div style={getStyle('container')}>
                <div style={{
                    ...getStyle('sectionHeader'),
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <h2 style={getStyle('sectionTitle')}>Apa Kata Mereka?</h2>
                    <p style={getStyle('sectionSubtitle')}>Testimoni dari siswa dan orang tua tentang pengalaman mengikuti PPDB</p>
                    <button
                        style={{
                            ...getStyle('sectionButton'),
                            ...(isButtonHovered ? getStyle('sectionButtonHover') : {}),
                        }}
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                    >
                        Lihat Semua Testimoni
                    </button>
                </div>

                <div style={getStyle('testimonialGrid')}>
                    {testimonialsData.map(testimonial => (
                        <div style={getStyle('testimonialCard')} key={testimonial.id}>
                            <p style={getStyle('testimonialContent')}>
                                <span style={{...getStyle('testimonialContentBeforeAfter'), top: '-16px', left: '-8px'}}>“</span>
                                {testimonial.content}
                                <span style={{...getStyle('testimonialContentBeforeAfter'), bottom: '-32px', right: '-8px'}}>”</span>
                            </p>
                            <div style={getStyle('testimonialAuthor')}>
                                <div style={getStyle('testimonialAvatar')}>
                                    <img src={testimonial.avatarSrc} alt={testimonial.avatarAlt} style={getStyle('testimonialAvatarImg')} />
                                </div>
                                <div>
                                    <h4 style={getStyle('testimonialInfoH4')}>{testimonial.authorName}</h4>
                                    <p style={getStyle('testimonialInfoP')}>{testimonial.authorTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;