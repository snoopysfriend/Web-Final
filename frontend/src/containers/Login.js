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
axios.defaults.withCredentials=true;

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
  const history = useHistory();
  const {state, dispatch} = React.useContext(AuthContext);
  // console.log("Login", state, dispatch)

  const [module, setModule] = React.useState('login');
  const [account, setAccount] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [varifyPassword, setVarifyPassword] = React.useState('');

  const handleChange = (event, newValue) => {
    setModule(newValue);
  };

  const logout = async () => {
    return await axios.post(`${window.localStorage.getItem('backendIP')}/api/users/logout`, {'Content-Type': 'application/json'})
        .then((response) => {
        })
        .catch((error) => false)

  }
  const loginAuthorize = async (data) => {
    return await axios.post(`${window.localStorage.getItem('backendIP')}/api/users/login`, data, {'Content-Type': 'application/json'})
        .then((response) => {
          dispatch({
            type: "LOGIN",
            payload: data
        })
        history.push("/search")
        })
        .catch((error) => {
          alert(error.response.data.error)
          setAccount('')
          setPassword('')
        })
  }
  const registerAuthorize = async (data) => {
    data.studentMaj ="EE"
    data.studentGrad ="4"
    data.studentGender = "1"
    data.studentDepartment = "EE"
    data.studentCname =  "趙翊琳"
    data.studentEname  = "Nick"
    data.email = "B05502058@ntu.edu.tw"
    data.username = "Nick"
    // console.log(`${window.localStorage.getItem('backendIP')}/api/users/register`)
    return await axios.post(`${window.localStorage.getItem('backendIP')}/api/users/register`, data, {'Content-Type': 'application/json'})
        .then((response) => {
          setModule('login')
        })
        .catch((error) => {
          alert(error.response.data.error)
          setAccount('')
          setPassword('')
          setVarifyPassword('')
        })
  }
  const handleClick = async () => {
    var data = {
      studentId: account,
      password: password
    }
    // console.log('click')
    if (module === 'login'){
      await loginAuthorize(data);
    }else if (module === 'registeration'){
      await registerAuthorize(data);
    }
  };
  const testloginAuthorize = async (data) => {
    return await axios.post('http://127.0.0.1:4000/api/users/login', data, {'Content-Type': 'application/json'})
        .then((response) => {
          history.push("/search")
        })
        .catch((error) => false)
  }
  const test = async (event) => {
    await testloginAuthorize();
  };
  
  const verifyPassword = (val) => {
    // console.log(val, password)
  }
  

  
  return (
      <div className='login-root'>
        <div className='login-container'>
        <Grid  className="tags">
          <StyledTabs  value={module} onChange={handleChange} >
            <StyledTab label="登入" value='login'/>
            <StyledTab label="註冊" value='registeration' />
          </StyledTabs>
        </Grid>
        
        <div >
        {module==='login' &&
          <>
              <TextField
                className="login-input"
                value={account}
                placeholder="輸入帳號"
                label="帳號"
                onChange={e => setAccount(e.target.value)}
              />
              <TextField
                className="login-input"
                type="password"
                value={password}
                placeholder="輸入密碼"
                label="密碼"
                onChange={e => setPassword(e.target.value)}
              />
              <Typography variant="caption" align='right'>Forget password?</Typography>
          </>
        }
        {module==='registeration' &&
          <>
              <TextField
                value={account}
                placeholder="請輸入預註冊的帳號"
                label="帳號"
                className="login-input"
                onChange={e => setAccount(e.target.value)}
              />
              <TextField
                type="password"
                value={password}
                placeholder="輸入密碼"
                label="密碼"
                className="login-input"
                onChange={e => setPassword(e.target.value)}
              />
              <TextField
                type="password"
                value={varifyPassword}
                placeholder="再次輸入密碼"
                label="密碼"
                className="login-input"
                onChange={e => setVarifyPassword(e.target.value)}
              />
              <Typography variant="caption" align='right'>密碼須大於6位字元</Typography>
          </>
        }
        </div>
        <div>
          <Button onClick={handleClick} className="button">
            {module==='login'? "登入":"註冊"}
          </Button> 
        </div>
        {/* <Button onClick={test}>
            test
          </Button>  */}
        </div>
      </div>
  )

}
