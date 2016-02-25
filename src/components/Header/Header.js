import React from 'react'
import { Row, Col } from 'antd'
import './Header.less'

export default class Header extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className='ant-layout-header'>
        <Row type='flex' justify='end'>
          <Col span='8'>xxxx</Col>
        </Row>
      </div>
    )
  }
}
