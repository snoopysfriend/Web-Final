import React, { useState, useEffect } from 'react'
//
// material-ui Library
import { makeStyles } from '@material-ui/styles';
//
// Self-Defined
import { Grid, Typography, TextField } from '../components/self-defined/index'

// import Typography from '../components/self-defined/Typography'
import Login from '../containers/Login'
import NtuLogo from '../components/ntuLogo'
import background from "../resources/img/background.jpg";

const useHomeStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    backgroundPosition: 'center',
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
  ntuLogo: {
    position:'absolute',
    top: 'calc( 40vh )',
    left: 'calc( 2vw )',
  },
  title: {
    position:'absolute',
    top: 'calc( 50vh )',
    left: 'calc( 30vw )',
  },
  login: {
    position: 'absolute',
    width: 450,
    height: 450,
    borderRadius: 15,
    padding: '60px 60px',
    right: 'calc((25vw - 450px / 2))',
    top: 'calc((50vh - 450px / 2))',
  },
}), { name: 'Home' })

function Home() {
  const classes = useHomeStyles();
  return (
    <>
      <Grid newClass={classes.root} rowFlex >
        <Grid bgColor='rgba(24, 38, 94, 0.6)' color='white'>
          <NtuLogo className={classes.ntuLogo} size='85px'/>
          <div className={classes.slash}></div>
          <Typography variant="h4" className={classes.title} >課程查詢系統</Typography>
        </Grid>
        <Grid noBackground >
          <Login className={classes.login}/>
        </Grid>
      </Grid>
    </>
  )
    
}
export default Home;