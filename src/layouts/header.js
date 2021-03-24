import React from 'react'
import PropTypes from 'prop-types'
// import clsx from 'clsx'

import { MemoAppToolbar } from '../components/appToolbar'
import { AppSearchHead } from '../components/appSearchHead'
import { AppStandardHead } from '../components/appStandardHead'
import { isEmpty } from 'lodash'

const Header = ({ siteMetadata, primaryNavigation, type, heading, subheading }) => {

    return (
        <>
            <MemoAppToolbar menuItems={primaryNavigation} />
            { (type === "search") ? 
                <AppSearchHead title={siteMetadata.title} heading={heading} subheading={subheading} />
                : null 
            }
            { (type === "standard" || isEmpty(type) ) ? 
                <AppStandardHead title={siteMetadata.title} heading={heading} subheading={subheading} />
                : null 
            }
        </>
    )
}

Header.propTypes = {
    siteMetadata: PropTypes.object.isRequired,
    primaryNavigation: PropTypes.array.isRequired
}

export default Header

