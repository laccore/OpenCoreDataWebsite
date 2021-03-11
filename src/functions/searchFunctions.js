import { queryToSearchParams } from '../queries/searchQueries'

export const defaultSearch = (api, query) => {

    const { value, limit, offset } = query
    // let test = { // pass from input... DELETE!
    //     query: "CO2",
    //     limit: 10,
    //     offset: 1
    // }

    const url = new URL(api)
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

export default { defaultSearch }