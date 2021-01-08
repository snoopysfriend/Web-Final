import React from 'react';
import Search from './Search';
import Home from './Home';
import UserCourses from './UserCourses';
import CourseInform from './CourseInform';

/**
 * These are root pages
 */
const HomePage = () => {
  return <Home />;
};

const SearchPage = () => {
  return <Search />;
};
const UserPage = () => {
  return <UserCourses />;
};
const CourseInformPage = (props) => {
  return <CourseInform {...props} />;
};


export { HomePage, SearchPage, UserPage, CourseInformPage };