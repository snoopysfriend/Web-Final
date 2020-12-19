import React, { createRef, Component } from 'react'
import './selectable-css/main.css'
import { TAlbumItem } from './sample-data'
import { SelectableGroup } from 'react-selectable-fast'
import { Counters } from './Counters'
import { List } from './List'

type TAppProps = {
  items: TAlbumItem[]
}

type TAppState = {
  disableFirstRow: boolean
  reversed: boolean
  showSelectableGroup: boolean
  selectedItems: TAlbumItem[],
  selectingItems: TAlbumItem[]
}

class App extends Component<TAppProps, TAppState> {
  state = {
    disableFirstRow: false,
    reversed: false,
    showSelectableGroup: true,
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

  handleSelecting = (selectingItems: TAlbumItem[]) => {
    if (selectingItems.length !== this.state.selectingItems.length) {
      this.setState({ selectingItems: selectingItems })
    }
  }
  handleSelectionFinish = (selectedItems: TAlbumItem[]) => {
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
        <button className="selectable-btn" type="button" onClick={this.toggleSelectableGroup}>
          Toggle group
        </button>
        {showSelectableGroup && (
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
            <List items={orderedItems} />
          </SelectableGroup>
        )}
      </div>
    )
  }
}

export default App
