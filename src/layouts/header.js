import React from 'react'
import PropTypes from 'prop-types'
// import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { MemoAppToolbar } from '../components/appToolbar'
import { AppSearchHead } from '../components/appSearchHead'

const Header = ({ siteMetadata, primaryNavigation }) => {

    return (
        <>
            <MemoAppToolbar menuItems={primaryNavigation} />
            <AppSearchHead title={siteMetadata.title} />
        </>
    )
}

Header.propTypes = {
    siteMetadata: PropTypes.object.isRequired,
    primaryNavigation: PropTypes.array.isRequired
}

export default Header

