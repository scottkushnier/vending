import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vending from "./Vending.jsx";
import Chips from "./Chips";
import Coke from "./Coke";
import Candy from "./Candy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Vending />} />
        <Route path="/candy" element={<Candy />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/coke" element={<Coke />} />
      </Routes>
    </Router>
  );
}

export default App;
