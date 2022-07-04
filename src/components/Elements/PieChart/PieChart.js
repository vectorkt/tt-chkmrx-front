import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import footPrintColors from '../../../utils/colors/colors';


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

    const backgroundColors = footPrintColors;

    const borderColors = footPrintColors;

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