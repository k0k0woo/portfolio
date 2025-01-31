import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage"; // Your main page
import ChartPage from "./pages/ChartPage"; // Your new Chart page
import ValueCalculator from "./pages/ValueCalculator"; // Your new Chart page
import NotFound from "./pages/NotFound"; // Optional: Handles unknown routes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/value" element={<ValueCalculator />} />
        <Route path="*" element={<NotFound />} /> {/* 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
