import React from "react";
import { Link } from "react-router-dom";

import StockInfo from "../components/StockInfo";
import Financials from "../components/Financials";
import Technicals from "../components/Technicals";
import TickerBar from "../components/TickerBar";

const ValueCalculator = () => {
  return (
    <div className="page">
        <TickerBar/>
        <div className="flex-row">      
            <Technicals/>    
        <div  className="flex-column">
 
        <StockInfo/>
        <Financials/>

      </div>
  <div className="flex-column">
      <Link to="/">back home</Link>         
      <select>
            <option value="AAPL">AAPL</option>
            <option value="GOOGL">GOOGL</option>
        </select>  
      </div>
    </div>
    </div>
  );
};

export default ValueCalculator;