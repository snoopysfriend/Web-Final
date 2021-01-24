import React from 'react'
//
// Self-Defined
import { Typography } from '../../../components/self-defined/index'
import logo from "../../../resources/img/logo_noBackground.png";

function NtuLogo(props) {
  return (
    <div className='ntuLogo rowFlex fit'>
      <img src={logo} style={{maxHeight: props.size}}/>
      <div className='title'>
        <Typography variant="h4"  >國立台灣大學</Typography>
        <Typography variant="h6"  >National Taiwan University</Typography>
      </div>
    </div>
  )
    
}
export default NtuLogo;