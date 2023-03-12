import React, { useState } from 'react';

function IncomeTaxCalculator() {
  const [financialYear, setFinancialYear] = useState('');
  const [age, setAge] = useState('');
  const [taxableSalary, setTaxableSalary] = useState(0);
  const [interestIncome, setInterestIncome] = useState(0);
  const [rentalIncome, setRentalIncome] = useState(0);
  const [homeLoanInterest, setHomeLoanInterest] = useState(0);
  const [digitalAssetsIncome, setDigitalAssetsIncome] = useState(0);
  const [taxSavingInvestments, setTaxSavingInvestments] = useState(0);
  const [tax, setTax] = useState(0);
  const [oldTax, setOldTax] = useState(0);
  const [newTax, setNewTax] = useState(0);
  const [selfOccupiedInterest, setSelfOccupiedInterest] = useState(0);

  const calculateTax = () => {
    let calculatedTax = 0;
    let calculatedOldTax = 0;
    let calculatedNewTax = 0;

    // Calculate tax based on taxable salary
    const taxableIncome = taxableSalary + interestIncome + rentalIncome + digitalAssetsIncome - homeLoanInterest;
    if (taxableIncome <= 250000) {
      calculatedTax = 0;
    } else if (taxableIncome <= 500000) {
      calculatedTax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 750000) {
      calculatedTax = 12500 + (taxableIncome - 500000) * 0.1;
    } else if (taxableIncome <= 1000000) {
      calculatedTax = 37500 + (taxableIncome - 750000) * 0.15;
    } else if (taxableIncome <= 1250000) {
      calculatedTax = 75000 + (taxableIncome - 1000000) * 0.2;
    } else if (taxableIncome <= 1500000) {
      calculatedTax = 125000 + (taxableIncome - 1250000) * 0.25;
    } else {
      calculatedTax = 187500 + (taxableIncome - 1500000) * 0.3;
    }

    // Calculate tax under old tax slabs
    const oldTaxableIncome = taxableSalary + interestIncome + rentalIncome - taxSavingInvestments;
    if (oldTaxableIncome <= 250000) {
      calculatedOldTax = 0;
    } else if (oldTaxableIncome <= 500000) {
      calculatedOldTax = (oldTaxableIncome - 250000) * 0.05;
    } else if (oldTaxableIncome <= 1000000) {
      calculatedOldTax = 12500 + (oldTaxableIncome - 500000) * 0.2;
    } else {
      calculatedOldTax = 112500 + (oldTaxableIncome - 1000000) * 0.3;
    }

    // Calculate tax under new tax slabs
    const newTaxableIncome = taxableSalary + interestIncome + rentalIncome - taxSavingInvestments;
    if (newTaxableIncome <= 250000) {
      calculatedNewTax = 0;
    } else if (newTaxableIncome <= 500000) {
      calculatedNewTax = (newTaxableIncome - 250000) * 0.05;
    } else if (newTaxableIncome <= 750000) {
        calculatedNewTax = 12500 + (newTaxableIncome - 500000) * 0.1;
      } else if (newTaxableIncome <= 1000000) {
        calculatedNewTax = 37500 + (newTaxableIncome - 750000) * 0.15;
      } else if (newTaxableIncome <= 1250000) {
        calculatedNewTax = 75000 + (newTaxableIncome - 1000000) * 0.2;
      } else if (newTaxableIncome <= 1500000) {
        calculatedNewTax = 125000 + (newTaxableIncome - 1250000) * 0.25;
      } else {
        calculatedNewTax = 187500 + (newTaxableIncome - 1500000) * 0.3;
      }
      
      setTax(calculatedTax);
      setOldTax(calculatedOldTax);
      setNewTax(calculatedNewTax);

    };

    const handleSubmit = (event) => {
    event.preventDefault();
    calculateTax();
    };
    
    return (
    <div>
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="financialYear">Financial Year:</label>
    <select id="financialYear" value={financialYear} onChange={(e) => setFinancialYear(e.target.value)}>
    <option value="">Select a financial year</option>
    <option value="2021-2022">2021-2022</option>
    <option value="2020-2021">2020-2021</option>
    <option value="2019-2020">2019-2020</option>
    </select>
    </div>
    <div>
    <label htmlFor="age">Age:</label>
    <select id="age" value={age} onChange={(e) => setAge(e.target.value)}>
    <option value="">Select an age group</option>
    <option value="below60">Below 60 years</option>
    <option value="60to80">60-80 years</option>
    <option value="above80">Above 80 years</option>
    </select>
    </div>
    <div>
    <label htmlFor="taxableSalary">Taxable Salary:</label>
    <input
    type="number"
    id="taxableSalary"
    value={taxableSalary}
    onChange={(e) => setTaxableSalary(parseFloat(e.target.value))}
    />
    </div>
    <div>
    <label htmlFor="interestIncome">Interest Income:</label>
    <input
    type="number"
    id="interestIncome"
    value={interestIncome}
    onChange={(e) => setInterestIncome(parseFloat(e.target.value))}
    />
    </div>
    <div>
    <label htmlFor="rentalIncome">Rental Income:</label>
    <input
    type="number"
    id="rentalIncome"
    value={rentalIncome}
    onChange={(e) => setRentalIncome(parseFloat(e.target.value))}
    />
    </div>
    <div>
    <label htmlFor="homeLoanInterest">Interest Paid on Home Loan for Rented:</label>
    <input
    type="number"
    id="homeLoanInterest"
    value={homeLoanInterest}
    onChange={(e) => setHomeLoanInterest(parseFloat(e.target.value))}
    />
    </div>
    <div>
    <label htmlFor="digitalAssetsIncome">Income from Digital Assets:</label>
    <input
    type="number"
    id="digitalAssetsIncome"
    value={digitalAssetsIncome}
    onChange={(e) => setDigitalAssetsIncome(parseFloat(e.target.value))}
    />
    </div>
    <div>
    <label htmlFor="selfOccupiedInterest">Interest Paid on Home Loan for Self-Occupied Property:</label>
    <input
    type="number"
    id="selfOccupiedInterest"
    value={selfOccupiedInterest}
    onChange={(e) => setSelfOccupiedInterest(parseFloat(e.target.value))}
    />
    </div>
    {age === "below60" && (
    <div>
    <label htmlFor="taxSavingInvestments">Tax Saving Investments:</label>
    <input
    type="number"
    id="taxSavingInvestments"
    value={taxSavingInvestments}
    onChange={(e) => setTaxSavingInvestments(parseFloat(e.target.value))}
    />
    </div>
    )}
    <button type="submit">Calculate</button>
    </form>
    {tax > 0 && (
    <div>
    <h2>Tax Calculation Results</h2>
    <p>
    Old Tax Slabs: Your tax liability is <strong>Rs. {oldTax}</strong> for the financial year <strong>{financialYear}</strong>{" "}
    under the old tax slabs.
    </p>
    <p>
    New Tax Slabs: Your tax liability is <strong>Rs. {newTax}</strong> for the financial year <strong>{financialYear}</strong>{" "}
    under the new tax slabs.
    </p>
    </div>
    )}
    </div>
    );
    }
    
    export default IncomeTaxCalculator;
    
    
