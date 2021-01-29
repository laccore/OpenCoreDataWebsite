import React from 'react'

import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'

// Custom Bootstrap and Modified CSS
// import '../styles/custom.scss'

// import layoutStyles from './layout.module.scss'
import Layout from './index'

const shortcodes = { Link }

const ObjectsLayout = ({children, data}) => {
    
    return (
        <Layout>
            <MDXProvider components={shortcodes}>

                {children}

            </MDXProvider>
        </Layout>
    )
}

export default ObjectsLayout