import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core/';
import { Paper, Typography } from '@material-ui/core/';
import theme, { TStyle } from '../styles/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: 1300,
    margin: '24px auto',
  },
  cell: {
    border: '1px solid #000',
    padding: '5px',
    width: '80px',
    height: '60px',
  }
}, { name: 'Table' });


function createSection(name, clock) {
    return { name, clock };
}
const SECTIONS = [
    createSection("0", "7:20~8:10"),
    createSection("1", "7:20~8:10"),
    createSection("2", "7:20~8:10"),
    createSection("3", "7:20~8:10"),
    createSection("4", "7:20~8:10"),
    createSection("5", "7:20~8:10"),
    createSection("6", "7:20~8:10"),
    createSection("7", "7:20~8:10"),
    createSection("9", "7:20~8:10"),
    createSection("10", "7:20~8:10"),
    createSection("A", "7:20~8:10"),
    createSection("B", "7:20~8:10"),
    createSection("C", "7:20~8:10"),
    createSection("D", "7:20~8:10"),

]
const DAYS = ["X","一","二","三","四","五","六"];

export default function CourseSchedule() {
  const classes = useStyles();

  return (
    <TableContainer component="div" className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {DAYS.map((row, index) => (
            <TableRow key={row}>
              <TableCell className={classes.cell} align="center">{row}</TableCell>
              {
                SECTIONS.map((section) => (
                  <TableCell key={section.name} 
                    className={classes.cell}
                    align="center"
                  >
                    {index==0 && 
                      <>
                      <Typography variant="subtitle1">{section.name}</Typography>
                      <Typography variant="body1">{section.clock}</Typography>
                      </>
                    }
                  </TableCell>
                ))
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}