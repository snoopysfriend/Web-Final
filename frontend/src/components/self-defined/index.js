import React from 'react';
import MyGrid from './MyGrid';
import MyTypography from './MyTypography';
import MyTextField from './MyTextField';

export const Grid = (props) => {
  return <MyGrid {...props} />;
};
export const Typography = (props) => {
  return <MyTypography {...props} />;
};
export const TextField = (props) => {
  return <MyTextField {...props} />;
};
// const CourseInformPage = (props) => {
//   return <CourseInform {...props} />;
// };
// const components =  { Grid, Typography, Textfield };
