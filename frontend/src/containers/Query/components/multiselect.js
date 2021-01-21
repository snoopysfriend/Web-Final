import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import  Autocomplete  from '@material-ui/lab/Autocomplete';
import { Typography } from '../../../components/self-defined/index'
import theme from '../../../styles/myMuiStyles'


function MultiSelect(props) {
  // const handleDepUpate = props.handleDepUpate? props.handleDepUpate:null;

  return (
    <div className='multiSelect rowFlex fullWidth' >
      <div className='title'>
        <Typography variant='subtitle1'>{props.name}</Typography>
      </div>
      {/* <div> */}
        <ThemeProvider theme={theme}>
        <Autocomplete
            multiple
            size='small'
            options={props.optionList}
                  ariaValueText="ariaValueText"
                  // value={props.name}
            renderInput={(params) => (
              <TextField
                  {...params}
                  noWrap
                  ariaValueText="ariaValueText"
                  InputProps={{...params.InputProps, disableUnderline: true, value: "j6m3wj6"}}
                  placeholder={props.name}
              />
            )}
            onChange={props.onChange}
          />
        </ThemeProvider>
      {/* </div> */}
    </div>
  )
}
export default MultiSelect;