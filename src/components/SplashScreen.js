import React from 'react';
import './SplashScreen.css';
import { useLoading } from '../contexts/LoadingContext';

const SplashScreen = () => {
  const { isLoading } = useLoading();

  return (
    <div className={`splash-screen ${isLoading ? '' : 'hide'}`}>
      <div className="scrolling-content">
        <img src={'./images/logo.png'} alt="Logo" className="splash-logo" />
        <h1>Welcome to EllahiTech</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
