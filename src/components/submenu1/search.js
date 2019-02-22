import React from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'

import { search } from '../../reduxs/submenu1/search'

const Search = ({ form, dispatch }) => {
  const { getFieldDecorator, validateFields } = form

  const handleSubmit = e => {
    e.preventDefault()
    validateFields(err => {
      if (err) return console.log('error', err)
      return dispatch(search())
    })
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 2 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 16 },
      sm: { span: 16 },
    },
  }

  return (
    <Form
      onSubmit={e => handleSubmit(e)}
    >
      <Form.Item {...formItemLayout} label="Input">
        {getFieldDecorator('input', {
          rules: [
            {
              message: 'Please input!',
            },
          ],
        })(
          <Input
            placeholder="Input"
            style={{ width: 350 }}
            onChange={e => {
              dispatch({
                type: 'sub1/search/change',
                data: {
                  filter: {
                    input: e.target.value.trim(),
                    limit: 20,
                  },
                },
              })
            }}
          />,
        )}
        &nbsp; &nbsp;
        <Button key="save" icon="search" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  )
}

export default connect(
  //
  ({ submenu1 }) => submenu1,
  dispatch => ({ dispatch }),
)(Search)
