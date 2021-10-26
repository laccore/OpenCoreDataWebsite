import React, { useState } from 'react'
import clsx from 'clsx'

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import { useStyles } from './app.styles'
import {Box, Container, Breadcrumbs, Link, Typography } from '@material-ui/core/'

// ----------
// Parts:
// ----------


// ----------
// Layout:
// ----------
import Footer from '../layout/footer'
import Header from '../layout/header'
// import SearchHome from '../SearchHome'

// ----------
// Routing:
// ----------
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import { Router } from '@reach/router' //add navigate
// import { createBrowserHistory } from 'history'
// const customHistory = createBrowserHistory()

// ----------
// Pages: 
// ----------
import { Lost } from '../pages/lost'

// ----------
// Contexts:
// ----------
import { ErrorsProvider } from '../contexts/errorsContext'
import { LoadingProvider } from '../contexts/loadingContext'

// ----------
// Functions:
// ----------

export const App = (props) => {

  const classes = useStyles()
  const {env, pages, assets} = props

  return ( 
    <Router
      // basename={`${(env.github_homepage) ? `${env.github_homepage}` : ''}`}     
    > 
      <ErrorsProvider>
      <LoadingProvider>
        <Box className={classes.root} flexDirection='column'>
          
          <Header env={env} assets={assets} pages={pages} {...props}/>

          {/* ---- Pages ---- */}
          <Container maxWidth={'md'} className={clsx(classes.pageBox)}> 
            <Switch>
              
              { pages.map( page => 
                <Route 
                  key={page.name} 
                  env={env} 
                  exact={page.exact}
                  path={`${page.path}`}  
                  render={(props) => 
                    <>
                      <page.component {...props} {...classes} page={page} env={env}  />
                    </>
                  }
                />
              )}
              
              {/* <Redirect from='/' to='/home' /> */}
              <Route component={Lost} /> 
            </Switch>
          </Container>
        
          <Footer env={env} assets={assets} pages={pages} />

        </Box>
      </LoadingProvider>
      </ErrorsProvider>
    </Router> 
  )
}

export default App 