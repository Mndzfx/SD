// src/pages/Home.jsx
import React from 'react';
import Beranda from '../components/beranda';
import Berita from '../components/berita';
import Agenda from '../components/agenda';
import Fasilitas from '../components/fasilitas';
import Pengumuman from '../components/pengumuman';
import Ekstrakurikuler from '../components/ekstrakurikuler';
import Prestasi from '../components/prestasi';
import Daftar from '../components/daftarGuru';
import Testimoni from '../components/testimoni';
import Footer from '../components/footer';

function Home() {
    const pageStyle = {
        paddingTop: '20px',
        paddingBottom: '40px',
        backgroundColor: '#fff',
    };



    return (
        <div style={pageStyle}>
            <Beranda />
            <Berita />
            <Agenda />
            <Fasilitas />
            <Pengumuman />
            <Ekstrakurikuler />
            <Prestasi />
            <Daftar />
            <Testimoni />
            <Footer />
        </div>
    );
}

export default Home;