import React, { useEffect, useState } from 'react'
import theme from '../../../styles/myMuiStyles'
import { withStyles, makeStyles } from '@material-ui/core/styles';

import { FormGroup, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { Grid, Typography } from '../../../components/self-defined/index'

const useFilterStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  name: {
    minWidth: '110px',
  },
  textField: {
    flexGrow: 1,   
  }
}), { name: 'filter' });

function Filter(props) {
  const classes = useFilterStyles();
  const [state, setState] = React.useState({
    engilshCour: false,
    ntuSys: false,
    intenseCour: false,
  });
  const handleUpate = props.handleUpate? props.handleUpate:null;
  const optionsLabel = ["英語授課", "臺大系統校際課程", "密集課程"];
  const options = ["engilshCour", "ntuSys", "intenseCour"];

  const handleChange = (event) => {
    console.log("check box!")
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    
    <Grid rowFlex>
      <Typography className={classes.name}>{props.name}</Typography>
      <div className={classes.textField}>
        <FormGroup row>
          {options.map((item, index) => {
            return <FormControlLabel 
            control={<Checkbox onChange={handleChange} name={item} color="primary"/>}
            label={<Typography>{optionsLabel[index]}</Typography>}
          />
          })}
        </FormGroup>
      </div>
    </Grid>
  )
}
export default Filter;