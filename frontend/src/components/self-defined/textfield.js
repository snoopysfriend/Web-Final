import React from 'react';
import { TextField, FormControl, Typography, InputBase, InputAdornment } from '@material-ui/core';
import { ThemeProvider, StylesProvider, makeStyles } from "@material-ui/core/styles";
import theme from '../../styles/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...(theme.typography.body),
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
    border: (props) => {
      if (props.noBorder) return 'none';
      else return (props.border? props.border: `1px solid ${theme.palette.grey.standard}`);
    },
    borderRadius: theme.shape.borderRadius,
    boxSizing: 'border-box',
    textAlign: (props) => {return (props.alignRight && 'right')},
    font: (props) => {
      switch(props.variant) {
        case('caption'): return theme.typography.caption
        default: return theme.typography.body
      }
    },
    paddingLeft: theme.spacing(1),
  },
}), { name: 'TextField' });

const StyledTextField = ({ className, label, password, ...props }) => {
  const { fullWidth, newClass, ...other } = props;
  const classes = useStyles(props);
  return (
    <FormControl className={classes.root + ' ' + (newClass? newClass: ' ')} {...props}>
        <Typography variant="label" >{label}</Typography>
        <InputBase
          placeholder={props.placeholder}
          type={password? 'password':'text'}
          className={classes.input}
        />
    </FormControl>
)};


export default StyledTextField;