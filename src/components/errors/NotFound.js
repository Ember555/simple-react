import React from 'react'
import { Row, Col } from 'antd'

const Page404 = () => (
  <div>
    <Row type="flex" justify="space-around" align="middle">
      <Col span={8} />
      <Col type="flex" justify="center" align="middle" span={8}>
        <img src="../../public/img/Carlslowpoke.jpg" alt="Italian Trulli" />
        <h1>404 Not Found</h1>
      </Col>
      <Col span={8} />
    </Row>
  </div>
)

export default Page404
