import './App.css';
import HRACalculator from './components/HRACalculator';
import Calculator from './components/IncomeTaxCalculator';
import TaxableIncomeCalculator from './components/TaxableIncome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         Welcome to income tax calculator
      </header>
      <div>
        <p>HRA Calculator</p>
        {/* <TaxableIncomeCalculator /> */}
        <HRACalculator />
      </div>
    </div>
  );
}

export default App;
