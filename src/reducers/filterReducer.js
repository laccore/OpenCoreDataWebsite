// import C from '../config/constants'

export function filterReducer(state, action){
    switch (action.type) { 
      case "SET_FILTER_DATATYPE":
        return { ...state, dataType: action.dataType }
      case "RESET_FILTER_DATATYPE":
        return { ...state, dataType: [] }
      case "SET_FILTER_FILETYPE":
        return { ...state, fileType: action.fileType }
      case "RESET_FILTER_FILETYPE":
        return { ...state, fileType: [] }
      default:
      //   throw new Error('Unnexpected action')
        return state
    }
} 