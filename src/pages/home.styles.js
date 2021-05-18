import { makeStyles } from '@material-ui/core/styles'

export const drawerWidth = 240

export const useStyles = makeStyles(theme => ({
  filterGridItem: {
    backgroundColor: theme.palette.white.main
  },
  boxSearchResults: {
    position: 'relative',
    top: '-40px',
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.white.dark,
    contain: 'content'
  },
  divider: {
    height: '40px',
    margin: 'auto'
  },
  list: {
      padding: 0
  }
}))