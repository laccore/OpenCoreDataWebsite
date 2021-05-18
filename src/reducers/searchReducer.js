// import C from '../config/constants'

export function searchReducer(state, action){
    switch (action.type) { 
      case "SET_SEARCH_FILTERS":
        return { ...state, filters: action.filters }
      case "RESET_SEARCH_FILTERS":
        return { ...state, filters: [] }
      case "SET_SEARCH_QUERY":
        return { ...state, query: action.query }
      case "RESET_SEARCH_QUERY":
        return { ...state, query: '' }
      case "SET_SEARCH_RESULTS":
        return { ...state, results: action.results }
      case "RESET_SEARCH_RESULTS":
        return { ...state, results: [] }
      default:
      //   throw new Error('Unnexpected action')
        return state
    }
} 