import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    inputBox: {
        display: 'flex',
        width: '100%',
        maxWidth: '480px',
        backgroundColor: theme.palette.white.main,
        borderRadius: `4px`,
        boxShadow: theme.shadows[3],
        margin: `${theme.spacing(1)}px auto`
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
        flexDirection: 'column'
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
        padding: 10,
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
        padding: theme.spacing(1)
    },
    formControl: {
        width: '80px',
        padding: theme.spacing(2)
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