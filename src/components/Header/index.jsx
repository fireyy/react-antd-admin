import React, { PropTypes } from 'react'
import { Layout, Row, Col, Icon, Badge, Menu, Dropdown } from 'antd'
import './index.less'
import { Link } from 'react-router'

const contextTypes = {
  router: PropTypes.object.isRequired
};

const { Header } = Layout;

export default class commonHeader extends React.Component {
  constructor () {
    super()
  }

  handleLogOut = () => {
    const {logout} = this.props
    logout().payload.promise.then(() => {
      this.context.router.replace('/login');
    });
  }

  render () {
    const {profile} = this.props
    let username = profile.user ? profile.user.name : '';
    const menu = (
      <Menu>
        <Menu.Item>
          选项1
        </Menu.Item>
        <Menu.Item>
          选项2
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.handleLogOut}>注销</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Row type="flex" justify="end" align="middle">
          <Col span={3}>
            <Badge className="header-icon" count={5}>
              <a href="#">
                <Icon type="mail" />
              </a>
            </Badge>
            <Badge className="header-icon" dot>
              <a href="#">
                <Icon type="notification" />
              </a>
            </Badge>
          </Col>
          <Col span={3}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                <Icon type="user" /> {username} <Icon type="down" />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
    )
  }
}

commonHeader.contextTypes = contextTypes;
