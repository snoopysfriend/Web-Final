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

function Header() {
  const {state, dispatch} = React.useContext(AuthContext);
  console.log("header", state, localStorage)
  const { _header } = styledVariables;
  return (
    <div className='Header rowFlex' >
      <div className="title rowFlex">
        <NtuLogo size='70px'/>
        <Typography variant='h4'>課程查詢系統</Typography>
      </div>
      <div>
      {state.isAuthenticated? 
        <Button> 已登入 </Button>
        :
        <Button> 登入 </Button>}
      </div>
    </div>
    )
    
}
export default Header;