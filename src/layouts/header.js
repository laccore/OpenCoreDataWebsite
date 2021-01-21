import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from "gatsby"
// import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const Header = (props) => {
    
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                }
            }
        }
    `)

    return (
        <>
            <h1>
                {data.site.siteMetadata.title}
            </h1>
        </>
    )
}

Header.propTypes = {

}

export default Header

