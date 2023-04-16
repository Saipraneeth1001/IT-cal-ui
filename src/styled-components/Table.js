import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


 function BasicTable(props) {
  return (
    <div style={{ maxWidth: '800px', textAlign:'center'}}>
    <p><bold>{props.taxRegime}</bold></p>
    <TableContainer size='small' component={Paper} style={{margin: "10px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Income Tax Slab</TableCell>
            <TableCell align="right">Tax Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" 
              style={{backgroundColor: "white"}}
              >
                {row.name}
              </TableCell>
              <TableCell style={{backgroundColor: "white"}} align="right">{row.percent}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export { BasicTable };
