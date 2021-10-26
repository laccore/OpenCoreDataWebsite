import { makeStyles } from '@material-ui/core/styles'

export const drawerWidth = 240

export const useStyles = makeStyles(theme => ({
  gridItem: {
    display: 'flex',
    margin: 'auto'
  },
  gridItemIcon: {
      // '& svg': {
      width: '150px',
      height: '100%',
      margin: '0 auto',
      border: '4px solid',
      borderRadius: '100%',
      padding: '20px',
      // }
  },
}))