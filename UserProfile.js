import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';


const StudentProfile = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    bio: '',
    avatarUrl: '',
    studentId: '',
    degree: '',
    batch: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fetch student data from an API
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get('/students/1'); // Adjust the endpoint to match your backend
        const studentData = response.data;
        setStudent(studentData);
      } catch (error) {
        console.error('Error fetching student data:', error);
        // Fallback data in case of an error
        setStudent({
          name: 'Ramodya De Silva',
          email: 'cb6b11345@kiu.ac.lk',
          batch: '8',
          avatarUrl: '/userprofile.png',
          studentId: '11376',
          degree: 'Computer Science',
        });
      }
    };

    fetchStudentData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await axios.post('/students', student); // Correct endpoint for creating a student
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving student data:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Optionally, you could re-fetch the student data here to reset the form
  };

  return (
    <div className="container">
      <img src="/userprofile.png" alt="Avatar" className="avatar" />

      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            className="input"
            placeholder="Student Name"
          />
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className="input"
            placeholder="Email"
          />
          <input
            type="text"
            name="studentId"
            value={student.studentId}
            onChange={handleChange}
            className="input"
            placeholder="Student ID"
          />
          <input
            type="text"
            name="degree"
            value={student.degree}
            onChange={handleChange}
            className="input"
            placeholder="Degree"
          />
          <input
            name="batch"
            value={student.batch}
            onChange={handleChange}
            className="input"
            placeholder="Batch"
          />
          <div>
            <button onClick={handleSave} className="button">
              Save
            </button>
            <button onClick={handleCancel} className="button cancel">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2>Name: {student.name}</h2>
          <p>Email: {student.email}</p>
          <p>ID: {student.studentId}</p>
          <p>Degree: {student.degree}</p>
          <p>Batch: {student.batch}</p>
          <button onClick={handleEdit} className="button">
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default StudentProfile;