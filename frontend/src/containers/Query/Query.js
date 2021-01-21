import React from 'react'
//
// material-ui Library
import  Autocomplete  from '@material-ui/lab/Autocomplete';
import { Typography, TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../styles/myMuiStyles'
//
// Self-Defined
import { Button } from '../../components/self-defined/index'
import  { deptMj, libEd, acaProg, phyMil, genCour } from '../../resources/index'
import { Multiselect, Checkboxes, SearchBar } from './components/index';
import ColFilters from '../SearchResults/components/columnsFilter'

const Multi = (func, options, name) => {
  return (
    <div className='multiSelect rowFlex' >
      <div className='title'>
        <Typography variant='subtitle1'>{name}</Typography>
      </div>
      <div>
        <ThemeProvider theme={theme}>
        <Autocomplete
              id={`Autocomplete${name}`}
            multiple
            size='small'
            options={options}
            renderInput={(params) => (
              <TextField
                  {...params}
                  noWrap
                  ariaValueText="ariaValueText"
                  InputProps={{...params.InputProps, disableUnderline: true, value: "j6m3wj6"}}
                  placeholder={name}
              />
            )}
            onChange={func}
          />
        </ThemeProvider>
      </div>
    </div>
  )
}

function Query(props) {
  const [majorList, setMajor] = React.useState([])
  var [selectedDept, setSelectedDept] = React.useState([])
  var [selectedMajor, setSelectedMajor] = React.useState([])
  var [selectedLibEd, setSelectedLibEd] = React.useState([])
  var [selectedPhyMil, setSelectedPhyMil] = React.useState([])
  var [selectedGenCour, setSelectedGenCour] = React.useState([])
  var [selectedAcaProg, setSelectedAcaProg] = React.useState([])
  var [searchText, setSearchText] = React.useState("")
  const depList = deptMj.department;

  const clickToSearch = (searchType) => {
    console.log('clickToSearch: ')
    console.log(searchType)
    // console.log(selectedDept);
    // console.log(selectedMajor);
    // console.log(selectedLibEd);
    // console.log(selectedPhyMil);
    // console.log(selectedGenCour);
    // console.log(selectedAcaProg);
    if (searchType === '篩選'){
      var data = {
        searchType: searchType,
        selectedDept: ['文學院','理學院','社會科學院'],
        selectedMajor: ['中國文學系'],
        selectedLibEd: ["A1: 文學與藝術領域","A2: 歷史思維領域","A3: 世界文明領域",],
        selectedPhyMil: ["健康體適能"],
        selectedGenCour: ["國文"],
        selectedAcaProg: ["P060 生物產業自動化學程",
        "P070 分子醫學學分學程",
        "P080 食品科技學程",
        "P090 休閒事業經營管理學程",
        "P100 農業環境污染與資源保育學程",
        "P110 醫學工程學程",
        "P120 知識管理學程",
        "P130 海洋科學學程",
        "P140 傳播學程",]
      }
      props.sendQuery(data);
    }else{
      console.log(searchText)
      props.fullTextQuery(searchText);
    }
  }
  const handleTextFieldChange = (e) =>{
    var text = e.target.value
    setSearchText(text)
  }

  const handleDepUpate = async (event, value) => {
    console.log(event);
    let majorLt = [];
    value.map(dep => {
      majorLt = [...majorLt, ...deptMj[dep]];
    })
    setMajor(majorLt)
}
  const data = {

  }

  return (
    <div className='Query' >
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        cancelOnEscape
        clickToSearch = {clickToSearch}
        handleTextFieldChange={handleTextFieldChange}
      />
      <div className='rowFlex'>
        <div >
          {Multi(handleDepUpate, depList, "學院")}
          {Multi(handleDepUpate, majorList, "系所")}
          {Multi(handleDepUpate, libEd, "通識")}
          {/* <Multiselect name="學院" onChange={handleDepUpate} optionList={depList} /> */}
          {/* <Multiselect name="系所" onChange={handleDepUpate} optionList={majorList} /> */}
          {/* <Multiselect name="通識"  optionList={libEd}/> */}
        </div>
        <div >
          <Multiselect name="體育/軍訓" optionList={phyMil} /> 
          <Multiselect name="語文/基本能力"  optionList={genCour} />
          <Multiselect name="學程" optionList={acaProg} />
        </div>
      </div>
      <div className='rowFlex'>
        <Checkboxes name="其他"/>
        <div className='rowFlex colFilter'>
          <Button onClick={props.clickToShow} className="button-show">Show</Button>
          {props.showCheckboxes && 
              <ColFilters colState={props.colState} onChange={props.handleChange} showCheckboxes={props.showCheckboxes}/>
          }
        </div>
      </div>
    </div>
  )
}
export default Query;



