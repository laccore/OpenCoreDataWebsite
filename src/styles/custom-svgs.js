import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { makeStyles } from '@material-ui/core/styles'

const mainLogoStyles = makeStyles(theme => ({
    root: {
        margin: "0 auto",
        width: '60px',
        height: 'auto',
    }
}))

export const MainLogo = (props) => {
    const classes = mainLogoStyles()
    return (
        <SvgIcon {...props} viewBox="0 0 100 100" className={classes.root}>
            <path class="cls-1" d="M82.06,20.44a2.47,2.47,0,0,0-.74-1.76,34.29,34.29,0,0,0-50.2,46.66L18.68,77.79a2.47,2.47,0,0,0,0,3.53,34.29,34.29,0,0,0,50.2-46.66L81.32,22.21A2.5,2.5,0,0,0,82.06,20.44ZM63.65,77.79a29.35,29.35,0,0,1-39.6,1.69L65.34,38.2A29.33,29.33,0,0,1,63.65,77.79Zm-29-16A29.3,29.3,0,0,1,76,20.52Z"/><g id="full-gradient"><path id="full" class="cls-2" d="M80.62,21.5a1.51,1.51,0,0,0,0-2.12h0a33.3,33.3,0,0,0-48.13,46L19.38,78.5a1.51,1.51,0,0,0,0,2.12h0a33.3,33.3,0,0,0,48.13-46Zm-45,0a30.33,30.33,0,0,1,41.76-1l-12,12L34.61,63.27A30.34,30.34,0,0,1,35.65,21.5Zm28.7,57a30.33,30.33,0,0,1-41.76,1l12-12L65.39,36.73A30.34,30.34,0,0,1,64.35,78.5Z"/></g>
        </SvgIcon>
    )
}