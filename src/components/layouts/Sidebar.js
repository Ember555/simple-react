import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd'

// import { createNetworkUserInit } from '../../reduxs/networkUser/create'
// import { createInit as createGroupInit } from '../../reduxs/group/create'
// import { createChannelInit } from '../../reduxs/channelMapping/action'
// import { createAPIUserInit } from '../../reduxs/apiUser/create'
// import { createOpen as apikeyCreateOpen } from '../../reduxs/apiKey/create/action'

const { SubMenu } = Menu

const Sidebar = ({ dispatch, sidebarCollapse }) => (
  <Menu
    style={{ width: sidebarCollapse ? 80 : 270 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    theme="dark"
    mode="inline"
    inlineCollapsed={sidebarCollapse}
  >
    <SubMenu
      key="Menu"
      title={
        <span>
          <Icon type="user" />
          <span>
            <b>Menu</b>
          </span>
        </span>
      }
    >
      <Menu.Item key="SubMenu1">
        <NavLink to="/sub1">
          <span>
            <span>SubMenu1</span>
          </span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="SubMenu2">
        <NavLink to="/">
          <span>SubMenu2</span>
        </NavLink>
      </Menu.Item>

      <Menu.Item key="SubMenu3">
        <NavLink to="/" onClick={() => dispatch()}>
          SubMenu3
        </NavLink>
      </Menu.Item>
      <Menu.Item key="SubMenu4">
        <NavLink to="/" onClick={() => dispatch()}>
          SubMenu4
        </NavLink>
      </Menu.Item>
    </SubMenu>
  </Menu>
)

export default connect(
  ({ layout }) => layout,
  dispatch => ({ dispatch }),
)(Sidebar)
