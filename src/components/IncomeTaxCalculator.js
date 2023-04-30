import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

function IncomeTaxCalculator() {
  const [incomeFromSalary, setIncomeFromSalary] = useState("");
  const [exemptAllowances, setExemptAllowances] = useState([]);
  const [interestIncome, setInterestIncome] = useState("");
  const [interestOnHomeLoanSelfOccupied, setInterestOnHomeLoanSelfOccupied] = useState("");
  const [rentalIncome, setRentalIncome] = useState("");
  const [interestOnHomeLoanLetOut, setInterestOnHomeLoanLetOut] = useState("");
  const [digitalAssetIncome, setDigitalAssetIncome] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [basicDeductions, setBasicDeductions] = useState("");
  const [interestFromDeposits, setInterestFromDeposits] = useState("");
  const [medicalInsurance, setMedicalInsurance] = useState("");
  const [donationsToCharity, setDonationsToCharity] = useState("");
  const [interestOnEducationLoan, setInterestOnEducationLoan] = useState("");
  const [interestOnHousingLoan, setInterestOnHousingLoan] = useState("");
  const [employeeNpsContribution, setEmployeeNpsContribution] = useState("");

  const dispatch = useDispatch();

  const calculateTaxOldRegime = (taxableIncome) => {
    let calculatedOldTax = 0;
    if (taxableIncome <= 250000) {
          calculatedOldTax = 0;
        } else if (taxableIncome <= 500000) {
          calculatedOldTax = (taxableIncome - 250000) * 0.05;
        } else if (taxableIncome <= 1000000) {
          calculatedOldTax = 12500 + (taxableIncome - 500000) * 0.2;
        } else {
          calculatedOldTax = 112500 + (taxableIncome - 1000000) * 0.3;
        }
        return calculatedOldTax;
  }

  const calculateTaxNewRegime = (taxableIncome) => {
    let calculatedNewTax = 0;

    if (taxableIncome <= 250000) {
      calculatedNewTax = 0;
    } else if (taxableIncome > 250000 && taxableIncome <= 500000) {
      calculatedNewTax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome > 500000 && taxableIncome <= 750000) {
      calculatedNewTax = 12500 + (taxableIncome - 500000) * 0.1;
    } else if (taxableIncome > 750000 && taxableIncome <= 1000000) {
      calculatedNewTax = 37500 + (taxableIncome - 750000) * 0.15;
    } else if (taxableIncome > 1000000 && taxableIncome <= 1250000) {
      calculatedNewTax = 75000 + (taxableIncome - 1000000) * 0.2;
    } else if (taxableIncome > 1250000 && taxableIncome <= 1500000) {
      calculatedNewTax = 125000 + (taxableIncome - 1250000) * 0.25;
    } else {
      calculatedNewTax = 187500 + (taxableIncome - 1500000) * 0.3;
    }

    // Below code is the one that calculates taxes based on the change in the budget..

    // if (taxableIncome <= 300000) {
    //   calculatedNewTax = 0;
    // } else if(taxableIncome <= 500000) {
    //   calculatedNewTax = (taxableIncome - 300000) * 0.05;
    // } else if (taxableIncome <= 600000) {
    //   calculatedNewTax = 10000 + (taxableIncome - 500000) * 0.05;
    // } else if (taxableIncome <= 750000) {
    //   calculatedNewTax = 15000 + (taxableIncome - 600000) * 0.1;
    // } else if (taxableIncome <= 900000) {
    //   calculatedNewTax = 30000 + (taxableIncome - 750000) * 0.1;
    // } else if (taxableIncome <= 1000000) {
    //   calculatedNewTax = 45000 + (taxableIncome - 900000) * 0.15;
    // } else if (taxableIncome <= 1200000) {
    //   calculatedNewTax = 75000 + (taxableIncome - 1000000) * 0.15;
    // } else if (taxableIncome <= 1250000) {
    //   calculatedNewTax = 85000 + (taxableIncome - 1200000) * 0.2;
    // } else if (taxableIncome <= 1500000) {
    //   calculatedNewTax = 135000 + (taxableIncome - 1250000) * 0.2;
    // } else {
    //   calculatedNewTax = 135000 + (taxableIncome - 150000) * 0.3;
    // }
        
        return calculatedNewTax;
  }

  const calculateTaxableIncome = () => {
    const taxableIncome =
      incomeFromSalary +
      interestIncome +
      rentalIncome +
      digitalAssetIncome -
      interestOnHousingLoan - 
      medicalInsurance - 
      basicDeductions -
      exemptAllowances - 50000;
      return taxableIncome;
  }
  const calculateTax = () => {
    console.log( "income from salary", incomeFromSalary
    )
    const taxableIncome = calculateTaxableIncome();
    let calculatedOldTax = calculateTaxOldRegime(taxableIncome);
    let calculatedNewTax = calculateTaxNewRegime(incomeFromSalary);
    dispatch({type: 'taxCalculated', 
    payload: {
        taxableIncome: taxableIncome,
        oldTax: calculatedOldTax,
        newTax: calculatedNewTax,
        tax: Math.min(calculatedOldTax, calculatedNewTax)
    }})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateTax();
  };

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column" }}
        style={{ marginTop: 2 }}
      >
        <Typography variant="h5">Income Tax Calculator</Typography>
        <div style={{ marginTop: 3 }}>
          <TextField
            label="Income From Salary"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={incomeFromSalary}
            onChange={(e) =>
              setIncomeFromSalary(parseFloat(e.target.value) || "")
            }
          />
          <TextField
            label="Exempt Allowances"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            value={exemptAllowances}
            onChange={(e) => setExemptAllowances(e.target.value || "")}
          />
          <TextField
            label="Interest income"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={interestIncome}
            onChange={(e) => setInterestIncome(e.target.value || "")}
          />
          <TextField
            label="Interest on Home Self Occupied"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
            value={interestOnHomeLoanSelfOccupied}
            onChange={(e) =>
              setInterestOnHomeLoanSelfOccupied(e.target.value || "")
            }
          />
          <TextField
            label="Rental Income"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={rentalIncome}
            onChange={(e) => setRentalIncome(parseFloat(e.target.value) || "")}
          />

          <TextField
            label="Interest on home loan let out"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={interestOnHomeLoanLetOut}
            onChange={(e) => setInterestOnHomeLoanLetOut(parseFloat(e.target.value) || "")}
          />
          <TextField
            label="Income from digital assets"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={digitalAssetIncome}
            onChange={(e) => setDigitalAssetIncome(parseFloat(e.target.value) || "")}
          />
          <TextField
            label="Income from other sources"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={otherIncome}
            onChange={(e) => setOtherIncome(parseFloat(e.target.value) || "")}
          />
          <p>Deductions:</p>
          <TextField
            label="Basic Deductions"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={basicDeductions}
            onChange={(e) => setBasicDeductions(parseFloat(e.target.value) || "")}
          />
          <TextField
            label="Interest from deposits"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={interestFromDeposits}
            onChange={(e) => setInterestFromDeposits(parseFloat(e.target.value) || "")}
          />
          <TextField
            label="Medical Insurance"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={medicalInsurance}
            onChange={(e) => setMedicalInsurance(parseFloat(e.target.value) || "")}
          />
          <TextField
            label="Donations to Charity"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={donationsToCharity}
            onChange={(e) => setDonationsToCharity(parseFloat(e.target.value) || "")}
          />
          <TextField
            label="Interest on education loan"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={interestOnEducationLoan}
            onChange={(e) => setInterestOnEducationLoan(parseFloat(e.target.value) || "")}
          />
          <TextField
            label="Interest on housing loan"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={interestOnHousingLoan}
            onChange={(e) => setInterestOnHousingLoan(parseFloat(e.target.value) || "")}
          />
          <TextField
            label="Employee NPS Contribution"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            value={employeeNpsContribution}
            onChange={(e) => setEmployeeNpsContribution(parseFloat(e.target.value) || "")}
          />
        </div>
        <Box>
          <Button
            variant="contained"
            size="small"
            maxWidth="20"
            onClick={handleSubmit}
          >
            Calculate Tax
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default IncomeTaxCalculator;
