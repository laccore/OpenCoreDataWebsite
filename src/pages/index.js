import React, {useEffect, useState, useContext } from "react"
import clsx from 'clsx'

import Layout from '../layouts/index'
import { Alert, Box, Container, Divider, FormControl, InputLabel, InputBase, MenuItem, Select, } from '@material-ui/core/'

import config from '../config'

// import { defaultSearch } from '../functions/searchFunctions'
// import useFetchAPI from '../hooks/useFetchAPI'

import indexStyles from './index.module.scss'

import { AppSearchResults } from '../components/appSearchResults'

import { SearchContext } from '../contexts/searchContext'

import { foundInArray, arrayIsEmpty, isObjEmpty } from '../functions/formatFunctions'

// import { QuerySearchComponents } from '../queries/searchComponents'
// import { SimpleList } from "../components/listComponents"

const IndexPage = () => {

  // const [ fetchState, fetchData ] = useFetchAPI()
  
  // const { url, params, body } = defaultSearch(config.testing.api, searchQuery)
  // const [ searchQuery, setSearchQuery ] = useState("");
  // const [ searchLimit, setSearchLimit ] = useState(10);
  // const [ searchOffset, setSearchOffset ] = useState(0);

  // const [ searchState, searchDispatch ] = useContext(SearchContext)

  // const [ results, setResults ] = useState([]);
  // const results = {
  //   current: []
  // };

  // const onSearchInput = event => {
  //   console.log(event.target.value);
  //   setSearchQuery(event.target.value);
  // };
  // const onSearchLimit = event => {
  //   console.log(event.target.value);
  //   setSearchLimit(event.target.value);
  // };

  
  // useEffect(() => {
  //   {console.log('searchState: ')}
  //   {console.log(searchState)}

  //   if(searchState.results){
  //     {console.log('searchState.results: ')}
  //     {console.log(searchState.results)}

  //     if(searchState.results.results){
  //       {console.log('searchState.results.results: ')}
  //       {console.log(searchState.results.results)}

  //       if(searchState.results.results.bindings){
  //         {console.log('searchState.results.results.bindings: ')}
  //         {console.log(searchState.results.results.bindings)}

  //         setResults(searchState.results.results.bindings)
  //       }
  //     }
  //   }
    
  // }, [searchState])

  return (
    <Layout>
        <Container maxWidth={'lg'}>
          <Box bgcolor={'white.main'} p={4} boxShadow={2} borderRadius={4} className={clsx(indexStyles.boxSearchResults)}>
            {/* {console.log(searchState)}
            {console.log(results)} */}
            {/* { (!arrayIsEmpty(results) || !isObjEmpty(results)) ?  */}
                <AppSearchResults />
                {/* : 
                <Alert variant="filled" severity="info">
                    No results! Please try again...
                </Alert> */}
            {/* } */}
            {/* { (results) ?
                <SearchResults listItems={results} />
              : null 
            }  */}
          </Box>
        </Container>
    </Layout>
  )
}

export default IndexPage
