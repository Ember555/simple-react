import React from 'react'
import { Container } from 'reactstrap'
import IdleTimer from 'react-idle-timer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Header from './layouts/Header'
import Sidebar from './layouts/Sidebar'
import Breadcrumb from './layouts/Breadcrumb'
import Footer from './layouts/Footer'
// import { alertInfo } from '../common/alert'
// import signOut from '../common/signOut'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'rgb(1, 155, 201)',
  },
})

// timeout 30 mins
const timeout = 1000 * 60 * 30

const Layout = ({ children }) => (
  <IdleTimer
    element={document}
    activeAction={() => {}}
    idleAction={() => {
      // alertInfo(
      //   'Session expired after 30 minutes, Please login again.',
      //   'Session Expired',
      // )

      // return setTimeout(() => signOut(), 3000)
    }}
    timeout={timeout}
  >
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="app">
        <Header />
        <div className="app-body">
          <main className="main">
            <Breadcrumb />
            <br />

            <Container fluid>{children}</Container>
          </main>
          <Sidebar />
          {/* <Aside /> */}
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  </IdleTimer>
)

export default Layout
