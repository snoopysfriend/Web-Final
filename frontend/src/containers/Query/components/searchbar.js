import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';

// import { useSearchBarStyles } from '../styles/searchBarStyles'
import { InputBase, MenuItem } from "@material-ui/core"
import TimeTable from './TimeTable/TimeTable'
import  items  from './TimeTable/timeItems'
import { Grid, TextField, Button, Typography, Select } from '../../../components/self-defined/index'

// const OPTIONS = ['課程名稱', '教師姓名', '課程內容', '教室']
const OPTIONS = ['課程內容']

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
            className="fullWidth"
              onChange={handleChange}
              input ={<InputBase />}
            >
              {OPTIONS.map((op, index) => (
                <MenuItem key={index} value={index}>{op}</MenuItem>)
              )}
            </Select>
      </div>
      <div className='input'>
        <TextField
            fullWidth
            placeholder = "輸入關鍵字"
            onChange={props.handleTextFieldChange}
          />
      </div>
      <Button className = "button" onClick={()=>props.clickToSearch(OPTIONS[0])} >全文搜尋</Button>
      <Button className = "button" onClick={()=>props.clickToSearch("篩選")} >篩選搜尋</Button>

      {/* <div className='timeTable'>
        <TimeTable items={items}/> 
      </div> */}
    </div>
  );
}