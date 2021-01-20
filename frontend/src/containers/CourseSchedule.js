import React from 'react';
import ReactDOM from 'react-dom';
//
// material-ui Library
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core/';
import { Paper, Typography } from '@material-ui/core/';
// import { courseBar } from './CourseSchesule/courseBar'
//
// Self-Defined

const theme = createMuiTheme({
  overrides: {
    MuiTableContainer: {
      root: {
        maxWidth: '1350px',
        margin: '24px auto',
      }
    },
    MuiTableCell: {
      root: {
        
      },
      body: {
        position: 'relative',
        padding: '0px',
        boxSizing: 'border-box',
        border: '1px solid #000',
        width: '85px !important',
        height: '60px',
      }
    },
  }
});

function createSection(name, clock) {
    return { name, clock };
}
const SECTIONS = [
    // createSection("0", "7:20~8:10"),
    createSection("1", "7:20~8:10"),
    createSection("2", "7:20~8:10"),
    createSection("3", "7:20~8:10"),
    createSection("4", "7:20~8:10"),
    createSection("5", "7:20~8:10"),
    createSection("6", "7:20~8:10"),
    createSection("7", "7:20~8:10"),
    createSection("8", "7:20~8:10"),
    createSection("9", "7:20~8:10"),
    createSection("10", "7:20~8:10"),
    createSection("A", "7:20~8:10"),
    createSection("B", "7:20~8:10"),
    createSection("C", "7:20~8:10"),
    createSection("D", "7:20~8:10"),

]
const DAYS = ["X","一","二","三","四","五","六"];

const response =  {"message":"success","content":[{"courseId":"14980","time":[[29,1],[58,2]],"place":"博理112總人  博理112總人"}]}


// {"message":"success","content":{"CourseId":["14980"],"daytime":[{"courseId":"14980","time":[[29,1],[58,2]],"place":"博理112總人  博理112總人"}],"_id":"6008203aa7439c3b1bb86ebc","StudId":"XUXXU","TimStp":"2021-01-20T12:21:14.908Z"}}
// {"message":"success","content":[{"courseId":"14980","time":[[29,1],[58,2]],"place":"博理112總人  博理112總人"}]}

const GetComponents = () => {
  
}


export default function CourseSchedule() {
  const [sectionState, setSectionState] = React.useState(Array.from({length: 100}, (v, i) => 0));
  const [sectionChildren, setSectionChildren] = React.useState(Array.from({length: 100}, (v, i) => []));
  const [test, setTest] = React.useState(1);
  console.log(sectionChildren)

  const courseBar = async(sectionValues) => {
    // console.log(document.getElementById(`section${sectionValue}`).childElementCount);
    // var findSection = sectionState.find((item) => item.Id == sectionId);
    // if (!findSection) setSectionState([...sectionState, {Id: sectionId, count:1}]);
    const newState = sectionState;
    // const element = [];
    // const elements = (sectionValue, during) => {
    //   return (
    //     <>
    //     {sectionValues.map(item => {
    //       newState[item[0]] += 1;
    //       return (
    //         <div className='courseBar' style={{'top': `${4 * (newState[item[0]])+1}px`, 'left': '4px', width: `${84*2 - 8}px`}}>courseBar</div>
    //       )
    //     })}
    //     </>
    //   )
    // }
    const elements = [];
    // const root = [ele,document.getElementById(`section7`)]
    {sectionValues.map((item, index) => {
        console.log(`index ${index} section${item[0]}: ${newState[item[0]]}`)
        newState[item[0]] += 1;
        const backgroundColor = (index == 2? 'red': 'green');
        console.log(`section${item[0]}: ${25 * (newState[item[0]]-1)} ${backgroundColor}`)

        const ele = <div className='courseBar' style={{'top': `${25 * (newState[item[0]]-1)}px`, width: `${84*item[1] - 8}px`, 'backgroundColor': `${backgroundColor}`}}>courseBar</div>;

        const root = document.getElementById(`section${item[0]}`);

        elements.push([ele,root])
      })
    }
    elements.map (item => {
      const ele = item[0];
      const root = item[1];
      console.log(ele, root)
      // root.appendChild(ele)
      // ReactDOM.render(
      //   ele, root
      // );
    })
    setTest(2);
    setSectionState(newState);
  
  }

  React.useEffect(() => {
    // for (var i = 0; i<3; i++) {
      courseBar([[29,3],[58,2], [29,1]]);
    // }
  });
  return (
    <ThemeProvider theme={theme}>

    <TableContainer component="div" >
      <Table >
        <TableBody>
          {DAYS.map((row, dayIndex) => (
            <TableRow key={row}>
              <TableCell  align="center">{row}</TableCell>
              {
                SECTIONS.map((section, sectionIndex) => (
                  <TableCell key={section.name} 

                    align="center"
                    id={`section${(dayIndex-1)*13 + sectionIndex + 1}`}
                    value={(dayIndex-1)*13 + sectionIndex + 1}
                    test={test}
                  >
                    {dayIndex==0 && 
                      <>
                      <Typography variant="subtitle1">{section.name}</Typography>
                      <Typography variant="body1">{section.clock}</Typography>
                      </>
                    }
                    {/* <GetComponents query={(dayIndex-1)*13 + sectionIndex} /> */}
                  </TableCell>
                ))
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </ThemeProvider>
  )
}
