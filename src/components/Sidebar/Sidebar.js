import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router'
import { getAllMenu } from '../../actions/menu'

const SubMenu = Menu.SubMenu

import './Sidebar.less'

const defaultProps = {
  items: [],
  currentIndex: 0
}

const propTypes = {
  items: PropTypes.array,
  currentIndex: PropTypes.number
}

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.getAllMenu()
  }

  render () {
    const { items } = this.props
    let openKey = []
    const menu = items.map((item, index) => {
      openKey.push('sub'+index)
      return (
        <SubMenu key={'sub'+index} title={<span><Icon type={item.icon} />{item.name}</span>}>
          {item.child.map((node, key) => {
            return (
              <Menu.Item key={index+'-'+key}>{node.name}</Menu.Item>
            )
          })}
        </SubMenu>
      )
    });
    console.log(openKey)
    return (
      <aside className="ant-layout-sider">
        <div className="ant-layout-logo"></div>
        <Menu mode="inline" theme="dark" openKeys={openKey}>
          {menu}
        </Menu>
      </aside>
    )
  }
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

function mapStateToProps(state) {

  return {
    items: state.menu.items,
    currentIndex: state.menu.currentIndex
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllMenu: bindActionCreators(getAllMenu, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
