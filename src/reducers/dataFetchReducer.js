
export function dataFetchReducer(state, action) {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          dataLoading: true,
          dataError: false
        }
      case 'FETCH_SUCCESS':
        return {
          ...state,
          dataLoading: false,
          dataError: false,
          data: action.payload,
        }
      case 'FETCH_FAILURE':
        return {
          ...state,
          dataLoading: false,
          dataError: true,
        }
      default:
        throw new Error()
    }
} 