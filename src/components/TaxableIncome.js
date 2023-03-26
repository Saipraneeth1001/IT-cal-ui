import React, { useState } from "react";
import { useDispatch } from "react-redux";

function TaxableIncomeCalculator() {
  const [taxableSalary, setTaxableSalary] = useState(0);
  const [annualGrossCompensation, setAnnualGrossCompensation] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [deductions, setDeductions] = useState(0);

  const dispatch = useDispatch();

  const calculateTaxableIncome = () => {
    const totalIncome = annualGrossCompensation + bonus;
    setTaxableSalary(totalIncome - deductions);

    dispatch({ type: "taxableIncome", payload: totalIncome - deductions });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateTaxableIncome();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h5>Let's find out your taxable income..</h5>
            <h5>Enter your monthly Salary below..</h5>
          </div>
          <label htmlFor="Annual Gross Compensation">
            Annual Gross Compensation:
          </label>
          <input
            type="number"
            id="agc"
            value={annualGrossCompensation}
            onChange={(e) =>
              setAnnualGrossCompensation(parseFloat(e.target.value))
            }
          />
          <p>Add all your Incentives and bonuses after your gross salary</p>
          <label htmlFor="Bonus">Bonus and Incentives: </label>
          <input
            type="number"
            id="bai"
            value={bonus}
            onChange={(e) => setBonus(parseFloat(e.target.value))}
          />
          <div>
            <h5>To find your taxable income, we need all your deductions.</h5>
            <h5>
              Find out more about deductions click &nbsp;
              <a
                target="_"
                href="https://www.bankbazaar.com/tax/tax-deduction-and-types.html"
              >
                here
              </a>
            </h5>
          </div>
          <div>
            <p>Find all your deductions, add them and type it here.</p>
            <label htmlFor="Total Deductions">Deductions: </label>
            <input
              type="number"
              id="deductions"
              value={deductions}
              onChange={(e) => setDeductions(parseFloat(e.target.value))}
            />
          </div>
          <br />
        </div>
        <button type="submit">Calculate Taxable Income</button>
      </form>
    </div>
  );
}

export default TaxableIncomeCalculator;
