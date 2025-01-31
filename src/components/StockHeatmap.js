// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function StockHeatMap() {
  const container = useRef();
    const scriptRef = useRef(null); // Prevent duplicate scripts

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        exchanges: [], // ✅ Specify stock exchanges
        dataSource: "SPYX500", // ✅ S&P 500 data
        grouping: "sector",
        blockSize: "market_cap_basic",
        blockColor: "change",
        locale: "en",
        symbolUrl: "",
        colorTheme: "dark",
        hasTopBar: true,
        isDataSetEnabled: false,
        isZoomEnabled: true,
        hasSymbolTooltip: true,
        isMonoSize: false,
        width: "400",
        height: "500",
    });
      container.current.appendChild(script);
      scriptRef.current = script; // Store reference to prevent re-adding

      return () => {
        if (scriptRef.current) {
          scriptRef.current.remove(); // Remove script on unmount
          scriptRef.current = null;
        }
      };
    
    }, 
    []
);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(StockHeatMap);