import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd'; // Import Carousel from Ant Design
import './CoFounders.css';
import Founder1 from './assets/img/Navin.png'; 
import Founder2 from './assets/img/Devendra.png'; 
import Founder3 from './assets/img/Rahul.png';

const cofounders = [
  {
    name: "Devendra Padhen",
    title: "Founder & Chief Educator",
    description: "An expert in educational methodologies with a passion for mentoring students.",
    image: Founder2
  },
  {
    name: "Navin Gurbani",
    title: "Co-Founder & Senior Instructor",
    description: "Specializes in mathematics and science education, with years of experience in competitive coaching.",
    image: Founder1
  },
  {
    name: "Rahul Kasat",
    title: "Co-Founder & Curriculum Developer",
    description: "Responsible for developing our comprehensive curriculum that aligns with student needs and goals.",
    image: Founder3
  },
];

const CoFounders = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the viewport width is mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust width breakpoint if needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Update state on window resize

    return () => window.removeEventListener('resize', handleResize); // Clean up event listener
  }, []);

  return (
    <div className='about-section'>
      <div className="cofounders-wrapper">
        <h1>MEET OUR EXPERTS</h1>
        <h2>Meet With Professionals.</h2>
        <div className="fixed-width-text">
          <p>Our team of dedicated educators has years of experience in providing personalized coaching to students from classes 6 to 12. We combine effective teaching methods with a supportive environment to help each student achieve their academic goals.</p>
        </div>

        {isMobile ? (
          <Carousel autoplay>
            {cofounders.map((cofounder, index) => (
              <div className="cofounder-card" key={index}>
                <img src={cofounder.image} alt={cofounder.name} className="cofounder-image" />
                <div className="cofounder-details">
                  <h3 className="cofounder-name">{cofounder.name}</h3>
                  <h5 className="cofounder-role">{cofounder.title}</h5>
                  <p className="cofounder-bio">{cofounder.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="cofounders-grid">
            {cofounders.map((cofounder, index) => (
              <div className="cofounder-card" key={index}>
                <img src={cofounder.image} alt={cofounder.name} className="cofounder-image" />
                <div className="cofounder-details">
                  <h3 className="cofounder-name">{cofounder.name}</h3>
                  <h4 className="cofounder-role">{cofounder.title}</h4>
                  <p className="cofounder-bio">{cofounder.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoFounders;
