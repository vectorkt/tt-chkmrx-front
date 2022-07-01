import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);



const MixedChart = ({ className,labels,types,timeSlices,data }) => {



    const backgroundColors = [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
    ];

    const datasets = data.map((datum, index) => (
        {
            label: labels[index],
            data: datum,

            type: types[index],
            borderColor: types[index] === "line" ? backgroundColors[index] : "white",
            backgroundColor: types[index] === "bar" ? backgroundColors[index] : "white",            
            borderWidth: 2,
        })
    );

    const generatedData = {
        labels: timeSlices,
        datasets:datasets     
    };

    return (
        <div className={className} data-testid="MixedChart">
            <Chart type='bar' data={generatedData} />
        </div>
    )



}

export default MixedChart;