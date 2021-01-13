import React, { useEffect, useState } from 'react'
import theme, { TStyle } from '../styles/myMuiStyles'
import { withStyles, makeStyles } from '@material-ui/core/styles';

// import TextField from '@material-ui/core/TextField';
import  Autocomplete  from '@material-ui/lab/Autocomplete';
// import { Typography } from '@material-ui/core'
import { Grid, Typography, TextField } from '../components/self-defined/index'

function Filter(props) {
  const handleUpate = props.handleUpate? props.handleUpate:null;

  return (
    <Grid rowFlex  margin="small">
      <Grid wh={['110px', 'inherit']} margin="auto">
        <Typography variant='subtitle1'>{props.name}</Typography>
      </Grid>
      <Grid flexGrow="1"  padding='standard'>
        <Autocomplete
            multiple
            size='small'
            options={props.optionList}
            renderInput={(params) => (
              <TextField
                  {...params}
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