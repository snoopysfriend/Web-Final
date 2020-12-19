import React, { useState, useEffect } from 'react'

function Options(props) {

    let optionList = [];

    return (
        <div className="dropdown">
            <section >
                {optionList.map(op =>  (
                    <div className="option" onClick={props.onClick}>{op}</div> 
                ))} 
            </section>       
        </div> 

          
    )
    
}
export default Options;