import React from 'react'
import RootLayout from './src/layouts/rootLayout'

export const wrapRootElement = ({ element, props }) => <RootLayout {...props}>{element}</RootLayout>;