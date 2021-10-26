import { queryToSearchParams, queryForResearch, queryForResearchDatasets, queryForResearchBorehole, queryForDigitalObject } from '../queries/searchQueries'


// -----------------------------------------------
// Define Top Level Search Fetch method
// -----------------------------------------------
export const defaultSearch = (endpoint, query) => {

    const { value, limit, offset } = query

    const url = new URL(endpoint)
    const params = { query: queryToSearchParams(value, limit, offset)}
    
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    
    const body = {
        method: 'GET',
        //mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Accept': 'application/sparql-results+json',
            'Content-Type': 'application/json'
        }
    }

    return { url, params, body} 
}

// -----------------------------------------------
// Define Individual Component Specific Fetch method
// -----------------------------------------------
export const componentSearch = (endpoint, query) => {

    // const { value, limit, offset } = query

    // const url = new URL(endpoint)
    const url = new URL(`${endpoint}${(query) ? `/${query}` : '' }`)
    // const params = { query: queryForResearch(value, limit, offset)}
    
    // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    
    const context = {
        method: 'GET',
        //mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Accept': 'application/sparql-results+json',
            'Content-Type': 'application/json'
        }
    }

    return { url, context} 
}

// -----------------------------------------------
// Define Digital Object Specific Fetch method
// -----------------------------------------------
export const digitalObjectSearch = (endpoint, id) => {

    // const { value, limit, offset } = query

    // const url = new URL(endpoint)
    const url = new URL(endpoint)
    const params = { query: queryForDigitalObject(id)}
    
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    
    const context = {
        method: 'GET',
        //mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Accept': 'application/sparql-results+json',
            'Content-Type': 'application/json'
        }
    }

    return { url, context} 
}

// -----------------------------------------------
// Define Research Dataset Specific Fetch method
// -----------------------------------------------
export const researchDatasets = (endpoint, query) => {

    // const { value, limit, offset } = query
    const url = new URL(endpoint)
    const params = { query: queryForResearchDatasets(query) }

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    
    const context = {
        method: 'GET',
        //mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Accept': 'application/sparql-results+json',
            'Content-Type': 'application/json'
        }
    }

    return { url, context} 
}


// -----------------------------------------------
// Define Research Borehole Specific Fetch method
// -----------------------------------------------
export const researchBorehole = (endpoint, query) => {

    // const { value, limit, offset } = query
    const url = new URL(endpoint)
    const params = { query: queryForResearchBorehole(query) }

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    
    const context = {
        method: 'GET',
        //mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Accept': 'application/sparql-results+json',
            'Content-Type': 'application/json'
        }
    }

    return { url, context} 
}
