import React from 'react';
import MyGrid from './MyGrid';
import MyTypography from './MyTypography';
import MyTextField from './MyTextField';
import MyButton from './MyButton';
import MySelect from './MySelect';

export const Grid = (props) => {
  return <MyGrid {...props} />;
};
export const Typography = (props) => {
  return <MyTypography {...props} />;
};
export const TextField = (props) => {
  return <MyTextField {...props} />;
};
export const Button = (props) => {
  return <MyButton {...props} />;
};
export const Select = (props) => {
  return <MySelect {...props} />;
};
// const CourseInformPage = (props) => {
//   return <CourseInform {...props} />;
// };
// const components =  { Grid, Typography, Textfield };
