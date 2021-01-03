import React, { useState, useEffect } from 'react'
import '../styles/normalize.css'
import { makeStyles } from '@material-ui/styles';
import { TStyle } from '../styles/styles'
import Temp from '../containers/Temp'
import { Typography, Divider, Breadcrumbs, Link } from '@material-ui/core';
import Grid from '../components/grid/grid'
import GridItem from '../components/grid/gridItem'

const useHomeStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url(https://i.imgur.com/kiiB86O.jpg)',
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
  containerRight: {
    width: '100%'
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
      <div className={classes.root}>
        <div className={classes.containerLeft}>
          <div className={classes.ntu}>
              <img src="https://i.imgur.com/6ha7kI8.png" className={classes.ntuLogo}/>
              <div className={classes.ntuCName}>
                <Typography variant="h4">國立台灣大學</Typography>
              </div>
              <div className={classes.ntuEName}>
                <Typography variant="h6">National Taiwan University</Typography>
              </div>
          </div>
          <div className={classes.title}>
            <Typography variant="h4">課程查詢系統</Typography>
          </div>
          <div className={classes.slash}></div>

        </div>
        <div className={classes.containerRight}>
          <Temp />
        </div>
      </div>
    </>
  )
    
}
export default Home;