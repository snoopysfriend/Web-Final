import React, {useState} from 'react'
import { AuthContext } from '../../App'
//
// material-ui Library
import { makeStyles } from '@material-ui/styles';
//
// Self-Defined
import { Button, Typography, TextField } from '../../components/self-defined/index'
import NtuLogo from './components/ntuLogo'
import theme from '../../styles/myMuiStyles';
import styledVariables from '../../styles/styledVariables'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

function Header() {
  const {state, dispatch} = React.useContext(AuthContext);
  console.log("header", state, localStorage)
  const { _header } = styledVariables;
  const history = useHistory()
  const login = () => {
      console.log('login')
      history.push('/')
  }

  const schedule = async() => {
      console.log('login')
      axios.defaults.withCredentials = true
      let loginStatus = true;
        await axios.post('http://localhost:4000/api/users/login', {'Content-Type': 'application/json'})
        .then((response) => {
            
        })
        .catch((error) => 
            loginStatus = false)

      if (loginStatus === false) {
          alert('User not login!!')
          history.push('/')
      } else {
          console.log(loginStatus)
          history.push('/user')
      }
  }

  return (
    <div className='Header rowFlex' >
      <div className="title rowFlex">
        <NtuLogo size='70px'/>
        <Typography variant='h4'>課程查詢系統</Typography>
      </div>
      <div>
        <Button onClick = {() => schedule()}> 我的課程 </Button>
      {state.isAuthenticated? 
        <Button> 已登入 </Button>
        :
        <Button onClick = {() => login()}> 登入 </Button>}
      </div>
    </div>
    )
    
}
export default Header;
