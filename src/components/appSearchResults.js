import React, { useContext, useEffect, useState } from 'react'

// import { makeStyles } from '@material-ui/core/styles'

import { Alert, Link, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@material-ui/core/'

import AssignmentIcon from '@material-ui/icons/Assignment'
import DataUsageIcon from '@material-ui/icons/DataUsage'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

import { useStyles } from './appSearchResults.styles'

// import { isEmpty } from 'lodash'
// import { arrayIsEmpty, isObjEmpty } from '../functions/formatFunctions' 

import { SearchContext } from '../contexts/searchContext'

export function AppSearchResults() {

    const classes = useStyles()

    const [ searchState, searchDispatch ] = useContext(SearchContext)

    const [ results, setResults ] = useState();

    useEffect(() => {
        if(searchState.results){
          if(searchState.results.results){
            if(searchState.results.results.bindings){
              setResults(searchState.results.results.bindings)
            }
          }
        }
        
    }, [searchState.results])

    return (
        // <Box className={classes.simpleListBox} py={4}>
        <>
            { (results) ? 
                (Array.isArray(results) && results.length !== 0) ?
                    <>
                        <Typography variant="subtitle2" component="h6" gutterBottom>
                            Total results: {results.length}
                        </Typography>
                        <List classes={{ root: classes.list}}>
                
                            { (searchState.results.results.bindings).map((listItem, i) => 
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
                            )}
                        
                        </List> 
                    </>
                    : 
                    <Alert variant="filled" severity="info">
                        No results! Please try again...
                    </Alert>
                : null  
            }
            
        </>
    )
}

export default AppSearchResults

