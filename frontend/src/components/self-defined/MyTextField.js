import React from 'react';
import { TextField, FormControl, Typography, InputBase, InputAdornment } from '@material-ui/core';
import myMuiTheme from '../../styles/myMuiStyles';
import { ThemeProvider, createMuiTheme, makeStyles, styled } from "@material-ui/core/styles";

export default function MyTextField(props) {
  const theme = createMuiTheme({
    overrides: {
      MuiInputBase: {
        root: {
          width: (props) => {return (props.fullWidth && '100%')},
          border: (props) => {
            if (props.noBorder) return 'none';
            else return (props.border? props.border: `1px solid ${myMuiTheme.palette.grey.standard}`);
          },
          borderRadius: myMuiTheme.shape.borderRadius,
          boxSizing: 'border-box',
          textAlign: (props) => {return (props.alignRight && 'right')},
          font: (props) => {
            switch(props.variant) {
              case('caption'): return myMuiTheme.typography.caption
              default: return myMuiTheme.typography.body
            }
          },
          paddingLeft: myMuiTheme.spacing(1),
        },
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <>
      {/* <FormControl {...props}> */}
        <Typography variant="subtitle1">{props.label}</Typography>
        <InputBase
          placeholder={props.placeholder}
          type={props.password? 'password':'text'}
          {...props}
        />
      </>
      {/* </FormControl> */}
    </ThemeProvider>
    );
}
