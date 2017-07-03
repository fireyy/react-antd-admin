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

class Login extends React.Component {

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
    this.props.login(data.user, data.password).payload.promise.then(res => {
      this.setState({
        loading: false
      });
      if (res.error) {
        message.error(res.payload.response.data.message);
      }
      if (!res.error && res.payload.data)  {
        message.success('Welcome ' + res.payload.data.name);
        this.props.history.replace('/');
      }
    }).catch(err => {
      this.setState({
        loading: false
      });
    })
  }

  toRegister () {
    this.props.history.replace('/register');
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Row className="login-row" type="flex" justify="space-around" align="middle">
        <Col span="8">
          <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)} className="login-form">
            <h2 className="logo"><span>logo</span></h2>
            <FormItem>
              {getFieldDecorator('user')(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder='admin' />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password')(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type='password' placeholder='123456' />
              )}
            </FormItem>
            <p>
              <Button className="btn-login" type='primary' size="large" icon="poweroff" loading={this.state.loading} htmlType='submit'>登录</Button>
            </p>
            <p>
              <Button className="btn-register" size="large" icon="right-square-o" htmlType='button' onClick={this.toRegister.bind(this)} >去注册</Button>
            </p>
          </Form>
        </Col>
      </Row>

    )
  }
}

Login.propTypes = propTypes;

Login = Form.create()(Login);

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
