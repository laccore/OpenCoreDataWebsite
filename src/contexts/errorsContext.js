import React, { useReducer, createContext } from "react"

import { errorsInitialState } from "../assets/data/initialState"
// import actions from "../../actions"
// import C from "../../Constants"
// import filterReducer from "../../Store"
// import { useLocalStorage } from "../../hooks/useLocalStorage"

function errorsReducer(state, action){
    switch (action.type) { 
        case "SET_FILTERS_ERRORS":
            return { ...state, filtersErrors: action.filtersErrors }
        case "SET_MODIFY_COMPOUNDS_ERRORS":
            return { ...state, modifyCompoundsErrors: action.modifyCompoundsErrors }
        case "RESET_MODIFY_COMPOUNDS_ERRORS":
            return { ...state, modifyCompoundsErrors: "" }
        case "SET_MODIFY_MATERIALS_ERRORS":
            return { ...state, modifyMaterialsErrors: action.modifyMaterialsErrors }
        case "RESET_MODIFY_MATERIALS_ERRORS":
            return { ...state, modifyMaterialsErrors: "" }
        case "SET_EXPLORE_RESULTS_ERRORS":
            return { ...state, exploreResultsErrors: action.exploreResultsErrors }
        case "RESET_EXPLORE_RESULTS_ERRORS":
            return { ...state, exploreResultsErrors: "" }
        case "SET_SEARCH_BY_FILTER_ERRORS":
            return { ...state, searchBySampleFilterErrors: action.searchBySampleFilterErrors }
        case "RESET_SEARCH_BY_FILTER_ERRORS":
            return { ...state, searchBySampleFilterErrors: "" }
        case "SET_SEARCH_BY_SAMPLE_NAME_ERRORS":
            return { ...state, searchBySampleNameErrors: action.searchBySampleNameErrors }
        case "RESET_SEARCH_BY_SAMPLE_NAME_ERRORS":
            return { ...state, searchBySampleNameErrors: "" }
        case "RESET":
            return { ...state, ...errorsInitialState }
        default:
            // throw new Error('Unnexpected action')
            return state
    }
}

const ErrorsContext = createContext([{}, () => {}])
 
const ErrorsProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(errorsReducer, errorsInitialState)

    return (
        <ErrorsContext.Provider value={[state, dispatch ]}>
            {children}
        </ErrorsContext.Provider>
    )
}

export { ErrorsContext, ErrorsProvider }