import React, { useEffect, useState } from 'react'
import { useQueryStyles } from '../styles/styles'

import { withStyles } from '@material-ui/core/styles';
import { FormGroup, FormControlLabel, Checkbox, Button } from '@material-ui/core';


function Filter(props) {
  const classes = useQueryStyles();
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
  console.log('state: ', state)
  return (
    
    <div className={classes.filterRoot}>
      <label className={classes.filterName}>{props.name}</label>
      <div className={classes.filterTextField}>
        <FormGroup row>
          {options.map((item, index) => {
            return <FormControlLabel 
            control={<Checkbox onChange={handleChange} name={item} color="primary"/>}
            label={optionsLabel[index]}
          />
          })}
        </FormGroup>
      </div>
    </div>
  )
}
export default Filter;