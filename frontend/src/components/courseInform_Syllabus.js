import React, { useState } from 'react';
//
// material-ui Library
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar } from '@material-ui/core/';
import { IconButton, Checkbox, Typography, Tab, Tabs } from '@material-ui/core/';
// import Grid from '@material-ui/core/Grid';

//
//Self-Defined
import { Grid } from './self-defined/grid'
import Icon from '../styles/icons';
import theme from '../styles/styles'


export default function CourseInform_Syllabus(props) {
  const TITLE = ["課程概述", "課程目標", "課程要求", "Office Hours", "參考書目",  "指定閱讀",  "評量方式(僅供參考)"];
  const CONTENT = ["CouCont", "CouGoal", "CouReq", "OfficeHour", "RefBook", "MustBook", "CouEval", ];
  const rules = /[a-z]/;
  // console.log(rules.exec(props.data.CouName).index);
  // console.log(props.data.CouName.slice(12,props.data.CouName.length));
  console.log(Object.keys(props.data).length)
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

                {(Object.keys(props.data).length) && 
                  props.data[item].split("\n").map(item => {
                    console.log("#")
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
