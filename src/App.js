import './App.css';
import TickerBar from "./components/TickerBar"; 
//import StockHeatmap from './components/StockHeatmap';
import StockInfo from './components/StockInfo';
import Financials from './components/Financials';
import Technicals from './components/Technicals';
import Chart from './components/Chart';
function App() {
  return (
    <div className='App'>
      {/* ticker bar */}
      <TickerBar />
      {/* heatmap */}
      {/*<StockHeatmap/>*/}

      {/*stock info */}
      <div className='flex-row'>
        <div className='flex-column'>
        <StockInfo/>
        <Financials/>
        </div>        
        
        <Chart/>
        
        <Technicals/>

      </div>


    </div>
  );
}

export default App;
