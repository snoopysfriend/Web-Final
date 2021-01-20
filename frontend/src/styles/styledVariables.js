import myMuiTheme from './myMuiStyles'
import { styled } from '@material-ui/core/styles';

export const _header = {
  height: "70px",
  width: "100%",
  backgroundColor: myMuiTheme.palette.ntuBlue.light,
}
export const _container = {
  position: 'relative',
  width: '90%',
  height: `calc(100vh - ${_header.height})`,
  backgroundColor: '#FFF',
  margin: 'auto',
}
export const _query = {
  height: '220px',
  _searchBar: {
    title: {
      width: '110px',
      paddingRight: myMuiTheme.spacing(1)
    },
    options: {
      width: '130px',
      paddingRight: myMuiTheme.spacing(1)
    },
    input: {
      margin: myMuiTheme.spacing(2,0),
      width: '300px',
      paddingRight: myMuiTheme.spacing(1)
    },
    button: {
      width: '80px',
      margin: 'auto',
    },
    timeTable: {
      width: 'auto',
      margin: 'auto 0',
    },
  },
  checkBoxes : {
    maxWidth: '50%',
  }
}
export const _searchResult = {
  height: `calc(100vh - ${_header.height} - ${_query.height} - 30px)`,

}
export const _breadcrumbs = {
  position: 'absolute',
  display: 'inline',
  right: '10px',
}
export const _home = {
  root: {
    // backgroundImage: "url(/static/media/background.32e8c79c.jpg)",
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    backgroundPosition: 'center',
  },
  containerLeft: {
    position: 'relative',
    width: '100%',
    background: 'rgba(24, 38, 94, 0.6)'
  },
  ntuLogo: {
    position:'absolute',
    top: 'calc( 40vh )',
    left: 'calc( 2vw )',
  },
  slash: {
    position:'absolute',
    top: 'calc( 40vh )',
    left: 'calc( 22vw )',
    boxSizing:'border-box',
    lineHeight:'120px',
    width: '160px',
    height: '160px',
    background: 'linear-gradient(-45deg, transparent 49.5%, white 49.5%, white 50.5%, transparent 50.5%)'
  },
  title: {
    position:'absolute',
    top: 'calc( 50vh )',
    left: 'calc( 30vw )',
  },
  login: {
    position: 'absolute',
    width: 450,
    height: 450,
    borderRadius: 15,
    padding: '60px 60px',
    right: 'calc((25vw - 450px / 2))',
    top: 'calc((50vh - 450px / 2))',
  },
}
export const _login = {
  input: {
    margin: myMuiTheme.spacing(2,0)
  },
  button: {
    width: '80%',
    margin: 'auto'
  },

}
export const _courseInform = {
  title: {
    height: '90px',
    boxSizing: 'border-box',
    padding: '10px 10px'
  },
  tabs: {
    position: 'absolute',
    right: 0,
    top: '42px'
  },
  basic: {
    width: '450px'
  },
  syllabus: {
    paddingLeft: myMuiTheme.spacing(2)
  },
  schedule: {
    overflow: 'scroll',
    height: `calc(100vh - ${_header.height} - 110px)`,
    tablecell: {
      width: '300px'
    }
  }
}

const styledVariables = {
  _header: {
    ..._header,
  },
  _container: {
    ..._container
  },
  _query: {
    ..._query,
  },
  _searchResult: {
    ..._searchResult
  },
  _home: {
    ..._home
  },
}





export default styledVariables;