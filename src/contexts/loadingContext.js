import React, { useReducer, createContext } from "react"

import { loadingInitialState } from "../assets/data/initialState"
// import actions from "../../actions"
// import C from "../../Constants"
// import filterReducer from "../../Store"
// import { useLocalStorage } from "../../hooks/useLocalStorage"

function loadingReducer(state, action){
    switch (action.type) { 
        case "SET_FILTERS_LOADING": //searchByFilter
            return { ...state, filtersLoadings: action.filtersLoadings }
        case "SET_MODIFY_COMPOUNDS_LOADING": //searchByFilter
            return { ...state, modifyCompoundsLoading: action.modifyCompoundsLoading }
        case "SET_MODIFY_MATERIALS_LOADING": //searchByFilter
            return { ...state, modifyMaterialsLoading: action.modifyMaterialsLoading }
        case "SET_EXPLORE_COMPOUNDS_LOADING": // searchByFilter
            return { ...state, exploreResultsLoading: action.exploreResultsLoading }
        case "SET_SAMPLE_INDEX_LOADING":
            return { ...state, searchSampleIndexLoading: action.searchSampleIndexLoading }
        case "SET_SEARCH_BY_FILTER_LOADING":
            return { ...state, searchByFilterLoading: action.searchByFilterLoading }
        case "RESET":
            return { ...state, ...loadingInitialState }
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