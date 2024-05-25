import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ services }) => {
  const { name, description, imageUrl, buttonLabel } = services;
  const whatsappLink = `https://wa.me/971502789227`;

  return (
    <div className="service-card-wrapper">
      <div className="service-card">
        <div className='card-image'>
          <div className="service-image">
            <img src={imageUrl} alt={name} />
          </div>
        </div>
        <div className="service-info">
          <h1 className="service-name">
            {name.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <p className="service-description">{description}</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="service-contact-button" >
              {buttonLabel}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
