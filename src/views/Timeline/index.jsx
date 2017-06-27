import React from 'react'
import { Timeline, Icon } from 'antd';
import PanelBox from '../../components/PanelBox';

import './index.less'

let data = [
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: 'clock-circle-o',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  },
  {
    icon: '',
    title: "Create a services site",
    time: "2015-09-01"
  }
]

export default class TimelinePage extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.setState({
      data: data
    });
  }
  render() {
    return (
      <PanelBox title="Timeline Page">
        <Timeline>
          {this.state.data.map((item, i) => {
            return (
              <Timeline.Item key={i} dot={item.icon ? <Icon type={item.icon} style={{ fontSize: '16px' }} /> : null} color="green">{item.title} {item.time}</Timeline.Item>
            )
          })}
        </Timeline>
      </PanelBox>
    );
  }
}
