import React from 'react';
import Search from './pages/Search';
import Home from './pages/Home';

/**
 * These are root pages
 */
const HomePage = () => {
  return <Home />;
};

const SearchPage = () => {
  return <Search />;
};

export { HomePage, SearchPage };