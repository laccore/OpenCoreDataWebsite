import { useReducer, createContext } from "react"

import { searchInitialState } from "../assets/data/initialState"
import { searchReducer } from "../reducers/searchReducer"

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