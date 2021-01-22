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
axios.defaults.withCredentials=true;
const instance = axios.create({ baseURL: 'http://127.0.0.1:4000' });


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
  const sendQuery = async(data) =>{
    console.log(data)
    const res = await axios.post(
      `${window.localStorage.getItem('backendIP')}/api/syllabus`,
      data, 
      {'Content-Type': 'application/json'}
    )
    setOriginData(res.data.content);
    console.log(res.data.content)
  }
  const fullTextQuery = async(text)=>{
    const res = await axios.get(
      `${window.localStorage.getItem('backendIP')}/api/fullsearch?type=Course&text=${text}`,
    )
    var data = res.data.content;
    var data_real = []
    data.forEach((item, index)=>{
      data_real.push(item._source)
    })
    setOriginData(data_real);
    console.log(data_real)
  }
  const fetchResource = async () => {
    const res = await axios.post(
      `${window.localStorage.getItem('backendIP')}/api/syllabus`,
      {}, 
      {'Content-Type': 'application/json'}
    )

    setOriginData(res.data.content);
    console.log(res)
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
          handleChange={handleChange}
          sendQuery={sendQuery}
          fullTextQuery={fullTextQuery}/>
        <SearchResults data={originData} colState={colState} />
      </div>
    </>
  )
    
}
export default Search;