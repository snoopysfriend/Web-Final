import React from 'react';
import { TextField, FormControl, Typography, InputBase, InputAdornment } from '@material-ui/core';
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import styles from './textfield.module.scss';

const StyledTextField = ({ className, label, password, ...props }) => {
  const classes = [styles];
  classes.push(className);

  // if (password) [classes.input].push()
  console.log([styles.input])
  return (
    <StylesProvider injectFirst>
    <FormControl className={[styles.root].join(' ')} {...props}>
        <Typography className={[styles.label].join(' ')} variant="body" >{label}</Typography>
        <InputBase
          type={password? 'password':'text'}
          className={[styles.input].join(' ')}
        />
    </FormControl>
    </StylesProvider>
)};

StyledTextField.propTypes = {
  className: PropTypes.string,
};

export default StyledTextField;