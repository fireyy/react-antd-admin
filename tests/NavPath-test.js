import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Breadcrumb } from 'antd';
import NavPath from '../src/components/NavPath/index.jsx';

describe("<NavPath />", function() {
  const navpath = [
    {
      key: '1',
      name: '面包屑1'
    },
    {
      key: '2',
      name: '面包屑2'
    }
  ];

  it("default", function() {
    expect(shallow(<NavPath />).find(Breadcrumb.Item)).to.have.length(1);
  });

  it("Breadcrumb Item length", function() {
    expect(shallow(<NavPath data={navpath} />).find(Breadcrumb.Item)).to.have.length(3);
  });
});
