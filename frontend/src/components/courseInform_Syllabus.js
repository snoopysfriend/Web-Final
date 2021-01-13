import React, { useState } from 'react';
//
// material-ui Library
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar } from '@material-ui/core/';
import { IconButton, Checkbox, Tab, Tabs } from '@material-ui/core/';
// import Grid from '@material-ui/core/Grid';

//
//Self-Defined
import { Grid, Typography, Textfield } from '../components/self-defined/index'
import Icon from '../styles/icons';
import theme from '../styles/myMuiStyles'


export default function CourseInform_Syllabus(props) {
  const TITLE = ["課程概述", "課程目標", "課程要求", "Office Hours", "參考書目",  "指定閱讀",  "評量方式(僅供參考)"];
  const CONTENT = ["CouCont", "CouGoal", "CouReq", "OfficeHour", "RefBook", "MustBook", "CouEval", ];
  const rules = /[a-z]/;
  const fristEnChar = rules.exec(props.data.CouName).index;
  // console.log(rules.exec(props.data.CouName).index);
  console.log(props.data.CouName.slice(fristEnChar-1,props.data.CouName.length));
  const { CouCont } = props.data; 
  
  return (
    <Grid testborder wh={['100%', '650px']} {...props}>
      {CONTENT.map((item, index) => {
        return (
          <Grid rowFlex padding={[10,0, 10,0]}>
            <Typography variant="h6" style={{minWidth: "200px"}}>
              {TITLE[index]}
            </Typography>
              <Typography variant="body1" >
                {props.data[item].split("\n").map(item => {
                  return (
                   <> {item}
                   <br></br>
                   </>
                  )}
                )}
              </Typography>            
          </Grid>
      )})}
    </Grid>
  );
}
