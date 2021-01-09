import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, Button } from '@material-ui/core';


//"CouEname" "課程名稱（EN）" "DptCode" "學院代號"
const tableHeaders = ["CourseId", "DptName", "CouCname", "Cred", "TeaCname","daytime", "ClsRom","CouCode","Class", "ForH","SelCode","CoSelect","Mark","MaxCap"];
const tableHeadersCN = ["流水號", "授課對象","課程名稱", "學分", "授課教師", "時間", "教室", "課程識別碼", "班次",  "全/半年", "必/選修", "加選方式","選課限制條件",  "總人數"];

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    CourseId: true,
    DptName: true,
    CouCname: true,
    Cred: true,
    TeaCname: true,
    daytime: true,
    ClsRom: true,
    CouCode: false,
    Class: true,
    ForH: false,
    SelCode: false,
    CoSelect: true,
    Mark: true,
    MaxCap: true
  });
  const [showCheckboxes, setShowCheckboxes] = React.useState(false);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const clickToShowCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  }

  return (
    <>
    <Button onClick={clickToShowCheckboxes}>Show</Button>
    {showCheckboxes && <FormGroup row>
      {tableHeaders.map((item, index) => {
        return <FormControlLabel 
        control={<Checkbox checked={state[item]} onChange={handleChange} name={item} color="primary"/>}
        label={tableHeadersCN[index]}
      />
      })}
    </FormGroup>
    }
    
    </>
  );
}
