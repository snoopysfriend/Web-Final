import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core'
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, GridItem } from '../components/grid/grid'
import TextField from '../components/textfield/textfield'

const useHomeStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: 450,
    height: 450,
    borderRadius: 15,
    padding: '0 60px',
    right: 'calc((25vw - 450px / 2))',
    top: 'calc((50vh - 450px / 2))',
  },
  tab: {
    marginTop: '60px',
    marginBottom: '10px',
  },
  text: {
    marginTop: '20px',
    // marginBottom: '10px',
  },

}), { name: 'grid' })

const StyledTabs = withStyles({
  flexContainer: {
    justifyContent: 'center',
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
      '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'red',
    },
  },
})((props) => <Tabs {...props}  TabIndicatorProps={{ children: <span /> }}/>);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#000',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple  {...props} />);

function TempApp() {
  const classes = useHomeStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <Grid newClass={classes.root}>
        <GridItem fullWidth  className={classes.tab} style={{textAlign: 'center'}}>
          <StyledTabs  value={value} onChange={handleChange} >
            <StyledTab label="登入" />
            <StyledTab label="註冊" />
          </StyledTabs>
        </GridItem>
        <GridItem fullWidth className={classes.text}>
          <TextField
            placeholder="This is a place holder"
            // value={textFieldValue}
            label="帳號"
            // onChange={e => handleTextFieldChange(e.target.value)}
            fullWidth
          />
        </GridItem>
        <GridItem fullWidth className={classes.text}>
          <TextField
            placeholder="This is a place holder"
            // value={textFieldValue}
            label="密碼"
            password
            // onChange={e => handleTextFieldChange(e.target.value)}
            fullWidth
          />
        </GridItem>
        <GridItem  alignRight border>
          <Typography variant="caption">Forget password?</Typography>
        </GridItem>
        <GridItem fullWidth border className={classes.text}>
          Button
        </GridItem>
        
      </Grid>
  )

}

export default TempApp;