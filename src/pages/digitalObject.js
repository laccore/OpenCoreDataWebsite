import React, {useEffect, useState, useContext } from "react"
import clsx from 'clsx'

// ------------------------
// Material
// ------------------------
import {  Accordion, AccordionSummary, AccordionDetails, Box, Button, Checkbox, Grid, FormControl, IconButton, InputLabel, InputBase, List, ListItem, ListItemSecondaryAction, ListItemText, Select, Typography, Chip } from '@material-ui/core/'
import { Alert } from '@material-ui/lab'
import GetAppIcon from '@material-ui/icons/GetApp'

// ------------------------
// Styles
// ------------------------
import { useStyles } from './home.styles.js'

// ------------------------
// Configuration
// ------------------------
import config from '../config'
import { arrayIsEmpty, checkFor, convertFromCamelCase, capitalize, isObjEmpty } from '../functions/formatFunctions'
import { digitalObjectSearch } from '../functions/searchFunctions'
import { isEmpty } from "lodash"

// ------------------------
// Context/hooks
// ------------------------
import { SearchContext } from '../contexts/searchContext'
import { FilterContext } from '../contexts/filterContext'
import useFetchAPI from '../hooks/useFetchAPI'

// ------------------------
// Parts/Components
// ------------------------
import { AppBreadcrumbs } from '../parts/appBreadcrumbs'

const dataTypes = ['project', 'dataset', 'file']

export const DigitalObject = (props) => {
    
    const classes = useStyles()
    const [checked, setChecked] = useState([]) // for one filter (array of...)
    const [expanded, setExpanded] = useState(0);

    const [ searchState, searchDispatch ] = useContext(SearchContext)
    const [ filterState, filterDispatch ] = useContext(FilterContext)

    const [ fetchState, fetchData ] = useFetchAPI()
    
    const { page, env, match } = props
       
    const [ content, setContent ] = useState(null);
  
    const component = (page.path).split('/').filter(q => q != "")[0]
    const id = match.params.id
    const query = `${component}/${id}`
    
    const handleDownload = (url) => {
        
        console.log(url)
    }

    // ------------------------------
    // Set digital object content:
    // ------------------------------
    useEffect(() => {
        if(!isObjEmpty(fetchState.data)){
            console.log(fetchState)
            if(fetchState.data.results.bindings.length > 0){
                let currentResults = fetchState.data.results.bindings
                let updatedContent = {}
                
                currentResults.forEach(option => {
                    let currentKey = (option.p.value).replace('https://schema.org/','')
                    updatedContent[currentKey] = {
                        "schema": option.p.value,
                        "value": option.o.value,
                        "key": convertFromCamelCase(currentKey)
                    }
                })
                // console.log(updatedContent)
                setContent(updatedContent)
            }
        } else{
            setContent(null)
        }
    }, [fetchState])

    useEffect(() => {
        
        (async () => {
            if(match.params.id && !isEmpty(match.params.id)){
                
                const {url, context} = digitalObjectSearch(env.graph, id)
                console.log(url, context)
                
                // await getContent(url, context)
                await fetchData(url, context)
                
            } else {
                setContent({})
            }
        
        })()
    
    }, [])

    return(
        <>        
            <AppBreadcrumbs {...props} />
            <Box 
                bgcolor={'inherit'} 
                position={'relative'}
                p={0} 
                boxShadow={2} 
                borderRadius={4} 
                // className={clsx(classes.boxSearchResults)}
            >   
                { (!isObjEmpty(content)) ?
                    <>
                        {console.log(content)}
                        <Box p={4} justifyContent={'center'} alignItems={'center'} bgcolor={'grey.200'}>
                            <Box py={1}>
                                <Typography variant={'h5'} component={'h2'}>
                                    {content.name.value}
                                </Typography>
                            </Box>
                            <Box py={1}>
                                <Chip 
                                    variant={'outlined'}
                                    color={'primary'}
                                    label={content.encodingFormat.value} />
                            </Box>

                            <Box py={1}>
                                <Typography variant={'body1'} component={'p'} style={{ lineHeight: '1.6' }}>
                                    {content.description.value}
                                </Typography>
                            </Box>

                            <Box my={1}>
                                <Button
                                    color={'primary'} 
                                    variant={'contained'} 
                                    download={content.url.name}
                                    // component={'a'}
                                    onClick={handleDownload(content.url.value)}
                                >
                                    Download
                                </Button>

                            </Box>
                        </Box>
                        
                        <Box >
                            <List component="ul" aria-label="download list">
                                
                                {(!isObjEmpty(content.dateCreated)) &&
                                    <ListItem key={`list-item-${content.dateCreated.key}`} divider > 
                                        <ListItemText 
                                            primary={content.dateCreated.value} 
                                            secondary={content.dateCreated.key}
                                        />
                                    </ListItem>
                                }
                                {(!isObjEmpty(content.isRelatedTo)) &&
                                    <ListItem key={`list-item-${content.isRelatedTo.key}`} divider > 
                                        <ListItemText 
                                            primary={
                                                <a href={`/res/${content.isRelatedTo.value}`} title='project related to'>
                                                    {content.isRelatedTo.value}
                                                </a>
                                            }
                                            secondary={content.isRelatedTo.key}
                                        />
                                    </ListItem>
                                }
                                {(!isObjEmpty(content.identifier)) &&
                                    <ListItem key={`list-item-${content.identifier.key}`} divider > 
                                        <ListItemText 
                                            primary={content.identifier.value} 
                                            secondary={content.identifier.key}
                                        />
                                    </ListItem>
                                }
                                {(!isObjEmpty(content.license)) &&
                                    <ListItem key={`list-item-${content.license.key}`} divider > 
                                        <ListItemText 
                                            primary={
                                                <a href={content.license.value} title='license information'>
                                                    {content.license.value}
                                                </a>
                                            }
                                            secondary={content.license.key} 
                                        />
                                    </ListItem>
                                }
                                
                            </List>
                        </Box>
                    </>
                    
                : 
                    <Alert severity={'error'}>
                        'No file available for this ID.'
                    </Alert>
                }
            </Box>
        </>
    )
}
  
  export default DigitalObject