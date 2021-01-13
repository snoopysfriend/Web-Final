import React from 'react'
//
// material-ui Library
import { Tab, Tabs } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
//
// Self-Defined
import { Grid, Typography, TextField }  from '../components/self-defined/index'

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

function Login(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <Grid newClass={props.className}>
        <Grid>
          <StyledTabs  value={value} onChange={handleChange} >
            <StyledTab label="登入" />
            <StyledTab label="註冊" />
          </StyledTabs>
        </Grid>
        <Grid>
          <TextField
            placeholder="This is a place holder"
            // value={textFieldValue}
            label="帳號"
            // onChange={e => handleTextFieldChange(e.target.value)}
          />
        </Grid>
        <Grid margin="none">
          <TextField
            placeholder="This is a place holder"
            // value={textFieldValue}
            label="密碼"
            password
            // onChange={e => handleTextFieldChange(e.target.value)}
          />
          <Typography variant="caption" align='right'>Forget password?</Typography>
        </Grid>
        <Grid >
          Button
        </Grid>
        
      </Grid>
  )

}

export default Login;