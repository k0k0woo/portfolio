import React, { useEffect, useRef, memo } from "react";

const Technical = () => {
  const container = useRef();
    const scriptRef = useRef(null); // Prevent duplicate scripts
  useEffect(() => {
    // Ensure script is only added once

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.innerHTML = JSON.stringify({
        isTransparent: false,
        largeChartUrl: "",
        displayMode: "regular",
        width: 550,
        height: 550,
        colorTheme: "dark",
        symbol: "NASDAQ:AAPL",
        locale: "en"
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

export default memo(Technical);
