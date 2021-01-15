import React, { useEffect, useState } from 'react'
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import  Autocomplete  from '@material-ui/lab/Autocomplete';
import { Grid, Typography } from '../../../components/self-defined/index'
import theme from '../../../styles/myMuiStyles'

// const theme = createMuiTheme({
//   overrides: {
//     MuiAutocomplete: {
//       root: {
//         border: '1px solid red'
//       },
//       inputRoot: {
//         padding: `1px 16px`,
//       }
//     },
//   }
// });

function MultiSelect(props) {
  const handleUpate = props.handleUpate? props.handleUpate:null;

  return (
    <Grid rowFlex  margin="small">
      <Grid wh={['140px', 'inherit']} margin="auto">
        <Typography variant='subtitle1'>{props.name}</Typography>
      </Grid>
      <Grid padding='standard'>
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
            onChange={handleUpate}
          />
        </ThemeProvider>
      </Grid>
    </Grid>
  )
}
export default MultiSelect;