import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to the stock tracking app.</p>
      <p><Link to="/chart">Go to Chart Page</Link></p>
      <p><Link to="/Value">Go to Value Page</Link></p>
    </div>
  );
};

export default HomePage;
