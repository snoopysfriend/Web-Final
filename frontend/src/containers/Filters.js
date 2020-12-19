import React, { useState, useEffect } from 'react'
import { Checkbox, Segment, List } from 'semantic-ui-react'
import { StyledSegment } from "../styleComps/styledSegment";

import Filter from '../components/Filter';
import deptMj from "../resources/DeptsAndMajors.json";
import libEd from "../resources/LiberalEducation.json";
import acaProg from "../resources/AcademicPrograms.json";
import phyMil from "../resources/PhyEdAndMilitaryTrn.json";
import genCour from "../resources/GeneralCourses.json";

function changeArraytoDropdownItem(arr) {
    return arr.map(item => ({
        key: item,
        text: item,
        value: item,
    }))
}
function Filters() {
    const [majorList, setMajor] = useState([])
    const depList = Object.values(deptMj).map(item => ({
        key: item.department,
        text: item.department,
        value: item.department,
    }));
    const libEdList = changeArraytoDropdownItem(libEd);
    const acaProgList = changeArraytoDropdownItem(acaProg);
    const phyMilList = changeArraytoDropdownItem(phyMil);
    const genCourList = changeArraytoDropdownItem(genCour);
    
    

    const handleDepUpate = async (event, {value}) => {
        let mList=[]
        deptMj.forEach(dep => {
            if (value.includes(dep.department)) {
                mList = [...mList, ...Object.values(dep)[1].map(item => ({
                    key: item,
                    text: item,
                    value: item,
                    selected: false
                }))]
            }
        })
        setMajor(mList)
    }
    console.log(majorList)

    return (
        <div className="content">
            <Filter name="學院" handleUpate={handleDepUpate} optionList={depList}/>
            <Filter name="系所" optionList={majorList}/>
            <Filter name="通識" optionList={libEdList}/>
            <Filter name="體育/軍訓" optionList={phyMilList}/>
            <Filter name="語文/基本能力" optionList={genCourList}/>
            <div className="filter">
                <label className="filter_name ">其他</label>
                {/* <Segment.Group horizontal> */}
                    {/* <StyledSegment> <Checkbox label='學程' /> </StyledSegment>
                    <StyledSegment> <Checkbox label='學程' /> </StyledSegment> */}
                {/* </Segment.Group> */}
                <div className="filter_container">
                    <List divided horizontal relaxed="very" >
                        <List.Item>
                            <Checkbox label='學程' />
                        </List.Item>
                        <List.Item>
                            <Checkbox label='密集課程' />
                        </List.Item>
                        <List.Item>
                            <Checkbox label='臺大系統校際課程' />
                        </List.Item>
                    </List>
                </div>
            </div>
        </div>
    )
    
}
export default Filters;