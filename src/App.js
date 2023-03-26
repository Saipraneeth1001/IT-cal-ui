import "./App.css";
import HRACalculator from "./components/HRACalculator";
import Calculator from "./components/IncomeTaxCalculator";
import TaxableIncomeCalculator from "./components/TaxableIncome";
import GlobalValues from "./components/GlobalValues";

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to income tax calculator</header>
      <div>
        <button style={{ margin: "7px" }}>
          <a href="/taxslabs">Any info you might need can be found here.</a>
        </button>
        <p>HRA Calculator</p>
        <HRACalculator />
        <p>Taxable Income Calculator</p>
        <TaxableIncomeCalculator />
      </div>
      <div style={{ margin: "3px" }}>
        <GlobalValues />
      </div>
    </div>
  );
}

export default App;
