import React, {useState} from 'react'
//
// material-ui Library
import { makeStyles } from '@material-ui/styles';
//
// Self-Defined
import { Grid, Typography, TextField } from '../../components/self-defined/index'
import NtuLogo from './components/ntuLogo'
import theme from '../../styles/myMuiStyles';
import styledVariables from '../../styles/styledVariables'

function Header() {
  const { _header } = styledVariables;
  console.log(_header);
  return (
    <Grid id='header' wh={[_header.width, _header.height]} rowFlex bgColor={_header.backgroundColor} color='white'>
      <NtuLogo id='header-logo' noFullWidth size='70px'/>
      <Typography id='header-title' variant='h4'>課程查詢系統</Typography>
    </Grid>
    )
    
}
export default Header;