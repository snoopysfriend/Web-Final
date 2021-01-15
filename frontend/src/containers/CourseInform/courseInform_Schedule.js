import React, { useState } from 'react';
//
// material-ui Library
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core/';
import { IconButton, Checkbox, Tab, Tabs } from '@material-ui/core/';

//
//Self-Defined
import { Grid, Typography, Textfield } from '../../components/self-defined/index'
import Icon from '../../styles/icons';
import theme from '../../styles/myMuiStyles'
import { _courseInform } from '../../styles/styledVariables'


export default function CourseInform_Schedule(props) {
  const rules = /[a-z]/;
  const fristEnChar = rules.exec(props.data.CouName).index;
  // console.log(props.data.CouName.slice(fristEnChar-1,props.data.CouName.length));
  const CouProg = JSON.parse(props.data.CouProg);
  const WEEK = CouProg['週次'];
  const DATE = CouProg['日期'];
  const CONTENT = CouProg['單元主題'];

  console.log(WEEK[0]);
  return (
    <Grid clear sty={_courseInform.schedule}>
      <Table >
        <TableHead>
          <TableRow>
            {Object.keys(CouProg).map(title => 
              <TableCell>{title}</TableCell>   
            )}    
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(DATE).map((date, index) => (
            <TableRow>
              <TableCell >{WEEK[index]}</TableCell>
              <TableCell>{date}</TableCell>
              <TableCell>{CONTENT[index]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
}
