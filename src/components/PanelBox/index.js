import React from 'react'
import { Card } from 'antd';

import './index.less'

export default class PanelBox extends React.Component {
  constructor () {
    super()
  }

  render () {

    return (
      <Card className={"panel-box " + this.props.className} title={this.props.title} bordered={false} bodyStyle={this.props.bodyStyle}>
        {this.props.children}
      </Card>
    )
  }
}
