import React from 'react'
import clsx from 'clsx'

import footerStyles from './footer.module.scss'
import { Box, Typography } from '@material-ui/core'

import Copyright from '../components/copyright'

const Footer = ({ siteMetadata }) => {

    return (
        <footer className={clsx(footerStyles.footer)}>
            <Box py={3} px={1} color={'white.main'} textAlign={'center'}> 
                <Typography variant="subtitle1" component="h6" align="center">
                    {siteMetadata.funding}
                </Typography>
            </Box>
            <Box bgcolor={'black.main'} py={1} color={'white.main'} textAlign={'center'}> 
                <Copyright siteMetadata={siteMetadata}/>
            </Box>
        </footer>
    )
}

export default Footer