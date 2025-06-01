import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import FluxoBrowser from './FluxoBrowser';
import SplashScreen from './components/SplashScreen'; // Pastikan path ini benar

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const handleSplashFinish = () => {
    setShowSplashScreen(false);
  };

  return (
    <React.StrictMode>
      {showSplashScreen ? (
        <SplashScreen onFinishLoading={handleSplashFinish} />
      ) : (
        <FluxoBrowser />
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);