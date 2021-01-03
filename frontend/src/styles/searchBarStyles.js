import { makeStyles } from '@material-ui/core/styles';
import { TStyle } from './styles'

export const useSearchBarStyles = makeStyles((theme) => ({
    root: {
      ...(TStyle._rowFlex),
      marginBottom: '10px',
      ...(TStyle._containerMarginLR),
      ...(TStyle._containerPaddingLR),
    },
    name: {
      minWidth: '110px',
      ...(TStyle._filterHeight)
    },
    searchType: {
      minWidth: '110px',
    },
    searchTextField: {
      flexGrow: 1,
      // width: '80%',
      border: '1px solid #efefef',
      borderRadius: '5px',
      ...(TStyle._filterHeight),
      ...(TStyle._containerPaddingLR),
      ...(TStyle._containerMarginLR),
    },
    searchbutton: {
      // flexGrow: 1,
      ...(TStyle._filterHeight),
      ...(TStyle._containerPaddingLR),
    },
    space: {
      flexGrow: 1,
    }
  }), { name: 'SearchBar' });
  
  