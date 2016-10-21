import React from 'react'
import { Row, Col, Card } from 'antd';

import './index.less'

export default class Page2 extends React.Component {
  constructor () {
    super()
  }

  componentWillMount () {
  }

  callback() {

  }

  render () {
    return (
      <div className="page2-box" style={{ background: '#ECECEC', padding: '30px' }}>
        <Row>
          <Col span="8">
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span="8">
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span="8">
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
        </Row>
      </div>
    )
  }
}
