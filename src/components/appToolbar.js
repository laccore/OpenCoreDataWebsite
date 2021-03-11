import React, { memo, useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'

import { useStyles } from './appToolbar.styles'

import { MainLogo } from '../styles/custom-svgs'

// import { MemoSimpleNavigation } from '../'

export const AppToolbar = ({ menuItems }) => {
  
    const classes = useStyles()

    return (
    <>
      <Toolbar className={classes.toolbar}> 
        <Box p={1} className={''} justifyContent="left">
          <a href={`/`} className={classes.logo}>
            <MainLogo color={'primary'}/>
          </a>
        </Box>
        
        <Box className={classes.menubar} alignContent="end" flexGrow={1} justifyContent="end">
          <nav className={clsx('navbar')}>
            <ul className={clsx('navbar-nav')}>
              { menuItems.map(menuItem => 
                <li keyl={menuItem.node.name} className={clsx('nav-item p-0 mx-2')}>
                  <a href={menuItem.node.slug} className={clsx('text-primary')}>
                      {(menuItem.node.name).toUpperCase()}
                  </a>
                </li>
              )} 
            </ul>
          </nav>
        </Box>
      </Toolbar>
    </>
  )
}

AppToolbar.propTypes = {
  // siteMetadata: PropTypes.array.isRequired,
  menuItems: PropTypes.array.isRequired
}

export const MemoAppToolbar = memo(AppToolbar) 


