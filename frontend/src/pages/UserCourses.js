import React, { useState, useEffect } from 'react'
//
// material-ui Library
import { makeStyles } from '@material-ui/styles';
import { Divider, Breadcrumbs, Link } from '@material-ui/core';

//
// Self-Defined
import { Grid, Typography, TextField } from '../components/self-defined/index'
import Header from '../containers/Header'
import CourseSchedule from '../containers/CourseSchedule'


const useHomeStyles = makeStyles((theme) => ({
  root: {
  
  },
}), { name: 'UserCourses' })

function UserCourses() {
  return (
    <>
      <Header />
      <Grid >
        <CourseSchedule />
      </Grid>
    </>
  )
    
}
export default UserCourses;