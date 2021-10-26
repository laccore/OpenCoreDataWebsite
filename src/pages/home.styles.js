import { makeStyles } from '@material-ui/core/styles'
import headerImage from '../assets/images/placeholder.png'

export const drawerWidth = 240

export const useStyles = makeStyles(theme => ({
  filterGridItem: {
    backgroundColor: theme.palette.white.main
  },
  boxSearchResults: {
    position: 'relative',
    top: '-20px',
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
  },
  homeHeader: {
    height: '40vh',
    width: '100%',
    backgroundImage: `url(${headerImage})`,
    backgroundSize: '100% 100%',
    position: 'relative',
    '&:after' : {
      content: 'open-quote',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: theme.palette.primary.dark,
      opacity: '0.5'
    }
  }
}))