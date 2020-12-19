import React from 'react'



const Label=(props)=> {
    console.log(props)
    const { isSelecting, isSelected } = props
  
    return (
      <div className="card-label">
        Selecting: <span>{`${isSelecting}`}</span>
        <br />
        Selected: <span>{`${isSelected}`}</span>
      </div>
    )
  }

  export default Label;