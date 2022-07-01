import React from "react";
import PieChart from "../../../components/Elements/PieChart/PieChart";
import VerticalBarChart from "../../../components/Elements/VerticalBarChart/VerticalBarChart";

const HomeRow = ({ item }) => {

    return (
        <div className={"card mb-4 p-3 d-flex flex-row align-items-center"}>
            <h1 class="display-6">{item.project}</h1>

            <PieChart className={"w-25"} title={"Scan Coverage %"}
                labels={['Scanned', 'Not Scanned']}
                dataset={[item.scanCoverage, 100 - item.scanCoverage]} />

            <VerticalBarChart className={"w-50"} title={"Problematic Files"}
                labels={["Partially Good Files", "Bad Files"]}
                data={[[item.partiallyGoodFiles], [item.badFiles]]}
                timeSlices={[item.version]} />

        </div>

    )


}


export default HomeRow