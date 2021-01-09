import React, { useState, useEffect } from 'react'
import '../styles/normalize.css'
import { makeStyles } from '@material-ui/styles';
import { Typography, Divider, Breadcrumbs, Link, Tab, Tabs } from '@material-ui/core';

//
//containers
import Header from '../containers/Header'
//
//components
import Breadcrumb from '../components/breadcrumbs'
import CourseInform_Basic from '../components/courseInform_Basic'
import CourseInform_Syllabus from '../components/courseInform_Syllabus'
//
//self-defined
import { Grid } from '../components/self-defined/grid'

import axios from 'axios' 
const instance = axios.create({ baseURL: 'http://localhost:4000' });

const useCourseInformStyles = makeStyles((theme) => ({
  root: {
  
  },
}), { name: 'CourseInform' })

// {"message":"success","content":[{"CourseId":"82561","CouName":"工程數學-微分方程(一)Engineering Mathematics-Differential Equation(Ⅰ)","Year":"109-1","DeptName":"","TeaCname":"黃定洧","CouCode":"901 20130","Class":"03","ForH":"半年","SorM":"必修","DayTime":"星期三3,4(10:20~12:10)","ClsRom":"電二146","Mark":"本系優先。總人數上限：55人","Skills":"核心能力與課程規劃關聯圖","CouCont":"(1) 一階微分方程的解法和應用 (2) 高階微分方程的解法和應用 (3) 微分方程的級數解 (4) 拉普拉斯轉換 (5) 傅立葉級數與傅立葉轉換 (6) 偏微分方程","CouGoal":"培養計算以及解決數學問題的能力","CouReq":"先修過微積分為宜 評分方式：作業 15%, 期中考 42.5%, 期末考 42.5%","OfficeHour":"","RefBook":"Dennis G. Zill and Warren S. Wright, Differential Equations-with Boundary-Value Problem, 9th ed., Metric Version, CENGAGE Learning, 2018.","MustBook":"待補","CouEval":"","CouProg":"","_id":"5ff6f21fa7e3303a91f521d1","Cred":2}]}
const styles = {
  container: {
    backgroundColor: 'red',
  }
}

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


function CourseInform(props) {
  const [originData, setOriginData] = useState([]);
  const [value, setValue] = React.useState(0);
  

  const handleClick = () => {
    console.log('handleClick')
  }

  const fetchResource = async () => {
    const res = await instance.get(`/api/courseInform?year=109&courseId=${props.match.params.courseId}`);
    return res.data.content[0];
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => { 
    const fetchData = async () => {
      // STEP 2：使用 Promise.all 搭配 await 等待兩個 API 都取得回應後才繼續
      const data = await fetchResource();
      // console.log('data', data);
      return data;
    };

    // fetchData();
    fetchData().then(setOriginData);
  }, [])
  console.log("CourseInform", props.match.params.courseId)
  return (
    <>
      <Header />
      <div class="container" >
        <Breadcrumb />
        <Grid>
          <Typography variant="h4">課程名稱：{originData['CouName']}</Typography>
          <Grid rowFlex >
            <CourseInform_Basic data={originData} wh={['300px', 'auto']}/>
            <Grid>
              <Tabs value={value} onChange={handleChange}>
                <Tab label="課程大綱" />
                <Tab label="課程進度" />
                <Tab label="Ｑ＆Ａ" />
                <Tab label="相似課程" />
              </Tabs>
              <TabPanel value={value} index={0}>
                <CourseInform_Syllabus data={originData} padding={[10,30,10,30]} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
    
}
export default CourseInform;