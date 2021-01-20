import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import  Autocomplete  from '@material-ui/lab/Autocomplete';
import { Typography } from '../../../components/self-defined/index'
import theme from '../../../styles/myMuiStyles'


function MultiSelect(props) {
  const handleDepUpate = props.handleDepUpate? props.handleDepUpate:null;

  return (
    <div className='multiSelect rowFlex' >
      <div className='title'>
        <Typography variant='subtitle1'>{props.name}</Typography>
      </div>
      <div>
        <ThemeProvider theme={theme}>
        <Autocomplete
            multiple
            size='small'
            options={props.optionList}
            renderInput={(params) => (
              <TextField
                  {...params}
                  noWrap
                  InputProps={{...params.InputProps, disableUnderline: true}}
                  placeholder={props.name}
              />
            )}
            onChange={handleDepUpate}
          />
        </ThemeProvider>
      </div>
    </div>
  )
}
export default MultiSelect;