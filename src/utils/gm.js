import GM from 'g2-mobile';
import React from 'react';
import PropTypes from 'prop-types';

let uniqueId = 0;
function generateUniqueId() {
  return `rc-gm-${uniqueId++}`;
}

export default function createGM(__operation, height = null) {
  class Component extends React.Component {

    constructor(props, context) {
      super(props, context);
      this.chart = null;
      this.chartId = generateUniqueId();
    }

    componentDidMount() {
      this.initChart(this.props);
    }

    componentWillReceiveProps(newProps) {
      const { data: newData } = newProps;
      const { data: oldData } = this.props;

      if (newData !== oldData) {
        this.chart.changeData(newData);
      }
    }

    shouldComponentUpdate() {
      return false;
    }

    componentWillUnmount() {
      this.chart.destroy();
      this.chart = null;
      this.chartId = null;
    }

    initChart(props) {
      const { data } = props;
      const chart = new GM.Chart({
        id: this.chartId
      });
      chart.source(data);
      __operation(chart);
      this.chart = chart;
    }

    render() {
      return (<canvas id={this.chartId} style={ {'width':'100%', 'height': height} }></canvas>);
    }
  }

  Component.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  return Component;
}
