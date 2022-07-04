import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import footPrintColors from '../../../utils/colors/colors';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const VerticalBarChart = ({ className, title, labels, data, timeSlices }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };

    const backgroundColors = footPrintColors;

    const datasets = data.map((datum, index) => (
        {
            label: labels[index],
            data: datum,
            backgroundColor: backgroundColors[index]
        })
    );

    const generatedData = {
        labels: timeSlices,
        datasets: datasets
    };

    return (
        <div className={className} data-testid="VerticalBarChart">
            <Bar options={options} data={generatedData} />
        </div>
    )


}


export default VerticalBarChart;