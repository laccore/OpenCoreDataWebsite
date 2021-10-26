import React from 'react'
// import clsx from 'clsx'
// import PropTypes from 'prop-types'

import { Box, Grid, Typography } from '@material-ui/core/'

import { aboutContent } from '../assets/data/pageContent'

// ------------------------
// Assets
// ------------------------
import { OutsourceIcon, CDFIconIcon, AggregateIconIcon } from '../assets/styles/custom-svgs'  // convert to SVG icon

// ------------------------
// Styles
// ------------------------
import { useStyles } from './about.styles.js'


export const About = () => {
  // const { env } = props
 
  const classes = useStyles()

  return(
        <Box p={4} bgcolor={"white.main"} boxShadow={2} height={'100%'} minHeight={'50vmin'}>
            <Box p={0} textAlign={'center'}>
                <Typography variant={'h4'} component={'h3'} color={'grey.900'} gutterBottom>
                    About Us
                </Typography>
            </Box>
            <Box p={0}>
                <Typography variant={'body1'} component={'div'} color={'grey.400'}>
                    <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
                </Typography>
            </Box>
        </Box>
    )
}

export default About