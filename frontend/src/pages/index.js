import React from 'react';
import Search from './Search';
import Home from './Home';
import UserCourses from './UserCourses';
import CourseInform from './CourseInform';

/**
 * These are root pages
 */
const HomePage = (props) => {
  return <Home {...props} />;
};

const SearchPage = (props) => {
  return <Search {...props} />;
};
const UserPage = (props) => {
  return <UserCourses {...props} />;
};
const CourseInformPage = (props) => {
  return <CourseInform {...props} />;
};


export { HomePage, SearchPage, UserPage, CourseInformPage };