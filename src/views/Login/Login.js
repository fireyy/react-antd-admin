import React from 'react'
import { Form, Input, Button, Row, Col, Alert } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

const FormItem = Form.Item

import './Login.less'

@connect(
  state => ({...state}),
  dispatch => bindActionCreators({login}, dispatch)
)
class Login extends React.Component {

  constructor () {
    super()
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.login()
  }

  render () {
    return (
      <Row className="login-row" type="flex" justify="space-around" align="middle">
        <Col span="8">
          <Alert message="使用 admin/123456 进入" type="info" showIcon />
          <Form horizontal onSubmit={this.handleSubmit.bind(this)} className="login-form">
            <FormItem
              label='用户名：'
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
            >
              <Input placeholder='请输入账户名' name='userName' />
            </FormItem>
            <FormItem
              label='密码：'
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
            >
              <Input type='password' name='password' placeholder='请输入密码' />
            </FormItem>
            <Row>
              <Col span='16' offset='6'>
                <Button type='primary' htmlType='submit'>确定</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

    )
  }
}

export default Login
