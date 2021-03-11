import React, { useReducer, createContext } from "react"

import { searchInitialState } from "../data/states/initialState"
// import actions from "../../actions"
// import C from "../../Constants"
// import filterReducer from "../../Store"
// import { useLocalStorage } from "../../hooks/useLocalStorage"

function searchReducer(state, action){
  switch (action.type) { 
    case "SET_SEARCH_RESULTS":
      return { ...state, results: action.results }
    case "RESET_SEARCH_RESULTS":
      return { ...state, results: [] }
    default:
    //   throw new Error('Unnexpected action')
      return state
  }
} 

const SearchContext = createContext([{}, () => {}])

const SearchProvider = ({children}) => {

    const [searchState, searchDispatch] = useReducer(searchReducer, searchInitialState)
 
    return (
        <SearchContext.Provider value={[searchState, searchDispatch]}>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchContext, SearchProvider }