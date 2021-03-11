import { useState, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

// Add prop types...

const dataFetchReducer = (state, action) => {
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

const useFetchAPI = (initialUrl="", initialData=[]) => {
  // const [url, setUrl] = useState(initialUrl)
   
  const [fetchState, dispatch] = useReducer(dataFetchReducer, {
      dataLoading: false,
      dataError: false,
      data: initialData,
  })
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetchData()
  // }, [url])

  const fetchData = async (url="", body={} ) => {
    dispatch({ type: 'FETCH_INIT' })
    // try {
      const request = await fetch(url, body)
      const response = await request
          .json()
          .then(res => { 
            console.log(res) // FOR TESTING - REMOVE 
            dispatch({ type: 'FETCH_SUCCESS', payload: res })
            return res
          })
          .catch( err => {
            console.log(err) // FOR TESTING - REMOVE 
            return err
          })
    // } catch (error) {
      dispatch({ type: 'FETCH_FAILURE' })
    // }
    return response
  }

  return [fetchState, fetchData]
}

useFetchAPI.propTypes = {
    url: PropTypes.string.isRequired,
    body: PropTypes.object
}

export default useFetchAPI