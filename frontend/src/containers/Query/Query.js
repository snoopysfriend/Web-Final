import React from 'react'
//
// material-ui Library
import { Typography, Divider } from '@material-ui/core';
//
// Self-Defined
import { Button } from '../../components/self-defined/index'
import  { deptMj, libEd, acaProg, phyMil, genCour } from '../../resources/index'
import { Multiselect, Checkboxes, SearchBar } from './components/index';
import ColFilters from '../SearchResults/components/columnsFilter'


function Query(props) {
  const [majorList, setMajor] = React.useState([])
  
  
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
    <div className='Query' >
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        cancelOnEscape
        clickToSearch = {clickToSearch}
      />
      <div className='rowFlex'>
        <div >
          <Multiselect name="學院" handleDepUpate={handleDepUpate} optionList={depList}/>
          <Multiselect name="系所" optionList={majorList}/>
          <Multiselect name="通識" optionList={libEd}/>
        </div>
        <div >
          <Multiselect name="體育/軍訓" optionList={phyMil}/>
          <Multiselect name="語文/基本能力" optionList={genCour}/>
          <Multiselect name="學程" optionList={acaProg}/>
        </div>
      </div>
      <div className='rowFlex'>
        <Checkboxes name="其他"/>
        <div className='rowFlex colFilter'>
          <Button onClick={props.clickToShow}>Show</Button>
          {props.showCheckboxes && 
              <ColFilters colState={props.colState} onChange={props.handleChange} showCheckboxes={props.showCheckboxes}/>
          }
        </div>
      </div>
    </div>
  )
}
export default Query;



