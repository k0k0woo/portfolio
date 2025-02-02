import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.REACT_APP_FINNHUBIO_API_KEY}`);
        const data = await response.json();
        //setStocks(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);
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
