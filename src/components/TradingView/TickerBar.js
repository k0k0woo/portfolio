import React, { useEffect, useRef, memo } from "react";

const TickerBar = () => {
  const container = useRef();
    const scriptRef = useRef(null); // Prevent duplicate scripts
  useEffect(() => {
    // Ensure script is only added once

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { description: "FTSE 100 Index", proName: "SPREADEX:FTSE" },
        { description: "OIL", proName: "MARKETSCOM:OIL" },
        { description: "SILVER", proName: "TVC:SILVER" },
        { description: "GOLD", proName: "TVC:GOLD" },
        { description: "NASDAQ", proName: "IG:NASDAQ" },
        { description: "RUSSELL 2000", proName: "AMEX:IWM" },
        { description: "SOLANA", proName: "CRYPTOCAP:SOL" },
        { description: "CHINA 50 INDEX", proName: "FOREXCOM:CHINA50" },
        { description: "VIX", proName: "TVC:VIX" },
        { description: "USD/GBP", proName: "FX_IDC:USDGBP" },
        { description: "DOLLAR INDEX", proName: "MARKETSCOM:DOLLARINDEX" }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "compact",
      colorTheme: "dark",
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

export default memo(TickerBar);
