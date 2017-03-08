import React from 'react'
import { Row, Col, Table, Alert, Icon } from 'antd';

import PanelBox from '../../components/PanelBox';

import createG2 from 'g2-react';
import { Stat, Frame } from 'g2';
import { chartData, radarData, barData } from '../../../fake/chart2.js';

import './index.less'

const Radar = createG2(chart => {
  chart.coord('polar');
  chart.legend('name', {
    position: 'bottom'
  });
  chart.axis('year', { // 设置坐标系栅格样式
    line: null
  });
  chart.axis('..percent', { // 设置坐标系栅格样式
    grid: {
      type: 'polygon' //圆形栅格，可以改成
    }
  });
  chart.areaStack().position(Stat.summary.percent('year*value')).color('name', ['#64b5f6', '#1976d2', '#ef6c00', '#ffd54f']);
  chart.render();
});

const Line = createG2(chart => {
  chart.line().position('time*price').color('name').shape('spline').size(2);
  chart.render();
});

var frame = new Frame(barData);
frame = Frame.combinColumns(frame, ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'],'月均降雨量','月份','name');

const Bar = createG2(chart => {
  chart.col('name',{alias: '城市'});
  chart.intervalDodge().position('月份*月均降雨量').color('name');
  chart.render();
});

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150,
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const tableData = [];
for (let i = 0; i < 100; i++) {
  tableData.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default class Home extends React.Component {
  constructor () {
    super()
  }

  componentWillMount () {
  }

  callback() {

  }

  render () {

    return (
      <div>
        <Alert
          message="消息提示的文案"
          description="消息提示的辅助性文字介绍消息提示的辅助性文，字介绍消息提示的辅助性文字介绍"
          type="info"
          showIcon
        />
        <Row gutter={16} type="flex" justify="space-between">
          <Col xs={24} md={14}>
            <Row gutter={16} type="flex" justify="space-between">
              <Col xs={24} md={8}>
                <PanelBox className="card-item">
                  <Icon type="pay-circle-o" />
                  <ul>
                    <li>$25,000</li>
                    <li>今日收入</li>
                  </ul>
                </PanelBox>
              </Col>
              <Col xs={24} md={8}>
                <PanelBox className="card-item">
                  <Icon type="pay-circle-o" />
                  <ul>
                    <li>$25,000</li>
                    <li>今日收入</li>
                  </ul>
                </PanelBox>
              </Col>
              <Col xs={24} md={8}>
                <PanelBox className="card-item">
                  <Icon type="pay-circle-o" />
                  <ul>
                    <li>$25,000</li>
                    <li>今日收入</li>
                  </ul>
                </PanelBox>
              </Col>
            </Row>
            <PanelBox title="最近的数据">
              <Bar
                data={frame}
                forceFit={true}
                width={500}
                height={300}
              />
            </PanelBox>
          </Col>
          <Col xs={24} md={10}>
            <PanelBox title="最近的数据" bodyStyle={ {'padding': 0} }>
              <Line
                data={chartData}
                forceFit={true}
                width={300}
                height={180}
              />
            </PanelBox>
            <PanelBox title="最近的数据" bodyStyle={ {'padding': '10px 0'} }>
              <Radar
                data={radarData}
                forceFit={true}
                width={200}
                height={200}
              />
            </PanelBox>
          </Col>
        </Row>
        
        <PanelBox title="最近的数据">
          <Table columns={columns} dataSource={tableData} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        </PanelBox>
      </div>
    )
  }
}
