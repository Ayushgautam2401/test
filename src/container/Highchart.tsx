import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Anime graph'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'Value'
    }
  },
  series: [{
    name: 'Data',
    data: [1, 2, 3, 1, 5, 4, 6, 2, 1, 0, 3, 2]
  }]
};

const AreaChart = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default AreaChart;
