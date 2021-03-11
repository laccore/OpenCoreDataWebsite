import React, {useEffect, useState, useContext } from "react"

import Layout from '../layouts/index'
import {Box, Container, Divider, FormControl, InputLabel, InputBase, MenuItem, Select, } from '@material-ui/core/'

import config from '../config'

import { defaultSearch } from '../functions/searchFunctions'
import useFetchAPI from '../hooks/useFetchAPI'

import indexStyles from './index.module.scss'

import { SearchResults } from '../components/appSearchResults'

// import { QuerySearchComponents } from '../queries/searchComponents'
// import { SimpleList } from "../components/listComponents"

const IndexPage = () => {

  // const [ fetchState, fetchData ] = useFetchAPI()
  
  // const { url, params, body } = defaultSearch(config.testing.api, searchQuery)
  // const [ searchQuery, setSearchQuery ] = useState("");
  // const [ searchLimit, setSearchLimit ] = useState(10);
  // const [ searchOffset, setSearchOffset ] = useState(0);

  // const onSearchInput = event => {
  //   console.log(event.target.value);
  //   setSearchQuery(event.target.value);
  // };
  // const onSearchLimit = event => {
  //   console.log(event.target.value);
  //   setSearchLimit(event.target.value);
  // };

  

  return (
    <Layout>
        <Container maxWidth={'lg'}>
          <Box bgcolor={'white.main'} p={0} boxShadow={2}>
            
            <SearchResults />
           

          </Box>
        </Container>
    </Layout>
  )
}

export default IndexPage
