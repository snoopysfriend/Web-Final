import React from 'react';
import { Select, MenuItem, InputBase } from '@material-ui/core';
import myMuiTheme from '../../styles/myMuiStyles';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function MySelect(props) {
  const theme = createMuiTheme({
    overrides: {
      MuiSelect: {
        root: {
          paddingLeft: myMuiTheme.spacing(1)
        },
      },
      MuiInputBase: {
        root: {
          margin: 'auto 0',
          ...myMuiTheme.shape.border_textField
        },
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Select
        {...props}
        input ={<InputBase />}
      >
       {props.children}
      </Select>
    </ThemeProvider>
    );
}
