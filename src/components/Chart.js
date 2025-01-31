import React, { useEffect, useRef, memo } from "react";

const Chart = () => {
  const container = useRef();
    const scriptRef = useRef(null); // Prevent duplicate scripts
  useEffect(() => {
    // Ensure script is only added once

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.innerHTML = JSON.stringify({
        width:"1500",
        height: "750",
        autosize: true,
        symbol: "NASDAQ:AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        "details": true,
        allow_symbol_change: true,
        calendar: false,
        "studies": [
            "STD;Supertrend"
          ],
        support_host: "https://www.tradingview.com"
    });

    container.current.appendChild(script);
    scriptRef.current = script; // Store reference to prevent re-adding

    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove(); // Remove script on unmount
        scriptRef.current = null;
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default memo(Chart);
