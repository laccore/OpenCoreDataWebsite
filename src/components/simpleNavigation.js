import React, { memo } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    link: {
        color: theme.palette.white.main,
        fontWeight: 600,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize*0.9,
        letterSpacing: '0.1em',
        textTransform: "uppercase",
        margin: `0 ${theme.spacing(1)}`,
        '&:hover, &:active' : {
            color: theme.palette.primary.main,
            fontWeight: 700,
            textDecoration: 'none'
        }
    },
    menuActive: {
        color: theme.palette.primary.main
    },
    menuButton: {
        marginRight: 36,
    },
    Hidden: {
        display: 'none'
    },
    dropdownButton: {
        color: theme.palette.white.main,
    },
    dropdownMenu: {
        backgroundColor: theme.palette.black.main,
        color: theme.palette.white.main,
        '& > *:hover, & > *:active' : {
            color: `${theme.palette.primary.main} !important`,
            backgroundColor: theme.palette.black.light,
            fontWeight: 500
        }
    },
}))

export const SimpleNavigation = ({ navItems}) => {
    
    const classes = useStyles()
    
    return (
        <>
            { navItems.map((site) => 
                <Box key={`menu-item-${site.name}`} p={0} mx={2}>
                {site.hasOwnProperty('children') ? 
                    <>
                    <div className="dropdown">
                        <Button
                            aria-controls={`submenu button for ${site.name}`}
                            aria-haspopup="true"
                            id={`dropdown-${site.tag}`}
                            variant="text"
                            className={clsx(classes.dropdownButton, classes.link, 'dropdown-toggle p-0 m-0 d-inline-block')}
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                            type="button"
                            // onClick={handleDropdownClick(site.tag)}
                        >
                        {site.name}
                        </Button>
                        <div className={clsx('dropdown-menu', classes.dropdownMenu)} aria-labelledby={`dropdown-${site.tag}`}
                        >
                            { (site.children).map((item) => 
                                <a key={`dropdown-item-${item.slug}`} className={clsx('dropdown-item text-white')} href={item.path}>
                                    { item.name }
                                </a>
                            )}
                        </div>
                    </div>
                    </>
                    : 
                    <a href={site.path} className={clsx(classes.link, (site.active) ? classes.menuActive : null)}         
                    >
                        {site.name}
                    </a>
                }
                </Box>
            )}
        </>
    )
}

SimpleNavigation.propTypes = {
    navItems: PropTypes.array.isRequired
}

export const MemoSimpleNavigation = memo(SimpleNavigation)
