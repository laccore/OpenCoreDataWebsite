import { useReducer, createContext } from "react"

import { filterInitialState } from "../assets/data/initialState"
import { filterReducer } from "../reducers/filterReducer"

const FilterContext = createContext([{}, () => {}])

const FilterProvider = ({children}) => {

    const [filterState, filterDispatch] = useReducer(filterReducer, filterInitialState)
 
    return (
        <FilterContext.Provider value={[filterState, filterDispatch]}>
            {children}
        </FilterContext.Provider>
    )
}

export { FilterContext, FilterProvider }