import "./App.css";
import Props from "./assets/components/Props";
import UseState from "./assets/components/UseState";


function App() {
  const name='React JS Library'

  return (
    <>
      <h1>Hello {name}</h1>
      
      {/* <Props name="Abhay" rollno="25B012232432" course="B.Tech"/> */}
      <UseState/>
      <div className="footer-info">
          <h3>KEERTI SHARMA</h3>
          <h4>Roll No.: 2503201000624</h4>
        </div>
    </>

    
  )
}

export default App
     