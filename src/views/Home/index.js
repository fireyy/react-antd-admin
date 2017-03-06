import React from 'react'
import { Row, Col, Collapse, Alert } from 'antd';
const Panel = Collapse.Panel;

import PanelBox from '../../components/PanelBox';

import createG2 from 'g2-react';
import { Stat } from 'g2';
import data from '../../../fake/chart1.js';
import data2 from '../../../fake/chart2.js';

import './index.less'

const Pie = createG2(chart => {
  chart.coord('theta');
  chart.intervalStack().position(Stat.summary.proportion()).color('cut');
  chart.render();
});

const Line = createG2(chart => {
  chart.line().position('time*price').color('name').shape('spline').size(2);
  chart.render();
});

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      data0: data2.slice(0, data.length / 2 - 1),
      data1: data.slice(0, data.length / 2 - 1),
      data2: data.slice(data.length / 2 - 1, data.length),
      width: 500,
      height: 250,
      plotCfg: {
        margin: [10, 10, 50, 10]
      },
    }
  }

  componentWillMount () {
  }

  callback() {

  }

  render () {
    const detail = (
      <Collapse defaultActiveKey={['1','2','3']} onChange={this.callback}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    )
    return (
      <div>
        <Alert
          message="消息提示的文案"
          description="消息提示的辅助性文字介绍消息提示的辅助性文，字介绍消息提示的辅助性文字介绍"
          type="info"
          showIcon
        />
        <PanelBox title="最近的数据">
          <Line
            data={this.state.data0}
            width={1000}
            height={200}
          />
        </PanelBox>
        <PanelBox title="最近的数据">
          <Row className="home-row" type="flex" justify="space-between">
            <Col span="12">
              <Pie
                data={this.state.data1}
                width={this.state.width}
                height={this.state.height}
                ref="myChart"
              />
              <h3 className="home-title-x">测试数据1</h3>
            </Col>
            <Col span="12">
              <Pie
                data={this.state.data2}
                width={this.state.width}
                height={this.state.height}
                ref="myChart"
              />
              <h3 className="home-title-x">测试数据2</h3>
            </Col>
          </Row>
        </PanelBox>
        <Row className="home-row" type="flex" justify="space-between">
          <Col span="11">
            {detail}
          </Col>
          <Col span="2">
            {/**/}
          </Col>
          <Col span="11">
            {detail}
          </Col>
        </Row>
      </div>
    )
  }
}
