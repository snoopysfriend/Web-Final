import React from 'react'
//
// material-ui Library
import { makeStyles } from '@material-ui/styles';
// import { Typography, Link } from '@material-ui/core';

//
// Self-Defined
import { Grid, Typography, Textfield } from '../components/self-defined/index'
import logo from "../resources/img/logo_noBackground.png";
import theme from '../styles/myMuiStyles'

const useNtuLogoStyles = makeStyles((theme) => {
  return ({
    ntuLogo: {
      // position: 'absolute',
      // max-width: 100%;
      maxHeight:(props) => props.size,
      // width: (props) => props.size,
      // height: (props) =>  props.size,
      left: '0px',
      top: '0px',
    },
    ntuCName: {
      position: 'absolute',
      width: '270px',
      height: '45px',
      left: '90px',
      top: '8px',
      color: 'white',
    },
    ntuEName: {
      position: 'absolute',
      width: '270px',
      height: '45px',
      left: '90px',
      top: '46px',
      color: 'white',
    },
})}, { name: 'NtuLogo' })

function NtuLogo(props) {
  const classes = useNtuLogoStyles(props);
  return (
    <Grid newClass={props.className} rowFlex noBackground noFullWidth>
      <img src={logo} className={classes.ntuLogo}/>
      <Grid noBackground margin='auto'>
        <Typography variant="h4" noWrap >國立台灣大學</Typography>
        <Typography variant="h6" noWrap >National Taiwan University</Typography>
      </Grid>
      {/* <Typography variant="h4" noWrap className={classes.ntuCName}>國立台灣大學</Typography>
      <Typography variant="h6" noWrap className={classes.ntuEName}>National Taiwan University</Typography> */}
    </Grid>
  )
    
}
export default NtuLogo;