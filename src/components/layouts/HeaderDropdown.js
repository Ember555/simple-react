import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavDropdown,
} from 'reactstrap'
// import { signOut as logOut } from '../../reduxs/authen/action'

class HeaderDropdown extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  handleSignOut = () => {
    const { dispatch } = this.props
    return dispatch(
      // logOut({})
    )
  }

  dropAccnt() {
    const username = sessionStorage.getItem('username') || ''
    return (
      <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav caret={this.state.caretVisible}>
          <i
            className="fa fa-user-circle fa-lg"
            aria-hidden="true"
            style={{ fontSize: 30 }}
          />
          {'  '}
          <span
            className="d-md-down-none"
            style={{ fontSize: 25, paddingLeft: 10, paddingRight: 25 }}
          >
            <span>{username || 'GuestPoke'}</span>{' '}
          </span>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={this.handleSignOut}>
            <i className="fa fa-lock" /> Logout
          </DropdownItem>
        </DropdownMenu>
      </NavDropdown>
    )
  }

  render() {
    // const { ...attributes } = this.props
    return this.dropAccnt()
  }
}

export default connect(
  dispatch => ({ dispatch }),
)(HeaderDropdown)
