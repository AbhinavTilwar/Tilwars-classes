// import React, { useState, useEffect } from 'react';
// import { Modal, Form, Input, Rate, Button, Upload, Radio } from 'antd';
// import { UploadOutlined, HeartTwoTone } from '@ant-design/icons';
// import './CustomerReviews.css';
// import { PlusCircleOutlined, MessageOutlined } from '@ant-design/icons';

// const { TextArea } = Input;

// const defaultAvatarMale = 'https://cdn-icons-png.flaticon.com/512/4140/4140074.png';
// const defaultAvatarFemale = "https://cdn-icons-png.flaticon.com/512/6833/6833605.png";

// const initialReviews = [
//   {
//     name: 'Rakesh Sharma',
//     review: 'The Vastu consultation has been life-changing! I felt a positive energy shift in my home.',
//     rating: 5,
//     date: 'July 22, 2023',
//     avatar: defaultAvatarMale,
//     likes: 45,
//   },
//   {
//     name: 'Jane Smith',
//     review: 'Highly recommended! The Vastu tips were extremely useful.',
//     rating: 4,
//     date: 'August 15, 2023',
//     avatar: defaultAvatarFemale,
//     likes: 16,
//   },
//   {
//     name: 'Raj Kumar',
//     review: 'Very insightful advice on improving energy flow at home. It made a real difference.',
//     rating: 5,
//     date: 'September 5, 2023',
//     avatar: defaultAvatarMale,
//     likes: 23,
//   },
//   {
//     name: 'Omkar Shinde',
//     review: 'Very insightful advice on improving energy flow at home. It made a real difference.',
//     rating: 5,
//     date: 'September 5, 2023',
//     avatar: defaultAvatarMale,
//     likes: 0,
//   },
//   {
//     name: 'Yash Patil',
//     review: 'Very insightful advice on improving energy flow at home. It made a real difference.',
//     rating: 5,
//     date: 'September 5, 2023',
//     avatar: defaultAvatarMale,
//     likes: 2,
//   },
// ];

// const CustomerReviews = () => {
//   const [reviews, setReviews] = useState(initialReviews);
//   const [visibleReviews, setVisibleReviews] = useState(10);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [form] = Form.useForm();
//   const [showAll, setShowAll] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [floatingHearts, setFloatingHearts] = useState({});

//   const addReview = (values) => {
//     // Determine the default avatar based on gender selection
//     const newAvatar = values.gender === 'male' ? defaultAvatarMale : defaultAvatarFemale;

//     const newReview = {
//       name: values.name,
//       review: values.review,
//       rating: values.rating,
//       date: new Date().toLocaleDateString(),
//       avatar: values.avatar ? values.avatar.file.thumbUrl : newAvatar, // Use the uploaded image if present
//       likes: 0,
//     };

//     setReviews([newReview, ...reviews]);
//     form.resetFields();
//     setIsModalVisible(false);
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const toggleReviews = () => {
//     if (showAll) {
//       setVisibleReviews(10); // Reset to 10 reviews
//     }
//     setShowAll(!showAll);
//   };

//   const loadMoreReviews = () => {
//     setVisibleReviews((prev) => prev + 5);
//   };

//   const handleLike = (index) => {
//     const updatedReviews = [...reviews];
//     updatedReviews[index].likes += 1;
//     setReviews(updatedReviews);

//     // Trigger the floating heart animation
//     setFloatingHearts((prev) => ({
//       ...prev,
//       [index]: true,
//     }));

//     // Remove the floating heart after 1 second
//     setTimeout(() => {
//       setFloatingHearts((prev) => ({
//         ...prev,
//         [index]: false,
//       }));
//     }, 1000);
//   };

//   // Automatically transition reviews every 2 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % Math.min(reviews.length, 3));
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, [reviews.length]);

//   // Function to format date as "X months ago"
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const monthsDiff = now.getMonth() - date.getMonth() + (12 * (now.getFullYear() - date.getFullYear()));
    
//     return monthsDiff === 1 ? "1 month ago" : `${monthsDiff} months ago`;
//   };

//   return (
//     <div className='about-section'>
//       <div className="reviews-container">
//         <h1>TESTIMONIALS</h1>
//         <h2>Our Clients Feedback.</h2>

//         {/* Display 2-3 reviews in colorful tiles */}
//         <div className="active-reviews-container">
//           {reviews.slice(0, 3).map((review, index) => (
//             <div key={index} className="active-review-card">
//               <div className="active-review-header">
//                 <img src={review.avatar} alt={review.name} className="review-avatar" />
//                 <div>
//                   <h3>{review.name}</h3>
//                   <span className="review-date">{formatDate(review.date)}</span>

//                   <div className="review-header-info">
//                     <Rate disabled value={review.rating} />
//                   </div>

//                 </div>
//               </div>
//               <p className="review-text">"{review.review}"</p>

//               {/* Heart like button with flying heart animation */}
//               <div className="like-container">
//                 <HeartTwoTone
//                   twoToneColor="#eb2f96"
//                   className="heart-icon"
//                   onClick={() => handleLike(index)}
//                 />
//                 <span className="like-count">{review.likes}</span>

//                 {/* Floating heart animation */}
//                 {floatingHearts[index] && <span className="floating-heart">❤️</span>}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Add and Show/Hide buttons in the same row */}
//         <div className="button-row">
//           {!showAll && (
//             <Button
//               className="transparent-button fancy-button" // Use the new transparent button class
//               onClick={toggleReviews}
//               icon={<MessageOutlined />}
//             >
//               Show More
//             </Button>
//           )}
//           <Button
//             type="primary"
//             onClick={showModal}
//             className="fancy-button"
//             icon={<PlusCircleOutlined />}
//           >
//             Write a Review
//           </Button>
//         </div>

//         {/* Display reviews when 'See All Comments' is clicked */}
//         {showAll && (
//           <>
//             <div className="all-reviews-container">
//               {reviews.slice(0, visibleReviews).map((review, index) => (
//                 <div key={index} className="review-card">
//                   <div className="review-header">
//                     <img src={review.avatar} alt={review.name} className="review-avatar" />
//                     <div>
//                       <h3>{review.name}</h3>
//                       <div className="review-header-info">
//                         <Rate disabled value={review.rating} />
//                         <span className="review-date">{formatDate(review.date)}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <p className="review-text">"{review.review}"</p>
//                   <div className="like-container">
//                     <HeartTwoTone
//                       twoToneColor="#eb2f96"
//                       className="heart-icon"
//                       onClick={() => handleLike(index)}
//                     />
//                     <span className="like-count">{review.likes}</span>

//                     {/* Floating heart animation */}
//                     {floatingHearts[index] && <span className="floating-heart">❤️</span>}
//                   </div>
//                 </div>
//               ))}
//               {visibleReviews < reviews.length && (
//                 <Button className="load-more-button fancy-button" onClick={loadMoreReviews}>
//                   Load More Reviews
//                 </Button>
//               )}
//             </div>

//             {/* Hide reviews button below all reviews */}
//             <div className="button-container">
//               <Button className="fancy-hide-button" onClick={toggleReviews}>
//                 Hide Reviews
//               </Button>
//             </div>
//           </>
//         )}

//         {/* Modal form to add review */}
//         <Modal
//           title="Add a Review"
//           visible={isModalVisible}
//           onCancel={handleCancel}
//           footer={null}
//         >
//           <Form form={form} onFinish={addReview} layout="vertical">
//             <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
//               <Input placeholder="Enter your name" />
//             </Form.Item>

//             <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please select your gender' }]}>
//               <Radio.Group>
//               <Radio value="male">Male</Radio>
// <Radio value="female">Female</Radio>
// </Radio.Group>
// </Form.Item>

// <Form.Item
//   name="review"
//   label="Review"
//   rules={[{ required: true, message: 'Please enter your review' }]}
// >
//   <TextArea rows={4} placeholder="Write your review here" />
// </Form.Item>

// <Form.Item
//   name="rating"
//   label="Rating"
//   rules={[{ required: true, message: 'Please give a rating' }]}
// >
//   <Rate />
// </Form.Item>

// <Form.Item
//   name="avatar"
//   label="Upload Profile Image"
// >
//   <Upload
//     listType="picture"
//     maxCount={1}
//     beforeUpload={() => false}
//   >
//     <Button icon={<UploadOutlined />}>Upload (Optional)</Button>
//   </Upload>
// </Form.Item>

// <Form.Item>
//   <Button type="primary" htmlType="submit">
//     Submit Review
//   </Button>
// </Form.Item>

//           </Form>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;

import React, { useState, useEffect } from 'react';
import './CustomerReviews.css';
import { Divider } from 'antd';
import Quotes from '../assets/img/quotes.png';

const defaultAvatarMale = 'https://cdn-icons-png.flaticon.com/512/4140/4140074.png';
const defaultAvatarFemale = 'https://cdn-icons-png.flaticon.com/512/6833/6833605.png';

const testimonials = [
  {
    name: "Ankit Sharma",
    title: "Class 10 Student",
    feedback: "Tilwar Coaching has really helped me strengthen my basics in math and science. I feel much more confident about my exams now!",
    image: defaultAvatarMale
  },
  {
    name: "Riya Singh",
    title: "Class 12 Student",
    feedback: "The faculty here has made Physics so much easier to understand. I never thought I would enjoy the subject so much!",
    image: defaultAvatarFemale
  },
  {
    name: "Parent of Ayush Kumar",
    title: "Class 8 Parent",
    feedback: "I am very happy with the progress my son has made since joining Tilwar Coaching. His grades have improved significantly.",
    image: defaultAvatarMale
  },
  {
    name: "Sakshi Patel",
    title: "Class 9 Student",
    feedback: "The teachers explain concepts really well, and the study materials are excellent. I especially enjoy the weekly tests and practice sessions.",
    image: defaultAvatarFemale
  },
  {
    name: "Priya Malhotra",
    title: "Class 11 Student",
    feedback: "Thanks to Tilwar Coaching, I am doing much better in chemistry. The personalized guidance has been really helpful!",
    image: defaultAvatarFemale
  },
  {
    name: "Parent of Arjun Mehta",
    title: "Class 6 Parent",
    feedback: "My son’s interest in studies has increased since he joined. The teachers are caring and supportive.",
    image: defaultAvatarMale
  },
  {
    name: "Rahul Desai",
    title: "Class 7 Student",
    feedback: "I like how the teachers explain even the tough topics clearly. I feel more prepared for my exams.",
    image: defaultAvatarMale
  },
  {
    name: "Sneha Kapoor",
    title: "Class 12 Student",
    feedback: "The coaching for competitive exams alongside school syllabus has been fantastic. I feel ready for the boards and entrance tests!",
    image: defaultAvatarFemale
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  // Automatic Slide
  useEffect(() => {
    const autoSlide = setInterval(handleNext, 3000); // Change every 3 seconds
    return () => clearInterval(autoSlide); // Clear on unmount
  }, [currentIndex, itemsToShow]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + itemsToShow) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsToShow : prevIndex - itemsToShow
    );
  };

  return (
    <div className="testimonial-container">
      <h1>TESTIMONIALS</h1>
      <h2>Our Students & Parents Speak</h2>

      {/* Display multiple testimonials */}
      <div className="testimonial-cards-wrapper">
        {testimonials.slice(currentIndex, currentIndex + itemsToShow).map((testimonial, index) => (
          <div
            className={`testimonial-card ${itemsToShow === 3 && index === 1 ? 'center-card' : ''}`}
            key={index}
          >
            <img src={Quotes} alt="quote-icon" className="quote-icon" />

            <div className="testimonial-content">
              <div>{testimonial.feedback}</div>
            </div>
            <Divider style={{ borderWidth: '2px' }} />
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} className="author-image" />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Pagination with Prev, Dots, and Next */}
      <div className="pagination-container">
        <button className="nav-button" onClick={handlePrev}>❮</button>
        <div className="custom-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
        <button className="nav-button" onClick={handleNext}>❯</button>
      </div>
    </div>
  );
};

export default Testimonial;
