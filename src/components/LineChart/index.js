import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line as _Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import CustomizedTooltip from '../CustomizedTooltip';

import './styles.css';

//import { COLORS2 as COLORS } from '../chartsUtils';

export const COLORS = [
    // https://www.color-hex.com/color-palette/71119
    '#ffb57c',
    '#fa6579',
    '#bb1f8c',
    '#6a1596',
    '#18299b',
  
    // https://www.color-hex.com/color-palette/70941
    '#b1e2f0',
    '#f4f4b9',
    '#fdc268',
    '#fb9ed6',
    '#d282e1',
  ];

class Line extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    xDataKey: PropTypes.string.isRequired,
    yDataKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
    isPercentual: PropTypes.bool,
    ticks: PropTypes.arrayOf(PropTypes.any),
  }

  state = {
    collapsed: true,
  }

  toPercent(decimal, fixed = 0) {
    return `${(decimal * 100 * 100).toFixed(fixed) / 100}%`;
  }

  toNumber(decimal, fixed = 2) {
    let { currency } = this.props;
    currency = currency === 'AR$' ? '$' : currency;
    return `${currency ? currency + ' ' : ''}${(decimal).toFixed(fixed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

  toRoundNumber(decimal) {
    return this.toNumber(decimal, 0);
  }

  getDataKeyColor(index) {
    return COLORS[index] || COLORS[COLORS.length - 1];
  }

  render() {
    const { data, xDataKey, yDataKeys, isPercentual, ticks, customStroke = {}, colors } = this.props;

    return (
      <LineChart width={650} height={400} data={data}
        margin={{ top: 10, right: 0, left: 5, bottom: 10 }}
        className='line-chart'>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xDataKey} />
        <YAxis ticks={ticks} tickFormatter={isPercentual ? this.toPercent : this.toRoundNumber.bind(this)} />
        <Tooltip content={<CustomizedTooltip />} formatter={isPercentual ? this.toPercent : this.toNumber.bind(this)} />
        {!yDataKeys.includes('value') ? <Legend /> : null}
        {yDataKeys.map((dataKey, i) => (
          <_Line type='monotone' dataKey={dataKey} stroke={customStroke[dataKey] || colors[i]} fill={colors[i]} key={`${dataKey}-${i}`} />
        ))}
      </LineChart>
    );
  }
}

export default Line;