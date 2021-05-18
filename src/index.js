import React from 'react'
import { render } from 'react-dom'

// ---------------
// CSS:
// ---------------
import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/styles/custom.scss'

// ---------------
// Material UI:
// ---------------
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './assets/styles/theme'

// ---------------
// Config:
// --------------- 
import config from './config'
import C from './config/constants'
import { PAGES, ASSETS } from './config/routes'

// --------------- 
// Components
// --------------- 
import App from './components/app'

// --------------- 
// Context/Hooks
// --------------- 
import { SearchProvider } from './contexts/searchContext'
import { FilterProvider } from './contexts/filterContext'

render(
    <SearchProvider>
    <FilterProvider>
    <ThemeProvider theme={theme}>
        <CssBaseline />      
        <App env={config[C.ENV]} pages={PAGES} assets={ASSETS} />
    </ThemeProvider>
    </FilterProvider>
    </SearchProvider>,
    document.querySelector('#root')
)
