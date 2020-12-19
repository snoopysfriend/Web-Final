import logo from './logo.svg';
import './App.css';
import Header from './containers/Header'
import TempApp from './example/TempApp'
import { items } from './example/sample-data'
import Filters from './containers/Filters'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Segment } from 'semantic-ui-react'


function App() {
  return (
    <>
      <Header />
      <Grid columns='equal' >
      <Grid.Row >
        <Grid.Column>
          <Filters />
        </Grid.Column>
        <Grid.Column>
          <TempApp items={items}/> 
        </Grid.Column>
      </Grid.Row>
      </Grid> 
      <div className="searchReslut">
          12345
      </div>
      
      
    </>
  );
}

export default App;
