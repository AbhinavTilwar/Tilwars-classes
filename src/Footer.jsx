import React from 'react';
import { Layout } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, 
         YoutubeOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import './Footer.css';

const { Footer } = Layout;

const CustomFooter = () => (
  <Footer className="footer">
    <div className="footer-section">
      <div className="footer-item">
        <PhoneOutlined  className="contact-icon" style={{ fontSize: '24px', color: '#ffffff' }} />
        <strong><div>+91 8605408527 / 9307837735</div></strong>
        <div>Contact</div>
      </div>
      <div className="footer-item">
        <div className="contact-icon">
        <MailOutlined  style={{ fontSize: '24px', color: '#ffffff' }} />
        </div>
        <strong><div>codingbeyond@gmail.com</div></strong>
        <div>Mail</div>
      </div>
      <div className="footer-item">
        <EnvironmentOutlined  className="contact-icon" style={{ fontSize: '24px', color: '#ffffff' }} />
        <strong><div>89 Rajiv Nagar, Somalwada, Nagpur</div></strong>
        <div>Address</div>
      </div>
    </div>
    <div className="footer-bottom">
  <div>© 2024 Tilwar's Coaching Classes. All rights reserved.</div>
  <div className="social-icons">
  <a href="/terms" style={{ margin: '0 10px' }}>Terms</a>
  <a href="/privacy" style={{ margin: '0 10px' }}>Privacy</a>


    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <YoutubeOutlined  className="contact-icon-mini" style={{ fontSize: '18px' }} />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FacebookOutlined className="contact-icon-mini" style={{ fontSize: '18px' }} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <InstagramOutlined className="contact-icon-mini" style={{ fontSize: '18px' }} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <LinkedinOutlined className="contact-icon-mini" style={{ fontSize: '18px' }} />
    </a>
  </div>
</div>

  </Footer>
);

export default CustomFooter;
