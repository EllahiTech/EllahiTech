import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsAppChatButton.css';

export const WhatsAppChatButton = ({ phoneNumber }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-chat-button">
        {/*<img src='./images/whatsapp-icon.png' className='image'/>*/}
        <FontAwesomeIcon icon={faWhatsapp}/>
      </a>
    </>
  );
};
