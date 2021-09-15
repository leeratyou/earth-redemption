import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles'

import Layout from 'core/Layout'
import Routes from 'pages/Routes'
import GlobalStyles from './GlobalStyles'
import Modals from 'modals/Modals'

import { theme } from 'ui'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <GlobalStyles />
          <Layout>
            <Routes />
          </Layout>
          <Modals />
        </StylesProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
