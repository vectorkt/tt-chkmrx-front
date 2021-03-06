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
import footPrintColors from '../../../utils/colors/colors';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);


/**
 * Generates a canvas with multiple charts
 * @param className String, additional classes.
 * @param labels List<String>,labels for the charts i.e. {['Scan Coverage %', 'Scan Coverage LOC %']}
 * @param type List<String>, the types of charts desired i.e. ["bar","line"]
 * @param timeSlice List<Generic>, generates x-axis labels for the charts.
 * @param data List<List<Integer>>, a matrix of integers to be used as data.
 */

const MixedChart = ({ className, labels, types, timeSlices, data }) => {

    const backgroundColors = footPrintColors;

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
        datasets: datasets
    };

    return (

        <div
            className={className}
            data-testid="MixedChart"
        >

            <Chart
                type='bar'
                data={generatedData}
            />

        </div>
    )



}

export default MixedChart;