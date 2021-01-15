import logo from './logo.svg';
import './App.css';
import { HomePage, SearchPage, UserPage, CourseInformPage } from './pages';
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import theme from './styles/myMuiStyles'
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Route path="/" exact component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/user" component={UserPage} />
      <Route path="/course/:courseId?" component={CourseInformPage} />
      {/* <Route path="*">
        <h1>404</h1>
      </Route> */}
    </ThemeProvider>

    </>
  );
}

export default App;
