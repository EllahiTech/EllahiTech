import React, { useState, useEffect, useRef } from 'react';
import ServiceItem from './WhyUstem';
import './WhyUs.css';

const WhyUs = ({ whyus }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const updateContainerWidth = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  };
  useEffect(() => {
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  const itemMinWidth = 250;
  const itemsPerRow = Math.floor(containerWidth / itemMinWidth);

  return (
    <div ref={containerRef} className="whyus-container">
      {whyus.map((service, index) => (
        <ServiceItem
          key={index}
          icon={service.icon}
          useOutline={service.useOutline}
          iconType={service.type}
          title={service.title}
          description={service.description}
          lastInRow={(index + 1) % itemsPerRow === 0 || index === whyus.length - 1}
        />
      ))}
    </div>
  );
};

export default WhyUs;
