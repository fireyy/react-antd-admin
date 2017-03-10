import React, { PropTypes } from 'react'
import { Form, Input, Button, Row, Col, Icon, notification } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

const FormItem = Form.Item

import './index.less'

const propTypes = {
  user: PropTypes.object,
  loggingIn: PropTypes.bool,
  loginErrors: PropTypes.string
};

const contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

class Login extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const error = nextProps.loginErrors;
    const isLoggingIn = nextProps.loggingIn;
    const user = nextProps.user

    this.setState({
      loading: false
    });

    if (error != this.props.loginErrors && error) {
      notification.error({
        message: 'Login Fail',
        description: error
      });
    }

    if (!isLoggingIn && !error && user)  {
      notification.success({
        message: 'Login Success',
        description: 'Welcome ' + user
      });
    }

    if (user) {
      this.context.router.replace('/home');
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    this.setState({
      loading: true
    });
    const data = this.props.form.getFieldsValue()
    this.props.login(data.user, data.password)
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
              <Button className="btn-login" type='primary' size="large" icon="poweroff" loading={this.state.loading} htmlType='submit'>确定</Button>
            </p>
          </Form>
        </Col>
      </Row>

    )
  }
}

Login.contextTypes = contextTypes;

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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
