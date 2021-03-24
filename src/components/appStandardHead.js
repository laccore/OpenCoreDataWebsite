import React, { memo, useState, useEffect, useContext } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { useStyles } from './appStandardHead.style'

import {Box, Container, Divider, FormControl, IconButton, InputLabel, InputBase, MenuItem, Select, Paper, Typography } from '@material-ui/core/'

import { isEmpty } from 'lodash'



export const AppStandardHead = ({ heading, subheading } ) => {
  
  const classes = useStyles()

  return (
    <>
      <Box p={4} className={clsx(classes.backdrop)} textAlign={'center'} justifyContent="center">
        <Box p={2} margin={'auto'} width={"100%"}>
          <Typography className={classes.heading} variant={'h3'} component={'h1'}>
                { heading }
          </Typography>
          { (!isEmpty(subheading)) ? 
                <Typography className={classes.subheading} variant={'h6'} component={'h2'}>
                        { subheading }
                </Typography>
                : null 
            }
        </Box>
      </Box>
    </>
  )
}

AppStandardHead.propTypes = {
    title: PropTypes.string
}

// export const MemoAppStandardHead = memo(AppStandardHead) 
export default AppStandardHead


