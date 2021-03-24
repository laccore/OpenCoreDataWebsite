import React from 'react'

import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'
// Custom Bootstrap and Modified CSS
// import '../styles/custom.scss'

import Header from './header'
import Footer from './footer'

// import layoutStyles from './layout.module.scss'

const shortcodes = { Link }

const ObjectsLayout = ({children}) => {
    
    return (
        
        <MDXProvider components={shortcodes}>
            {children}
        </MDXProvider>
    )
}

export default ObjectsLayout