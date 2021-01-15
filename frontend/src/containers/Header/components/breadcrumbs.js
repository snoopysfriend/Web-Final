import React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';
import { Grid, TextField } from '../../../components/self-defined/index'
import { _breadcrumbs } from '../../../styles/styledVariables'

export default function Breadcrumb() {
  const handleClick = () => {
    console.log('Click')
  }
  return (
    <Grid id='breadcrumbs' sty={_breadcrumbs} clear >
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
