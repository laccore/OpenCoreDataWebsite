import React from 'react'

import Header from './header'
import Footer from './footer'

// import layoutStyles from './layout.module.scss'

import { QuerySiteMetadata } from '../queries/siteMetadata'
import { QueryPrimaryNavigation } from '../queries/primaryNavigation'

const Layout = (props) => {
    
    const { header, heading, subheading, pages } = props
    const siteMetadata = QuerySiteMetadata()
    const primaryNavigation = QueryPrimaryNavigation()
    
    return (
        <>
            <Header 
                siteMetadata={siteMetadata.site.siteMetadata} 
                primaryNavigation={primaryNavigation.allConfig.edges} 
                type={header}
                heading={heading}
                subheading={subheading}
                pages={pages}
            />
            
            {props.children}
            
            <Footer siteMetadata={siteMetadata.site.siteMetadata}/>
        </>
    )
}

export default Layout