import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Divider } from 'semantic-ui-react'

import Header from './containers/Header'
import Filters from './containers/Filters'
import TimeTable from './TimeTable/TimeTable'
import  items  from './TimeTable/timeItems'
import SearchResults from './SearchResult/SearchResults'

function search() {
    return (
        <>
            <Header />
            <div className="Filters-content">
                <Grid columns='2' >
                <Grid.Row >
                <Grid.Column>
                    <Filters />
                </Grid.Column>
                <Grid.Column>
                    <TimeTable items={items}/> 
                </Grid.Column>
                </Grid.Row>
                </Grid> 
            </div>
            <Divider section />
            <div className="searchReslut">
                <SearchResults />
            </div>
        </>
    )
    
}
export default search;