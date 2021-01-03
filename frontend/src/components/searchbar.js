import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';

// import { useSearchBarStyles } from '../styles/searchBarStyles'
import { TStyle } from '../styles/styles'
import { Button, Input, InputBase, FormControl, Select, InputLabel, MenuItem, Typography } from "@material-ui/core"
import TimeTable from './TimeTable/TimeTable'
import  items  from './TimeTable/timeItems'
import TextField from '../components/textfield/textfield'
import { Grid, GridItem } from '../components/grid/grid'


const BootstrapInput = withStyles((theme) => ({
  root: {
    // 'label + &': {
    //   marginTop: theme.spacing(3),
    // },
    // lineHeight: '40px',

  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    padding: '7px 0 7px 10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useSearchBarStyles = makeStyles((theme) => ({
    root: {
      ...(TStyle._rowFlex),
      marginBottom: '10px',
      ...(TStyle._containerMarginLR),
      ...(TStyle._containerPaddingLR),
    },
    name: {
      minWidth: '110px',
      ...(TStyle._filterHeight)
    },
    searchType: {
      minWidth: '110px',
    },
    searchTextField: {
      // flexGrow: 1,
      // width: '80%',
      // border: '1px solid #efefef',
      // borderRadius: '5px',
      // ...(TStyle._filterHeight),
      // ...(TStyle._containerPaddingLR),
      // ...(TStyle._containerMarginLR),
    },
    searchbutton: {
      // flexGrow: 1,
      ...(TStyle._filterHeight),
      ...(TStyle._containerPaddingLR),
    },
    space: {
      flexGrow: 1,
    }
  }), { name: 'SearchBar' });

export default function SearchAppBar(props) {
  const classes = useSearchBarStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid rowFlex fullWidth>
      <GridItem width='110px'>
        <Typography variant='header'>快速查詢</Typography>
      </GridItem>
      <GridItem width='150px'>
        <FormControl className={classes.searchType}>
          <Select
            // value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              None
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem width='300px'>
        <TextField
            placeholder="This is a place holder"
            // value={textFieldValue}
            // label="帳號"
            // onChange={e => handleTextFieldChange(e.target.value)}
            fullWidth
          />
      </GridItem>
      <GridItem >
        <Button onClick={props.clickToSearch}>搜尋</Button>
      </GridItem>
      <GridItem >
        <TimeTable items={items}/> 
      </GridItem>
    </Grid>
  );
}