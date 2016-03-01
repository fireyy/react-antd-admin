import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Affix , Row, Col} from 'antd';

import NavPath from '../../components/NavPath/NavPath'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'
import {fetchProfile, logout} from '../../actions/auth';

import 'antd/style/index.less';
import './App.less';

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
      <div className="ant-layout-aside">
        <Sidebar />
        <div className="ant-layout-main">
          <Header user={auth} />
          <NavPath />
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              {this.props.children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object,
  children: PropTypes.node.isRequired,
};

App.contextTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
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
