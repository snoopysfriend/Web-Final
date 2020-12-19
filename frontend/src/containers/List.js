import React, { Component } from 'react'
import { createSelectable, SelectAll, DeselectAll } from 'react-selectable-fast'
import SomeComponent from './SomeComponent'

const SelectableComponent = createSelectable(SomeComponent)

class List extends Component {

  render() {
    return (
      <div> 
        {this.props.items.map((item, i) => (
          <SelectableComponent
            key={i}
            year={item.year}
          />
        ))} 
      </div>
    )
  }
}

export default List;