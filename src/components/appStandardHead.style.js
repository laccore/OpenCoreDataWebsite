import { makeStyles, lighten } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    heading: {
        color: theme.palette.white.main,
        margin: `${theme.spacing(1)}px 0`
    },
    subheading: {
        color: theme.palette.white.main,
        margin: `${theme.spacing(1)}px 0`
    },
    backdrop: {
        // backgroundColor: 'rgb(255,255,255)',
        background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(140,29,64,1) 30%, rgba(71,13,31,1) 100%)',
        minHeight: '280px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        position: 'relative',
        '&:after': {
            background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(140,29,64,1) 30%, rgba(71,13,31,1) 100%)',
            width: '100%',
            height: '100%',
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 0
        },
        '&:before': {
            backgroundImage: 'url(/assets/ocd-bg.jpg)',
            width: '100%',
            height: '100%',
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 0
        }
    } 
}));