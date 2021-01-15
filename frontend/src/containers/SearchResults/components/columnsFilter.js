import * as React from 'react';
//Components
import { DataGrid } from '@material-ui/data-grid';
import { Button, FormGroup, FormControlLabel, Checkbox, Link }from '@material-ui/core'

//Styles
import { Grid, Typography } from '../../../components/self-defined/index'
import { _searchResult } from '../../../styles/styledVariables'


//Columns Data
const tableHeaders = ["CourseId", "DptName", "CouCname", "Cred", "TeaCname","daytime", "ClsRom","CouCode","Class", "ForH","SelCode","CoSelect","Mark","MaxCap"];
const tableHeadersCN = ["流水號", "授課對象","課程名稱", "學分", "授課教師", "時間", "教室", "課程識別碼", "班次",  "全/半年", "必/選修", "加選方式","選課限制條件",  "總人數"];

export default function ColFilters(props) {
  return (
    <Grid border scroll rowFlex padding='small'>
      {tableHeaders.map((item, index) => {
        return (
          <FormControlLabel 
            control={
              <Checkbox checked={props.state[item]} 
                onChange={props.onChange} 
                name={item} 
                color="primary"/>
            }
            label={ <Typography noWrap>{tableHeadersCN[index]}</Typography>}>
          </FormControlLabel>
        )
      })}
    </Grid>
  );
}
