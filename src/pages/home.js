import React, {useEffect, useState, useContext } from "react"
import clsx from 'clsx'

// ------------------------
// Material
// ------------------------
import {  Accordion, AccordionSummary, AccordionDetails, Box, Checkbox, Grid, FormControl, IconButton, InputLabel, InputBase, LinearProgress, List, ListItem, ListItemSecondaryAction, ListItemIcon, ListItemText, Select, Typography, Chip } from '@material-ui/core/'
import { Alert } from '@material-ui/lab'

// ------------------------
// Styles
// ------------------------
import { useStyles } from './home.styles.js'
import { FileIcon, PackageIcon, ProjectIcon } from '../assets/styles/custom-svgs'

// ------------------------
// Configuration
// ------------------------
import config from '../config'
import { arrayIsEmpty, checkFor, convertFromCamelCase, isObjEmpty } from '../functions/formatFunctions'
import { capitalize, isEmpty } from "lodash"
import { updateName } from '../functions/appFunctions'
import TableauReport from 'tableau-react'

// ------------------------
// Context
// ------------------------
import { SearchContext } from '../contexts/searchContext'
import { FilterContext } from '../contexts/filterContext'
import { LoadingContext } from '../contexts/loadingContext'
    
// ------------------------
// Parts/Components
// ------------------------
import { AppSearchResults } from '../parts/appSearchResults'
import { searchHeadContent } from '../assets/data/pageContent'


const dataTypes = ['project', 'dataset', 'file']

export const Home = ({ env }) => {
    
    const classes = useStyles()
    const [checked, setChecked] = useState([]) // for one filter (array of...)

    const [ searchState, searchDispatch ] = useContext(SearchContext)
    const [ filterState, filterDispatch ] = useContext(FilterContext)
    
    const [ loadingState, loadingDispatch ] = useContext(LoadingContext)

    const handleViz = () => 
        <TableauReport
            url='https://tableau.umn.edu/t/CSD-Facility/views/OCDMap1/Sheet1?:embed=y&:isGuestRedirectFromVizportal=y&:display_count=n&:showAppBanner=false&:origin=viz_share_link&:showVizHome=n'
            // embed_code_version='3'
            // site_root='&#47;t&#47;CSD-Facility'
            // name='OCDMap1&#47;Sheet1'
            // tabs='no'
            // toolbar='yes'
            // showAppBanner='false'
            // display_count='n'
            // origin='viz_share_link'
            // isGuestRedirectFromVizportal='y'
        />


{/* <div class='tableauPlaceholder' style='width: 1156px; height: 997px;'>
    <object class='tableauViz' width='1156' height='997' style='display:none;'>
        <param name='host_url' value='https%3A%2F%2Ftableau.umn.edu%2F' /> 
        <param name='embed_code_version' value='3' /> 
        <param name='site_root' value='&#47;t&#47;CSD-Facility' />
        <param name='name' value='OCDMap1&#47;Sheet1' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='showAppBanner' value='false' />
        <param name='display_count' value='n' />
        <param name='origin' value='viz_share_link' />
        <param name='isGuestRedirectFromVizportal' value='y' />
    </object>
</div>  */}

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value)
      const newChecked = [...checked]
  
      if (currentIndex === -1) {
        newChecked.push(value)
      } else {
        newChecked.splice(currentIndex, 1)
      }
  
      setChecked(newChecked)
    }

    useEffect(() => {
        Object.entries(filterState).forEach((key,val) => 
            console.log(key,val)
        )
        console.log(filterState)
    }, [filterState])

    return(
        <>        
            <Box 
                bgcolor={'inherit'} 
                p={0} 
                boxShadow={2} 
                borderRadius={4} 
                className={clsx(classes.boxSearchResults)}
            >
                {((loadingState.filtersLoading || loadingState.searchLoading) &&  
                    <LinearProgress color={'primary'} style={{ height: 10 }}/>   
                )}
                
                <Grid container>
                    <Grid 
                        key={`search-filter`} 
                        item xs={12} sm={4} 
                        className={clsx(classes.filterGridItem)}>
                        
                        {/* Add filters, change to index for expand */}
                        
                        { ( checkFor(filterState) && 
                            !arrayIsEmpty(searchState.results) && 
                            (!loadingState.filtersLoading || !loadingState.searchLoading) ) ?  
                                <>
                                    {console.log(filterState)}
                                    { Object.entries(filterState).map(([filterKey, filterVal], i) => 
                                        
                                        (filterState[filterKey] && !isObjEmpty(filterState[filterKey])) 
                                            ? <Accordion 
                                                key={`filter-${filterKey}`} 
                                                square 
                                                defaultExpanded
                                            >

                                                <AccordionSummary 
                                                    aria-controls="filter-dataType" 
                                                    id="filter-dataType"
                                                    style={{ borderBottom: '1px solid rgba(0,0,0,0.2)'}}
                                                >
                                                    <Typography variant="subtitle2" component="h5">
                                                        Filter by {convertFromCamelCase(filterKey)}:
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    
                                                    <List 
                                                        key={`filter-list-${filterKey}`} 
                                                        className={classes.list} 
                                                        disablePadding
                                                    >
                                                        
                                                        { Object.entries(filterVal).map(([key,val], index) => {
                                                            console.log(key,val)
                                                            return(
                                                                <ListItem 
                                                                    key={`filter-list-${filterKey}-${index}`} 
                                                                    role={undefined} 
                                                                    dense 
                                                                    button 
                                                                    divider
                                                                    onClick={handleToggle(key)}
                                                                >
                                                                    <ListItemIcon>
                                                                    <Checkbox
                                                                        edge="start"
                                                                        checked={checked.indexOf(key) !== -1}
                                                                        tabIndex={-1}
                                                                        disableRipple
                                                                        inputProps={{ 'aria-labelledby': `filter-${key}` }}
                                                                    />
                                                                    </ListItemIcon>
                                                                    <ListItemText 
                                                                        id={`filter-item-${key}`} 
                                                                        primary={
                                                                        <>
                                                                            <Typography variant={'body2'} component={'label'}>
                                                                                {/* {convertFromCamelCase(String(key))} */}
                                                                                {updateName(String(key))}
                                                                            </Typography>
                                                                            <Chip
                                                                                color={'secondary'}
                                                                                size={'small'}
                                                                                style={{ marginLeft: '4px' }}
                                                                                label={val}>
                                                                            </Chip>
                                                                        </>
                                                                    } 
                                                                    />
                                                                    <ListItemSecondaryAction>
                                                                        <IconButton 
                                                                            edge="end" 
                                                                            aria-label={`filter-by-datatype-${key}`} 
                                                                            disableFocusRipple
                                                                            disableRipple
                                                                            disableTouchRipple
                                                                            color={'inherit'}
                                                                        >
                                                                            { (((key).toLowerCase()).includes('researchproject')) 
                                                                                ? <ProjectIcon size={'medium'} color={'primary'} /> 
                                                                                : null 
                                                                            }
                                                                            { (((key).toLowerCase()).includes('dataset')) 
                                                                                ? <PackageIcon size={'medium'} style={{ color: '#ffcc33' }} /> 
                                                                                : null 
                                                                            }
                                                                            { (((key).toLowerCase()).includes('digitaldocument')) 
                                                                                ? <FileIcon size={'medium'} color={'secondary'} /> 
                                                                                : null 
                                                                            }
                                                                        </IconButton>
                                                                    </ListItemSecondaryAction>
                                                                </ListItem>
                                                            )
                                                        })}

                                                    </List>

                                                </AccordionDetails>
                                                
                                            </Accordion>
                                            : null

                                    )}
                                </>
                            : null
                        }

                    </Grid>
                    <Grid key={`search-results`} item xs={12} sm={8}>
                        {console.log(searchState.results)}
                        
                        { (!arrayIsEmpty(searchState.results) && 
                            <AppSearchResults checked={checked} setChecked={setChecked} env={env} />
                        )}
                    </Grid>
                </Grid>                

                { ( arrayIsEmpty(searchState.results) &&
                    (!loadingState.filtersLoading && !loadingState.searchLoading) &&
                    <Box p={0} minHeight={'40vmin'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                        
                        <Box width={'100%'} p={4}>
                            <Typography 
                                variant={'h4'} 
                                component={'h2'} 
                                gutterBottom 
                                style={{ textAlign: 'center'}}
                            >
                                Welcome to Open Core Data
                            </Typography>
                            <Typography variant={'body1'} component={'p'}>
                                { searchHeadContent.heading }
                            </Typography>
                        </Box>
                        {/* <Box className={classes.homeHeader}></Box> */}
                        
                        <iframe
                            width={'100%'}
                            height={'500px'}
                            style={{
                                border: 'none'
                            }}
                            src='https://tableau.umn.edu/t/CSD-Facility/views/OCDMap1/Sheet1?:embed=y&:isGuestRedirectFromVizportal=y&:display_count=n&:showAppBanner=false&:origin=viz_share_link&:showVizHome=n&toolbar=no&tabs=no'
                        />
                    </Box>
                )}
            </Box>
        </>
    )
}
  
  export default Home