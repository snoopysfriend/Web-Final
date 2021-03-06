import React, { useState, useEffect } from 'react'
//
// Material-ui Library
import { Tab, Tabs } from '@material-ui/core';
//
// Components
import Header from '../containers/Header/Header'
import Breadcrumb from '../containers/Header/components/breadcrumbs'
import CourseInform_Basic from '../containers/CourseInform/courseInform_Basic'
import CourseInform_Syllabus from '../containers/CourseInform/courseInform_Syllabus'
import CourseInform_Schedule from '../containers/CourseInform/courseInform_Schedule'
import CourseInform_QA from '../containers/CourseInform/courseInform_QA'
import { Typography } from '../components/self-defined/index'

//
// axios
import axios from 'axios' 

const instance = axios.create({ baseURL: `${window.localStorage.getItem('backendIP')}/api/` });

function LoadingPanel(props) {
  const { isLoading, children, index, ...other } = props;
  return isLoading? <></>:<>{children}</>;
}


function CourseInform(props) {
  const [originData, setOriginData] = useState([]);
  const [courseName, setCourseName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => { 
    const fetchData = async () => {
      await instance.get(`courseInform?year=109&courseId=${props.match.params.courseId}`)
        .then(result => {
          setOriginData(result.data.content[0]);
          const rules = /[a-zA-Z]/;
          const { CouName } = result.data.content[0];
          const fristEnChar = rules.exec(CouName).index;
          setCourseName([CouName.slice(0,fristEnChar), CouName.slice(fristEnChar,CouName.length)]);
        })
        .catch(err => {console.log(err)});
      setIsLoading(false);
    }
    fetchData();
  }, [])
  return (
    <>
      <Header />
      <div className='container CouInform'>
        <Breadcrumb />
        <div>
          <LoadingPanel isLoading={isLoading}>
            <div className='title'>
              <Typography variant="h4">{courseName[0]}</Typography>
              <Typography variant="h5">{courseName[1]}</Typography>
            </div>
          </LoadingPanel>
          <div className='rowFlex'>
            <LoadingPanel isLoading={isLoading}>
              <CourseInform_Basic data={originData} />
            </LoadingPanel>
          <div className='tablePanel'>
            <LoadingPanel isLoading={isLoading}>
                <Tabs className='tabs' value={value} onChange={handleChange}>
                  <Tab className='tab' label="課程大綱" />
                  <Tab className='tab' label="課程進度" />
                  <Tab className='tab' label="Ｑ＆Ａ" />
                  <Tab className='tab' label="相似課程" />
                </Tabs>
              {value===0 && <CourseInform_Syllabus  data={originData} />}
              {value===1 && <CourseInform_Schedule data={originData} />}
              {value===2 && <CourseInform_QA data={props.match.params.courseId}/>}
              
              </LoadingPanel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
    
}
export default CourseInform;