import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import {
  Nav,
  // NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  // Badge,
} from 'reactstrap'
import HeaderDropdown from './HeaderDropdown'

import { toggleSidebar } from '../../reduxs/layout/action'
import logo from '../../../public/img/slowpoke.png'
import { version } from '../../../package.json'

const Header = ({
  //
  dispatch,
  sidebarCollapse,
}) => (
  <header className="app-header navbar" style={{ backgroundColor: 'black' }}>
    {/* <NavbarToggler
      className="d-md-down-none"
      onClick={() => dispatch(toggleSidebar({ sidebarCollapse }))}
    >
      <span className="navbar-toggler-icon" />
    </NavbarToggler> */}
    &nbsp;&nbsp;
    <img
      alt={`Simple Web v${version}`}
      src={logo}
      style={{
        width: '40px',
        height: '40px',
      }}
    />
    <Nav className="d-md-down-none" navbar>
      <NavItem className="px-3">
        <NavLink href="/">
          <h4> Simple Web v{version}</h4>
        </NavLink>
      </NavItem>
    </Nav>
    <Nav className="ml-auto" navbar>
      <HeaderDropdown />
    </Nav>
    <NavbarToggler
      className="d-md-down-none"
      onClick={() => dispatch(toggleSidebar({ sidebarCollapse }))}
    >
      <span className="navbar-toggler-icon" />
    </NavbarToggler>
    &nbsp;&nbsp;&nbsp;
  </header>
)

export default connect(
  //
  ({ layout }) => layout,
  dispatch => ({ dispatch }),
)(Header)
