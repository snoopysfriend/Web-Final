import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return ({
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: (props) => props.rowFlex? 'row': 'column',
    background: (props) => {
      if (props.noBackground) return 'none';
      else if (props.color) return props.color;
      else return 'white';
    },
    padding: (props) => {
      switch (props.padding) {
        case 'large': return '0 60px';
        case 'standard': return '0 16px';
        case 'small': return '0 8px';
        default: return '0 0';
      }
    },
    margin: (props) => {
      switch (props.margin) {
        case 'large': return '30px 0';
        case 'standard': return '16px 0';
        case 'small': return '4px 0';
        case 'none': return '0 0';
        case 'auto': return 'auto 0';
        default: return 'inherit';
      }
    },
    width: (props) => (props.fullWidth? '100%': props.width),
    textAlign: (props) => {return (props.alignRight && 'right')},
    flexGrow: (props) => props.flexGrow,
    //For arranging
    testborder: (props) => {return (props.testborder && '1px solid red')},
  },
})}, { name: 'Grid' });

export const Grid = (props) => {
  const { children, size, variant, noBackground, padding, rowFlex, fullWidth, newClass, ...other } = props;
  
  const classes = useStyles(props);
  
  return (
    <div className={classes.root + ' ' + (newClass? newClass: ' ')} {...props}>
      {children}
    </div>
  );
};
