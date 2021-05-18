import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    menuBox: {

    },
    menuBar: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    menuItem: {
      color: theme.palette.primary.main,
      active: {
        color: theme.palette.primary.dark
      }
    },
    menuItemLink: {
      color: theme.palette.primary.main,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      boxShadow: theme.shadows[1],
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      backgroundColor: theme.palette.white.main,
      ...theme.mixins.toolbar,
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1),
      ...theme.mixins.toolbar,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    toolbarMiddle: {
      display: "flex",
      padding: theme.spacing(1),
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
      ...theme.mixins.toolbar,
    },
    iconButton: {
      color: theme.palette.white.main,
      '& > *:hover, & > *:active' : {
        color: theme.palette.primary.main,
      }
    },
    logo: {
      display: "inline-block",
      // [theme.breakpoints.down('xs')]: {
      //   display: 'none',i
      // },
    },
    logoSVG: {
      maxWidth: '60px',
      maxHeight: '60px'
    },
    logoPNG: {
      maxWidth: '60px',
      maxHeight: '60px'
    }
  }))
  