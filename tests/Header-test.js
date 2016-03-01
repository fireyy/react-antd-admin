import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Header from '../src/components/Header/Header';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<Header />).contains(<div className="ant-layout-header" />)).to.equal(true);
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<Header />).is('.ant-layout-header')).to.equal(true);
  });

  it("contains spec with an expectation", function() {
    expect(mount(<Header />).find('.ant-layout-header').length).to.equal(1);
  });
});
