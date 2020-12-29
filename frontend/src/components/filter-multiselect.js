import React, { useEffect, useState } from 'react'
import { useQueryStyles, useAutocompleteStyles } from '../styles/styles'

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  Autocomplete  from '@material-ui/lab/Autocomplete';


function Filter(props) {
    const classes = useQueryStyles();
    const handleUpate = props.handleUpate? props.handleUpate:null;
    const AutoClasses = useAutocompleteStyles();

    return (
        <div className={classes.filterRoot}>
            <label className={classes.filterName}>{props.name}</label>
            <div className={classes.filterTextField}>
                <Autocomplete  
                    multiple
                    size='small'
                    classes={{AutoClasses}}
                    id="tags-standard"
                    options={props.optionList}
                    //   getOptionLabel={(option) => option}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        //label="Multiple values"
                        InputProps={{...params.InputProps, disableUnderline: true}}
                        placeholder={props.name}
                    />
                    )}
                    onChange={handleUpate}
                />
            </div>
        </div>
    )
}
export default Filter;