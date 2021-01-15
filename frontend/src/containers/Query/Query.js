import React, { useState, useEffect } from 'react'
//
// material-ui Library
import { Typography, Divider } from '@material-ui/core';
//
// Self-Defined
import { Grid, Button } from '../../components/self-defined/index'
import  { deptMj, libEd, acaProg, phyMil, genCour } from '../../resources/index'
import { Multiselect, Checkboxes, SearchBar } from './components/index';
import styledVariables from '../../styles/styledVariables'
import ColFilters from '../SearchResults/components/columnsFilter'


function Query(props) {
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

  const { _query } = styledVariables;
  return (
    <Grid id='query' style={_query}  padding='large' margin="auto">
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        cancelOnEscape
        clickToSearch = {clickToSearch}
      />
      <Grid rowFlex>
        <Grid  id='query-mainLeft'>
          <Multiselect name="學院" handleUpate={handleDepUpate} optionList={depList}/>
          <Multiselect name="系所" optionList={majorList}/>
          <Multiselect name="通識" optionList={libEd}/>
        </Grid>
        <Grid  id='query-mainRight'>
          <Multiselect name="體育/軍訓" optionList={phyMil}/>
          <Multiselect name="語文/基本能力" optionList={genCour}/>
          <Multiselect name="學程" optionList={acaProg}/>
        </Grid>
      </Grid>
      <Grid noPadding rowFlex id='query-other'>
        <Checkboxes name="其他"/>
        <Grid rowFlex style={_query.checkBoxes} id='query-colFilters'>
          <Button onClick={props.clickToShow}>Show</Button>
          {props.showCheckboxes && 
              <ColFilters state={props.state} onChange={props.handleChange} showCheckboxes={props.showCheckboxes}/>
          }
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Query;



