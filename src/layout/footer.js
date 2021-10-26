import React from 'react'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'

// import * as footerStyles from './footer.module.scss'
import { Box, Container, Link, Typography } from '@material-ui/core'

import NSFLogo from '../assets/images/nsf-logo.png'

export const useStyles = makeStyles(theme => ({
    preFooterBox: {
        backgroundColor: theme.palette.primary.light
    },
    unorderedList: {
        display: 'flex',
        listStyle: 'none',
        width: '100%',
        padding: 0,
        margin: 'auto',
        justifyContent: 'center'
    },
    listItem: {
        color: theme.palette.white.main,
        margin: theme.spacing(0,1),
        fontWeight: '600'
    },
    funderLogo: {
        width: '100px',
        height: '100px'
    },
    link: {
        color: theme.palette.white.main,
        fontWeight: '600'
    }
}))

const Footer = ({ env, pages, assets }) => {

    const classes = useStyles()

    return (
        <>
            <Box p={0} color={'grey.100'} textAlign={'center'}> 
                
                <Box p={4} className={classes.preFooterBox}>
                    <ul className={clsx(classes.unorderedList)}>
                        { pages.map(page => {
                            if(!page.disabled){
                                return(
                                    <li key={page.name} className={clsx(classes.listItem)}>
                                        <Link href={`/${(env.github_homepage) ? `${env.github_homepage}` : ''}${page.path}`} color={'inherit'}>
                                            {(page.name).toUpperCase()}
                                        </Link>
                                    </li>
                                )
                            }
                        })} 
                    </ul>
                </Box>

                <Box p={2} m={'auto'} bgcolor={'primary.main'}>
                    <Box p={2} m={'auto'}>
                        <img src={NSFLogo} className={classes.funderLogo} title={'NSF logo'}></img>
                    </Box>
                    <Typography variant="subtitle1" component="p" align="center">
                        Funded by the  <Link href={'https://www.nsf.org/'} title={'NSF website'} className={classes.link}> National Science Foundation (NSF) </Link> 
                    </Typography>
                    <Typography variant="subtitle2" component="p">
                        Associated Grants: 
                        <Link href={'https://www.nsf.gov/awardsearch/showAward?AWD_ID=1550917&HistoricalAwards=false'} title={'NSF website'} className={classes.link}>1550917</Link>,&nbsp;
                        <Link href={'https://www.nsf.gov/awardsearch/showAward?AWD_ID=1550887&HistoricalAwards=false'} title={'NSF website'} className={classes.link}>1550887</Link>,&nbsp;
                        <Link href={'https://www.nsf.gov/awardsearch/showAward?AWD_ID=1550787&HistoricalAwards=false'} title={'NSF website'} className={classes.link}>1550787</Link>
                    </Typography>
                </Box>

            </Box>

            

            <Box py={4}  bgcolor={'black.main'} color={'grey.300'} textAlign={'center'}> 
                <Typography variant="subtitle2" component="h6" align="center">
                    {`Copyright © ${env.siteName} ${new Date().getFullYear()}.`}
                </Typography>
            </Box>
        </>
    )
}

export default Footer