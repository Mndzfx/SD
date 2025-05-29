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
import Investasi from './pages/investasi'; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/produkDigital" element={<ProdukDigital />} />
          <Route path="/investasi" element={<Investasi />} />
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
