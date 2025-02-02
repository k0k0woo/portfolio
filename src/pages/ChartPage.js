import React from "react";
import { Link } from "react-router-dom";
import TickerBar from "../components/TradingView/TickerBar";
import Chart from "../components/TradingView/Chart";

const ChartPage = () => {
  return (
    <div className="page">
        <div  className="flex-column">
        <TickerBar/>
        <Chart/>
      <Link to="/">back home</Link>
      </div>
    </div>
  );
};

export default ChartPage;
