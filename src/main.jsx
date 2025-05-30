import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Profile from './pages/profil'; 
import ProdukDigital from './pages/produkDigital'; 
import Ecommerce from './pages/ecommerce'; 
import Wisata from './pages/wisata'; 
import Kuliner from './pages/kuliner'; 
import Hotel from './pages/hotel'; 
import Transport from './pages/transport'; 
import Event from './pages/event'; 
import Akomodasi from './pages/akomodasi'; 
import Tagihan from './pages/tagihan'; 
import Member from './pages/member'; 
import Promo from './pages/promo'; 
import Pesanan from './pages/pesanan'; 
import Favorit from './pages/favorit'; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/produkDigital" element={<ProdukDigital />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/wisata" element={<Wisata />} />
           <Route path="/kuliner" element={<Kuliner />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/event" element={<Event />} />
            <Route path="/tagihan" element={<Tagihan />} />
            <Route path="/akomodasi" element={<Akomodasi />} />
             <Route path="/member" element={<Member />} />
              <Route path="/promo" element={<Promo />} />
              <Route path="/pesanan" element={<Pesanan />} />
              <Route path="/favorit" element={<Favorit />} />
        </Routes>
      </div>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
