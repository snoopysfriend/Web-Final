import React, {useState} from 'react'
import '../containers/Header.css';

function Header() {
  return (
    <nav className="header">
      <div className="header-left">
        <img className="header-logo" 
            src="https://www.ntu.edu.tw/images/logo.png" 
            style={{height: 70+'px'}}/>
        <label className="header-label" >
            課程查詢系統
        </label>
      </div>
      
      <button>登入</button>
    </nav>
  
    )
    
}
export default Header;