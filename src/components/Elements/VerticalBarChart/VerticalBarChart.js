import React, { memo } from 'react';
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


export default memo(VerticalBarChart);