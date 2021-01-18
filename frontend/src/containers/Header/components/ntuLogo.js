import React from 'react'
//
// Self-Defined
import { Typography } from '../../../components/self-defined/index'
import logo from "../../../resources/img/logo_noBackground.png";

function NtuLogo(props) {
  return (
    <div className='NtuLogo rowFlex fit'>
      <img src={logo} style={{maxHeight: props.size}}/>
      <dic className='title'>
        <Typography variant="h4" noWrap >國立台灣大學</Typography>
        <Typography variant="h6" noWrap >National Taiwan University</Typography>
      </dic>
    </div>
  )
    
}
export default NtuLogo;