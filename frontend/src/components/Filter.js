import React, { useEffect, useState } from 'react'
import '../containers/Filters.css';

import { Dropdown } from 'semantic-ui-react'

const attr = "fluid";
function Filter(props) {
    const handleUpate = props.handleUpate? props.handleUpate:null;
    return (
        <div className="filter">
            <label className="filter_name ">{props.name}</label>
            <div className="filter_container">
                <Dropdown
                    name={props.name}
                    fluid
                    multiple
                    closeOnChange
                    search
                    selection
                    options={props.optionList}
                    onChange={handleUpate}
                />
            </div>
        </div>
    )
    
}
export default Filter;