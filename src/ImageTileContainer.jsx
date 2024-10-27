// import React from 'react';
// import { Carousel } from 'antd';
// import './ImageTileContainer.css';

// const ImageTileContainer = ({ tiles }) => {
//   // Check if it's a mobile screen
//   const isMobile = window.innerWidth <= 768;

//   return (
//     <div className="tiles-section">
//       {isMobile ? (
//         // For mobile, use a Carousel
//         <Carousel autoplay autoplaySpeed={2000}>
//           {tiles.map(tile => (
//             <div key={tile.id} className="fancy-tile-container">
//               <div className="fancy-image-overlay">
//                 <img src={tile.image} alt={tile.title} className="fancy-tile-image" />
//                 <div className="text-overlay">
//                   <h2>{tile.title}</h2>
//                   <p>{tile.description}</p>
//                   <a href={tile.link} className="tile-button">Know More</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       ) : (
//         // For desktop, use a responsive grid
//         <div className="tiles-grid">
//           {tiles.map(tile => (
//             <div key={tile.id} className="fancy-tile-container">
//               <div className="fancy-image-overlay">
//                 <img src={tile.image} alt={tile.title} className="fancy-tile-image" />
//                 <div className="text-overlay">
//                   <h2>{tile.title}</h2>
//                   <p>{tile.description}</p>
//                   <a href={tile.link} className="tile-button">Know More</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageTileContainer;
import React from 'react';
import './ImageTileContainer.css'; // Import CSS for styles
import ExamPrep from './assets/img/PIC5.svg';
import ConceptBuilding from './assets/img/PIC2.svg';
import SkillDevelopment from './assets/img/PIC3.svg';
import OnlineClasses from './assets/img/PIC1.svg';

const CoachingServices = () => {
  return (
    <div className='about-section'>
      <div className="containerr"s>
        <h1>WHAT WE HELP</h1>
        <h2>Our Educational Classes</h2>
        <p>At Tilwar's Coaching Classes, we believe in a customized approach to each student's success. Our services are designed to address individual learning needs, whether it's mastering exam techniques, strengthening core concepts, or developing crucial skills for lifelong success.</p>

        <div className="services">
          <div className="service">
            <img src={ExamPrep} alt="Exam Preparation"/>
            <h3>Exam Preparation</h3>
            <p>Prepare for your exams with confidence through rigorous practice and effective strategies that boost scores and reduce stress.</p>
          </div>
          <div className="service">
            <img src={ConceptBuilding} alt="Concept Building"/>
            <h3>Concept Building</h3>
            <p>Build a strong foundation in key subjects to ensure lasting understanding and a love for learning.</p>
          </div>
          <div className="service">
            <img src={SkillDevelopment} alt="Skill Development"/>
            <h3>Skill Development</h3>
            <p>Develop essential skills such as time management, critical thinking, and problem-solving for academic and personal success.</p>
          </div>
          <div className="service">
            <img src={OnlineClasses} alt="Online Classes"/>
            <h3>Online Classes</h3>
            <p>Enjoy the convenience of online learning with personalized guidance from expert instructors, accessible from anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachingServices;
