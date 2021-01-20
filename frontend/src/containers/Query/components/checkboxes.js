import React from 'react'

import { FormGroup, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import {  Typography } from '../../../components/self-defined/index'


function Filter(props) {
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
    
    <div className='checkBosxes rowFlex' >
      <Typography className='title'>{props.name}</Typography>
      <div className='options'>
        <FormGroup row>
          {options.map((item, index) => {
            return <FormControlLabel 
            control={<Checkbox onChange={handleChange} name={item} color="primary"/>}
            label={<Typography>{optionsLabel[index]}</Typography>}
          />
          })}
        </FormGroup>
      </div>
    </div>
  )
}
export default Filter;