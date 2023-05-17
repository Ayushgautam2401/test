import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
	title: {
		text: 'Combination Chart Example'
	},
	xAxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
			'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	},
	yAxis: [{
		title: {
			text: 'Line Chart'
		}
	},
	{
		title: {
			text: 'Column Chart'
		},
		opposite: true
	}],
	series: [{
		type: 'line',
		name: 'Line Data',
		data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
	},
	{
		type: 'column',
		name: 'Column Data',
		yAxis: 1,
		data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
	},
	{
		type: 'pie',
		name: 'Pie Chart',
		data: [
			['Apples', 29.9],
			['Oranges', 71.5],
			['Bananas', 106.4]
		],
		center: [100, 80],
		size: 100,
		showInLegend: false,
		dataLabels: {
			enabled: false
		}
	}]
};

const ComboChart = () => {
	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={options}
		/>
	);
};

export default ComboChart;
