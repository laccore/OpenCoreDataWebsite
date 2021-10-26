import React, { memo, useState, useEffect, useContext } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

// --------------
// Styles/Assets:
// --------------
import { useStyles } from './appSearchHead.style'
import {Box, Button, Container, Divider, FormControl, Grid, IconButton, InputLabel, InputBase, MenuItem, Select, Paper, Typography, Chip } from '@material-ui/core/'

import SearchIcon from '@material-ui/icons/Search';

// --------------
// Functions:
// --------------
import config from '../config'
import { isEmpty } from 'lodash'
import { arrayIsEmpty } from '../functions/formatFunctions'
import { defaultSearch } from '../functions/searchFunctions'
import { useLocation, useHistory } from 'react-router-dom'

// --------------
// Hooks/Context:
// --------------
import useFetchAPI from '../hooks/useFetchAPI'
import { SearchContext } from '../contexts/searchContext'
import { LoadingContext } from '../contexts/loadingContext'

// --------------
// Configuration
// --------------
import { searchHeadContent } from '../assets/data/pageContent'


export const AppSearchHead = ({ env } ) => {

  const classes = useStyles()

  const [ fetchState, fetchData ] = useFetchAPI()
  const [ searchState, searchDispatch ] = useContext(SearchContext)
  const [ loadingState, loadingDispatch ] = useContext(LoadingContext)


  // const { url, params, body } = defaultSearch(env.api, searchQuery)
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ searchLimit, setSearchLimit ] = useState(1000);
  const [ searchOffset, setSearchOffset ] = useState(0);

  const location = useLocation()
  const history = useHistory()

  const query = {
    value: searchQuery,
    limit: searchLimit,
    offset: searchOffset
  }

  const [chipData, setChipData] = useState([])

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key))
    searchDispatch({ type: 'RESET_SEARCH_QUERY' })
  }

  const onSearchInput = event => {
    setSearchQuery(event.target.value);
  }
  const onSearchLimit = event => {
    setSearchLimit(event.target.value);
  }

  const onSearchSubmit = () => {
    if(!isEmpty(searchQuery)){

      searchDispatch({ type: 'SET_SEARCH_QUERY', query: searchQuery })

      console.log(searchState)
      console.log(location)
      
      
      if(location.pathname !== '/' || location.pathname !== ''){
        history.push(`/${location.search}`)
      }
    }
  }

  useEffect(() => {
    
    (async () => {

      loadingDispatch({ type: 'SET_SEARCH_LOADING', searchLoading: true})

      console.log(loadingState)
      
      const query = {
        value: searchState.query,
        limit: searchLimit,
        offset: searchOffset
      }
      setChipData(chips => [searchState.query])
      
      const {url, params, body} = defaultSearch(env.graph, query)
      await fetchData(url, body)

      loadingDispatch({ type: 'SET_SEARCH_LOADING', searchLoading: false})
      
      console.log(loadingState)

    })()

  }, [searchState.query])
  
  useEffect(() => {
    if(!isEmpty(fetchState.data)){
      let currentData = fetchState.data
      if(currentData.results){
        console.log(currentData)
        console.log(currentData.results)
        if(currentData.results.bindings){
          console.log(currentData.results)
          console.log(currentData.results.bindings)
          searchDispatch({ type: 'SET_SEARCH_RESULTS', results: currentData.results.bindings })
        }
      }
    }
  }, [fetchState])
  
  useEffect(() => {
    
    console.log(searchState.query)
    if(!isEmpty(searchState.query)){
      console.log(searchState.query)
      searchDispatch({ type: 'SET_SEARCH_QUERY', query: searchState.query })
    }

  }, [])
  
  return (
     
    <Box p={4} className={clsx(classes.backdrop)} textAlign={'center'} justifyContent="center">
      <Box pt={2} margin={'auto'} maxWidth={'920px'} width={"100%"}>
        <Typography className={classes.heading} variant={'h4'} component={'h1'}>
            { env.siteName }
        </Typography>
        <Typography className={classes.subheading} variant={'subtitle2'} component={'h2'}>
            <i>{ searchHeadContent.subheading } </i>
        </Typography>
      </Box>
        
      <Box p={2} width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Grid container spacing={0} className={classes.inputBox} >
          <Grid key={'search-input'} item xs={10}>
            <InputBase
              className={ classes.inputBase }
              placeholder={`Search ${env.siteName}`}
              fullWidth
              inputProps={{ 'aria-label': `search ${env.siteName}` }}
              onChange={onSearchInput} 
            />
          </Grid>

          {/* <Divider className={classes.divider} orientation="vertical" /> */}

          {/* <FormControl classes={{ root: classes.formControl}}>
            <Select
              labelId="search-results-limit-select-label"
              id="search-results-limit-select"
              className={classes.inputSelect}
              placeholder="10"
              value={searchLimit}
              onChange={onSearchLimit}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl> */}
          
          {/* <Divider className={classes.divider} orientation="vertical" /> */}
          <Grid key={'search-submit'} item xs={2}>
            <Button
              className={classes.button}
              color={'primary'}
              variant={'contained'}
              edge={'end'}
              fullWidth
              aria-label="search-results-submit"
              onClick={() => onSearchSubmit()}
            >  
              <SearchIcon />
            </Button>
          </Grid>
        </Grid>

        { (searchState.query) ? 
          <>
            { chipData.map(chipItem => 
              <Chip
                key={chipItem}
                label={chipItem}
                onDelete={handleDelete(chipItem)}
                color={'primary'}
              >
              </Chip>
            )}
          </>
          : null
        }
        
      </Box>
    </Box>
  )
}

AppSearchHead.propTypes = {
    env: PropTypes.object.isRequired
}

// export const MemoAppSearchHead = memo(AppSearchHead) 
export default AppSearchHead


