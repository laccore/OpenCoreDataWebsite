import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Box from '@material-ui/core/Box'

import AssignmentIcon from '@material-ui/icons/Assignment'
import DataUsageIcon from '@material-ui/icons/DataUsage'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

const useStyles = makeStyles((theme) => ({
    simpleListBox: {
        width: '100%',
        margin: '0 auto',
        backgroundColor: theme.palette.background.paper,
    },
    listRoot: {
        width: '100%',
        maxWidth: '80%',
        margin: '0 auto',
        padding: '0'
    },
    listItemRoot: {
        padding: theme.spacing(2),
        boxShadow: theme.shadows[1],
        border: '1px solid rgba(0,0,0,0.05)',
    }
}))

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />
// }

export function SimpleList({listItems}) {

    const classes = useStyles()

    return (
        <Box className={classes.simpleListBox} py={4}>
        
            <List classes={{ root: classes.listRoot}}>
                {(listItems).map(listItem => 
                <ListItem key={`${listItem.node.type.name}`} className={ classes.listItemRoot } button component={Link} href={`/${listItem.node.type.name}`}>
                    <ListItemIcon>
                        { (listItem.node.type.name == 'ResearchProject') ? <LibraryBooksIcon /> : null }
                        { (listItem.node.type.name == 'Dataset') ? <DataUsageIcon /> : null }
                        { (listItem.node.type.name == 'DigitalDocument') ? <AssignmentIcon /> : null }
                    </ListItemIcon>
                    <ListItemText 
                        primary={`${listItem.node.name}`} 
                        secondary={`${(listItem.node.description).slice(0,60)}...`}
                    />
                </ListItem>
                )}
            </List>

        </Box>
    )
}
