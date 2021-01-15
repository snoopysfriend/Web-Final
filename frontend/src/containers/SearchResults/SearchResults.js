import * as React from 'react';
//
//Material-ui Library
import { DataGrid } from '@material-ui/data-grid';
import { Button }from '@material-ui/core'
//
//Components
import { Grid, TextField } from '../../components/self-defined/index'
import ColFilters from './components/columnsFilter'
import { columns, createRows } from './components/mapColsandRows'

//Styles
import { useMuiDataGridStyles } from '../../styles/dataGridStyles'
import { _searchResult } from '../../styles/styledVariables'


export default function SearchResults(props) {
  const classes = useMuiDataGridStyles();
  
  const rows = props.data.map((d, index) => {
    return createRows(index, d)
  });

  return (
    <Grid id='searchResult' rowFlex style={_searchResult} padding="large">
      <DataGrid 
        classes={{ colCell: classes.colCell }}
        rows={rows}
        columns={columns.map(function(item){
          item.hide = !props.state[item.field];
          return item;
        })} 
        pageSize={5} 
      /> 
    </Grid>
  );
}
