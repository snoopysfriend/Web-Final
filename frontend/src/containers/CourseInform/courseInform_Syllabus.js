import React, { useState } from 'react';
import { Divider } from '@material-ui/core/';
//
//Self-Defined
import { Grid, Typography, Textfield } from '../../components/self-defined/index'
import Icon from '../../styles/icons';
import theme from '../../styles/myMuiStyles'
import { _courseInform } from '../../styles/styledVariables'


export default function CourseInform_Syllabus(props) {
  const TITLE = ["課程概述", "課程目標", "課程要求", "Office Hours", "參考書目",  "指定閱讀",  "評量方式(僅供參考)"];
  const CONTENT = ["CouCont", "CouGoal", "CouReq", "OfficeHour", "RefBook", "MustBook", "CouEval", ];
  
  const CouProg = JSON.parse(props.data.CouProg);
  console.log(CouProg);
  // console.log(props.data);
  const { CouCont } = props.data; 
  
  return (
    <Grid wh={['100%', '650px']} {...props}>
      {CONTENT.map((item, index) => {
        return (
          <>
          <Grid rowFlex padding={[10,0, 10,0]}>
            <Typography variant="subtitle1" center style={{minWidth: "200px"}}>
              {TITLE[index]}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body1" sty={_courseInform.syllabus}>
              {props.data[item].split("\n").map(item => {
                return (
                  <> {item}
                  <br></br>
                  </>
                )}
              )}
            </Typography>   
          </Grid>
          <Divider light variant="middle"/>
          </>
      )})}
    </Grid>
    
  );
}
