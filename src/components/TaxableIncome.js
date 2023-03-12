import React, { useState } from "react";

function TaxableIncomeCalculator() {
  const [taxableSalary, setTaxableSalary] = useState(0);
  const [totalMonthlySalary, setTotalMonthlySalary] = useState(0);

  const calculateTax = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateTax();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h5>Let's find out your taxable income..</h5>
            <h5>Enter your monthly Salary below..</h5>
          </div>
          <label htmlFor="Total Monthly Salary">Total Monthly Salary</label>
          <input
            type="number"
            id="totalMonthlySalary"
            value={totalMonthlySalary}
            onChange={(e) => setTotalMonthlySalary(parseFloat(e.target.value))}
          />
          <div>
            <h5>To find your taxable income, we need all your deductions.</h5>
            <h5>Deductions are </h5>
          </div>
        </div>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default TaxableIncomeCalculator;
