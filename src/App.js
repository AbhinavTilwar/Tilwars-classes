import React, { useState, useEffect } from 'react';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import { Tooltip, Popover, Button } from 'antd';
import { PhoneOutlined, MessageOutlined,WhatsAppOutlined , WechatOutlined } from '@ant-design/icons'; 
import MainGif from './assets/img/Main.gif';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import ContactUs from './Contact';
import Footer from './Footer'; 
import SplashScreen from './SplashScreen'; 
import './Footer.css'; 
import VastuForm from './Form';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import ImageTileContainer from './ImageTileContainer';
import CoFounders from './CoFounders';
import Service from './WhyChooseUs';
import VastuPage from './VastuPage';
import { Divider } from 'antd';
import ConsultationsList from './Register/ConsultationsList'
import heroImage from './assets/img/hero_logo.svg'
import Intro from './Intro/Intro'
import FAQ from './FAQ/faq';
import IntroGIF from './assets/img/FiveElement.gif';
import Dashboard from './StudentsList'
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const [currentWord, setCurrentWord] = useState('Health');
  const words = ['Time Management', 'Focus', 'Productivity', 'Exam Preparation'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000); // Change the word every 2 seconds

    return () => clearInterval(intervalId);
  }, [words]);

  const animationVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const contactContent = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Tooltip title="Chat with us">
      <Button 
        href="https://wa.me/918605408527"  // Add your phone number here in the format 91 + number
        target="_blank" 
        type="primary" 
        shape="circle" 
        icon={<WhatsAppOutlined />} 
        style={{ marginBottom: '10px', backgroundColor: '#25D366', borderColor: '#25D366' }} 
      />
    </Tooltip>
    <Tooltip title="Call us">
      <Button 
        href="tel:+918605408527"  // Add your phone number here in the format +91 + number
        type="primary" 
        shape="circle" 
        icon={<PhoneOutlined />} 
      />
    </Tooltip>
    </div>
  );



  return (
    <div>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Router>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route
              path="/"
              element={
                <main className="l-main">
<section className="home" id="home">
  <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="home__container bd-container bd-grid"
  >
    <div className="home__data">
      <img src={IntroGIF} alt="Tilwar's Coaching Classes" className="home__top" />

      <h3 className="home__title">
        Are You Struggling with{' '}
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#ffb401' }}
        >
          {currentWord}
        </motion.span>
        ?
      </h3>
      <h3 className="home__subtitle">
      Empowering Young Minds from <strong>1st to 12th </strong>– Building Bright Futures Together!"     </h3>
      <a href="/form" className="button-consult-mobile">
        <strong>Contact Us</strong>
      </a>
    </div>
    <img src={IntroGIF} alt="Tilwar's Coaching Classes" className="home__image" />
  </motion.div>
</section>


                  <Intro/>
                  <ImageTileContainer />

                  {/* <CoFounders /> */}
                 

                  <Service />

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <CustomerReviews />
                  </motion.div>
                  <FAQ/>
                </main>
              }
            />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/form" element={<VastuForm />} />
            <Route path="/AboutUs" element={<VastuPage />} />
            { <Route path="/dashboard" element={<Dashboard />} /> }

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />

          <Popover content={contactContent} title="" trigger="click">
            <Button 
              type="primary" 
              shape="circle" 
              icon={<WechatOutlined style={{ fontSize: '33px', color:'#ffffff' }} />}
              style={{ 
                position: 'fixed', 
                bottom: '20px', 
                right: '20px', 
                zIndex: 1000, 
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
                width: '55px',  
                height: '55px',
                backgroundColor:'#ffb401',
                lineHeight: '60px', 
                animation: 'blink 1.5s infinite',
                color:'#ffb401'
              }} 
            />
          </Popover>
          <style>
            {`
              @keyframes blink {
                0% { opacity: 1; }
                50% { opacity: 0.5; }
                100% { opacity: 1; }
              }
            `}
          </style>
        </Router>
      )}
    </div>
  );
};

export default App;
