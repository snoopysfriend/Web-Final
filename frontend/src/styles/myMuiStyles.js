import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

const originTheme = createMuiTheme();


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
    large: '30px',
    standard: '15px',
    small: '10px',
  },
  border_button: {
    border: `1px solid ${colorTheme.grey.standard}`,
    color: colorTheme.grey.lightest,
    backgroundColor: colorTheme.ntuRed.light,
    borderRadius: '15px',
    '&:hover' :{
      backgroundColor: colorTheme.ntuRed.main,
    }
  },
  border_textField: {
    border:  `1px solid ${colorTheme.grey.standard}`,
    borderRadius: '5px',
  },
  header_height: {
    height: '70px',
  }
}
const overridesTheme = {
  MuiAutocomplete: {
    root:{
      ...(shapeTheme.border_textField),
      width: '100%',
      margin: '0 8px'

    },
    inputRoot: {
      padding: `1px ${originTheme.spacing(1)}px`,
      overflow:'scroll',
      width: '100%',

    }
  },
  MuiTableCell: {
    root: {
      padding: `20px`,
    },
    body: {
      padding: `${originTheme.spacing(4)}`,
    }
  }
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
