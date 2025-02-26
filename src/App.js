import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage"; // Your main page
import ChartPage from "./pages/stocks/ChartPage"; // Your new Chart page
import ValueCalculator from "./pages/stocks/ValueCalculator"; // Your new Chart page
import NotFound from "./pages/NotFound"; // Optional: Handles unknown routes
import StockHomePage from './pages/stocks/stockHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stock/chart" element={<ChartPage />} />
        <Route path="/stock/value" element={<ValueCalculator />} />
        <Route path="/stock" element={<StockHomePage />} />
        <Route path="*" element={<NotFound />} /> {/* 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
