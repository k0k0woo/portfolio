import React, { useEffect, useRef, memo } from "react";

const StockInfo = () => {
  const container = useRef();
    const scriptRef = useRef(null); // Prevent duplicate scripts
  useEffect(() => {
    // Ensure script is only added once

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.innerHTML = JSON.stringify({
        symbol: "NASDAQ:AAPL",
        width: 550,
        locale: "en",
        colorTheme: "dark",
        isTransparent: false,
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

export default memo(StockInfo);
