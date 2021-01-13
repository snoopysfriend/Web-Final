import React, { useState, useEffect } from 'react'
//
// material-ui Library
import theme, { TStyle } from '../styles/myMuiStyles'
import { withStyles, makeStyles } from '@material-ui/core/styles';
//
// Self-Defined
import { Grid, Typography, Textfield } from '../components/self-defined/index'
import  { deptMj, libEd, acaProg, phyMil, genCour } from '../resources/index'
import Multiselect from '../components/filter_multiselect';
import Checkboxes from '../components/filter_checkboxes';
// import SearchBar from '../components/searchbar'


function Query() {
  const [majorList, setMajor] = useState([])

  const depList = deptMj.department;
  const handleDepUpate = async (event, value) => {
      console.log(value);
      let majorLt = [];
      value.map(dep => {
        majorLt = [...majorLt, ...deptMj[dep]];
      })
      setMajor(majorLt)
  }

  const clickToSearch = () => {
    console.log('clickToSearch: ')

  }

  return (
    <Grid  padding='large' margin="auto">
      {/* <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        cancelOnEscape
        clickToSearch = {clickToSearch}
      /> */}
      <Grid rowFlex >
        <Grid flexGrow="1">
            <Multiselect name="學院" handleUpate={handleDepUpate} optionList={depList}/>
            <Multiselect name="系所" optionList={majorList}/>
            <Multiselect name="通識" optionList={libEd}/>
        </Grid>
        <Grid flexGrow="1">
            <Multiselect name="體育/軍訓" optionList={phyMil}/>
            <Multiselect name="語文/基本能力" optionList={genCour}/>
            <Multiselect name="學程" optionList={acaProg}/>
        </Grid>
        
      </Grid>
      <Grid noPadding>
        <Checkboxes name="其他"/>
      </Grid>
    </Grid>
  )
}
export default Query;



