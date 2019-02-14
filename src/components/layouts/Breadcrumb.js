import React from 'react'
import { withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'

const breadcrumbNameMap = {
  '/admin': 'Organization User Management',
  '/admin/userList': 'LIST_PARTICIPANT',
  '/admin/groupList': 'LIST_GROUP',
  '/admin/orgList': 'List of Organization',
}

const _Breadcrumb = ({ location }) => {
  const pathSnippets = location.pathname.split('/').filter(i => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return <Breadcrumb.Item key={url}>{breadcrumbNameMap[url]}</Breadcrumb.Item>
  })

  const breadcrumbItems = [].concat(extraBreadcrumbItems)

  return (
    <Breadcrumb
      className=""
      style={{
        paddingLeft: '35px',
        paddingTop: '8px',
        height: '35px',
        backgroundColor: '#4b505f',
      }}
    >
      {breadcrumbItems}
    </Breadcrumb>
  )
}

export default withRouter(_Breadcrumb)
