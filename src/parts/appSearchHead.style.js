import { makeStyles, lighten, hexToRgb } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    inputBox: {
        maxWidth: '480px',
        backgroundColor: theme.palette.white.main,
        borderRadius: `4px`,
        boxShadow: theme.shadows[3],
        margin: `${theme.spacing(1)}px auto`,
        contain: 'content'
    },
    inputBase: {
        padding: theme.spacing(1),
    },
    button: {
        borderRadius: 0,
        height: '100%'
        // backgroundColor: lighten(theme.palette.primary.light, 0.75)
    },
    heading: {
        color: theme.palette.white.main,
        margin: `${theme.spacing(1)}px 0`,
        textShadow: `0 0 0.065em rgb(0 0 0 / 65%)`
    },
    backdrop: {
        // backgroundColor: 'rgb(255,255,255)',
        background: `linear-gradient(0deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 30%, ${theme.palette.tertiary.main} 100%)`,
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
    },
    search: {
        padding: theme.spacing(1),
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '480px'
    }, 
    divider: {
        height: '40px',
        margin: 'auto'
    },
    formControl: {
        // padding: theme.spacing(2),
        flexShrink: 2,
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.white.dark
    },
    inputSelect: {
        minWidth: '80px',
        padding: theme.spacing(1)
    },
    inputFieldBox: {
        backgroundColor: theme.palette.grey[100],
        boxShadow: theme.shadows[1]
    }
}));