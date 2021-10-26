import React, { memo, useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

// ------------------
// Components
// ------------------
import { Box, Container, Link, Toolbar } from '@material-ui/core/'
import { MemoMenuWebDrawer } from '../parts/menuWebDrawer'


// ------------------
// Assets/Styles
// ------------------
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from './appToolbar.styles'
import { MainLogo } from '../assets/styles/custom-svgs'


export const AppToolbar = ({ env, pages }) => {
  
  const classes = useStyles()

  const [drawer, setDrawer] = useState({
    web: false,
  })  

  const toggleDrawer = (type, value) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawer({
      ...drawer,
      [type]: value
    })
  }

  return (
      // <Container maxWidth={'lg'} className={classes.container}>
    <Toolbar className={classes.toolbar}> 
        <Box p={1} className={''} justifyContent="left">
          <a href={`/`} className={classes.logo}>
            <MainLogo className={classes.logoSVG} color={'primary'}/>
            {/* <img alt={`application logo`} className={classes.logoPNG} src={ MainLogo } width='100%' height='100%' mx='auto'/> */}
          </a>
        </Box>
        
        <Box component={'nav'} className={classes.menuBox} alignContent="end" flexGrow={1} justifyContent="end">
            <ul className={clsx(classes.menuBar, 'navbar-nav')}>
              { pages.map(page => {
                if(!page.disabled){
                  return(
                    <li key={page.name} className={clsx(classes.menuItem,'nav-item p-0 mx-2')}>
                      <Link href={`${page.path}`} className={clsx(classes.menuItemLink)}>
                          {(page.name).toUpperCase()}
                      </Link>
                    </li>
                  )
                }
              })} 
            </ul>
        </Box>
        
        <Box className={classes.toolbarIcon}>
          <IconButton
            onClick={(drawer.web === false) ? toggleDrawer('web', true) : toggleDrawer('web', false) }
            edge="start"
            // color="inherit"
            className={classes.iconButton}
            aria-label="open drawer">
            <MenuIcon/>
          </IconButton>
        </Box>

        <MemoMenuWebDrawer 
          web={'web'}
          drawer={drawer} 
          toggleDrawer={toggleDrawer} 
          pages={pages}
        />

    </Toolbar>
    //  </Container>
  )
}

AppToolbar.propTypes = {
  env: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired
}

export const MemoAppToolbar = memo(AppToolbar) 


