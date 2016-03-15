import React from 'react'
import { Row, Col, Collapse, Alert } from 'antd';
const Panel = Collapse.Panel;

import './index.less'

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
      <Collapse defaultActiveKey={['1']} onChange={this.callback}>
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
        <Alert message="消息提示的文案"
                description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
                type="info"
                showIcon />
        <Row className="home-row" type="flex" justify="space-between">
          <Col span="11">
            {detail}
          </Col>
          <Col span="11">
            {detail}
          </Col>
        </Row>
        <Row className="home-row" type="flex" justify="space-between">
          <Col span="11">
            {detail}
          </Col>
          <Col span="11">
            {detail}
          </Col>
        </Row>
      </div>
    )
  }
}
