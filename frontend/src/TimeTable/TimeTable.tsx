import React, { createRef, Component } from 'react'
import './selectable-css/main.css'
import { TAlbumItem } from './sample-data'
import { SelectableGroup, SelectAll, DeselectAll } from 'react-selectable-fast'
import { Counters } from './Counters'
import { List } from './List'
import { Grid, Segment } from 'semantic-ui-react'


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
        <Grid columns='2' >
        <Grid.Row >
          <Grid.Column width={3}>
            <button className="selectable-btn" type="button" onClick={this.toggleSelectableGroup}>
              Toggle group
            </button>
            <p className="not-selectable">Press ESC to clear selection</p>
          </Grid.Column>
          <Grid.Column stretched>
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
          </Grid.Column>
        </Grid.Row>
        </Grid>
        
          
        
      </div>
    )
  }
}

export default App
