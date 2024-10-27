import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Modal } from 'antd';
import { motion } from 'framer-motion';
import { db } from './firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore'; // Firestore methods
import './Form.css'; // Add external CSS for input styling
import img1 from './assets/img/ele1.svg';
import img2 from './assets/img/ele2.svg';
import img3 from './assets/img/icon.png';
import { SendOutlined } from '@ant-design/icons';
import ImageTileContainer from './ImageTileContainer-form';

const { Option } = Select;

const CoachingForm = () => {
  const [form] = Form.useForm();
  const [isMobile, setIsMobile] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputFocus, setInputFocus] = useState({
    name: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check once on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tiles = [
    // Your tile data here
  ];

  const handleSubmit = async (values) => {
    try {
      // Save form data to Firestore
      const docRef = await addDoc(collection(db, 'students'), {
        name: values.name,
        phone: values.phone,
        email: values.email,
        grade: values.grade,
        subject: values.subject,
        createdAt: new Date(),
      });
  
      console.log('Document written with ID: ', docRef.id);
      setIsModalVisible(true);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <section>

      <div style={{ marginTop: '60px' }}></div>

      <div className="image-container">
        <motion.img
          src={img1}
          alt="Image 1"
          className="animated-image left-image"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={img3}
          alt="Image 3"
          className="animated-image center-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.img
          src={img2}
          alt="Image 2"
          className="animated-image left-image"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Enroll at Tilwar Coaching Classes
        </h2>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{ grade: '1' }}
          >
            {/* Full Name Input */}
            <Form.Item label="Full Name" name="name" rules={[{ required: true, message: 'Please enter your full name' }]}>
              <Input placeholder="Enter your full name" />
            </Form.Item>

            {/* Phone Number Input */}
            <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
              <Input placeholder="Enter your phone number" />
            </Form.Item>

            {/* Email Input */}
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email address' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            {/* Class Selection */}
            <Form.Item label="Grade" name="grade" rules={[{ required: true, message: 'Please select your grade' }]}>
              <Select placeholder="Select your grade">
                {Array.from({ length: 12 }, (_, i) => (
                  <Option key={i + 1} value={(i + 1).toString()}>{`Class ${i + 1}`}</Option>
                ))}
              </Select>
            </Form.Item>

            {/* Subject Selection */}
            <Form.Item label="Subject" name="subject" rules={[{ required: true, message: 'Please select a subject' }]}>
              <Select placeholder="Select a subject">
                <Option value="mathematics">Mathematics</Option>
                <Option value="science">Science</Option>
                <Option value="english">English</Option>
                <Option value="social-studies">Social Studies</Option>
                <Option value="All Subjects">Languages</Option>
                <Option value="others">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block icon={<SendOutlined />}
                style={{
                  backgroundColor: '#4a80f5',
                  borderColor: '#ffffff',
                  borderRadius: '5px',
                  transition: '0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FFC107';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#d12336';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </motion.div>

        {/* Modal for submission success */}
        <Modal
          title="Submission Successful"
          visible={isModalVisible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
        >
          <p>Thank you for enrolling! We will contact you shortly with further details.</p>
        </Modal>
      </div>

      <section>
        <ImageTileContainer tiles={tiles} isMobile={isMobile} />
      </section>
    </section>
  );
};

export default CoachingForm;
