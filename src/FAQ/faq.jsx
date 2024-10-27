import React from 'react';
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './faq.css'; // Ensure your CSS includes styles for the updated look

const { Panel } = Collapse;

const FAQ = () => {
  const faqs = [
    {
      question: "Is online coaching available?",
      answer: "Yes, we offer online classes that are just as effective as in-person sessions. Our experienced teachers use interactive tools and techniques to ensure an engaging learning experience, wherever you are."
    },
    {
      question: "What subjects do you offer tutoring for?",
      answer: "We provide tutoring in a variety of subjects, including Mathematics, Science, English, and more. Additionally, we offer specialized courses for exam preparation and skill development."
    },
    {
      question: "How experienced are the teachers at Tilwar's Coaching Classes?",
      answer: "Our faculty consists of highly qualified and experienced educators who are experts in their respective fields. They are dedicated to helping each student achieve their academic goals with personalized guidance."
    },
    {
      question: "Do you provide study materials and practice tests?",
      answer: "Yes, we provide comprehensive study materials, practice tests, and mock exams to help students prepare effectively for their exams. Our resources are designed to reinforce learning and boost confidence."
    },
    {
      question: "How does the online class setup work?",
      answer: "Our online classes are conducted via secure, user-friendly platforms where students can attend live sessions, ask questions, and receive immediate feedback. Recordings are available for review if needed."
    },
    {
      question: "Is there personalized guidance available?",
      answer: "Absolutely. We believe every student is unique, and we offer personalized guidance and counseling to help each one reach their full potential."
    },
    {
      question: "What is the typical batch size for your classes?",
      answer: "We maintain small batch sizes to ensure that each student receives the attention they need and can comfortably interact with the instructor."
    },
    {
      question: "How do I enroll my child in Tilwar's Coaching Classes?",
      answer: "You can contact us directly through our website or visit our office to complete the registration process. We’re here to answer any questions and guide you through the enrollment."
    },
  ];

  return (
    <div className="faq-container">
      <h1>FAQs</h1>
      <h2 style={{ marginBottom: '5%' }}>Explore Common Questions.</h2>
      <Collapse 
        accordion 
        bordered={false} 
        expandIconPosition="right"
        expandIcon={({ isActive }) => (
          isActive ? <MinusOutlined className="faq-icon" /> : <PlusOutlined className="faq-icon" />
        )}
      >
        {faqs.map((faq, index) => (
          <Panel header={faq.question} key={index} className="faq-panel">
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;
