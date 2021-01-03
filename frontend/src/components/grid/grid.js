import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...(theme.typography.body),
    // fontWeight: '600',
    // fontSize: '16.5px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: (props) => props.rowFlex? 'row': 'column',
    background: (props) => {
        if (props.noBackground) return 'none';
        else if (props.color) return props.color;
        else return 'white';
    },
    
    // background: (props) =>
    //   props.color === 'red'
    //     ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    //     : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    borderRadius: 15,
    padding: '0 60px',
    margin: 8,
  },
  item: {
    width: (props) => {return (props.fullWidth && '100%')},
    border: (props) => {return (props.border && '1px solid red')},
    textAlign: (props) => {return (props.alignRight && 'right')},
    font: (props) => {
      switch(props.variant) {
        case('caption'): return theme.typography.caption
        default: return theme.typography.body
      }
    },
    width: (props) => props.width,
  },
}), { name: 'Grid' });

export const Grid = (props) => {
  const { children, size, variant, noBackground, container, rowFlex, fullWidth, newClass, ...other } = props;
  
  const classes = useStyles(props);
  return (
    <div fullWidth={fullWidth}
        className={classes.root + ' ' + newClass} {...props}>
      {children}
    </div>
  );
};

export const GridItem = (props) => {
  const { children, newClass, ...other } = props;
  const classes = useStyles(props);
  console.log(classes);
  return (
    <div className={classes.item + ' ' + newClass} {...props}>
      {children}
    </div>
  );
};