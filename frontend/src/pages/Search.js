import React, { useState, useEffect } from 'react'
//
// material-ui Library
import { Typography, Divider, Button } from '@material-ui/core';
//
// Self-Defined
import Query from '../containers/Query/Query'
import Header from '../containers/Header/Header'
import Breadcrumb from '../containers/Header/components/breadcrumbs'
import SearchResults from '../containers/SearchResults/SearchResults'
import { Grid, TextField } from '../components/self-defined/index'
//
// Styles
import { _container, _query } from '../styles/styledVariables'
//
//axios
import axios from 'axios' 
const instance = axios.create({ baseURL: 'http://localhost:4000' });

function Search(props) {
  const [originData, setOriginData] = useState([]);
  const [state, setState] = React.useState({
    CourseId: true,
    DptName: true,
    CouCname: true,
    Cred: true,
    TeaCname: true,
    daytime: true,
    ClsRom: true,
    CouCode: false,
    Class: true,
    ForH: false,
    SelCode: false,
    CoSelect: true,
    Mark: true,
    MaxCap: true,
    AddtoList: true
  });
  const [showCheckboxes, setShowCheckboxes] = React.useState(false);
  const handleClick = () => {
    console.log('handleClick')
  }
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const clickToShow = () => setShowCheckboxes(!showCheckboxes);
  const fetchResource = async () => {
    const res = await instance.get('/api/syllabus'); 
    setOriginData(res.data.content);
  }

  useEffect(() => { 
    fetchResource();
  }, [])

  return (
    <Grid noBackground>
      <Header />
      <Grid id='container' style={_container}>
        <Breadcrumb />
        <Query clickToShow={clickToShow} 
          state={state} 
          showCheckboxes={showCheckboxes}
          handleChange={handleChange}/>
        <SearchResults data={originData} state={state} />
      </Grid>
    </Grid>
  )
    
}
export default Search;