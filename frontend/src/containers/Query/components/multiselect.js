import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import  Autocomplete  from '@material-ui/lab/Autocomplete';
import { Typography } from '../../../components/self-defined/index'


function MultiSelect(props) {
  // const handleDepUpate = props.handleDepUpate? props.handleDepUpate:null;

  return (
    <div className='multiSelect rowFlex fullWidth' >
      <Typography variant='subtitle1' className='title '>{props.name}</Typography>
      <Autocomplete
          // className="fullWidth multiSelect-input"
          multiple
          size='small'
          options={props.optionList}
          renderInput={(params) => (
            <TextField
                {...params}
                
                InputProps={{...params.InputProps, disableUnderline: true}}
                placeholder={props.name}
            />
          )}
          onChange={props.onChange}
        />
    </div>
  )
}
export default MultiSelect;