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
import { Typography } from '../components/self-defined/index'

//
// axios
import axios from 'axios' 
const instance = axios.create({ baseURL: 'http://localhost:4000/api/' });


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (<>{children}</>)}
    </div>
  );
}
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
          setCourseName([CouName.slice(0,fristEnChar-1), CouName.slice(fristEnChar-1,CouName.length)]);
        });
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
              <div className='tabs'>
                <Tabs value={value} onChange={handleChange}>
                  <Tab label="課程大綱" />
                  <Tab label="課程進度" />
                  <Tab label="Ｑ＆Ａ" />
                  <Tab label="相似課程" />
                </Tabs>
              </div>
              {value==0 && <CourseInform_Syllabus data={originData} />}
              {value==1 && <CourseInform_Schedule data={originData} />}
              
              {/* <TabPanel value={value} index={0}>
                <CourseInform_Syllabus data={originData} />
              </TabPanel> */}
              </LoadingPanel>
              {/* <TabPanel value={value} index={1}>
                <CourseInform_Schedule data={originData} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
    
}
export default CourseInform;