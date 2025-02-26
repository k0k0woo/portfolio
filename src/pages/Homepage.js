import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to my app.</p>
      <p><Link to="/Stock">Go to Stock Page</Link></p>
    </div>
  );
};

export default HomePage;
