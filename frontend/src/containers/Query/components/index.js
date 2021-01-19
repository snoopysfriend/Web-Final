import React from 'react';
import MyCheckboxes from './checkboxes';
import MyMultiselect from './multiselect';
import MySearchBar from './searchbar';

export const Checkboxes = (props) => {
  return <MyCheckboxes {...props} />;
};
export const Multiselect = (props) => {
  return <MyMultiselect {...props} />;
};
export const SearchBar = (props) => {
  return <MySearchBar {...props} />;
};
// const CourseInformPage = (props) => {
//   return <CourseInform {...props} />;
// };
// const components =  { Grid, Typography, Textfield };
