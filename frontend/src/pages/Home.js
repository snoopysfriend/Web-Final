import React from 'react'
//
// Self-Defined
import { Grid, Typography } from '../components/self-defined/index'
// import Typography from '../components/self-defined/Typography'
import Login from '../containers/Login'
import NtuLogo from '../containers/Header/components/ntuLogo'
import { _home } from '../styles/styledVariables'

function Home(props) {
  return (
    <>
      <div className='Home root rowFlex' >
        <div className='containerLeft'>
          <NtuLogo size='85px'/>
          <div className='slash'></div>
          <Typography variant="h4" className='title' >課程查詢系統</Typography>
          <h1>account: abc<br/>password: 123</h1>
        </div>
        <div className='containerRight'>
          <Login className='login'/>
        </div>
      </div>
   
    </>
  )
    
}
export default Home;