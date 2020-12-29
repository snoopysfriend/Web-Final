import React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';


export default function Breadcrumb() {
  const handleClick = () => {
    console.log('Click')
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
          Home
      </Link>
      <Link
          color="textPrimary"
          href="/search"
          onClick={handleClick}
          aria-current="page"
      >
          Search
      </Link>
    </Breadcrumbs>
  )
}
