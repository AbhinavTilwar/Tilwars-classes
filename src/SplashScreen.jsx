// SplashScreen.jsx
import React from 'react';
import logo1 from './assets/img/logo.gif'; // Adjust the path as necessary
import logo2 from './assets/img/logo_black.gif'; // Adjust the path as necessary
import './SplashScreen.css'
const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo1} alt="logo" className="logo-mobile" />
      <img src={logo2} alt="logo" className="logo-desktop" />
    </div>
  );
};

export default SplashScreen;

