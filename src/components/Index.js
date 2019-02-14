import React from 'react'
import { connect } from 'react-redux'
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom'
// import Home from './Home'
import Layout from './Layout'
import NotFound from '../components/errors/NotFound'
import Home from './Home'
import Submenu1 from './Submenu1/list'

const Index = () => (
  <div>
    <HashRouter history={hashHistory}>
      <Switch>
        <Route
          exact
          path="/"
          name="Home"
          render={() => (
            <Layout>
              <Home />
            </Layout>
          )}
        />
        <Route
          exact
          path="/sub1"
          name="Submenu1"
          render={() => (
            <Layout>
              <Submenu1 />
            </Layout>
          )}
        />
        <Route exact path="/404" name="NotFound" component={NotFound} />
      </Switch>
    </HashRouter>
  </div>
)

export default connect(dispatch => ({ dispatch }))(Index)
