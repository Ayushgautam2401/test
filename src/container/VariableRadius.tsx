import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45
    }
  },
  title: {
    text: 'Variable Radius Pie Chart Example'
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45,
      dataLabels: {
        enabled: false
      }
    }
  },
  series: [{
    minPointSize: 10,
    innerSize: '20%',
    zMin: 0,
    name: 'countries',
    data: [{
        name: 'Spain',
        y: 505992,
        z: 92
    }, {
        name: 'France',
        y: 551695,
        z: 119
    }, {
        name: 'Poland',
        y: 312679,
        z: 121
    }, {
        name: 'Czech Republic',
        y: 78865,
        z: 136
    }, {
        name: 'Italy',
        y: 301336,
        z: 200
    }, {
        name: 'Switzerland',
        y: 41284,
        z: 213
    }, {
        name: 'Germany',
        y: 357114,
        z: 235
    }]
}]
};

const VariableRadiusPie: React.FC = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default VariableRadiusPie;
