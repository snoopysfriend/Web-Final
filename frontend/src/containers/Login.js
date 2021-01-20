import React from 'react'
import { AuthContext } from '../App'
import { useHistory } from 'react-router-dom'
//
// material-ui Library
import { Tab, Tabs } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
//
// Self-Defined
import { Grid, Typography, TextField, Button }  from '../components/self-defined/index'
import { _login } from '../styles/styledVariables'
//
//axios
import axios from 'axios' 
const instance = axios.create({ baseURL: 'http://localhost:4000' });


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
    fontSize: theme.typography.pxToRem(25),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple  {...props} />);



export default function Login(props) {
  axios.defaults.withCredentials = true
  const [module, setModule] = React.useState('login');
  const [account, setAccount] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = (event, newValue) => {
    setModule(newValue);
  };

  const loginAuthorize = async (data) => {
    return await axios.post('http://localhost:4000/api/users/login', data, {'Content-Type': 'application/json'})
        .then((response) => {
          dispatch({
              type: "LOGIN",
              payload: data
          })
          
          history.push("/search")
        })
        .catch((error) => false)
  }

  const handleClick = async (event) => {
    const data = {
      studentId: account,
      password: password,
    }
    await loginAuthorize(data);
  };
  
  const history = useHistory();
  const {state, dispatch} = React.useContext(AuthContext);
  console.log("Login", state, dispatch)
  
  return (
      <div className={props.className}>
        <Grid id='login-tags' sty={_login.tabs}>
          <StyledTabs  value={module} onChange={handleChange} >
            <StyledTab label="登入" value='login'/>
            <StyledTab label="註冊" value='registeration' />
          </StyledTabs>
        </Grid>
        <Grid id='login-account' sty={_login.input}>
          <TextField
            placeholder="輸入帳號"
            label="帳號"
            onChange={e => setAccount(e.target.value)}
          />
        </Grid>
        <Grid id='login-password' sty={_login.input}>
          <TextField
            password
            placeholder="輸入密碼"
            label="密碼"
            onChange={e => setPassword(e.target.value)}
          />
        <Typography variant="caption" align='right'>Forget password?</Typography>
        </Grid>
        <Grid>
          <Button onClick={handleClick} sty={_login.button}>
            {module=='login'? "登入":"註冊"}
          </Button> 
        </Grid>
        
      </div>
  )

}
