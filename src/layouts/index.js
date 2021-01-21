import React from 'react'

// Custom Bootstrap and Modified CSS
import '../styles/custom.scss'

// Material UI:
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'

import Header from './header'
import Footer from './footer'
// import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />        
            <>
            {/* <div className={layoutStyles.content}> */}
                <Header />
                {props.children}
            </>

            <Footer />
        </ThemeProvider>
    )
}

export default Layout