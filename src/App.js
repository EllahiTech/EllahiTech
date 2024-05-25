import React from 'react';

import HeroSection from './components/HeroSection';
import WhyUs from './components/WhyUs';
import ImageCarousel from './components/ImageCarousel';
import Location from './components/Location';
import ServiceCarousel from './components/ServiceCarousel';
import SplashScreen from './components/SplashScreen';
import { WhatsAppChatButton } from './components/WhatsAppChatButton';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import {Footer} from './components/Footer';
import Navbar from './components/Navbar';
import { LoadingProvider } from './contexts/LoadingContext';

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const whyus = [
    {
      icon: 'user-shield',
      type: 'fontawesome',
      title: 'Diagnose Device Problem',
      useOutline: true,
      description: 'We offer both online and on-site diagnostics for your damaged, broken, or non-functional devices throughout the UAE.'
    },
    {
      icon: 'screwdriver-wrench',
      type: 'fontawesome',
      title: 'Quick Device Repair',
      description: 'We provide same-day device repairs using genuine OEM parts that we have readily available in stock.'
    },
    {
      icon: 'laptop',
      type: 'fontawesome',
      title: 'Hardware & Software Installation',
      description: 'Obtain new hardware parts or software installation services for any device instantly, anywhere in the UAE.'
    },
    {
      type: 'svg',
      title: 'Online Chat Support',
      description: 'We are proud to introduce our innovative 24/7 online chat support system, now available in the UAE.',
      lastInRow: true
    }
  ];

  const slides = [
    {
      image: '/carousal/pc1.png',
    },
    {
      image: '/carousal/pc2.png',
    },
    {
      image: '/carousal/pc3.png',
    },
    {
      image: '/carousal/pc4.png',
    },
  ];
  const mobile_slides = [
    {
      image: './carousal/mobile1.png',
    },
    {
      image: './carousal/mobile2.png',
    },
    {
      image: './carousal/mobile3.png',
    },
    {
      image: './carousal/mobile4.png',
    },
  ];

  const services = [
    {
      imageUrl: "./images/pic_1.png",
      name: "All In One\nRepair Solutions",
      description: "Is your motherboard, keyboard, trackpad having issues? We are here to bring them back to their original state with all kinds of repairs and replacements.",
      buttonLabel: "Contact Us",
    },
    {
      imageUrl: "./images/pic_2.png",
      name: "Screen\nReplacement",
      description: "Broken Screen or Spots in your screen? Need not worry as we offer all kinds of screen replacements and repairs.",
      buttonLabel: "Contact Us",
    },
    {
      imageUrl: "./images/pic_3.png",
      name: "Battery\nReplacement",
      description: "Battery life too short or not working? Nothing to stress as we offer battery replacements of all the laptop models.",
      buttonLabel: "Contact Us",
    },
    {
      imageUrl: "./images/pic_4.png",
      name: "Storage\nUpgrade",
      description: "Out of storage or device running super slow? We got you covered with all kinds of HDD & SSD storage upgrades for your laptops & desktops.",
      buttonLabel: "Contact Us",
    },
    {
      imageUrl: "./images/pic_3.jpg",
      name: "Ram Upgrade\n& Replacement",
      description: "Tired of your device running slow? We provide ram upgrades for all kinds of desktops and laptops.",
      buttonLabel: "Contact Us",
    },
  ];

  const video = ['./videos/hero.mp4'];

  return (
    <LoadingProvider>

      <SplashScreen />

      <Navbar />

      <div id='home'>
        <HeroSection 
          video={video}
          subtitle1={"Your Trusted Computer Experts!"}
          title={'Fix It, Upgrade It,\nLove It'}
          subtitle2={"Discover the ultimate destination for all your laptop and desktop needs at TechSavior. We specialize in providing swift, expert repairs and offering a curated selection of high-performance devices. Our experienced technicians and friendly sales team are dedicated to delivering exceptional service and ensuring your technology works flawlessly. Experience peace of mind with TechSavior, where your satisfaction is our top priority. Transform the way you interact with technology – trust TechSavior to keep you connected and productive."}
          showButton={true}
          whatsapp={"+971 50 278 9227"}
          call={"+971 50 278 9227"}
          map={"Sharjah industrial area 6"}
          email={"technestshj@gmail.com"}
        />
      </div>
        
      <div id='offers' className='offers'>
        <h1>From Us To You</h1>
        <div className='separate'></div>
        <div className='image-carousel'>
          <ImageCarousel slides={slides} />
        </div>
        <div className='mobile-image-carousel'>
          <ImageCarousel slides={mobile_slides} />
        </div>
      </div>
      
      <div id='Why Us'>
        <h1>Why Us</h1>
        <div className='separate'></div>
        <>
          <WhyUs whyus={whyus} />
        </>
      </div>

      <div id='services'>
        <h1>Our Services</h1>
        <div className='separate'></div>
        <div className='service-carousel'>
          <ServiceCarousel services={services}/>
        </div>
      </div>
      
      <div id='contact'>
        <Location />
      </div>

      <div>
        <ScrollToTopButton />
        <WhatsAppChatButton phoneNumber="971502789227"/>
      </div>

      <footer>
        <Footer />
      </footer>
    
    </LoadingProvider>
  );
}

export default App;
