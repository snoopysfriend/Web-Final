import React from 'react';
//
// material-ui Library
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar } from '@material-ui/core/';
import { IconButton, Checkbox } from '@material-ui/core/';
// import Grid from '@material-ui/core/Grid';

//
// Self-Defined
import { Grid, Typography, TextField } from '../components/self-defined/index'
import Icon from '../styles/icons';
import theme from '../styles/myMuiStyles'




export default function CourseInform_Basic(props) {
  // const [secondary, setSecondary] = React.useState(false);
  // console.log('CourseInformList', props);

  const TITLE = ["開課學期", "授課教師", "授課對象", "學分", "時間",  "教室",  "流水號", "課程識別碼", "班次",  "全/半年", "必/選修"];
  const CONTENT = ["Year", "TeaCname", "DptName", "Cred", "DayTime", "ClsRom"];
  const ICONS = [<Icon.TodayOutlinedIcon />, <Icon.TodayOutlinedIcon />, <Icon.TodayOutlinedIcon />, <Icon.TodayOutlinedIcon />, <Icon.TodayOutlinedIcon />, <Icon.TodayOutlinedIcon />];

  return (
    <Grid {...props} margin='none'>
      <List>
        {CONTENT.map((item, index) => {
          return (
            <ListItem>
              <ListItemAvatar> 
                <Avatar>
                {ICONS[index]} 
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={TITLE[index]}
                style={{maxWidth: "80px"}}
                // secondary={secondary ? 'Secondary text' : null}
              />
              <ListItemText
                primary={props.data[CONTENT[index]]}
                // secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>
        )})}
      </List>
    </Grid>
  );
}
