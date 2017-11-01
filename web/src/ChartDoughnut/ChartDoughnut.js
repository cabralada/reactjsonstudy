import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class ChartDoughnut extends Component {
	componentDidMount() {
		//console.log(this.props)
    }

    render() {
		const data = {
			labels: this.props.label,
			datasets: [{
				data: this.props.infoData,
				backgroundColor: [
				'#f76923',
				'#5dc4e3'
				],
				hoverBackgroundColor: [
				'#ca551c',
				'#499cb5'
				]
			}]
		};

        return (
                <Doughnut
					data={data}
					options={{
                      maintainAspectRatio: true
                    }}
				/>
            );
        }
}

export default ChartDoughnut;
