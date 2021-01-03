import React, { useState, useEffect } from 'react'
import '../styles/normalize.css'

import Query from '../containers/Query'
import Header from '../containers/Header'
import Breadcrumb from '../components/breadcrumbs'
import SearchResults from '../containers/SearchResults'

import { Typography, Divider, Breadcrumbs, Link } from '@material-ui/core';

// import { getDefaultData } from './axios'
import axios from 'axios' 
const instance = axios.create({ baseURL: 'http://localhost:4000' });

function Search(props) {
  const [originData, setOriginData] = useState([]);

  const handleClick = () => {
    console.log('handleClick')
  }

  const fetchResource = async () => {
    const res = await instance.get('/api/syllabus'); 
    setOriginData(res.data.message);
  }
  useEffect(() => { 
    
    fetchResource();
  }, [])
  
  // console.log('originData ', originData)
  return (
    <>
      <Header />
      <div className='container'>
      <Breadcrumb />
        <Query />
        <Divider variant="middle" />
        <div className="searchReslut">
            <SearchResults data={originData}/>
        </div>
      </div>
    </>
  )
    
}
export default Search;