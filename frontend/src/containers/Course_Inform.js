import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
import { Grid } from '../components/self-defined/grid'

import Typography from '@material-ui/core/Typography';
import Icon from '../styles/icons';



//Columns Data
const tableHeaders = ["CourseId", "DptName", "CouCname", "Cred", "TeaCname","daytime", "ClsRom","CouCode","Class", "ForH","SelCode","CoSelect","Mark","MaxCap"];
const LIST = ["開課學期", "課程名稱", "學分", "時間",  "教室", "授課教師", "授課對象",   "流水號", "課程識別碼", "班次",  "全/半年", "必/選修"];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(1, 2, 1),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function CourseInformList(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const { CouCname } = props.data;
  const TITLE = ["開課學期", "授課教師", "授課對象", "學分", "時間",  "教室",  "流水號", "課程識別碼", "班次",  "全/半年", "必/選修"];
  const CONTENT = ["Year", "TeaCname", "DptName", "Cred", "newDaytime", "ClsRom"];
  const ICONS = [<Icon.TodayOutlinedIcon />, <Icon.TodayOutlinedIcon />, <Icon.TodayOutlinedIcon />, <Icon.TodayOutlinedIcon />, <Icon.TodayOutlinedIcon />, <Icon.TodayOutlinedIcon />];

  return (
    <div className={classes.root}>
      <Grid style={{border: '1px solid'}}>
        <Grid style={{border: '1px solid red'}}>
          <div className={classes.demo}>
            <List dense={dense}>
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
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemText
                      primary={props.data[CONTENT[index]]}
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
              )})}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
