import React, { memo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


const PieChart = ({ className, title, labels, dataset }) => {

    ChartJS.register(ArcElement, Tooltip, Legend);

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
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
    ];

    const borderColors = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
    ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data: dataset,
                backgroundColor: backgroundColors.slice(0,dataset.length),
                borderColor: borderColors.slice(0,dataset.length),
                borderWidth: 1,
            },
        ],
    };


    return (
        <div className={className} data-testid="PieChart">
            <Pie options={options} data={data} />
        </div>
    )


}

export default PieChart;