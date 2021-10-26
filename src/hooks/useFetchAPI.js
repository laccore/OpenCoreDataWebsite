import { useState, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

import { dataFetchReducer } from '../reducers/dataFetchReducer'

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

  const fetchData = async (url="", context={} ) => {
    dispatch({ type: 'FETCH_INIT' })
    // try {
      const request = await fetch(url, {
        method: (context.method) 
          ? context.method 
          : 'GET',
        body: (context.body) 
          ? context.body 
          : null,
        headers: (context.headers) 
          ? context.headers 
          : {"Content-type": "application/json; charset=UTF-8"}
      })
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