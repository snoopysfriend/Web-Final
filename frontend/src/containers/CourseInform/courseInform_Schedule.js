import React from 'react';
import { Divider } from '@material-ui/core/';
import { Typography } from '../../components/self-defined/index'


export default function CourseInform_Schedule(props) {
  const [couProg, setCouProg] = React.useState([]);
  if (props.data.CouProg) {
    setCouProg(JSON.parse(props.data.CouProg))
  }
  
console.log(Object.values(JSON.parse(props.data.CouProg)['日期']))




// console.log(props.data.CouProg)
  return (
    <div className='schedule'>
      <div className='rowFlex '>
        <Typography variant="subtitle1" center className='cell1'>週次</Typography>
        <Typography variant="subtitle1" center className='cell2'>日期</Typography>
        <Typography variant="subtitle1" className='cell3'>單元主題</Typography>
      </div>
      {props.data.CouProg && (
        
        Object.values(couProg['日期']).map((date, index) => (
          <>
            <div className='rowFlex grid'>
              <Typography variant="subtitle1" center className='cell1'> {couProg['週次'][index]} </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography variant="body1" center className='cell2'> {date} </Typography>  
              <Divider orientation="vertical" flexItem />
              <Typography variant="body1" className='cell3'> {couProg['單元主題'][index]} </Typography>   
            </div>
            <Divider light variant="middle"/>
          </>
        ))
      )}
    </div>
  );
}
