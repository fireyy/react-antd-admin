import React from 'react'

import { Layout } from 'antd'

import './index.less'

const { Footer } = Layout;

export default class commonFooter extends React.Component {
  constructor () {
    super()
  }

  render () {

    return (
      <Footer style={{ textAlign: 'center' }}>
        xxxx 版权所有 © 2015 xxxxxx.com
      </Footer>
    )
  }
}
