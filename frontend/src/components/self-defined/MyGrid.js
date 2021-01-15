import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const mapPadding = (type) => {
  if (Array.isArray(type)) return `${type[0]}px ${type[1]}px ${type[2]}px ${type[3]}px`
  switch (type) {
    case 'large': return '0px 60px';
    case 'standard': return '0px 16px';
    case 'small': return '0px 8px';
    default: return '0 0';
  }
}
const mapMargin = (type) => {
  if (Array.isArray(type)) return `${type[0]}px ${type[1]}px ${type[2]}px ${type[3]}px`
  switch (type) {
    case 'large': return '30px 0';
    case 'standard': return '16px 0';
    case 'small': return '4px 0';
    case 'none': return '0 0';
    case 'auto': return 'auto 0';
    case 'center': return '0 auto';
    default: return 'inherit';
  }
}

const useStyles = (props) => makeStyles((theme) => {
  let styles = {};
  // console.log('sty', props.sty)
  const Id = props.id? props.id:'root'

  if (props.clear) {
    styles[Id] = {...props.sty}
  } 
  else {
    styles[Id] = {
      boxSizing: 'border-box',
      display: 'flex',
      overflow:  (props) => props.scroll? 'scroll': 'none',

      flexDirection: (props) => props.rowFlex? 'row': 'column',
      background: (props) => {
        if (props.noBackground) return 'none';
        else if (props.bgColor) return props.bgColor;
        else return 'white';
      },
      color: (props) => props.color,
      padding: (props) => {
        return (props.padding && mapPadding(props.padding))
      },
      margin: (props) => {
        if (props.center) return '0 auto'
        return (props.margin && mapMargin(props.margin))
      },
      width: (props) => {
        if (props.noFullWidth) return 'fit-content';
        if (props.wh) return (props.wh[0] && props.wh[0]);
        if (!props.flexGrow) return '100%';
      },
      height: (props) => {return (props.wh && props.wh[1])},
      justifyContent: (props) => {return (props.justifyEnd && 'flex-end')},
      flexGrow: (props) => props.flexGrow,
      border: (props) => {return (props.testborder && '1px solid red')},

      ...props.sty,
    }
    
  }
  return styles;
}, { name: 'Grid' });

export default function MyGrid(props) {
  const classes = useStyles(props)(props);
  const Id = props.id? props.id:'root'
  const { sty, ...other } = props;

  return (
    <div className={classes[Id]} {...other}>
      {props.children}
    </div>
  );
};