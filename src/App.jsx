import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      minHeight:"100vh",
      backgroundColor:"aliceblue",
      width:"100%",
      padding: "20px",
      boxSizing: "border-box",
      
    }}>
      <h2 style={{
        textAlign:"center",
        color:"black",
        fontWeight:"bold",
        justifyContent: "center",
      }}>Student Profile Dashboard</h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",          /* Adds clean spacing between the two cards */
        flexWrap: "wrap"      /* Allows them to wrap on smaller screens responsibly */
      }}>
      <div style={{
       display:"flex",
       flexWrap:"wrap",
       justifyContent: "center",
       width:"220px",
       height:"100px",
       padding:"12px",
       border:"1px solid black",
       boxShadow:"0 5px 0 2px grey",
       borderRadius:"2px",
       backgroundColor:"white",
      }}>
      <img style={{width:"50px",
        height:"50px",
      }}src="https://images.pexels.com/photos/7151015/pexels-photo-7151015.jpeg"></img>
      <p><b>Name:</b>Rahul Sharma</p>
      <p><b>Course:</b>B.tech CSE</p>
      <p><b>Year:</b>3rd Year</p>
      <p><b>CGPA:</b>8.5</p>
      </div>
      <div style={{
        display:"flex",
       flexWrap:"wrap",
       justifyContent: "center",
       width:"220px",
       
       border:"1px solid black",
       boxShadow:"0 5px 0 2px grey",
       borderRadius:"2px",
       backgroundColor:"white",
       padding:"12px",
      }}>
      <img style={{width:"50px",
        height:"50px",
      }} src="https://images.pexels.com/photos/7151015/pexels-photo-7151015.jpeg"></img>
      <p><b>Name:</b>Priya Singh</p>
      <p><b>Course:</b>BCA</p>
      <p><b>Year:</b>2nd Year</p>
      <p><b>CGPA:</b>9.1</p>
      </div>
      </div>
    </div>
  )
}

export default App
