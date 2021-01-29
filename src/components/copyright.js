import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const Copyright = ({ siteMetadata }) => {

    return (
        <>
            <Box py={2}>
                <Typography variant="subtitle1" component="h6" align="center">
                    {`Copyright © ${siteMetadata.author} ${new Date().getFullYear()}.`}
                </Typography>
            </Box>
        </>
    )
}

export default Copyright