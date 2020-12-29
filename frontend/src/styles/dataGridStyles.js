import { makeStyles } from '@material-ui/core/styles';
import { TStyle } from './styles'

export const useMuiDataGridStyles = makeStyles({
    colCell: { 
      paddingLeft: '5px !important', 
      paddingRight: '5px !important',
    },
    cell: { 
      paddingLeft: '5px !important', 
      paddingRight: '5px !important',
    },
  
  }, { name: 'MuiDataGrid' });
