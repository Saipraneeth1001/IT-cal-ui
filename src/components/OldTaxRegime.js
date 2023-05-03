import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
  },
  tableHeader: {
    fontWeight: 600,
    fontSize: 16,
  },
});

const OldTaxRegime = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          Tax Slabs in India
        </Typography>
        <TableContainer>
          <Table aria-label="tax slab table">
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableHeader}>Slab</TableCell>
                <TableCell className={classes.tableHeader}>
                  Individuals below the age of 60 years
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹0 - ₹2,50,000</TableCell>
                <TableCell>NIL</TableCell>
                <TableCell></TableCell>
                
              </TableRow>
              <TableRow>
                <TableCell>₹2,50,000 - ₹5,00,000</TableCell>
                <TableCell>5%</TableCell>
                <TableCell></TableCell>

              </TableRow>
              <TableRow>
                <TableCell>₹5,00,000 - ₹10,00,000</TableCell>
                <TableCell>20%</TableCell>
                <TableCell></TableCell>

              </TableRow>
              <TableRow>
                <TableCell>Greater than ₹10,00,000</TableCell>
                <TableCell>30%</TableCell>
                <TableCell></TableCell>
              </TableRow>                
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default OldTaxRegime;
