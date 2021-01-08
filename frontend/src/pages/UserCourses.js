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


const useHomeStyles = makeStyles((theme) => ({
  root: {
  
  },
}), { name: 'UserCourses' })

function UserCourses() {
  return (
    <>
      <Header />
      <Grid >
        <CourseTable />
      </Grid>
    </>
  )
    
}
export default UserCourses;