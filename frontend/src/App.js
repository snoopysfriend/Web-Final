import logo from './logo.svg';
import './App.css';
import { HomePage, SearchPage } from './pages';
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from './styles/styles'
import Header from './containers/Header'
import Breadcrumb from './components/breadcrumbs'
import { Route } from 'react-router-dom';
import axios from 'axios';

// const instance = axios.create({ baseURL: 'http://localhost:4000' });

// export const getDefaultData = async () => { 
//     const { data : msg } = await instance.get('/api/syllabus'); 
//     console.log('axios', msg);
//     return msg;
// }

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Header />
      <div className='container'>
      <Breadcrumb />
      <Route path="/" exact component={HomePage} />
      <Route path="/search" component={SearchPage} />
      </div>
    </ThemeProvider>

    </>
  );
}

export default App;
