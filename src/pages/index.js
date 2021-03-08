import * as React from "react"

import Layout from '../layouts/index'
// import Head from '../blocks/head'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { blazefulltext } from '../assets/js/csdcoSearchBetav2'

// import { QuerySearchComponents } from '../queries/searchComponents'
// import { SimpleList } from "../components/listComponents"

const IndexPage = () => {

  // const searchComponents = QuerySearchComponents()

  return (
    <Layout>
        <Container maxWidth={'lg'}>
          <Box bgcolor={'white.main'} p={0} boxShadow={2}>
            { console.log(blazefulltext("CO2", 10, 1)) }
            {/* <SimpleList listItems={(searchComponents.allSearchComponentsJson.edges)} />  */}
          </Box>
        </Container>
    </Layout>
  )
}

export default IndexPage
