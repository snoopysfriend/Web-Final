import React from 'react'
//
// material-ui Library
import { makeStyles } from '@material-ui/styles';
// import { Typography, Link } from '@material-ui/core';

//
// Self-Defined
import { Grid, Typography, Textfield } from '../../../components/self-defined/index'
import logo from "../../../resources/img/logo_noBackground.png";
import theme from '../../../styles/myMuiStyles'

function NtuLogo(props) {
  return (
    <Grid id='ntuLogo' sty={props.sty} rowFlex noBackground noFullWidth>
      <img src={logo} style={{maxHeight: props.size}}/>
      <Grid noBackground margin='auto'>
        <Typography variant="h4" noWrap >國立台灣大學</Typography>
        <Typography variant="h6" noWrap >National Taiwan University</Typography>
      </Grid>
    </Grid>
  )
    
}
export default NtuLogo;