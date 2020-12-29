import React from "react";

import { useSearchBarStyles } from '../styles/searchBarStyles'
import { Button, Input, InputBase, FormControl, Select, InputLabel, MenuItem } from "@material-ui/core"
import TimeTable from '../TimeTable/TimeTable'
import  items  from '../TimeTable/timeItems'


export default function SearchAppBar(props) {
  const classes = useSearchBarStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (

    <div className={classes.root}>
      <label className={classes.name}>快速查詢</label>
      <div className={classes.searchTextField}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </div>
      <div className={classes.searchbutton}>
        {/* <SearchIcon /> */}
        <Button onClick={props.clickToSearch}>搜尋</Button>
      </div>
      <TimeTable items={items}/> 
      {/* <div className={classes.space}></div> */}
    </div>
  );
}