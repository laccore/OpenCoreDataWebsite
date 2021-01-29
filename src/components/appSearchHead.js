import React, { memo, useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.white.main
  },
  search: {
    padding: theme.spacing(1),
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '480px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const AppSearchHead = ({ title}) => {
  
  const classes = useStyles()

  return (
    <>
      <Box p={4} className={clsx('bg-primary bg-gradient')} textAlign={'center'} justifyContent="center">
        <Typography classes={{root: classes.heading}} variant={'h3'} component={'h1'}>
            { title }
        </Typography>
        <Box p={2} margin={'auto'}>
          <Paper component="form" className={classes.search}>
            <InputBase
                className={classes.input}
                placeholder={`Search ${title}`}
                inputProps={{ 'aria-label': `search ${title}` }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </Box>
    </>
  )
}

AppSearchHead.propTypes = {
    title: PropTypes.string
}

export const MemoAppSearchHead = memo(AppSearchHead) 


