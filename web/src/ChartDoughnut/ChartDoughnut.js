import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green'
	],
	datasets: [{
		data: [300, 50],
		backgroundColor: [
		'#FF6384',
		'#36A2EB'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB'
		]
	}]
};

class ChartDoughnut extends Component {
    render() {
        return (
                <Doughnut data={data} />
            );
        }
}

export default ChartDoughnut;
