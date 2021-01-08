import * as React from 'react';
//Components
import { DataGrid } from '@material-ui/data-grid';
import { Button, FormGroup, FormControlLabel, Checkbox, Link }from '@material-ui/core'

//Styles
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useMuiDataGridStyles } from '../styles/dataGridStyles'
const columnsStyle = {
  headerAlign: 'center',
  align: 'center',
}

//Columns Data
const tableHeaders = ["CourseId", "DptName", "CouCname", "Cred", "TeaCname","daytime", "ClsRom","CouCode","Class", "ForH","SelCode","CoSelect","Mark","MaxCap"];
const tableHeadersCN = ["流水號", "授課對象","課程名稱", "學分", "授課教師", "時間", "教室", "課程識別碼", "班次",  "全/半年", "必/選修", "加選方式","選課限制條件",  "總人數"];

function createColumns(field, headerName, width, hide, renderCell) {
  // return renderCell? { field, headerName, width, hide, renderCell } : { field, headerName, width, hide };
  return { field, headerName, width, hide, renderCell };
}

const getCourseInform = () => {
  console.log('getCourseInform')
}
const columns = [
  createColumns('id', 'ID', 30, false),
  createColumns('CourseId',  '流水號', 60, false),
  createColumns('DptName',  '授課對象', 75, false),
  createColumns('CouCname',  '課程名稱', 130, false, (params) => {
    console.log(params)
    return (
    <Link
      style={{ margin: '0 auto' }}
      href={`http://127.0.0.1:3000/course/${params.row.CourseId}`}
      onClick={ getCourseInform }
    >
      {params.row.CouCname}
    </Link>
  )}),
  createColumns("Cred",  "學分", 50, false),
  createColumns("TeaCname",  "授課教師", 130, false),
  createColumns("daytime",  "時間", 130, false),
  createColumns("ClsRom",  "教室", 130, false),
  createColumns("CouCode", "課程識別碼", 130, false),
  createColumns("Class", "班次", 50, false),
  createColumns("ForH", "全/半年", 75, false),
  createColumns("SelCode",  "必/選修", 75, false),
  createColumns("CoSelect",  "加選方式", 75, false),
  createColumns("Mark",  "選課限制條件", 130, false),
  createColumns("MaxCap",  "總人數", 130, false),
  createColumns("AddtoList",  "我的課表", 130, false, (params) => (
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ margin: '0 auto' }}
      >
        加入
      </Button>
  )),
].map(item => ({...item, ...columnsStyle}));

//Search Results
// 
function createRows( id, item) {
  // console.log("input", id, _id, Class, ClsRom, CoSelect, CouCname, CouCode, CouEname, CourseId, Cred, DptCode, DptName, ForH, Mark, MaxCap, SelCode, TeaCname)
  return { id: id , 
          CourseId: item.CourseId || "", 
          DptName: item.DptName || "",
          CouCname: item.CouCname || "", 
          Cred: item.Cred || "", 
          TeaCname: item.TeaCname || "", 
          daytime: item.daytime || "",
          ClsRom: item.ClsRom || "", 
          CouCode: item.CouCode || "", 
          Class: item.Class || "", 
          ForH: item.ForH || "", 
          SelCode: item.SelCode || "", 
          CoSelect: item.CoSelect || "", 
          Mark: item.Mark || "", 
          MaxCap: item.MaxCap || ""
        };
}


// const rows = [
//   { id: 1, CourseId: "82737", DptName: "電機系", CouCname: "微積分", Cred: "2", TeaCname: "余正道", daytime: "一X三67五67", ClsRom: "新302  新302  新302", CouCode: "201 49810", Class: "1", ForH: "半年年級", SelCode: "必修年級",CoSelect: "3",Mark: "密集課程。統一教學.一10為實習課.初選將直接帶入此班次的微積分2.加退選階段請自行加選微積分2.總人數限 90人限本系所學生(含輔系、雙修生)院.XLS", MaxCap: "總人數限 90人", AddtoList: "Add"},
// ];



export default function SearchResults(props) {
  const classes = useMuiDataGridStyles();
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
    MaxCap: true,
    AddtoList: true
  });
  const [showCheckboxes, setShowCheckboxes] = React.useState(false);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const clickToShowCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  }
  const rows = props.data.map((d, index) => {
    return createRows(index, d)
  });
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Button onClick={clickToShowCheckboxes}>Show</Button>
      {showCheckboxes && 
        <FormGroup row>
          {tableHeaders.map((item, index) => {
            return (
              <FormControlLabel 
                control={<Checkbox checked={state[item]} onChange={handleChange} name={item} color="primary"/>}
                label={tableHeadersCN[index]}
              />
            )
          })}
        </FormGroup>
      }
      <DataGrid 
        classes={{ colCell: classes.colCell }}
        rows={rows}
        columns={columns.map(function(item){
          item.hide = !state[item.field];
          return item;
        })} 
        pageSize={5} 
      /> 
    </div>
  );
}
