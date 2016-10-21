import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router'
import { getAllMenu, updateNavPath } from '../../actions/menu'

const SubMenu = Menu.SubMenu

import './index.less'

const defaultProps = {
  items: []
}

const propTypes = {
  items: PropTypes.array
}

class Sidebar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activeKey: ""
    }
    this.menuClickHandle = this.menuClickHandle.bind(this);
  }

  componentDidMount () {
    this.props.getAllMenu()
  }

  menuClickHandle (item) {
    this.setState({
      activeKey: 'menu'+item.key
    })
    this.props.updateNavPath(item.keyPath, item.key)
  }

  render () {
    const { items } = this.props
    const { router } = this.context
    let openKey = []
    let activeKey = this.state.activeKey
    const menu = items.map((item) => {
      openKey.push('sub'+item.key)
      return (
        <SubMenu
          key={'sub'+item.key}
          title={<span><Icon type={item.icon} />{item.name}</span>}
        >
          {item.child.map((node) => {
            if(node.url && router.isActive(node.url, true)){
              activeKey = 'menu'+node.key
            }
            let url = node.url
            return (
              <Menu.Item key={'menu'+node.key}>
                <Link to={url}>{node.name}</Link>
              </Menu.Item>
            )
          })}
        </SubMenu>
      )
    });
    return (
      <aside className="ant-layout-sider">
        <div className="ant-layout-logo"></div>
        <Menu
          mode="inline" theme="dark" openKeys={openKey}
          selectedKeys={[activeKey]}
          onClick={this.menuClickHandle}
        >
          {menu}
        </Menu>
      </aside>
    )
  }
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
Sidebar.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {

  return {
    items: state.menu.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllMenu: bindActionCreators(getAllMenu, dispatch),
    updateNavPath: bindActionCreators(updateNavPath, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
