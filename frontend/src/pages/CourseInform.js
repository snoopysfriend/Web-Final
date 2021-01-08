import React, { useState, useEffect } from 'react'
import '../styles/normalize.css'
import { makeStyles } from '@material-ui/styles';
import { TStyle } from '../styles/styles'
import Login from '../containers/Login'
import { Typography, Divider, Breadcrumbs, Link } from '@material-ui/core';
import { Grid } from '../components/self-defined/grid'
import Query from '../containers/Query'
import Header from '../containers/Header'
import CourseTable from '../containers/CourseTable'
import Breadcrumb from '../components/breadcrumbs'
import SearchResults from '../containers/SearchResults'

import CourseInformList from '../components/courseInfoList'

import axios from 'axios' 
const instance = axios.create({ baseURL: 'http://localhost:4000' });

const useCourseInformStyles = makeStyles((theme) => ({
  root: {
  
  },
}), { name: 'CourseInform' })
//{"message":"success","content":[{"Tag":[],"_id":"5ff5eb52f701353e376e5ec9","CourseId":"82737","DptCode":"9010","DptName":"電機系","CouCode":"201 49810","Class":"01","Cred":2,"ForH":"半年年級","SelCode":"必修年級","CouCname":"微積分1498","CouEname":"CALCULUS (1)","TeaCname":"余正道CU","Mark":"密集課程。統一教學.一10為實習課.初選將直接帶入此班次的微積分2.加退選階段請自行加選微積分2.總人數限 90人限本系所學生(含輔系、雙修生)院.XLS","CoSelect":3,"ClsRom":"新302  新302  新302","MaxCap":"總人數限 90人"}]}

function CourseInform(props) {
  const [originData, setOriginData] = useState([]);
  // console.log("CourseInform", props.match.params.courseId)

  const handleClick = () => {
    console.log('handleClick')
  }
  const fetchResource = async () => {
    const res = await instance.get(`/api/courseInform?year=109&courseId=${props.match.params.courseId}`); 
    setOriginData(res.data.content[0]);
  }
  useEffect(() => { 
    fetchResource();
  }, [])
  console.log(originData)

  return (
    <>
      <Header />
      <Grid width="300px">
        <CourseInformList data={originData}/>
      </Grid>
    </>
  )
    
}
export default CourseInform;