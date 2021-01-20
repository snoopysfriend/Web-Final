import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';

// import { useSearchBarStyles } from '../styles/searchBarStyles'
import { InputBase, MenuItem } from "@material-ui/core"
import TimeTable from './TimeTable/TimeTable'
import  items  from './TimeTable/timeItems'
import { Grid, TextField, Button, Typography, Select } from '../../../components/self-defined/index'

const OPTIONS = ['課程名稱', '教師姓名', '流水號', '課程識別碼', '課號', '教室']

export default function SearchBar(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='searchBar rowFlex'>
      <Typography variant='subtitle1' className='title'>快速查詢</Typography>
      <div className='options'>
            <Select
              onChange={handleChange}
              input ={<InputBase />}
            >
              {OPTIONS.map((op, index) => (
                <MenuItem value={index}>{op}</MenuItem>)
              )}
            </Select>
      </div>
      <div className='input'>
        <TextField
            placeholder = "This is a place holder"
            // onChange={e => handleTextFieldChange(e.target.value)}
          />
      </div>
      <Button onClick={props.clickToSearch} >搜尋</Button>
      <div className='timeTable'>
        <TimeTable items={items}/> 
      </div>
    </div>
  );
}