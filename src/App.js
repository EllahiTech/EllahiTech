import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Home} from './home';

import { WhatsAppChatButton } from './components/WhatsAppChatButton';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import {Footer} from './components/Footer';
import Navbar from './components/Navbar';

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
      
        <Route path='/' exact element={<Home />} />
  
      </Routes>

      <div>
        <ScrollToTopButton />
        <WhatsAppChatButton phoneNumber="971502789227"/>
      </div>

      <footer>
        <Footer />
      </footer>
    
    </Router>
  );
}

export default App;
