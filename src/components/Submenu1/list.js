import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form } from 'antd'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'rgb(1, 155, 201)',
  },
})

class Submenu1 extends Component {
  state = {}

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>Submenu1</div>
      </MuiThemeProvider>
    )
  }
}

export default connect(dispatch => ({ dispatch }))(Form.create()(Submenu1))
