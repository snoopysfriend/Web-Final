import React, { useState, useEffect } from 'react'
//
// Self-Defined
import { Grid, Typography } from '../components/self-defined/index'

// import Typography from '../components/self-defined/Typography'
import Login from '../containers/Login'
import NtuLogo from '../containers/Header/components/ntuLogo'
import { _home } from '../styles/styledVariables'

function Home() {
  return (
    <>
      <div className='Home rowFlex' >
        <div className='containerLeft'>
          <NtuLogo size='85px'/>
          <Grid sty={_home.slash}></Grid>
          <Typography variant="h4" sty={_home.title} >課程查詢系統</Typography>
        </div>
        <Grid id='home-right1' noBackground>
          <Login sty={_home.login}/>
        </Grid>
      </div>
    </>
  )
    
}
export default Home;