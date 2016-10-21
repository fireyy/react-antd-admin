import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Affix , Row, Col} from 'antd';

import NavPath from '../../components/NavPath'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import {fetchProfile, logout} from '../../actions/user';

import './index.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {actions} = this.props;
    actions.fetchProfile();
  }

  render() {
    const {user, actions} = this.props;

    return (
      <div className="ant-layout-aside">
        <Sidebar />
        <div className="ant-layout-main">
          <Header user={user} />
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
  user: PropTypes.object,
  children: PropTypes.node.isRequired
};

const mapStateToProps = (state) => {
  const {user} = state;
  return {
      user: user ? user : null,
  };
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({fetchProfile, logout}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
