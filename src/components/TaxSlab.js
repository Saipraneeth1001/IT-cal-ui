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

const TaxSlabCard = () => {
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
                  Before Budget 2023 (until 31st March 2023)
                </TableCell>
                <TableCell className={classes.tableHeader}>
                  New Tax Regime After Budget 2023 (From 1st April 2023)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹0 - ₹2,50,000</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹2,50,000 - ₹3,00,000</TableCell>
                <TableCell>5%</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹3,00,000 - ₹5,00,000</TableCell>
                <TableCell>5%</TableCell>
                <TableCell>5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹5,00,000 - ₹6,00,000</TableCell>
                <TableCell>10%</TableCell>
                <TableCell>5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹6,00,000 - ₹7,50,000</TableCell>
                <TableCell>10%</TableCell>
                <TableCell>10%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹7,50,000 - ₹9,00,000</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>10%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹9,00,000 - ₹10,00,000</TableCell>
                <TableCell>15%</TableCell>
                <TableCell>15%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹10,00,000 - ₹12,00,000</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>15%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹12,00,000 - ₹12,50,000</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>20%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>₹12,50,000 - ₹15,00,000</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>20%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&gt;₹15,00,000</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>30%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography variant="subtitle1" component="p">
                    Note: Tax rates are subject to change as per the Indian
                    Government's budget announcements. The above tax slabs are
                    for the financial year 2022-23 and are applicable to
                    individual taxpayers below 60 years of age.
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default TaxSlabCard;
