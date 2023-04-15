import React from "react";
import "../css/TaxSlabs.css";

export default function TaxSlabs() {
  return (
    <>
     <th>New Tax Regime</th>
      <head>
        <title>Income Tax Slab</title>
        <style></style>
      </head>
      <body>
        <table>
          <thead>
            <tr>
              <th>Income Tax Slab</th>
              <th>Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to Rs.3 lakh</td>
              <td>Nil</td>
            </tr>
            <tr>
              <td>Above Rs.3 lakh - Rs.6 lakh</td>
              <td>5% of the total income</td>
            </tr>
            <tr>
              <td>Above Rs.6 lakh - Rs.9 lakh</td>
              <td>10% of the total income</td>
            </tr>
            <tr>
              <td>Above Rs.9 lakh - Rs.12 lakh</td>
              <td>15% of the total income</td>
            </tr>
            <tr>
              <td>Above Rs.12 lakh - Rs.15 lakh</td>
              <td>20% of the total income</td>
            </tr>
            <tr>
              <td>Above Rs.15 lakh</td>
              <td>30% of the total income</td>
            </tr>
          </tbody>
        </table>

        <th>Old Tax Regime</th>
        <head>
            <title>Income Tax Slab</title>
            <style></style>
        </head>
      
        <table>
          <thead>
            <tr>
              <th>Income Tax Slab</th>
              <th>Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to Rs 2.5 lakh</td>
              <td>Nil</td>
            </tr>
            <tr>
              <td>Above Rs.2.50 lakh - Rs.5.00 lakh</td>
              <td>5% of the total income that is more than Rs.2.5 lakh + 4% cess</td>
            </tr>
            <tr>
              <td>Above Rs.5 lakh - Rs.10 lakh</td>
              <td>20% of the total income that is more than Rs.5 lakh + Rs.12,500 + 4% cess</td>
            </tr>
            <tr>
              <td>Above Rs.10 lakh</td>
              <td>30% of the total income that is more than Rs.10 lakh + Rs.1,12,500 + 4% cess</td>
            </tr>
          </tbody>
        </table>
      </body>
    </>
  );
}
