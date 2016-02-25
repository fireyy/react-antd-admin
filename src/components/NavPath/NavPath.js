import React from 'react'
import { bindActionCreators } from 'redux'
import { Breadcrumb } from 'antd'
import { connect } from 'react-redux'

import './NavPath.less'

export default class NavPath extends React.Component {
  constructor () {
    super()
  }

  render () {

    return (
      <div className="ant-layout-breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>应用列表</Breadcrumb.Item>
          <Breadcrumb.Item>某应用</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}
