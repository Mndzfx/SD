import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', icon: 'fa-home', label: 'Beranda' },
  { to: '/promo', icon: 'fa-tags', label: 'Promo' },
  { to: '/pesanan', icon: 'fa-box', label: 'Pesanan' },
  { to: '/favorit', icon: 'fa-heart', label: 'Favorit' },
  { to: '/profile', icon: 'fa-user', label: 'Akun' },
   { to: '/tes', icon: 'fa-user', label: 'tes' },
    { to: '/fluxo', icon: 'fa-user', label: 'fluxo' },
];

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full border-t border-gray-300 bg-white z-50">
      <ul className="flex justify-around text-center text-xs text-blue-700 font-sans py-2">
        {navItems.map((item, index) => (
          <li key={index} className="flex flex-col items-center space-y-1">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? 'text-blue-900' : 'text-blue-700'
                }`
              }
            >
              {/* Ukuran ikon diperkecil dari text-2xl ke text-lg */}
              <i className={`fas ${item.icon} text-lg`} />
              <span className="text-[10px]">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
