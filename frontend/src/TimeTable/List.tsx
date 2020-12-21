import React, { memo } from 'react'

import { DeselectAll, SelectAll } from 'react-selectable-fast'
import { Card } from './Card'

type TTimeItem = {
  day: string,
  section: string
}

type TListProps = {
  showSelectableGroup: boolean,
  toggleSelectableGroup: () => void,
  items: TTimeItem[]
}
export const List = memo((props: TListProps) => {
  const { items, showSelectableGroup, toggleSelectableGroup } = props

  return (
    <>
      
      <div className="selectable-button-container">
      <SelectAll component="button" type="button" className="selectable-btn">
          Select all
        </SelectAll>
        <DeselectAll component="button" type="button" className="selectable-btn">
          Clear selection
        </DeselectAll>
      </div>
      {showSelectableGroup && <div className="selectable-table">
        {items.map(item => (
          <Card key={`${item.day}-${item.section}`} day={item.day} section={item.section}/>
        ))}
      </div>}
      
    </>
  )
})
