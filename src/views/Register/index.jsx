import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button, Row, Col, Icon, message } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/auth'

const FormItem = Form.Item

import './index.less'

const propTypes = {
  user: PropTypes.object,
  loggingIn: PropTypes.bool,
  loginErrors: PropTypes.string
};

class Register extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    this.setState({
      loading: true
    });
    const data = this.props.form.getFieldsValue()
    if (data.user ===  undefined || data.password === undefined || data.confirmpassword === undefined) {
      this.setState({
        loading: false
      });
      message.error("Incorrect user or password or confirmpassword");
    } else if (data.password !== data.confirmpassword) {
      this.setState({
        loading: false
      });
      message.error("please input correct password and confirmpassword");
    }else {
      this.setState({
        loading: false
      });
      this.props.history.replace('/login');
      message.success("Welcome " + data.user + " please login.")
    }
  }
  
  toLogin () {
    this.props.history.replace('/login');
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Row className="register-row" type="flex" justify="space-around" align="middle">
        <Col span="8">
          <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)} className="register-form">
            <h2 className="logo"><span>logo</span></h2>
            <FormItem>
              {getFieldDecorator('user')(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder='please input name' />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password')(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type='password' placeholder='please input password' />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('confirmpassword')(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type='password' placeholder='please input confirm password' />
              )}
            </FormItem>
            <p>
              <Button className="btn-register" type='primary' size="large" icon="right-square-o" loading={this.state.loading} htmlType='submit'>注册</Button>
            </p>
            <p>
              <Button className="btn-login" size="large" icon="poweroff" htmlType='button' onClick={this.toLogin.bind(this)}>去登录</Button>
            </p>
          </Form>
        </Col>
      </Row>

    )
  }
}

Register.propTypes = propTypes;

Register = Form.create()(Register);

function mapStateToProps(state) {
  const {auth} = state;
  if (auth.user) {
      return {user: auth.user, loggingIn: auth.loggingIn, loginErrors: ''};
  }

  return {user: null, loggingIn: auth.loggingIn, loginErrors: auth.loginErrors};
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))
