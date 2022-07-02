import React, { memo } from "react";
import PieChart from "../PieChart/PieChart";
import VerticalBarChart from "../VerticalBarChart/VerticalBarChart";

const ChartsRow = ({ title, timeSlice, item, }) => {

    return (
        <div className={"card mb-4 p-3 d-flex flex-row align-items-center"}>

            <h1 className={"display-6"}>{title}</h1>

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


export default memo(ChartsRow)