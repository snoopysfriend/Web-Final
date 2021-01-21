import React from 'react';
import ReactDOM from 'react-dom';
//
// material-ui Library
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, Button, TableRow } from '@material-ui/core/';
import { Typography } from '../components/self-defined/index';
import { getUserCourse, patchUserCourse, postUserCourse, getCourseInform } from '../axios.js'
import axios from 'axios' 
axios.defaults.withCredentials=true;

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

const fetchCourseInform = async(props)=>{
  return await axios.get(`http://127.0.0.1:4000/api/courseInform?year=109&courseId=${props.courseId}`)
      .then((response) => {
          console.log(response)
          return response
      })
      .catch(err => {console.log(err)})
  // return res;
}

const beutifyData = (place) => {
  console.log(place, place.indexOf(' '), place.slice(0, place.indexOf(' ')))
  return place.slice(0, place.indexOf(' '));
}

const CourseBar =  (props) => {
  const { courseName, courseTech, childrenIndex, time, courseId, during } = props
  const place = beutifyData(props.place);
  return (
    <>
      <div className="courseBar " 
        style={{'top': `${60 * childrenIndex}px`, width: `${100*during - 16}px `, minWidth: `${100 * during - 16}px `}}
                {...props}>
        <Typography variant='subtitle1' className="title-name" >{courseName}</Typography>
        <div className="rowFlex subtitle">
          <Typography variant='caption' className="title-tech" nowrap>{courseTech}</Typography>
          <Button disabled className="button" >{place}</Button>
        </div>
      </div>
    </>
  )
}

export default function CourseSchedule() {
  const [sectionState, setSectionState] = React.useState(Array.from({length: 84}, (v, i) => 0));
  const [sectionChildren, setSectionChildren] = React.useState(Array.from({length: 84}, (v, i) => []));
  const [rowHeight, setRowHeight] = React.useState(Array.from({length: 7}, (v, i) => i==0? 30: 120));

  const renderCourseBars = async (data) => {
    console.log(data)
    const newState = sectionState;
    const newChildren = sectionChildren;
    const newRowHeight = rowHeight;
    if (data) {
      data.map((course, c_index) => {
        const { courseId, time, place, courseName, courseTech } = course;
        console.log(courseId, time, place)
        if (time){
          time.map ((item, t_index) => {
            const day = parseInt(item[0]/14) +1;
            const ele = (<CourseBar courseId={courseId} courseName={courseName}
                courseTech={courseTech}
                childrenIndex={newState[item[0]]} during={item[1]} 
                place={place} />);
            for(var i=0;i < item[1]; i++) {
              newState[item[0]+i] += 1;
              if (newState[item[0]+i]>=3) {
                newRowHeight[day] = 50*(newState[item[0]+i])
                console.log("days", document.getElementById(`section_DAYS${day}`))
                document.getElementById(`section_DAYS${day}`).style.height=`${50*(newState[item[0]+i]+1)}px`

              }
            }
            // console.log(newState);
            newChildren[item[0]].push(ele);
          })
        }
      })
    }
    newChildren.map ((item, index) => {
      if (item.length != 0) {
        ReactDOM.render( item, document.getElementById(`section${index}`) );
      }
    })

    setSectionState(newState);
    setSectionChildren(newChildren);
    await setRowHeight(newRowHeight);
  }
  
  const getCourses = async () => {
    const data = await getUserCourse()
    // courseBar(data)
    await renderCourseBars(data)
  }
  React.useEffect(() => {
    getCourses();
    // postUserCourse('44345')
    // postUserCourse('03035')
    // postUserCourse('66263')
    // patchUserCourse('82737')
    // patchUserCourse('66263')
  }, []);
  console.log('rowHeight', rowHeight)

  return (

    <TableContainer component="div" className="UserCourse-container">
      <Table className='table-root'>
        <TableBody className='table-body'>
          {DAYS.map((row, dayIndex) => (
            <TableRow key={row} className='table-row'>
              <TableCell  align="center" className='section_DAYS' id={`section_DAYS${dayIndex}`} 
                          style={{height: `${rowHeight[dayIndex]}px`}}>
                {row}
              </TableCell>
              {SECTIONS.map((section, sectionIndex) => {
                  const styleClass = dayIndex==0 ? "section-title": "section"
                  return(
                  <TableCell key={section.name} 
                    className={styleClass}
                    align="center"
                    id={`section${(dayIndex-1)*13 + sectionIndex + 1}`}
                    value={(dayIndex-1)*13 + sectionIndex + 1}
                  >
                    {dayIndex==0 && 
                      <>
                        <Typography variant="subtitle1">{section.name}</Typography>
                        <Typography variant="body1">{section.clock}</Typography>
                      </>
                    }
                  </TableCell>
                )})
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  )
}

