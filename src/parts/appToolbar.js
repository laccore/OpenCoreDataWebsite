import React, { memo, useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { Box, Toolbar } from '@material-ui/core/'

import IconButton from '@material-ui/core/IconButton'

import { useStyles } from './appToolbar.styles'

import { MainLogo } from '../assets/styles/custom-svgs'
// import MainLogo from '../images/ocd-logo-gradient-borderless.png'

// import { MemoSimpleNavigation } from '../'

export const AppToolbar = ({ env, menuItems }) => {
  
    const classes = useStyles()

    return (
    <>
      <Toolbar className={classes.toolbar}> 
        <Box p={1} className={''} justifyContent="left">
          <a href={`/`} className={classes.logo}>
            <MainLogo className={classes.logoSVG} color={'primary'}/>
            {/* <img alt={`application logo`} className={classes.logoPNG} src={ MainLogo } width='100%' height='100%' mx='auto'/> */}
          </a>
        </Box>
        
        <Box component={'nav'} className={classes.menuBox} alignContent="end" flexGrow={1} justifyContent="end">
            <ul className={clsx(classes.menuBar, 'navbar-nav')}>
              { menuItems.map(menuItem => {
                if(!menuItem.disabled){
                  return(
                    <li key={menuItem.name} className={clsx(classes.menuItem,'nav-item p-0 mx-2')}>
                      <a href={`/${(env.github_homepage) ? `${env.github_homepage}` : ''}${menuItem.path}`} className={clsx(classes.menuItemLink)}>
                          {(menuItem.name).toUpperCase()}
                      </a>
                    </li>
                  )
                }
              })} 
            </ul>
        </Box>
      </Toolbar>
    </>
  )
}

AppToolbar.propTypes = {
  env: PropTypes.object.isRequired,
  menuItems: PropTypes.array.isRequired
}

export const MemoAppToolbar = memo(AppToolbar) 


