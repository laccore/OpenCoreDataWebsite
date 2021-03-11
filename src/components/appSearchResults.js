import React, {useEffect, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Link, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core/'

import AssignmentIcon from '@material-ui/icons/Assignment'
import DataUsageIcon from '@material-ui/icons/DataUsage'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

import { useStyles } from './appSearchResults.styles'

import { SearchContext } from '../contexts/searchContext'

import { isEmpty } from 'lodash'

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />
// }

export function SearchResults({listItems}) {

    const classes = useStyles()

    const [ searchState, searchDispatch ] = useContext(SearchContext)

    useEffect(() => {
        {console.log('searchState: ')}
        {console.log(searchState)}
    }, [searchState])

    return (
        <Box className={classes.simpleListBox} py={4}>
        
            <List classes={{ root: classes.list}}>
                { (searchState.results.results) ?
                    (searchState.results.results.bindings) ?
                        (searchState.results.results.bindings).map((listItem, i) => 
                            <ListItem key={`listItem-${i}`} className={ classes.listItem } button component={Link} href={`/${listItem.type.name}`}>
                                <ListItemIcon>
                                    { (((listItem.type.value).toLowerCase()).includes('researchproject')) ? <LibraryBooksIcon /> : null }
                                    { (((listItem.type.value).toLowerCase()).includes('dataset')) ? <DataUsageIcon /> : null }
                                    { (((listItem.type.value).toLowerCase()).includes('digitaldocument')) ? <AssignmentIcon /> : null }
                                </ListItemIcon>
                                <ListItemText 
                                    primary={`${listItem.name.value}`} 
                                    secondary={`${(listItem.description.value).slice(0,60)}...`}
                                />
                            </ListItem>
                        ) : null
                    : null
                }
            </List>

        </Box>
    )
}
