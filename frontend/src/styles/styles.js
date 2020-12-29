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
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      root: {
        // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        ...(TStyle._border),
        // color: "white",
        // height: 48,
        // padding: "0 30px",
        // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
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
    }
  }
});

export const useAutocompleteStyles = makeStyles({
  root: {
    ...(TStyle._border)
  },
},{ name: 'MuiAutocomplete'});

export const useQueryStyles = makeStyles((theme) => ({
  root: {
   
  },
  mainFilters: {
    ...(TStyle._rowFlex),
    ...(TStyle._containerMarginLR),
    alignContent: 'stretch',
    
  },
  mainFiltersLeft: {
    width: "100%",
    ...(TStyle._containerPaddingLR),
  },
  mainFiltersRight: {
    width: "100%",
    ...(TStyle._containerPaddingLR),
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
