import React from 'react'

function StudentCard(Props) {
  return (
    <div className="card">
  
    <h1>{props.name}</h1>
    <h2>{props.rollno}</h2>
    <h3>{props.course}</h3>
    </div>
  )
}
export default Props