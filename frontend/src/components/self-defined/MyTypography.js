import React from 'react';
import { Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, makeStyles, styled } from "@material-ui/core/styles";

export default function MyTypography(props) {
  // console.log(theme)
  const theme = createMuiTheme({
    overrides: {
      MuiTypography: {
        root: {
          color: (props.color? props.color: 'inherit'),
          margin: 'auto 0',
          textAlign: (props) => (props.center && 'center'),
        },
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography {...props}>{props.children}</Typography>
    </ThemeProvider>
    );
}