import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form, Card, Spin, Row, Table, Button } from 'antd'
import Pagination from 'react-js-pagination'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { search } from '../../reduxs/submenu1/search'

import Search from './search'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'rgb(1, 155, 201)',
  },
})

const mainColumns = [
  {
    title: 'Col1',
    dataIndex: 'col1',
    width: '20%',
    key: 'col1',
  },
  {
    title: 'Col12',
    dataIndex: 'col2',
    width: '20%',
    key: 'col2',
  },
  {
    title: 'Col3',
    dataIndex: 'col3',
    width: '20%',
    key: 'col3',
  },
  {
    title: 'Col4',
    dataIndex: 'col4',
    width: '20%',
    key: 'col4',
  },
  {
    title: 'Action',
    key: 'rowKey',
    width: '20%',
    render: data => (
      <span>
        <Button onClick={() => this.handleView(data)}>View</Button>
      </span>
    ),
  },
]

class Submenu1 extends Component {
  state = {}

  handlePagination = page => {
    const { dispatch, filter } = this.props
    const params = {
      ...filter,
      page,
    }
    dispatch(search({ filter: params }))
  }

  render() {
    const { data, total, searching } = this.props
    const dummy = [{ col1: 'data', col2: 'data', col3: 'data', col4: 'data' }]

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Card title="Search Notification">
          <Search form={this.props.form} />
        </Card>
        <Spin spinning={searching} tip="Loading...">
          <Card title="Table List" style={{ marginTop: 20 }}>
            <Row>
              <Table
                rowKey="id"
                dataSource={data || dummy}
                columns={mainColumns}
                pagination={false}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '20px',
                }}
              >
                <Pagination
                  hideDisabled
                  prevPageText="‹"
                  nextPageText="›"
                  firstPageText="«"
                  lastPageText="»"
                  pageRangeDisplayed={5}
                  itemsCountPerPage={20}
                  activePage={this.props.pagination.page}
                  totalItemsCount={total || 1}
                  onChange={page => this.handlePagination(page)}
                />
              </div>
            </Row>
          </Card>
        </Spin>
      </MuiThemeProvider>
    )
  }
}

export default connect(
  ({ submenu1 }) => submenu1,
  dispatch => ({ dispatch }),
)(Form.create()(Submenu1))
