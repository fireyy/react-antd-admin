import React, { PropTypes } from 'react'
import { Row, Col, Icon, Menu, Dropdown } from 'antd'
import './index.less'
import { Link } from 'react-router'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const contextTypes = {
  router: PropTypes.object.isRequired
};

export default class Header extends React.Component {
  constructor () {
    super()
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleClick () {

  }

  handleLogOut () {
    const {logout} = this.props
    logout().payload.promise.then(() => {
      this.context.router.replace('/login');
    });
  }

  render () {
    const {profile} = this.props
    let username = profile.user ? profile.user.name : '';

    return (
      <div className='ant-layout-header'>
        <Menu className="header-menu" onClick={this.handleClick}
        mode="horizontal">
          <SubMenu title={<span><Icon type="user" />{username}</span>}>
            <Menu.Item key="setting:1">选项1</Menu.Item>
            <Menu.Item key="setting:2">选项2</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="setting:3"><span onClick={this.handleLogOut}>注销</span></Menu.Item>
          </SubMenu>
          <Menu.Item key="mail">
            <Icon type="question" />帮助
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

Header.contextTypes = contextTypes;