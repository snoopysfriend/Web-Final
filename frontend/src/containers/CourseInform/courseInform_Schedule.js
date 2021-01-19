import React, { useState } from 'react';
import { Divider } from '@material-ui/core/';
import { Typography } from '../../components/self-defined/index'


export default function CourseInform_Schedule(props) {
  const CouProg = JSON.parse(props.data.CouProg);
  const WEEK = CouProg['週次'];
  const DATE = CouProg['日期'];
  const CONTENT = CouProg['單元主題'];

  console.log(WEEK[0]);
  return (
    <div className='schedule'>
      <div className='rowFlex grid'>
        <Typography variant="subtitle1" center className='cell1'>週次</Typography>
        <Typography variant="subtitle1" center className='cell2'>日期</Typography>
        <Typography variant="subtitle1" className='cell3'>單元主題</Typography>
      </div>
      {Object.values(DATE).map((date, index) => (
        <>
          <div className='rowFlex grid'>
            <Typography variant="subtitle1" center className='cell1'> {WEEK[index]} </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1" center className='cell2'> {date} </Typography>  
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1" className='cell3'> {CONTENT[index]} </Typography>   
          </div>
          <Divider light variant="middle"/>
        </>
      ))}
    </div>
  );
}
