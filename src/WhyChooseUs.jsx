import React, { useEffect, useRef } from 'react';
import './WhyChooseUs.css';
import { TeamOutlined, BulbOutlined, GoldOutlined, FlagOutlined } from '@ant-design/icons';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const contentBlocks = section.querySelectorAll('.why-choose-us__content');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is in view
    );

    contentBlocks.forEach(block => {
      observer.observe(block);
    });

    return () => {
      contentBlocks.forEach(block => observer.unobserve(block));
    };
  }, []);

  return (
    <section className="why-choose-us section bd-container" id="why-choose-us" ref={sectionRef}>
      <h1>WHY CHOOSE TILWAR COACHING CLASSES?</h1>

      <div className="why-choose-us__containers bd-grid">
        <div className="why-choose-us__content">
          <TeamOutlined className="why-choose-us__icon" />
          <h3 className="why-choose-us__name">Experienced Faculty</h3>
          <p className="why-choose-us__detail">
            Our team of educators consists of highly qualified professionals with years of teaching experience across various subjects for classes 6 to 12. They are dedicated to nurturing and guiding students to achieve their academic goals.
          </p>
        </div>

        <div className="why-choose-us__content">
          <BulbOutlined className="why-choose-us__icon" />
          <h3 className="why-choose-us__name">Comprehensive Curriculum</h3>
          <p className="why-choose-us__detail">
            We offer a well-structured curriculum that covers all essential subjects, ensuring students have a solid understanding of concepts. Our teaching methods are designed to make learning engaging and effective.
          </p>
        </div>

        <div className="why-choose-us__content">
          <GoldOutlined className="why-choose-us__icon" />
          <h3 className="why-choose-us__name">Proven Track Record</h3>
          <p className="why-choose-us__detail">
            Our students consistently achieve outstanding results in exams and competitive assessments. Many of our alumni have secured top ranks in their respective boards and entrance tests, showcasing our commitment to excellence.
          </p>
        </div>

        <div className="why-choose-us__content">
          <FlagOutlined className="why-choose-us__icon" />
          <h3 className="why-choose-us__name">Personalized Attention</h3>
          <p className="why-choose-us__detail">
            We believe in personalized learning. Our small class sizes allow for individual attention, ensuring that each student receives the support they need to excel academically and personally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
