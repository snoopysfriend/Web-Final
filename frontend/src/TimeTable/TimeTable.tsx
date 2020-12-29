import React, { createRef, Component } from 'react'
import './selectable-css/main.css'
import { SelectableGroup, SelectAll, DeselectAll } from 'react-selectable-fast'
import { List } from './List'

import { Grid, Button } from '@material-ui/core';

type TTimeItem = {
  day: string,
  section: string
}

type TAppProps = {
  items: TTimeItem[]
}

type TAppState = {
  disableFirstRow: boolean
  reversed: boolean
  showSelectableGroup: boolean
  selectedItems: TTimeItem[],
  selectingItems: TTimeItem[]
}

class App extends Component<TAppProps, TAppState> {
  state = {
    disableFirstRow: false,
    reversed: false,
    showSelectableGroup: false,
    selectedItems: [],
    selectingItems: [],
  }

  getSelectableGroupRef = (ref: SelectableGroup | null) => {
    ;(window as any).selectableGroup = ref
  }

  toggleSelectableGroup = () => {
    this.setState(state => ({
      showSelectableGroup: !state.showSelectableGroup,
    }))
  }

  handleSelecting = (selectingItems: TTimeItem[]) => {
    if (selectingItems.length !== this.state.selectingItems.length) {
      this.setState({ selectingItems: selectingItems })
    }
  }
  handleSelectionFinish = (selectedItems: TTimeItem[]) => {
    this.setState({ selectedItems: selectedItems, selectingItems: [] })
    console.log(`Finished selection ${selectedItems.length}`)
  }



  render() {
    const { items } = this.props
    const { disableFirstRow, reversed, showSelectableGroup, selectedItems, selectingItems } = this.state
    const itemsToRender = disableFirstRow ? items.slice(5) : items
    const orderedItems = reversed ? itemsToRender.slice().reverse() : itemsToRender
    // console.log("this.countersRef.current", this.countersRef.current)
    return (
      <div>
        {/* <Counters selectedItems={selectedItems} selectingItems={selectingItems} /> */}
        <div className="timeTable">
          <Button variant="outlined" className="selectable-btn" onClick={this.toggleSelectableGroup}>課堂時段</Button>
          <SelectableGroup
              ref={this.getSelectableGroupRef}
              className="selectable-main"
              clickClassName="selectable-tick"
              enableDeselect={true}
              tolerance={0}
              deselectOnEsc={true}
              allowClickWithoutSelected={false}
              
              duringSelection={this.handleSelecting}
              onSelectionFinish={this.handleSelectionFinish}
              ignoreList={['.not-selectable']}
            >
              <List items={orderedItems} showSelectableGroup={showSelectableGroup} toggleSelectableGroup={this.toggleSelectableGroup}/>
          </SelectableGroup> 
        </div>
        {/* <p className="not-selectable">Press ESC to clear selection</p> */}
      </div>
    )
  }
}

export default App
