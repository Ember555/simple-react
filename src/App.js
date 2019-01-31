import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

// import 'font-awesome/css/font-awesome.min.css'
// import 'simple-line-icons/css/simple-line-icons.css'
// import 'antd/dist/antd.css'
// import 'react-block-ui/style.css'

// import '../public/scss/style.scss'
// import '../public/scss/core/_dropdown-menu-right.scss'
// import './custom.css'

import reduxStore from './reduxs'
import appoloClient from './apollo'
import Index from './components/Index'

const App = () => (
  <ApolloProvider client={appoloClient}>
    <Provider store={reduxStore}>
      <Index />
    </Provider>
  </ApolloProvider>
)

export default hot(module)(App)
