import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    simpleListBox: {
        width: '100%',
        margin: '0 auto',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    simpleListButton: {

    },
    list: {
        width: '100%',
        // maxWidth: '100%',
        margin: '0 auto',
        padding: '0'
    },
    listItem: {
        padding: theme.spacing(2),
        boxShadow: theme.shadows[1],
        border: '1px solid rgba(0,0,0,0.05)',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    paperModal: {
        margin: 'auto',
        borderRadius: '0.5em',
        backgroundColor: theme.palette.background.paper,        
        boxShadow: theme.shadows[3],
        padding: theme.spacing(2, 4, 2),
        width: '100%',
        height: '100%',
        maxWidth: theme.breakpoints.values.sm,
        maxHeight: '50vmin',
        overflowY: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    sortFormSelect: {
        padding: theme.spacing(1)
    },
    sortButton: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        padding: theme.spacing(1)
    }
}))