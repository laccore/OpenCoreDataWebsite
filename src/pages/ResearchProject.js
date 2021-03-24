import React, { memo, useState, useEffect, useContext } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import config from '../config'

import { researchProjectSearch } from '../functions/searchFunctions'
import useFetchAPI from '../hooks/useFetchAPI'
// import { SearchContext } from '../contexts/searchContext'

import Layout from '../layouts/index'

import resStyles from './researchProject.module.scss'

import { Avatar, Container, Box, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core/'
import ImageIcon from '@material-ui/icons/Image'

import { isEmpty } from 'lodash'

const resData = [ 'abstract', 'discipline', 'expedition', 'funding', 'investigators', 'lab', 'linktitle', 'linkurl', 'outreach', 'repository', 'startdate', 'status', 'technique']


const ResearchProjectPage = () => {
  
  const [ fetchState, fetchData ] = useFetchAPI()
  // const [ searchState, searchDispatch ] = useContext(SearchContext)

  const [ searchResult, setSearchResult ] = useState({});
  // const [ searchQuery, setSearchQuery ] = useState("");
  // const [ searchLimit, setSearchLimit ] = useState(10);
  // const [ searchOffset, setSearchOffset ] = useState(0);

  const fetchQuery = () => {
    // const query = {
      // value: searchQuery,
      // limit: searchLimit,
      // offset: searchOffset
    // }
    let query = "SPA"
    // if(!isEmpty(query.value)){
    let currentQuery = `https://opencoredata.org/id/csdco/res`
      // const {url, params, body} = researchProjectSearch(config.testing.api, query)
      const {url, body} = researchProjectSearch(currentQuery, query)
      fetchData(url, body)
    // }
  }

  useEffect(() => {
    
    (async () => {
      if(fetchState.data)
        setSearchResult(fetchState.data)
      })()
  
  }, [fetchState])

  useEffect(() => {
    
    (async () => {
      if(!isEmpty(fetchState))
        fetchQuery()
    })()
  
  }, [])

  return (
    <Layout header={`standard`} heading={'CSDCO Project'} subheading={searchResult.name}>
      <Container maxWidth={'lg'}>
        <Box bgcolor={'white.main'} p={4} boxShadow={1}>

        <List className={''}>
          { resData.map( d => 
            <ListItem>
              <ListItemText 
                primary={`${d.toUpperCase()}`} 
                secondary={searchResult[`csdco:${d}`]} />
            </ListItem>
          )}
        </List>




        </Box>
      </Container>
    </Layout>
  )
}

export default ResearchProjectPage


ResearchProjectPage.propTypes = {
    title: PropTypes.string
}
