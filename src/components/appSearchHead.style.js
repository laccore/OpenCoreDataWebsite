import { makeStyles, lighten } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    inputBox: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        maxWidth: '480px',
        backgroundColor: theme.palette.white.main,
        borderRadius: `4px`,
        boxShadow: theme.shadows[3],
        margin: `${theme.spacing(1)}px auto`,
        contain: 'content'
    },
    heading: {
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
    },
    search: {
        padding: theme.spacing(1),
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '480px'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        borderRadius: 0,
        flexShrink: 2,
        width: '100%',
        height: '100%',
        backgroundColor: lighten(theme.palette.primary.light, 0.75)
    },
    inputFieldBox: {
        backgroundColor: theme.palette.grey[100],
        boxShadow: theme.shadows[1]
    },
    divider: {
        height: '40px',
        margin: 'auto'
    },
    inputBase: {
        padding: theme.spacing(1),
        flexShrink: 1,
        width: '100%',
        height: '100%'
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
    list: {
        padding: 0    
    },
    listItem: {
        padding: `${theme.spacing(2)} ${theme.spacing(2)}`
        // borderBottom: '1px solid rgba(0,0,0,0.1)'
    }
}));