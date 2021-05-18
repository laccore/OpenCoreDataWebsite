import { queryToSearchParams, queryForResearch } from '../queries/searchQueries'

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

export const componentSearch = (endpoint, query) => {

    // const { value, limit, offset } = query

    // const url = new URL(endpoint)
    const url = new URL(`${endpoint}/${query}`)
    // const params = { query: queryForResearch(value, limit, offset)}
    

    // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    
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

    return { url, body} 
}

export default { defaultSearch }