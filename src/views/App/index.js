import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Layout, Affix , Row, Col} from 'antd';

import NavPath from '../../components/NavPath'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import {fetchProfile, logout} from '../../actions/auth';

import './index.less';

const { Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {actions} = this.props;
    actions.fetchProfile();
  }

  render() {
    const {auth, actions} = this.props;

    return (
      <Layout className="ant-layout-has-sider">
        <Sidebar />
        <Layout>
          <Header profile={auth} logout={actions.logout} />
          <Content style={{ margin: '0 16px' }}>
            <NavPath />
            <div style={{ minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node.isRequired
};

const mapStateToProps = (state) => {
  const {auth} = state;
  return {
      auth: auth ? auth : null,
  };
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({fetchProfile, logout}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
