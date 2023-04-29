import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import Navbar from "../Navbar";

function PayslipTable() {
  return (
    <>
    <Navbar />
    <Typography component="h6" style={{marginTop: 10}}>Example - 1 - Simple Taxable Income Calculation</Typography>
    <Typography component="h6">Package - 15 LPA</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Monthly</TableCell>
              <TableCell>Yearly</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Basic</TableCell>
              <TableCell>43325</TableCell>
              <TableCell>519900</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>House Rent Allowance</TableCell>
              <TableCell>25995</TableCell>
              <TableCell>311940</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Conveyance Allowance</TableCell>
              <TableCell>800</TableCell>
              <TableCell>9600</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Medical Allowance</TableCell>
              <TableCell>1250</TableCell>
              <TableCell>15000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>PF</TableCell>
              <TableCell>5199</TableCell>
              <TableCell>62338</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>Advance Statutory Bonus</TableCell>
              <TableCell>2000</TableCell>
              <TableCell>24000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7</TableCell>
              <TableCell>Special Allowance</TableCell>
              <TableCell>45181</TableCell>
              <TableCell>542172</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Annual Gross Compensation</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>1485000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Incentive</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>45000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Annual Total Compensation</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>1530000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Company’s contribution towards benefits</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>19500</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Annual Total Remuneration</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>1549500</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography style={{ marginTop: "5" }}>
        Taxable Income - the income on which tax is applied
        <br />
        Currently Taxable Income = 1530000
        <br />
        Under section 80C an employee can claim upto 150000(1.5 lakh rupees)
        deductions.
        <br />
        Employee can either show his investments or any fixed deposits, home
        loan interest paid etc.
        <br />
        1. From the above details, PF also comes under section 80C <br />
        2. Employee has a monthly PF contribution of 5199/- so annually - 62338/- <br />
        3. As this PF also comes under 80C, the deductions now become 
        <br />4. 150000 - 62338 =87662 <br /> 
        5. Now we can either invest an amount of 87662/- or do a deposit
        or choose some other option and fill this amount. Taxable Income now =
        1530000 - 150000 = **1380000** <br />
        6. Every employee gets a standard
        deduction of 50000, that means this 50000 can be removed from the
        taxable income.<br />
         7. Taxable Income = **1380000 - 50000 = 1330000** <br />
         8. As you can see above House rent allowance = 311940 annually. <br />
         9. Now let’s say the employee resides in Hyderabad (non - metro) city and pays a rent
        of 20000 to his landlord. <br />
        10. Now we can calculate taxable HRA using any
        HRA calculator. <br /> 
        11. The calculation turns out like this → taxable HRA =
        111930 and exempted = 207960 <br />
        12. Taxable Income = **1330000 - 207960 =
        1122040** <br />
        13. Now let’s say the employee doesn’t have any loans, etc. <br />
        14. So the taxable income = **1122040** <br />
        15. Based on the tax regime now, either old or new we need to calculate the tax for this income after
        checking under which tax bracket this income falls under.
      </Typography>
    </>
  );
}

export default PayslipTable;
