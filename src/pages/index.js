import * as React from "react"

import Layout from '../layouts/index'
// import Head from '../blocks/head'
import Button from '@material-ui/core/Button'

// markup
const IndexPage = () => {
  return (
    <Layout>
        {/* <Head title="Home" /> */}
        <main>
          <h1>Hello.</h1>
          <h2>I'm JD! Welcome to OCD</h2>
          <Button>
            Click Me!
          </Button>
        </main>
    </Layout>
  )
}

export default IndexPage
