import React, { useState, useEffect } from 'react'
//
// Components
import Query from '../containers/Query/Query'
import Header from '../containers/Header/Header'
import Breadcrumb from '../containers/Header/components/breadcrumbs'
import SearchResults from '../containers/SearchResults/SearchResults'
//
// axios
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
    <>
      <Header />
      <div className='container'>
        <Breadcrumb />
        <Query clickToShow={clickToShow} 
          state={state} 
          showCheckboxes={showCheckboxes}
          handleChange={handleChange}/>
        <SearchResults data={originData} state={state} />
      </div>
    </>
  )
    
}
export default Search;