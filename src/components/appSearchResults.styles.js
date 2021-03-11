import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    simpleListBox: {
        width: '100%',
        margin: '0 auto',
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        width: '100%',
        maxWidth: '80%',
        margin: '0 auto',
        padding: '0'
    },
    listItem: {
        padding: theme.spacing(2),
        boxShadow: theme.shadows[1],
        border: '1px solid rgba(0,0,0,0.05)',
    }
}))