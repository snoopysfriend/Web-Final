import React from 'react';
import Home from './pages/Home';
import { HomePage, SearchPage, UserPage, CourseInformPage } from './pages';
import { ThemeProvider } from "@material-ui/core/styles";
import myMuiTheme from './styles/myMuiStyles'
import { Route } from 'react-router-dom';

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

// window.localStorage.setItem("backendIP", "http://54.165.151.147:4000")
window.localStorage.setItem("backendIP", "http://localhost:4000")

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      window.localStorage.setItem("user", action.payload.studentId);
      window.localStorage.setItem("isAuthenticated", true);
      // https://stackoverflow.com/questions/62487168/loosing-component-data-on-page-refresh-in-react
      // localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        // isAuthenticated: true,
        // user: action.payload.user,
        // token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  // console.log('App ', state, dispatch)
  return (
    <>
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <ThemeProvider theme={myMuiTheme}>
      <Route path="/" exact component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/user" component={UserPage} />
      <Route path="/course/:courseId?" component={CourseInformPage} />
      {/* <Route path="*">
        <h1>404</h1>
      </Route> */}
    </ThemeProvider>
    </AuthContext.Provider>
    </>
  );
}

export default App;
