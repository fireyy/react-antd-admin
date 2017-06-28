import React from 'react'
import { Row, Col, Card } from 'antd';

import './index.less'

export default class CardsPage extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="page2-box" style={{ background: '#ECECEC', padding: '30px' }}>
        <Row style={{'marginBottom': '20px'}}>
          <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Row>
        <Row style={{'marginBottom': '20px'}}>
          <Card loading title="Card title" style={{ width: '34%' }}>
            Whatever content
          </Card>
        </Row>
        <Row style={{'marginBottom': '20px'}}>
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Row>
        <Row style={{'marginBottom': '20px'}}>
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Row>
      </div>
    )
  }
}
