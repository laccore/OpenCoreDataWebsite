import React, { useReducer, createContext } from "react"

import { loadingInitialState } from "../assets/data/initialState"
// import actions from "../../actions"
// import C from "../../Constants"
// import filterReducer from "../../Store"

function loadingReducer(state, action){
    switch (action.type) { 
        case "SET_FILTERS_LOADING": //searchByFilter
            return { ...state, filtersLoading: action.filtersLoading }
        case "SET_SEARCH_LOADING":
            return { ...state, searchLoading: action.searchLoading }
        case "RESET":
            return { ...loadingInitialState }
        default:
            // throw new Error('Unnexpected action')
            return state
    }
}


const LoadingContext = createContext([{}, () => {}])
 
const LoadingProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(loadingReducer, loadingInitialState)

    return (
        <LoadingContext.Provider value={[state, dispatch ]}>
            {children}
        </LoadingContext.Provider>
    )
}

export { LoadingContext, LoadingProvider }