import React, { useState } from 'react';
import Slider from 'react-slick';
import ServiceCard from './ServiceCard';
import { PrevArrow, NextArrow } from './CustomArrows';

const ServiceCarousel = ({ services }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    prevArrow: <PrevArrow disabled={currentSlide === 0} />,
    nextArrow: <NextArrow disabled={currentSlide === 4} />,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {services.map((service, index) => (
        <ServiceCard key={index} services={service} />
      ))}
    </Slider>
  );
};

export default ServiceCarousel;
