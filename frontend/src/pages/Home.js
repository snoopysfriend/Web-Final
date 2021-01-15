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
      <Grid id='home' sty={_home.root} style={{backgroundImage: "url(/static/media/background.32e8c79c.jpg)"}} rowFlex >
        <Grid id='home-left' bgColor='rgba(24, 38, 94, 0.6)' color='white'>
          <NtuLogo sty={_home.ntuLogo} size='85px'/>
          <Grid sty={_home.slash}></Grid>
          <Typography variant="h4" sty={_home.title} >課程查詢系統</Typography>
        </Grid>
        <Grid id='home-right1' noBackground>
          <Login sty={_home.login}/>
        </Grid>
      </Grid>
    </>
  )
    
}
export default Home;