import React from 'react'
import clsx from 'clsx'

// import * as footerStyles from './footer.module.scss'
import { Box, Container, Typography } from '@material-ui/core'

// import Copyright from '../components/copyright'

const Footer = ({ env, pages, assets }) => {

    return (
        <>
            <Box py={3} px={1} bgcolor={'primary.main'} color={'grey.100'} textAlign={'center'}> 
                
            </Box>

            <Box py={2}  bgcolor={'black.main'} color={'grey.300'} textAlign={'center'}> 
                <Typography variant="subtitle2" component="h6" align="center">
                    {`Copyright © ${env.siteName} ${new Date().getFullYear()}.`}
                </Typography>
            </Box>
        </>
    )
}

export default Footer