import React from "react";
import PieChart from "../PieChart/PieChart";
import VerticalBarChart from "../VerticalBarChart/VerticalBarChart";


/**
 * A row of two charts, a pie and a vertical bar.
 * @param title String, the title to display.
 * @param timeSlice List<Generic>, generates a x-axis label for the bar chart.
 * @param item Object<Log>, for the properties of the object. . 
 */
const ChartsRow = ({ title, timeSlice, item, }) => {

    return (
        <div className={"card mb-4 p-3 d-flex flex-row align-items-center"}>

            <h1 className={"display-6 text-primary"}>
                {title}
            </h1>

            <PieChart
                className={"w-25"}
                title={"Scan Coverage %"}
                labels={['Scanned', 'Not Scanned']}
                dataset={[item.scanCoverage, 100 - item.scanCoverage]}
            />

            <VerticalBarChart
                className={"w-50"}
                title={"Problematic Files"}
                labels={["Partially Good Files", "Bad Files"]}
                data={[[item.partiallyGoodFiles], [item.badFiles]]}
                timeSlices={[timeSlice]}
            />

        </div>
    )

}


export default ChartsRow