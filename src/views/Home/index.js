import React from 'react'
import { Row, Col, Collapse, Alert } from 'antd';
const Panel = Collapse.Panel;

import PanelBox from '../../components/PanelBox';

import {Line,Pie,Doughnut} from 'react-chartjs';

import './index.less'

const chartOption = {
  responsive: true
}

const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
      {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
      }
  ]
};

const pieData = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];

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
          <Line data={lineData} options={chartOption} />
        </PanelBox>
        <PanelBox title="最近的数据">
          <Row className="home-row" type="flex" justify="space-between">
            <Col span="12">
              <Pie data={pieData} options={chartOption} />
              <h3 className="home-title-x">测试数据1</h3>
            </Col>
            <Col span="12">
              <Doughnut data={pieData} options={chartOption} />
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
