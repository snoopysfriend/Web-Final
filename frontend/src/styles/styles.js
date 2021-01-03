import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

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

export const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        // borderRadius: 3,
        // ...(TStyle._border),
        // height: 48,
        // padding: "0 30px",
      }
    },
    MuiInput: {
      root: {
        padding: '6px 0 6px 10px',
        width: '100%'
       },
       input: {
        width: '100%',
       }
    },
    MuiInputBase: {
      root: {
        padding: '6px 0 6px 10px',
        width: '100%'
       },
       input: {
        width: '100%',
       }
    },
    MuiAutocomplete: {
      root: {
        ...(TStyle._border)
      },
      inputRoot: {
        padding: '1px 6px',
      }
    },
    MuiFormControl: {
      root: {
        justifyContent: 'center',
      }
    }
  }
});


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