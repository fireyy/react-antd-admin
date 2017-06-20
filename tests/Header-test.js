import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Header from '../src/components/Header/index.jsx';

let auth = {
  user: {
    name: "fireyy"
  }
};
let logout = () => {};

describe("<Header />", function() {
  it("mount", function() {
    expect(mount(<Header profile={auth} logout={logout} />).find('.ant-layout-header').length).to.equal(1);
  });

  it("pass user profile", function() {
    expect(mount(<Header profile={auth} logout={logout} />).find('.ant-dropdown-link span').html()).to.contain('fireyy');
  });
});
