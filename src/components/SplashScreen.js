import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setIsAnimationStarted(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${isVisible ? '' : 'hide'}`}>
      <div className={`scrolling-content ${isAnimationStarted ? 'animation-started' : ''}`}>
        <img src={'/logo.png'} alt="Logo" className="splash-logo" />
        <h1>Welcome to EllahiTech</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
