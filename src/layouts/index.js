import React from 'react'

// Custom Bootstrap and Modified CSS
import '../styles/custom.scss'

// Material UI:
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'

import Header from './header'
import Footer from './footer'

// import layoutStyles from './layout.module.scss'

import { QuerySiteMetadata } from '../queries/siteMetadata'
import { QueryPrimaryNavigation } from '../queries/primaryNavigation'

const Layout = (props) => {
    
    const siteMetadata = QuerySiteMetadata()
    const primaryNavigation = QueryPrimaryNavigation()
    
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />        
            <>
                <Header 
                    siteMetadata={siteMetadata.site.siteMetadata} 
                    primaryNavigation={primaryNavigation.allConfig.edges} />
                {props.children}
            </>

            <Footer siteMetadata={siteMetadata.site.siteMetadata}/>
        </ThemeProvider>
    )
}

export default Layout