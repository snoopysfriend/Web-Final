import React, { useState } from 'react';
import { Divider } from '@material-ui/core/';
//
//Self-Defined
import { Typography } from '../../components/self-defined/index'

export default function CourseInform_Syllabus(props) {
  const TITLE = ["課程概述", "課程目標", "課程要求", "Office Hours", "參考書目",  "指定閱讀",  "評量方式(僅供參考)"];
  const CONTENT = ["CouCont", "CouGoal", "CouReq", "OfficeHour", "RefBook", "MustBook", "CouEval", ];
  
  return (
    <div className='syllabus'>
    {CONTENT.map((item, index) => (
    <>
      <div className='rowFlex grid'>
        <Typography variant="subtitle1" center className='cell1'>
          {TITLE[index]}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body1" className='cell2'>
          {props.data && (props.data[item].split("\n").map(item => (
              <> {item} <br></br> </>
          )))}
        </Typography>   
      </div>
      <Divider light variant="middle"/>
    </>
    ))}
    </div>
    
  );
}
