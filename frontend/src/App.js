import { HomePage, SearchPage, UserPage, CourseInformPage } from './pages';
import { ThemeProvider } from "@material-ui/core/styles";
import myMuiTheme from './styles/myMuiStyles'
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
    <ThemeProvider theme={myMuiTheme}>
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
