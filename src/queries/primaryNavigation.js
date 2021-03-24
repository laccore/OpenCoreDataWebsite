// import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const QueryPrimaryNavigation = () => 
    useStaticQuery(graphql`
        query {
            allConfig(filter: {display: {eq: true}}) {
                edges {
                    node {
                        slug
                        title
                        name
                        display
                    }
                }
            }
        }
    `)
