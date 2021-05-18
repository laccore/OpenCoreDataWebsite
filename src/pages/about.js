import React from 'react'
// import clsx from 'clsx'
// import PropTypes from 'prop-types'

import { Box, Grid, Typography } from '@material-ui/core/'

import { aboutContent } from '../assets/data/pageContent'

// ------------------------
// Assets
// ------------------------
import OutsourceIconPNG from '../assets/icons/ocd-icon-outsource.png'  // convert to SVG icon
import AggregateIconPNG from '../assets/icons/ocd-icon-aggregate.png' // convert to SVG icon
import CDFIconPNG from '../assets/icons/ocd-icon-cdf.png' // convert to SVG icon

// ------------------------
// Styles
// ------------------------
import { useStyles } from './about.styles.js'


export const About = () => {
  // const { env } = props
 
  const classes = useStyles()

  return(
        <Box p={4} bgcolor={"white.main"} boxShadow={2}>
            <Grid container>
                <Grid xs={12} sm={4} item key={'icon-1'}>
                    <img src={OutsourceIconPNG} className={classes.gridItemIcon}></img>
                </Grid>
                <Grid xs={12} sm={4} item key={'icon-1'}>
                    <img src={AggregateIconPNG} className={classes.gridItemIcon}></img>
                </Grid>
                <Grid xs={12} sm={4} item key={'icon-1'}>
                    <img src={CDFIconPNG} className={classes.gridItemIcon}></img>
                </Grid>
            </Grid>
            <Box p={4}>
                <Typography variant={'body1'} component={'div'} color={'grey.400'}>
                    <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
                </Typography>
            </Box>
        </Box>
    )
}

export default About