import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';

// import { useSearchBarStyles } from '../styles/searchBarStyles'
import { TStyle } from '../styles/styles'
import { Button, Input, InputBase, FormControl, Select, InputLabel, MenuItem, Typography } from "@material-ui/core"
import TimeTable from './TimeTable/TimeTable'
import  items  from './TimeTable/timeItems'
import TextField from './self-defined/textfield'
import { Grid } from './self-defined/grid'



export default function SearchAppBar(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid rowFlex fullWidth>
      <Grid width='110px'>
        <Typography variant='subtitle1'>快速查詢</Typography>
      </Grid>
      <Grid width='150px'>
        <FormControl fullWidth>
          <Select
            // value={age}
            onChange={handleChange}
            input ={<InputBase />}
          >
            <MenuItem value="">
              None
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid width='300px'>
        <TextField
            placeholder="This is a place holder"
            // value={textFieldValue}
            // label="帳號"
            // onChange={e => handleTextFieldChange(e.target.value)}
            fullWidth
          />
      </Grid>
      <Grid>
        <Button onClick={props.clickToSearch}>搜尋</Button>
      </Grid>
      <Grid>
        <TimeTable items={items}/> 
      </Grid>
    </Grid>
  );
}