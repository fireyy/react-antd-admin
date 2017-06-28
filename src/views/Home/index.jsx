import React from 'react'
import { Row, Col, Table, Alert, Icon } from 'antd';

import GM from 'g2-mobile';
GM.Global.pixelRatio = 2;
const Util = GM.Util;

import PanelBox from '../../components/PanelBox';

import createGM from '../../utils/gm';
import { chartData, pieData, barData } from '../../../fake/chart2.js';

import './index.less'

var Shape = GM.Shape;
var G = GM.G;
//自定义绘制数据的的形状
Shape.registShape('point', 'dashBoard', {
  getShapePoints:function(cfg){
    var x = cfg.x;
    var y = cfg.y;
    return [
      {x: x, y: y},
      {x: x, y: 0.5}
    ]
  },
  drawShape: function(cfg, canvas){
    var point1 = cfg.points[0];
    var point2 = cfg.points[1];
    point1 = this.parsePoint(point1);
    point2 = this.parsePoint(point2);
    G.drawLines([point1, point2], canvas, {
      stroke: '#18b7d6',
      lineWidth: 2
    });
    var text = cfg.origin._origin.value.toString();
    G.drawText(text+'%', cfg.center, canvas, {
      fillStyle: '#f75b5b',
      font:'30px Arial',
      textAlign: 'center',
      textBaseline: 'bottom'
    });
    G.drawText(cfg.origin._origin.pointer, cfg.center, canvas, {
      fillStyle: '#ccc',
      textAlign: 'center',
      textBaseline: 'top'
    });
  }
});
const Pie = createGM(chart => {
  chart.source(pieData, {
    'value': {type: 'linear',min: 0,max: 15,tickCount: 6},
    'length': {type: 'linear',min: 0,max: 10},
    y: {type: 'linear',min: 0, max: 1}
  });
  chart.coord('polar',{
    inner: 0,
    startAngle: -1.25 * Math.PI,
    endAngle: 0.25 * Math.PI
  });
  //配置value轴刻度线
  chart.axis('value', {
    tickLine: {
      strokeStyle: '#b9e6ef',
      lineWidth: 2,
      value: -5
    },
    label: null,
    grid: null,
    line: null
  });
  chart.axis('y', false);
  //绘制仪表盘辅助元素
  chart.guide().arc([0,1.05],[4.8,1.05],{
    strokeStyle: '#18b7d6',
    lineWidth:5,
    lineCap: 'round'
  });
  chart.guide().arc([5.2,1.05],[9.8,1.05],{
    strokeStyle: '#ccc',
    lineWidth:5,
    lineCap: 'round'
  });
  chart.guide().arc([10.2,1.05],[15,1.05],{
    strokeStyle: '#ccc',
    lineWidth:5,
    lineCap: 'round'
  });
  chart.guide().arc([0,1.2],[15,1.2],{
    strokeStyle: '#ccc',
    lineWidth:1
  });
  chart.guide().text([-0.5,1.3], '0.00%', {
    fillStyle: '#ccc',
    font:'18px Arial',
    textAlign: 'center'
  });
  chart.guide().text([7.5,0.7], '7.50%', {
    fillStyle: '#ccc',
    font:'18px Arial',
    textAlign: 'center'
  });
  chart.guide().text([15.5,1.3], '15.00%', {
    fillStyle: '#ccc',
    font:'18px Arial',
    textAlign: 'center'
  });
  chart.point().position('value*y').size('length').color('#18b7d6').shape('dashBoard');
  chart.render();
}, 218);

const Line = createGM(chart => {
  var defs = {
    time: {
      tickCount: 7,
      range:[0,1]
    },
    tem: {
      tickCount: 5,
      min: 0
    }
  };
  //配置time刻度文字样式
  var label = {
    fill: '#979797',
    font: '14px san-serif',
    offset: 6
  };
  chart.axis('time', {
    label: function (text, index, total) {
      var cfg = Util.mix({}, label);
      // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
      if (index === 0) {
        cfg.textAlign = 'start';
      }
      if (index > 0 && index === total - 1) {
        cfg.textAlign = 'end';
      }
      return cfg;
    }
  });
  //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
  chart.axis('tem', {
    label: {
      fontSize: 14
    }
  });
  chart.source(chartData, defs);
  chart.line().position('time*tem').color('city').shape('smooth');
  chart.render();
}, 200);

const Bar = createGM(chart => {
  chart.source(barData, {
    tem: {
      tickCount: 5
    }
  });
  //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
  chart.axis('time', {
    label:{
      fontSize: 14
    },
    grid: null
  });
  chart.axis('tem', {
    label:{
      fontSize: 14
    }
  });
  chart.intervalStack().position('time*tem').color('city');
  chart.render();
}, 320);

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
        <div style={{'marginBottom': '20px'}}>
          <Alert
            message="消息提示的文案1"
            description="消息提示的辅助性文字介绍消息提示的辅助性文，字介绍消息提示的辅助性文字介绍"
            type="info"
            showIcon
          />
        </div>
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
                data={barData}
              />
            </PanelBox>
          </Col>
          <Col xs={24} md={10}>
            <PanelBox title="最近的数据" bodyStyle={ {'padding': 0} }>
              <Line
                data={chartData}
              />
            </PanelBox>
            <PanelBox title="最近的数据" bodyStyle={ {'padding': 0} }>
              <Pie
                data={pieData}
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
