import React from 'react';
import { Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import myMuiTheme from '../../styles/myMuiStyles'

export default function MyButton(props) {
  const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          width: (props.width? props.width: 'auto'),
          margin: 'auto 0',
          ...myMuiTheme.shape.border_button,
          ...props.sty, 
          
        },
      },
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Button {...props} >{props.children}</Button>
    </ThemeProvider>
    );
}
//color={myMuiTheme.palette.ntuRed.light}