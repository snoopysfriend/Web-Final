import React from 'react'

import { createSelectable, TSelectableItemProps } from 'react-selectable-fast'
import { Label } from './Label'

type TAlbumProps = {
  player: string
  year: number
}
type TItemsProps = {
  day: string,
  section: string
}

const X = 'X';

export const Card = createSelectable<TItemsProps>((props: TSelectableItemProps & TItemsProps) => {
  const { selectableRef, isSelected, isSelecting, day, section } = props

  const classNames = [
    'selectable-item',
    [day, section].includes(X) && 'not-selectable',
    // DISABLED_CARD_YEARS.includes(year) && 'not-selectable',
    isSelecting && 'selecting',
    isSelected && 'selected',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={selectableRef} className={classNames}>
      {/* <div className="selectable-tick">+</div> */}
      {
        classNames.includes('not-selectable') && <h2>{day!=X && day}{section!=X && section}</h2>
      }
      {/* <Label isSelected={isSelected} isSelecting={isSelecting} /> */}
    </div>
  )
})
