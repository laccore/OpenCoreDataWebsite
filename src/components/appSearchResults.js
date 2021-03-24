import React, { useContext, useEffect, useState } from 'react'

// import { makeStyles } from '@material-ui/core/styles'

// import { Link } from 'react-router-dom';

import { Alert, Avatar, Chip, Button, Fade, Link, List, ListItem, ListItemIcon, ListItemText, Modal, Typography } from '@material-ui/core/'

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

    const [ results, setResults ] = useState()
    const [ open, setOpen ] = useState(false)

    const [ chosen, setChosen ] = useState(0)

    const handleOpen = (item) => {
        setOpen(true)
        setChosen(item)
    }
    const handleClose = () => {
        setOpen(false)
        setChosen(0)
    }

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
                                <ListItem key={`listItem-${i}`} className={ classes.listItem } button onClick={() => handleOpen(i)}>
                                     {/* component={ Link } to="/about" */}
                                    <ListItemIcon>
                                        { (((listItem.type.value).toLowerCase()).includes('researchproject')) ? <LibraryBooksIcon color={'primary'} /> : null }
                                        { (((listItem.type.value).toLowerCase()).includes('dataset')) ? <DataUsageIcon color={'primary'}/> : null }
                                        { (((listItem.type.value).toLowerCase()).includes('digitaldocument')) ? <AssignmentIcon color={'primary'} /> : null }
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={`${listItem.name.value}`} 
                                        secondary={`${(listItem.description.value).slice(0,60)}...`}
                                    />
                                </ListItem>
                            )}
                        
                        </List> 

                        <Modal
                            open={open}
                            onClose={handleClose}
                            classes={classes.modal}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <Fade in={open}>
                                <div className={classes.paperModal}>
                                    <div id="score">
                                        <Chip 
                                            variant="outlined" 
                                            color="primary" 
                                            label={ results[chosen].score.value } 
                                            avatar={<Avatar>S</Avatar>}
                                        />
                                    </div>
                                    <br/>
                                    <div id="name">
                                        <Typography className={classes.title} color="primary" gutterBottom variant="h5" component="h4">
                                            { results[chosen].name.value }
                                        </Typography>
                                    </div>
                                    <hr/>
                                    <div id="description">
                                        <Typography variant="subtitle2" component="h6">
                                            { results[chosen].description.value }
                                        </Typography>
                                    </div>
                                    <hr/>
                                    <div id="lit">
                                        <Typography variant="body1" component="p">
                                            { results[chosen].name.value }
                                        </Typography>
                                    </div>
                                    <br/>
                                    <div id="uri">
                                        <Button type={'link'} fullWidth href={ results[chosen].s.value } variant="contained" color="primary">
                                            { results[chosen].s.type }
                                        </Button>
                                    </div>
                                    
                                </div>
                            </Fade>
                        </Modal>
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

