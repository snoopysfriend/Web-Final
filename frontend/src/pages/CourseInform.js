import React, { useState, useEffect } from 'react'
import '../styles/normalize.css'
import { makeStyles } from '@material-ui/styles';
import { Divider, Breadcrumbs, Link, Tab, Tabs } from '@material-ui/core';
import '../styles/app.scss';

import Header from '../containers/Header/Header'
import Breadcrumb from '../containers/Header/components/breadcrumbs'
import CourseInform_Basic from '../containers/CourseInform/courseInform_Basic'
import CourseInform_Syllabus from '../containers/CourseInform/courseInform_Syllabus'
import CourseInform_Schedule from '../containers/CourseInform/courseInform_Schedule'
//
//self-defined
import { Grid, Typography, Textfield } from '../components/self-defined/index'
import { _container, _courseInform } from '../styles/styledVariables'


import axios from 'axios' 
const instance = axios.create({ baseURL: 'http://localhost:4000/api/' });

const useCourseInformStyles = makeStyles((theme) => ({
  root: {
  
  },
}), { name: 'CourseInform' })

// {"message":"success","content":[{"CourseId":"82561","CouName":"工程數學-微分方程(一)Engineering Mathematics-Differential Equation(Ⅰ)","Year":"109-1","DeptName":"","TeaCname":"黃定洧","CouCode":"901 20130","Class":"03","ForH":"半年","SorM":"必修","DayTime":"星期三3,4(10:20~12:10)","ClsRom":"電二146","Mark":"本系優先。總人數上限：55人","Skills":"核心能力與課程規劃關聯圖","CouCont":"(1) 一階微分方程的解法和應用 (2) 高階微分方程的解法和應用 (3) 微分方程的級數解 (4) 拉普拉斯轉換 (5) 傅立葉級數與傅立葉轉換 (6) 偏微分方程","CouGoal":"培養計算以及解決數學問題的能力","CouReq":"先修過微積分為宜 評分方式：作業 15%, 期中考 42.5%, 期末考 42.5%","OfficeHour":"","RefBook":"Dennis G. Zill and Warren S. Wright, Differential Equations-with Boundary-Value Problem, 9th ed., Metric Version, CENGAGE Learning, 2018.","MustBook":"待補","CouEval":"","CouProg":"","_id":"5ff6f21fa7e3303a91f521d1","Cred":2}]}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Typography>{children}</Typography>
      )}
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
  const handleClick = () => {
    console.log('handleClick')
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => { 
    const fetchData = async () => {
      await instance.get(`courseInform?year=109&courseId=${props.match.params.courseId}`)
        .then(result => {
          
          setOriginData(result.data.content[0]);
          const rules = /[a-z]/;
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
      <Grid sty={_container}>
        <Breadcrumb />
        <Grid>
          <LoadingPanel isLoading={isLoading}>
            <Grid clear sty={_courseInform.title}>
              <Typography variant="h4">{courseName[0]}</Typography>
              <Typography variant="h5">{courseName[1]}</Typography>
            </Grid>
          </LoadingPanel>
          <div className='rowFlex' >
            <LoadingPanel isLoading={isLoading}>
              <CourseInform_Basic data={originData} sty={_courseInform.basic}/>
            </LoadingPanel>
            <Grid>
            <LoadingPanel isLoading={isLoading}>
              <Grid clear sty={_courseInform.tabs}>
                <Tabs value={value} onChange={handleChange}>
                  <Tab label="課程大綱" />
                  <Tab label="課程進度" />
                  <Tab label="Ｑ＆Ａ" />
                  <Tab label="相似課程" />
                </Tabs>
              </Grid>
              <TabPanel value={value} index={0}>
                <CourseInform_Syllabus data={originData} />
              </TabPanel>
              </LoadingPanel>
              <TabPanel value={value} index={1}>
                <CourseInform_Schedule data={originData} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  )
    
}
export default CourseInform;