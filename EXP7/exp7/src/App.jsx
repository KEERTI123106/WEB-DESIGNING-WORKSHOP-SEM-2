import "./App.css";
import Props from "./components/Props";

function App() {
  return (
    <div className="main-box">
      <h1>Student Results</h1>
      <div className="container">
        <Props name="Keerti Sharma" course="Computer Science" marks="95" />
        <Props name="Deep Sharma" course="Computer Science" marks="92" />
        <Props name="Ditya Singh" course="Computer Science" marks="98" />
      </div>
    </div>
  );
}

export default App;