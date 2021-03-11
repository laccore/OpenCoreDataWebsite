import React, { memo, useState, useEffect, useContext } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { useStyles } from './appSearchHead.style'

import SearchIcon from '@material-ui/icons/Search';

import {Box, Container, Divider, FormControl, IconButton, InputLabel, InputBase, MenuItem, Select, Paper, Typography } from '@material-ui/core/'

import config from '../config'
import { isEmpty } from 'lodash'

import { defaultSearch } from '../functions/searchFunctions'
import useFetchAPI from '../hooks/useFetchAPI'
import { SearchContext } from '../contexts/searchContext'


export const AppSearchHead = ({ title } ) => {
  
  const classes = useStyles()

  const [ fetchState, fetchData ] = useFetchAPI()
  const [ searchState, searchDispatch ] = useContext(SearchContext)

  // const { url, params, body } = defaultSearch(config.testing.api, searchQuery)
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ searchLimit, setSearchLimit ] = useState(10);
  const [ searchOffset, setSearchOffset ] = useState(0);

  const onSearchInput = event => {
    console.log(event.target.value);
    setSearchQuery(event.target.value);
  };
  const onSearchLimit = event => {
    console.log(event.target.value);
    setSearchLimit(event.target.value);
  };

  const handleSearchInput = () => {
    const query = {
      value: searchQuery,
      limit: searchLimit,
      offset: searchOffset
    }
    console.log(fetchState)
    
    if(!isEmpty(query.value)){
      const {url, params, body} = defaultSearch(config.testing.api, query)
      fetchData(url, body)
    }
    
    console.log(fetchState)
  }

  useEffect(() => {
    handleSearchInput()
  }, [searchQuery, searchLimit])

  useEffect(() => {
    if(!isEmpty(fetchState.data)){
      console.log('fetchState: ')
      console.log(fetchState)
      searchDispatch({ type: 'SET_SEARCH_RESULTS', results: fetchState.data })
      console.log('fetchState: ')
      console.log(fetchState)
      console.log('searchState: ')
      console.log(searchState)
    }
  }, [fetchState])

  return (
    <>
      <Box p={4} className={clsx(classes.backdrop)} textAlign={'center'} justifyContent="center">
        <Box p={2} margin={'auto'} width={"100%"}>
          <Typography className={classes.heading} variant={'h3'} component={'h1'}>
              { title }
          </Typography>
          <Box className={classes.inputBox}>
            <InputBase
              className={classes.inputBase}
              placeholder={`Search ${title}`}
              inputProps={{ 'aria-label': `search ${title}` }}
              fullWidth
              onChange={onSearchInput} />

            <Divider className={classes.divider} orientation="vertical" />

            <FormControl classes={{ root: classes.formControl}}>
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
            </FormControl>
            
            <Divider className={classes.divider} orientation="vertical" />

            <IconButton 
              className={classes.inputButton}
              aria-label="delete"
            >  
              <SearchIcon />
            </IconButton>
            

          </Box>
        </Box>
      </Box>
    </>
  )
}

AppSearchHead.propTypes = {
    title: PropTypes.string
}

// export const MemoAppSearchHead = memo(AppSearchHead) 
export default AppSearchHead


