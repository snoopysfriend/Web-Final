import React, { useState, useEffect } from 'react'
import  { deptMj, libEd, acaProg, phyMil, genCour } from '../resources/index'
import { useQueryStyles } from '../styles/styles'

import Multiselect from '../components/filter-multiselect';
import Checkboxes from '../components/checkboxes';
import SearchBar from '../components/searchbar'


function Filters() {
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

  const classes = useQueryStyles();
  return (
    <div className={classes.root}>
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        cancelOnEscape
        clickToSearch = {clickToSearch}
      />
      <div className={classes.mainFilters}>
        <div className={classes.mainFiltersLeft}>
            <Multiselect name="學院" handleUpate={handleDepUpate} optionList={depList}/>
            <Multiselect name="系所" optionList={majorList}/>
            <Multiselect name="通識" optionList={libEd}/>
        </div>
        <div className={classes.mainFiltersRight}>
            <Multiselect name="體育/軍訓" optionList={phyMil}/>
            <Multiselect name="語文/基本能力" optionList={genCour}/>
        </div>
        
      </div>
      <div className={classes.otherFilters}>

        <label className="filter-name ">其他</label>
        {/* <Checkboxes /> */}
      </div>
    </div>
  )
}
export default Filters;



