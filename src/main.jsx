import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/profil'; 
<<<<<<< HEAD
import ProdukDigital from './pages/produkDigital'; 
import Investasi from './pages/investasi'; 
=======
>>>>>>> be5af4ee2f8a179860a285ff2058e8a1d429738f

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
          <Route path="/produkDigital" element={<ProdukDigital />} />
          <Route path="/profile" element={<Investasi />} />
=======
>>>>>>> be5af4ee2f8a179860a285ff2058e8a1d429738f
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
