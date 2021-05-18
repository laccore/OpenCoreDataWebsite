import React, {useEffect, useState, useContext } from "react"
import clsx from 'clsx'

// ------------------------
// Material
// ------------------------
import {  Accordion, AccordionSummary, AccordionDetails, Box, Checkbox, Grid, FormControl, InputLabel, InputBase, List, ListItem, ListItemIcon, ListItemText, Select, Typography, Chip } from '@material-ui/core/'
import { Alert } from '@material-ui/lab'

// ------------------------
// Styles
// ------------------------
import { useStyles } from './home.styles.js'

// ------------------------
// Configuration
// ------------------------
import config from '../config'
import { checkFor, convertFromCamelCase } from '../functions/formatFunctions'
import { capitalize, isEmpty } from "lodash"
import { updateName } from '../functions/appFunctions'

// ------------------------
// Context
// ------------------------
import { SearchContext } from '../contexts/searchContext'
import { FilterContext } from '../contexts/filterContext'

// ------------------------
// Parts/Components
// ------------------------
import { AppSearchResults } from '../parts/appSearchResults'


const dataTypes = ['project', 'dataset', 'file']

export const Home = ({ env }) => {
    
    const classes = useStyles()
    const [checked, setChecked] = useState([]) // for one filter (array of...)
    const [expanded, setExpanded] = useState(0);


    const [ searchState, searchDispatch ] = useContext(SearchContext)
    const [ filterState, filterDispatch ] = useContext(FilterContext)

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


    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    }

    return(
        <>        
            <Box 
                bgcolor={'inherit'} 
                p={0} 
                boxShadow={2} 
                borderRadius={4} 
                className={clsx(classes.boxSearchResults)}
            >
                <Grid container>
                <Grid 
                    key={`search-filter`} 
                    item xs={12} sm={4} 
                    className={clsx(classes.filterGridItem)}>
                    
                    {/* Add filters, change to index for expand */}
                    
                    { (checkFor(filterState)) ?  
                            <>
                                {console.log(filterState)}
                                { Object.entries(filterState).map(([filterKey, filterVal], i) => {
                                    
                                    console.log(filterKey, filterVal)

                                    return(
                                        <Accordion key={`filter-${filterKey}`} square expanded={expanded === i} onChange={handleChange(i)}>

                                            <AccordionSummary aria-controls="filter-dataType" id="filter-dataType">
                                                <Typography variant="subtitle2" component="h5">
                                                    Filter by {convertFromCamelCase(filterKey)}:
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                
                                                <List key={`filter-list-${filterKey}`} className={classes.root} disablePadding>
                                                    
                                                    { Object.entries(filterVal).map(([key,val], index) => {
                                                        console.log(key,val)
                                                        return(
                                                            <ListItem 
                                                                key={`filter-list-${filterKey}-${index}`} 
                                                                role={undefined} 
                                                                dense 
                                                                button 
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
                                                            </ListItem>
                                                        )
                                                    })}

                                                </List>

                                            </AccordionDetails>
                                            
                                        </Accordion>
                                    )
                                })}
                            </>
                        : null
                    }

                </Grid>
                <Grid key={`search-results`} item xs={12} sm={8}>
                    {console.log(searchState.results)}
                    
                    { (searchState.results) ? 
                        <AppSearchResults checked={checked} setChecked={setChecked} env={env} />
                        : 
                        null
                    }
                </Grid>
                
                </Grid>
                
            </Box>
        </>
    )
}
  
  export default Home