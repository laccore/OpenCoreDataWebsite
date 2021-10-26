import React, { useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
// import clsx from 'clsx'

import { MemoAppToolbar } from '../parts/appToolbar'
import { AppSearchHead } from '../parts/appSearchHead'
// import { AppStandardHead } from '../parts/appStandardHead'
// import { isEmpty } from 'lodash'

import { SearchContext } from '../contexts/searchContext'

import { useHistory, useLocation } from "react-router-dom"
import { isEmpty } from '../functions/formatFunctions'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Header = ({ env, assets, pages }) => {

    const [drawer, setDrawer] = useState()

    let history = useHistory()
    let location = useLocation()
    let query = useQuery()

    // const searchQuery = (location) ? new URL(location.search) : ''

    // const toggleDrawer = (type, value) => (event) => {
    //     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return
    //     }
    //     setDrawer(value)
    // }


    // let searchQuery = queryString.parse(props.location.search)
    // let searchFilterQuery = (searchQuery.filter) ? JSON.parse(searchQuery.filter) : []

    const [ searchState, searchDispatch ] = useContext(SearchContext)

    const handleAddToQuery = (urlQuery='') => {
        
        const newQuery = (urlQuery) 
            ? { search: `query=${urlQuery}` }
            : urlQuery
        
        history.push(newQuery) 
        searchDispatch({ type: 'SET_SEARCH_QUERY', query: urlQuery })
        console.log(newQuery)
    }

    useEffect(() => {
        console.log(searchState.query)
        
        if(!isEmpty(searchState.query)){
            console.log(searchState.query)
            handleAddToQuery(searchState.query)
        }

    }, [searchState.query])

    useEffect(() => {
        
        console.log(query)
        let newQuery = query.get('query')
        
        if(!isEmpty(newQuery)){
            console.log(query)
            handleAddToQuery(newQuery)
        }

    }, [])


    return (
        <>
            <MemoAppToolbar env={env} pages={pages} />
            <AppSearchHead env={env} />
        </>
    )
}

Header.propTypes = {
    env: PropTypes.object.isRequired,
    pages: PropTypes.array.isRequired,
    assets: PropTypes.object.isRequired
}

export default Header

