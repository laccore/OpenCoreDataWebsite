import React, {useEffect, useState, useContext } from "react"
import clsx from 'clsx'

import Layout from '../layouts/index'
import { Alert, Box, Checkbox, Container, Divider, Grid, FormControl, InputLabel, InputBase, MenuItem, List, ListItem, ListItemIcon, ListItemText, Select, Typography } from '@material-ui/core/'

import CommentIcon from '@material-ui/icons/Comment'


import config from '../config'

// import { defaultSearch } from '../functions/searchFunctions'
// import useFetchAPI from '../hooks/useFetchAPI'

import * as indexStyles from './index.module.scss'

import { AppSearchResults } from '../components/appSearchResults'

import { SearchContext } from '../contexts/searchContext'

import { arrayIsEmpty, isObjEmpty } from '../functions/formatFunctions'
import { capitalize, isEmpty } from "lodash"

// import { QuerySearchComponents } from '../queries/searchComponents'
// import { SimpleList } from "../components/listComponents"

const dataTypes = ['project', 'dataset', 'file']

const IndexPage = () => {

  // const [ fetchState, fetchData ] = useFetchAPI()
  
  // const { url, params, body } = defaultSearch(config.testing.api, searchQuery)
  // const [ searchQuery, setSearchQuery ] = useState("")
  // const [ searchLimit, setSearchLimit ] = useState(10)
  // const [ searchOffset, setSearchOffset ] = useState(0)

  const [checked, setChecked] = useState([])

  const [ searchState, searchDispatch ] = useContext(SearchContext)
 
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


  return (
    <Layout header={'search'}>
        <Container maxWidth={'lg'}>
          <Box 
            bgcolor={'inherit'} 
            p={0} 
            boxShadow={2} 
            borderRadius={4} 
            className={clsx(indexStyles.boxSearchResults)}
          >
            <Grid container>
              <Grid 
                key={`search-filter`} 
                item xs={12} sm={4} 
                className={clsx(indexStyles.filterGridItem)}>
                <Box p={2}>
                  <Typography variant="h6" component="h4">
                    Filter by Data Type:
                  </Typography>
                </Box>
                <List className={indexStyles.root} disablePadding>
                  {dataTypes.map((value) => 
                      <ListItem 
                        key={value} 
                        role={undefined} 
                        dense 
                        button 
                        onClick={handleToggle(value)}
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': `filter-${value}` }}
                          />
                        </ListItemIcon>
                        <ListItemText 
                          id={`filter-item-${value}`} 
                          primary={`${capitalize(value)}`} 
                        />
                      </ListItem>
                  )}
                </List>

                <Divider />
                
              </Grid>
              <Grid key={`search-results`} item xs={12} sm={8}>
                {console.log(searchState.results)}
                {/* {console.log(results)} */}

                { (searchState.results) ? 
                    <AppSearchResults checked={checked}/>
                    : 
                    <Alert variant="filled" severity="info">
                      No current search! Please try again...
                    </Alert>
                }
              </Grid>
              
            </Grid>
            
          </Box>
        </Container>
    </Layout>
  )
}

export default IndexPage
