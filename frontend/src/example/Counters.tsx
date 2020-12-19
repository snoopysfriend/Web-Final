import React from 'react'
import { TAlbumItem } from './sample-data'
type TAlbumProps = {
  selectedItems: TAlbumItem[],
  selectingItems: TAlbumItem[]
}

export function Counters(props: TAlbumProps) {
  const { selectedItems, selectingItems } = props

  return (
    <p>
      Selecting: <span className="selectable-counter">{selectingItems.length}</span>
      <br />
      Selected: <span className="selectable-counter">{selectedItems.length}</span>
      <br />
    </p>
  )
}
