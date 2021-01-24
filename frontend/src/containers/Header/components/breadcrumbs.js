import React from 'react';
import { Link } from '@material-ui/core';
import { Grid } from '../../../components/self-defined/index'
import { _breadcrumbs } from '../../../styles/styledVariables'

export default function Breadcrumb() {
  const handleClick = () => {
    console.log('Click')
  }
  return (
    <Grid id='breadcrumbs' sty={_breadcrumbs} >
      <Link color="inherit" href="/" onClick={handleClick}>
          Home
      </Link>
       / 
      <Link
          color="textPrimary"
          href="/search"
          onClick={handleClick}
      >
          Search
      </Link>
    </Grid>
  )
}
