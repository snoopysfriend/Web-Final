import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

const originTheme = createMuiTheme();
export const TStyle = {
  _rowFlex: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // _containerMarginLR: {
  //   margin: "0 60px",
  // },
  // _containerPaddingLR: {
  //   padding: "0 10px",
  // },
}
const colorTheme = {
  ntuBlue: {
    light: '#324486',
    main: '#1D284E',
  },
  ntuRed: {
    light: '#b72a38',
    main: '#9c2330',
    dark: '#741a23'
  },
  ntuBrown: {
    light: '#dcd0b3',
    main: '#a77f33',
    dark: '#7d5f26'
  },
  grey: {
    dark: "#485146",
    standard: "#6e7370",
    light: "#bbbbbb",
    lightest: "#f7f7f7",
    white: "#ffffff",
  },
}
const textTheme = {
  fontFamily: ['Taipei Sans TC Beta', 'sans-serif', 'Source Sans Pro', 'Montserrat'],
  h4: {
    fontSize: '30px',
  },
  h5: {

  },
  h6: {
    fontSize: '20px',
  },
  subtitle1: {
    fontSize: '16px',
  },
  subtitle2: {

  },
  body1: {

  },
  body2: {

  },
  button: {

  },
  caption: {
    fontSize: '18px',
    color: colorTheme.grey.standard,
  }
}
const shapeTheme = {
  borderRadius: '5px',
  borderRadius_type: {
    large: '15px',
    standard: '10px',
    small: '5px',
  },
  border_button: {
    border: `1px solid ${colorTheme.grey.standard}`,
    borderRadius: '5px',
  },
  border_textField: {
    border:  `1px solid ${colorTheme.grey.standard}`,
    borderRadius: '5px',
  }
}
const overridesTheme = {
  // MuiButton: {
    // root: {
      // borderRadius: 3,
      // ...(TStyle._border),
      // height: 48,
      // padding: "0 30px",
    // }
  // },
  // MuiInput: {
    // root: {
    //   padding: '6px 0 6px 10px',
    //   width: '100%'
    //  },
    //  input: {
    //   width: '100%',
    //  }
  // },
  // MuiInputBase: {
    // root: {
    //   padding: '6px 0 6px 10px',
    //   width: '100%'
    //  },
    //  input: {
    //   width: '100%',
    //  }
  // },
  MuiAutocomplete: {
    root: {
      ...(shapeTheme.border_textField),
    },
    inputRoot: {
      padding: `1px ${originTheme.spacing(1)}px`,
    }
  },
}


const theme = createMuiTheme({
  palette: {
    ...colorTheme,
  },
  typography: {
    ...textTheme,
  },
  shape: {
    ...shapeTheme,
  },
  overrides: {
    ...overridesTheme,
  }
});

// console.log("theme", theme)
export default theme;
