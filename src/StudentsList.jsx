import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { db } from './firebase'; // Import Firestore configuration
import { collection, getDocs } from 'firebase/firestore'; // Firestore methods

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch students from Firebase on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const studentsCollection = collection(db, 'students');
        const studentSnapshot = await getDocs(studentsCollection);
        const studentList = studentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setStudents(studentList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Define table columns
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Enrollment List</h2>
      <Table
        dataSource={students}
        columns={columns}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default StudentList;
