import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from 'core/Layout'
import Routes from 'pages/Routes'
import GlobalStyles from './GlobalStyles'
import Modals from 'modals/Modals'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <Routes />
      </Layout>
      <Modals />
    </Router>
  )
}

export default App
