import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";

export default function TaxableIncomeForm() {
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
    <>
    <Box sx={{ display: "flex", flexDirection: "column" }} style={{marginTop: 2}}>
      <Typography variant="h5">Taxable Income Calculator</Typography>
      <Typography variant="span" style={{marginTop: 2}}>
        These details can be found in payslip/offer letter
      </Typography>
      <div style={{ marginTop: 6}}>
        <TextField
          label="Annual Gross Compensation"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          value={annualGrossCompensation}
          onChange={(e) => setAnnualGrossCompensation(parseFloat(e.target.value) || "")}
        />
        <TextField
          label="Bonus and Incentives"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: <InputAdornment position="end"></InputAdornment>,
          }}
          value={bonus}
          onChange={(e) => setBonus((e.target.value) || "")}
        />
        <TextField
          label="Total Deductions"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          value={deductions}
          onChange={(e) => setDeductions((e.target.value)|| "")}
        />
      </div>
      <Box>
        <Button variant="contained" size="small" maxWidth="20" onClick={handleSubmit}>Calculate Taxable Income</Button>
      </Box>
    </Box>
    </>
  );
}
