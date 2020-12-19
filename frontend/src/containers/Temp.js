import React, { Component } from 'react'
import { SelectableGroup } from 'react-selectable-fast'
import List from './List'
// import {items} from './sample-data'
const items = Array.from({ length: 10 }).map((_, index) => ({
    year: index + 1,
}))

class TempApp extends Component {

  render() {
    return (
      <div id="demp-container">
        
      </div>
    )
  }
}

export default TempApp;