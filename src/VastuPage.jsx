import React from 'react';
import './VastuPage.css'; // Ensure you create this CSS file for styling
import GIF from './assets/img/classPage.svg'
import Vastu from './assets/img/PIC1.svg'
import FAQ from './FAQ/faq'; // Adjust the import path accordingly

const VastuPage = () => {
  return (
    <div className="vastu-container">
      <header className="vastu-header">
      <img 
                  src={GIF} 
                  alt="Header Image" 
                  style={{
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    clipPath: 'inset(0 0 10% 0)'
                  }}
                />
        <h1>Tilwar's Coaching Classes</h1>
      </header>
      <section className="vastu-content">
        <p>
        At Tilwar Coaching Classes, we provide comprehensive coaching for students from 1st to 12th grade. Our experienced educators are dedicated to nurturing young minds and guiding them towards academic excellence.
        </p>
        <p>
        We focus on individualized learning, ensuring that each student receives personalized attention and resources tailored to their unique needs. Our curriculum is designed to build a strong foundation in core subjects while encouraging critical thinking and problem-solving skills.
        </p>
      </section>
      <footer className="vastu-footer">
        <img
          src={Vastu} // Replace with the actual path to your image
          alt="Vastu Fact"
          className="vastu-image"
         
        />
        <footer>
        <p className="vastu-fact">
        Did you know? Students who engage in regular tutoring sessions typically see a significant improvement in their grades and confidence.
        </p>
        <p></p>
        </footer>
      </footer>
      <FAQ/>
    </div>
  );
};

export default VastuPage;
