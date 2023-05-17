import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Best Anime list'
  },
  series: [{
    name: 'Data',
    data: [
      ['One Pice', 29.9],
      ['Naruto', 71.5],
      ['DBS', 90.4],
      ['Tokiyo revenger', 14.4],
      ['God of highSchool', 14],

    ]
  }]
};

const PieChart = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default PieChart;
