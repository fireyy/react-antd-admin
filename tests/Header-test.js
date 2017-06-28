import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Header from '../src/components/Header/index.jsx';

let auth = {
  user: {
    name: "fireyy"
  }
};
let logout = () => {};

describe("<Header />", function() {
  it("mount", function() {
    expect(mount(
      <MemoryRouter>
        <Header profile={auth} logout={logout} />
      </MemoryRouter>
    ).find('.ant-layout-header').length).to.equal(1);
  });

  it("pass user profile", function() {
    expect(mount(
      <MemoryRouter>
        <Header profile={auth} logout={logout} />
      </MemoryRouter>
    ).find('.ant-dropdown-link').html()).to.contain('fireyy');
  });
});
