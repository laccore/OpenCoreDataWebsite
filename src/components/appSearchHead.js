import React, { memo, useState, useEffect, useContext } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { useStyles } from './appSearchHead.style'

import SearchIcon from '@material-ui/icons/Search';

import {Box, Button, Container, Divider, FormControl, Grid, IconButton, InputLabel, InputBase, MenuItem, Select, Paper, Typography } from '@material-ui/core/'

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
    setSearchQuery(event.target.value);
  };
  const onSearchLimit = event => {
    setSearchLimit(event.target.value);
  };

  const onSearchSubmit = () => {
    if(!isEmpty(searchQuery)){
      handleSearchSubmit()
    }
  };

  const handleSearchSubmit = () => {
    const query = {
      value: searchQuery,
      limit: searchLimit,
      offset: searchOffset
    }
    
    if(!isEmpty(query.value)){
      const {url, params, body} = defaultSearch(config.testing.api, query)
      fetchData(url, body)
    }
  }

  useEffect(() => {
    if(!isEmpty(fetchState.data)){
      searchDispatch({ type: 'SET_SEARCH_RESULTS', results: fetchState.data })
    }
  }, [fetchState])

  return (
    <>
      <Box p={4} className={clsx(classes.backdrop)} textAlign={'center'} justifyContent="center">
        <Box p={2} margin={'auto'} width={"100%"}>
          <Typography className={classes.heading} variant={'h3'} component={'h1'}>
              { title }
          </Typography>
          {/* <Box className={classes.inputBox} display={'flex'} flexDirection={'column'} > */}
            <Grid container spacing={0} className={classes.inputBox} >
              <Grid item xs={10}>
                <InputBase
                  className={ classes.inputBase }
                  placeholder={`Search ${title}`}
                  fullWidth
                  inputProps={{ 'aria-label': `search ${title}` }}
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
              <Grid item xs={2}>
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

          {/* </Box> */}
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


