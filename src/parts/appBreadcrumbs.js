import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { Box, Breadcrumbs, Link } from '@material-ui/core'
import { updateName } from '../functions/appFunctions'


export const AppBreadcrumbs = (props) => {

    const {page, match, name} = props
    const handleClick = (event) => {
        event.preventDefault()
    }

    return (
        <>
            {console.log(props)}
            <Box p={2} bgcolor={'grey.300'} boxShadow={1}>
                <Breadcrumbs aria-label="breadcrumbs">
                    <Link color="inherit"  disabled onClick={handleClick}>
                        {updateName(page.title)}
                    </Link>
                    {(name) ?
                        <Link color="inherit"  disabled onClick={handleClick}>
                            {name}
                        </Link>
                    : null }
                </Breadcrumbs>
            </Box>
        </>
    )
}

AppBreadcrumbs.propTypes = {

}

// export const memoAppBreadcrumbs = memo(AppBreadcrumbs)
