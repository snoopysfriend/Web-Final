import React from 'react';
import { TextField, FormControl, Typography, InputBase, InputAdornment } from '@material-ui/core';
import { ThemeProvider, StylesProvider, makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import styles from './textfield.module.scss';
import theme from '../../styles/styles'

console.log(theme)
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
  },
  input: {
    width: (props) => {return (props.fullWidth && '100%')},
    border: (props) => (props.border? props.border: `1px solid ${theme.palette.grey[800]}`),
    borderRadius: '15px',
    boxSizing: 'border-box',
    textAlign: (props) => {return (props.alignRight && 'right')},
    font: (props) => {
      switch(props.variant) {
        case('caption'): return theme.typography.caption
        default: return theme.typography.body
      }
    },
  },
}), { name: 'TextField' });

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
const StyledTextField = ({ className, label, password, ...props }) => {
  const { fullWidth, newClass, ...other } = props;
  const classes = useStyles(props);
  return (
    <FormControl className={classes.root + ' ' + newClass} {...props}>
        <Typography variant="label" >{label}</Typography>
        <InputBase
          type={password? 'password':'text'}
          className={classes.input}
        />
    </FormControl>
)};



export default StyledTextField;