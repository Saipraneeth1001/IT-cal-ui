import "./App.css";
import HRACalculator from "./components/old/HRACalculator";
import Calculator from "./components/IncomeTaxCalculator";
import TaxableIncomeCalculator from "./components/old/TaxableIncome";
import GlobalValues from "./components/GlobalValues";
import Navbar from "./components/Navbar";
import ModalComponent from "./components/old/ModalComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ModalComponent open={true} handleClose={false} /> */}
      <header className="App-header">Welcome to income tax calculator</header>
      <div>
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
