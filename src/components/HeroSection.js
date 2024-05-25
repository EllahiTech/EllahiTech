import React, { useState, useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './HeroSection.css';

const HeroSection = ({ image, title, subtitle1, subtitle2, video, whatsapp, call, map, email }) => {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const sectionRef = useRef(null);

  const handleScroll = throttle(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const yOffset = window.innerHeight / 2 - (rect.top + rect.bottom) / 2;
      setParallaxOffset(yOffset * 0.3);
    }
  }, 10);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, []);

  const handlePhoneClick = () => {
    const phoneNumber = '+971502789227';
    navigator.clipboard.writeText(phoneNumber);
    alert('Phone number copied to clipboard: ' + phoneNumber);
  };

  const handleEmailClick = () => {
    const emailAddress = 'technestshj@gmail.com';
    navigator.clipboard.writeText(emailAddress);
    alert('Email address copied to clipboard: ' + emailAddress);
  };

  const handleClick = (e, id) => {
    e.preventDefault();

    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const additionalSpace = 20;

    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - navbarHeight - additionalSpace,
        behavior: 'smooth'
      });
    }
  };

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="hero-container" ref={sectionRef}>
      <div className='content'>
        <div className='text-area'>
          <div className='hero-texts'>
            <h5>{renderTextWithLineBreaks(subtitle1)}</h5>
            <h1>{renderTextWithLineBreaks(title)}</h1>
            <p>{renderTextWithLineBreaks(subtitle2)}</p>
          </div>
          <div className='contact-icons'>
            <div className='hero-call' onClick={handlePhoneClick}>
              <FontAwesomeIcon className='icon' icon={faPhone} />
              <p>{call}</p>
            </div>
            <div className='hero-mail' onClick={handleEmailClick}>
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
              <p>{email}</p>
            </div>
            <a href="#contact" className='hero-map' onClick={(e) => handleClick(e, 'contact')}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>Sharjah industrial area 6</p>
            </a>
          </div>
        </div>
      </div>
      <div
        className="hero-parallax-image"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
