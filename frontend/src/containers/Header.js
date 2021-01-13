import React, {useState} from 'react'
//
// material-ui Library
import { makeStyles } from '@material-ui/styles';
//
// Self-Defined
import { Grid, Typography, TextField } from '../components/self-defined/index'
import NtuLogo from '../components/ntuLogo'
import theme from '../styles/myMuiStyles';

function Header() {
  return (
    <Grid wh={['100%', '70px']} rowFlex bgColor={theme.palette.ntuBlue.light} color='white'>
      <NtuLogo noFullWidth size='70px'/>
      <Typography variant='h4'>課程查詢系統</Typography>
    </Grid>
    )
    
}
export default Header;