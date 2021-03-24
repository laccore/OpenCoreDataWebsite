import * as React from "react"

import { makeStyles } from '@material-ui/core/styles'

import Layout from '../layouts/index'
// import Head from '../blocks/head'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import AssignmentIcon from '@material-ui/icons/Assignment'

const data = {
  "lit": "YUKON Dataset",
  "name": "YUKON Dataset",
  "uri": "https://opencoredata.org/id/csdco/pkg/2028f26c495c16f29fe9225e62b3b68417577f6a4ab1ad0f71d35a7808be72e4",
  "score": {
      "datatype": "http://www.w3.org/2001/XMLSchema#double",
      "value": "0.44194173824159216"
  },
  "type": {
      "name": "Dataset",
      "schema": "https://schema.org/DataSet"
  },
  "description": "YUKON project: Geotek CIS (jpg) (6 files)"
}


const useStyles = makeStyles((theme) => ({
  DatasetRoot: {
      width: '100%',
      margin: '0 auto',
      backgroundColor: theme.palette.background.paper,
  }
}))
  
const DatasetPage = () => {
    
  const classes = useStyles()

  return (
    <Layout>
        <Container maxWidth={'lg'}>
          <Box bgcolor={'white.main'} p={0} boxShadow={2}>
            
          </Box>
        </Container>
    </Layout>
  )
}

export default DatasetPage
