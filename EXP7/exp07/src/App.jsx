import React from 'react'
import './App.css'
import StudentCard from './StudentCard'

function StudentCard({ name, course, marks }) {
  return (
    <div className="student-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '8px' }}>
      <h2>Name: {name}</h2>
      <p>Course: {course}</p>
      <p>Marks:{marks}%</p>
    </div>
  );
}



import Student from "./Student"
function App() {
  return (
  <div>
    <h1>STUDENT INFORMATION</h1>
    <div className="container">
      <StudentCard
      name = "Rahul Sharma"
      course = "Computer Science"
      marks = "85"/>
      <StudentCard
      name = "Anita Verma"
      course = "Information Technology"
      marks = "92"/>
      <StudentCard
      name = "Rohan Gupta"
      course = "Electronics"
      marks = "78"/>
    </div>
  </div> 

  );
}

export default App
