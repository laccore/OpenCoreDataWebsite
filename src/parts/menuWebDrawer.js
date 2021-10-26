import React, { memo } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import { Box, ListItem, ListItemIcon, ListItemText, List} from '@material-ui/core/'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import IconButton from '@material-ui/core/IconButton'

import Typography from '@material-ui/core/Typography'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      whiteSpace: 'nowrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(3),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    fullHeight: {
      height: '100vmin',
    },
    listItems: {
      textTransform: 'capitalize',
      fontWeight: '700'
    }
  }))

export function MenuWebDrawer({drawer, toggleDrawer, pages}){
    const classes = useStyles()
    const theme = useTheme()
    
    return(
        <SwipeableDrawer
          anchor="left"
          open={drawer['web']}
          onOpen={toggleDrawer('web', true)} 
          onClose={toggleDrawer('web', false)} 
          className={clsx(classes.drawer)}
        >
          <Box className={clsx(classes.toolbar, classes.drawer)} >
            <Box textAlign="right" display={'flex'} justifyContent={'flex-end'}>
              <IconButton onClick={toggleDrawer('web', false)} color={'primary'}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </Box>
            <Box width="100%">
              <List>
                { pages.map((page, i) => 
                  (!page.disabled && 
                    <ListItem key={i} button component="a" href={page.path} disabled={page.disabled} className={classes.listItem}>
                      {(page.icon) ?
                        <ListItemIcon>
                          <page.icon/>
                        </ListItemIcon>
                      : null }
                      <ListItemText primary={
                        <Typography variant="h6" component="h6">
                            {(page.name).toUpperCase()}
                        </Typography>
                      } className={classes.listItem}  />
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          </Box>
        </SwipeableDrawer>
    )
  }

export const MemoMenuWebDrawer = memo(MenuWebDrawer) 