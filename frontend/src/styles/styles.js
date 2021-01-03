import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { text } from 'express';

export const TStyle = {
  _rowFlex: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  _containerMarginLR: {
    margin: "0 60px",
  },
  _containerPaddingLR: {
    padding: "0 10px",
  },
  _filterHeight: {
    lineHeight: '40px',
  },
  _border: {
    border: '1px solid #B0BEC5',
    borderRadius: '5px',
  }
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
  fontFamily: ['Taipei Sans TC Beta', 'Source Sans Pro', 'Montserrat'],
    header: {
      fontSize: '30px',
    },
    label: {
      fontSize: '28px',
    },
    body: {
      fontSize: '20px',
    },
    caption: {
      fontSize: '16px',
      color: colorTheme.grey.standard,
    }
}
const theme = createMuiTheme({
  palette: {
    ...colorTheme,
  },
  typography: {
    ...textTheme,
  }
// overrides: {
//   MuiButton: {
//     root: {
//       // borderRadius: 3,
//       // ...(TStyle._border),
//       // height: 48,
//       // padding: "0 30px",
//     }
//   },
//   MuiInput: {
//     root: {
//       padding: '6px 0 6px 10px',
//       width: '100%'
//      },
//      input: {
//       width: '100%',
//      }
//   },
//   MuiInputBase: {
//     root: {
//       padding: '6px 0 6px 10px',
//       width: '100%'
//      },
//      input: {
//       width: '100%',
//      }
//   },
//   MuiAutocomplete: {
//     root: {
//       ...(TStyle._border)
//     },
//     inputRoot: {
//       padding: '1px 6px',
//     }
//   },
//   MuiFormControl: {
//     root: {
//       justifyContent: 'center',
//     }
//   }
// }
});

console.log("theme", theme)
export default theme;


export const useQueryStyles = makeStyles((theme) => ({
  root: {
   
  },
  mainFilters: {
    ...(TStyle._rowFlex),
    ...(TStyle._containerMarginLR),
    ...(TStyle._containerPaddingLR),
  },
  mainFiltersLeft: {
    width: '100%',
    paddingRight: '10px',
  },
  mainFiltersRight: {
    width: '100%',
    paddingLeft: '10px',
  },
  filterRoot: {
    ...(TStyle._rowFlex),
    alignItems: 'center',
    marginBottom: "10px"
  },
  filterName: {
    // maxWidth: '110px',
    minWidth: '110px',
    ...(TStyle._filterHeight),

  },
  filterTextField: {
    flexGrow: 1,    
  }
}), { name: 'Query' });

export const useHomeStyles = makeStyles((theme) => ({
  root: {
    ...(TStyle._rowFlex),
  },
  left: {
    
  },
  right: {

  },
}), { name: 'rowFlex' })