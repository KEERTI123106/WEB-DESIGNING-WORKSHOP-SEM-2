import "./App.css";
import Props from "./assets/components/Props";

function App() {
  return (
    <>
    <div className="main-box">
      <h1>Student Results</h1>
      <div className="container">
        <Props name="Keerti Sharma" course="Computer Science" marks="95" />
        <Props name="Deep Sharma" course="Computer Science" marks="97" />
        <Props name="Ditya Singh" course="Computer Science" marks="98" />
      </div>
      <div className="footer-info">
          <h3>KEERTI SHARMA</h3>
          <h4>Roll No.: 2503201000624</h4>
        </div>
    </div>
   </>
  );
}

export default App;