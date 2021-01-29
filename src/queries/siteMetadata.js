// import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const QuerySiteMetadata = () => 
    useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    title
                    funding
                }
            }
        }
    `)
