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
    searchTextField: {
      flexGrow: 2,
      border: '1px solid #efefef',
      borderRadius: '5px',
      ...(TStyle._filterHeight),
    },
    searchbutton: {
      // flexGrow: 1,
      ...(TStyle._filterHeight)
    },
    space: {
      flexGrow: 1,
    }
  }), { name: 'SearchBar' });
  
  