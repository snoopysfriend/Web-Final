import React, { useState, useEffect } from 'react'
import { AuthContext } from '../App'
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
  const {state, dispatch} = React.useContext(AuthContext);
  console.log("Search", state)

  const [originData, setOriginData] = useState([]);
  const [colState, setColState] = React.useState({
    CourseId: true,
    DptName: true,
    CouCname: true,
    Cred: true,
    TeaCname: true,
    DayTime: true,
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
    setColState({ ...colState, [event.target.name]: event.target.checked });
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
          colState={colState} 
          showCheckboxes={showCheckboxes}
          handleChange={handleChange}/>
        <SearchResults data={originData} colState={colState} />
      </div>
    </>
  )
    
}
export default Search;