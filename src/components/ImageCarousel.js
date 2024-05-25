import React, { useState } from 'react';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from './CustomArrows';
import './ImageCarousel.css';

const ImageCarousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '40px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px", paddingLeft: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: i === currentSlide ? "var(--primary)" : "rgba(0, 0, 0, 0.5)" }}></div>
    )
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Slider {...settings} beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}>
      {slides.map((slide, index) => (
        <div key={index} className="slide-container">
          <img src={slide.image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};




export default ImageCarousel;
