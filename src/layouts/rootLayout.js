import React from 'react'

// Custom Bootstrap and Modified CSS
import '../styles/custom.scss'

// Material UI:
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'

import { SearchProvider } from '../contexts/searchContext'
// import { Seo } from '../blocks/seo'

export default function RootLayout({ children }) {
  return (
    <>
      {/* <Seo /> */}
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SearchProvider>
                {children}
            </SearchProvider>
        </ThemeProvider>
    </>
  );
}

