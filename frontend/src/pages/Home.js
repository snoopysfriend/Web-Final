import React, { useState, useEffect } from 'react'
import '../styles/normalize.css'
import { makeStyles } from '@material-ui/styles';
import { TStyle } from '../styles/styles'
import Login from '../containers/Login'
import { Typography, Divider, Breadcrumbs, Link } from '@material-ui/core';
import { Grid } from '../components/self-defined/grid'
import background from "../resources/background.jpg";
import logo from "../resources/logo.jpg";

const useHomeStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    backgroundAttachment: 'fixed',
    width: '100%',
    minHeight: '100vh',
    backgroundPosition: 'center',
    ...(TStyle._rowFlex),
  },
  containerLeft: {
    position: 'relative',
    width: '100%',
    background: 'rgba(24, 38, 94, 0.6)'
  },
  slash: {
    position:'absolute',
    top: 'calc( 40vh )',
    left: 'calc( 22vw )',
    boxSizing:'border-box',
    lineHeight:'120px',
    width: '160px',
    height: '160px',
    background: 'linear-gradient(-45deg, transparent 49.5%, white 49.5%, white 50.5%, transparent 50.5%)'
  },
  ntu: {
    position:'absolute',
    top: 'calc( 40vh )',
    left: 'calc( 2vw )',
  },
  ntuLogo: {
    position: 'absolute',
    width: '85px',
    height: '85px',
    left: '0px',
    top: '0px',
  },
  ntuCName: {
    position: 'absolute',
    width: '270px',
    height: '45px',
    left: '90px',
    top: '8px',
  },
  ntuEName: {
    position: 'absolute',
    width: '270px',
    height: '45px',
    left: '90px',
    top: '46px',
  },
  title: {
    position:'absolute',
    top: 'calc( 50vh )',
    left: 'calc( 30vw )',
  }
}), { name: 'Home' })

function Home() {
  const classes = useHomeStyles();
  return (
    <>
      <Grid newClass={classes.root} >
        <Grid fullWidth color='rgba(24, 38, 94, 0.6)'>
          <div className={classes.ntu}>
              <img src={logo} className={classes.ntuLogo}/>
              <Typography variant="h4" noWrap className={classes.ntuCName}>國立台灣大學</Typography>
              <Typography variant="h6" noWrap className={classes.ntuEName}>National Taiwan University</Typography>
          </div>
          <Typography variant="h4" className={classes.title}>課程查詢系統</Typography>
          <div className={classes.slash}></div>
        </Grid>
        <Grid fullWidth noBackground>
          <Login />
        </Grid>
      </Grid>
    </>
  )
    
}
export default Home;