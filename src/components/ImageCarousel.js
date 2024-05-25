import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from './CustomArrows';
import { useLoading } from '../contexts/LoadingContext';
import './ImageCarousel.css';

const ImageCarousel = ({ slides }) => {
  const { setIsLoading } = useLoading();
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = slides.length;

  useEffect(() => {
    if (loadedImages === totalImages) {
      setIsLoading(false);
    }
  }, [loadedImages, totalImages, setIsLoading]);

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1);
  };

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
          <img src={slide.image} alt={`Slide ${index}`} onLoad={handleImageLoad} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
