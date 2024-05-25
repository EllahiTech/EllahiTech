import React, { useState } from 'react';

import { faSquareWhatsapp } from  '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

export const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  
  const [phoneNumber, setPhoneNumber] = useState("");

  const [message, setMessage] = useState("");
  const [isMessageError, setIsMessageError] = useState(false);

  const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
      });
  };

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

  return (
    
    <div className='footer-container'>

      <section class='footer-links'>

        <div class='footer-link-items'>

          <div className="contact">
          
          <div className="contact-header">
              <h1>Get in Touch Today</h1>
              <p>Fill the form below and we will contact you within 24 hours Inshallah.</p>
          </div>

            <div className='form'>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <div className="sub-wrapper">

                    <div className="sub-group">
                      <label htmlFor="first-name">First Name</label>
                      <input
                      type="text"
                      placeholder="Mohammad"
                      id="first-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      />
                    </div>
            
                    <div className="sub-group">
                      <label htmlFor="first-name">Last Name</label>
                      <input
                      type="text"
                      placeholder="Khan"
                      id="last-name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      />
                    </div>
                  </div>
                  
                </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    placeholder="e.g.: email@email.com"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                    placeholder="e.g.: 050xxxxxxx"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                    placeholder="Please enter your message here"
                    id="message"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        setIsMessageError(e.target.value.length > 100);
                    }}
                    required
                    />
                    {isMessageError && (
                      <div className="error-message">Max 100 words allowed.</div>
                    )}
                  </div>
                  
                  <button type="submit">Submit</button>
              
              </form>
            </div>   
          </div>
        </div>

        <div class='footer-link-items info'>
        <div className='content-seprator'></div>
          <h2>About Us</h2>
          <div class='info-item'>
            <p className='about-us'>Welcome to TechSavior, your trusted source for laptop and desktop repair and sales. Since our founding, we have been dedicated to providing top-notch service and expert solutions to keep your technology running smoothly. Our skilled technicians handle everything from hardware repairs to software troubleshooting, while our sales team helps you find the perfect new device. At TechSavior, customer satisfaction is our priority, and we are committed to delivering reliable, efficient, and friendly service every time. Trust us to keep you connected and productive.</p>
          </div>

          <div className='content-seprator'></div>
          
          <h2 className='icon-header'>Info</h2>
          <div class='info-item'>
            <div className='footer-contact-icons'>
              <a href={`https://wa.me/+971502789227`} target="_blank" rel="noopener noreferrer" className='footer-whatsapp'>
                <FontAwesomeIcon icon={faSquareWhatsapp} />
                <p>+971 50 278 9227</p>
              </a>
              <div className='footer-call' onClick={handlePhoneClick}>
                <FontAwesomeIcon icon={faPhone} />
                <p>+971 50 278 9227</p>
              </div>
              <div className='footer-mail' onClick={handleEmailClick}>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>technestshj@gmail.com</p>
              </div>
              <a href="#contact" className='footer-map' onClick={(e) => handleClick(e, 'contact')}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p>Sharjah industrial area 6</p>
              </a>
            </div>
          </div>
        </div>

      </section>
      
      <div className='line-container'>

        <div class="separator-container">

          <div class="separator"></div>
        </div>
        
        <div className='logo-container'>
          <img src='./logo.png' />
        </div>

        <div class="separator-container">

          <div class="separator"></div>
        </div>
      
      </div>

      <div className='footer-bottom'>
        <small className='website-rights'>
          Copyright © 2024 Saad
        </small>
        <span className='website-rights'>
          |
        </span>
        <small className='website-rights'>
          All Rights Reserved
        </small>
      </div>
    </div>
  
  );

}
