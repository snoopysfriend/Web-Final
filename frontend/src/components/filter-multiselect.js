import React, { useEffect, useState } from 'react'
import theme, { TStyle } from '../styles/styles'
import { withStyles, makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import  Autocomplete  from '@material-ui/lab/Autocomplete';
import { Typography } from '@material-ui/core'
import { Grid } from './self-defined/grid'

function Filter(props) {
  const handleUpate = props.handleUpate? props.handleUpate:null;

  return (
    <Grid rowFlex fullWidth margin="small">
      <Grid width='110px' margin="auto">
        <Typography variant='subtitle1'>{props.name}</Typography>
      </Grid>
      <Grid flexGrow="1"  padding='standard'>
        <Autocomplete
            multiple
            size='small'
            options={props.optionList}
            // getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                  {...params}
                  // variant="standard"
                  //label="Multiple values"
                  InputProps={{...params.InputProps, disableUnderline: true}}
                  placeholder={props.name}
              />
            )}
            onChange={handleUpate}
          />
      </Grid>
    </Grid>
  )
}
export default Filter;