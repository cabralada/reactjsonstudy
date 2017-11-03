import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class ChartBar extends Component {
    componentDidUpdate() {
        console.log('props:', this.props)
    }

    render() {
        const data = {
            labels: this.props.label,
            datasets: [
                {
                    label: this.props.legend,
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: this.props.infoData
                }
            ],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        };

        return (
                <HorizontalBar
                    data={data}
                    options={{
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                ticks: {beginAtZero:true}
                            }]
                        }
                    }}
                />
            );
        }
}
export default ChartBar;
