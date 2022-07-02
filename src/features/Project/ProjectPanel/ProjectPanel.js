import React from "react";
import ChartsRow from "../../../components/Elements/ChartsRow/ChartsRow";
import MixedChart from "../../../components/Elements/MixedChart/MixedChart";
import Table from "../../../components/Elements/Table/Table";
import { getCoverageData, getFileData, getTableBody, getTableData, getTableHeaders, getTimeSlices } from "../utils/projectUtils";

const ProjectPanel = ({ logs, details, rowClickHandler, hoverHandler }) => {
    return (
        <>
            <h1 className={"display-6"}>{logs[0].project}: {logs[0].language}</h1>

            <div className={"card mb-4 p-3 d-flex flex-row justify-content-center align-items-center mb-4"}>

                <MixedChart className={"w-50"}
                    labels={['Scan Coverage %', 'Scan Coverage LOC %']}
                    types={["line", "line"]}
                    timeSlices={getTimeSlices(logs)}
                    data={getCoverageData(logs)} />

                <MixedChart className={"w-50"}
                    labels={['Partially Good Files', 'Bad Files',]}
                    timeSlices={getTimeSlices(logs)}
                    types={["bar", "bar"]}
                    data={getFileData(logs)} />
                    
            </div>

            <Table
                rowClickHandler={rowClickHandler}
                header={getTableHeaders()}
                body={getTableBody(logs)}
                data={getTableData(logs)}
                hoverEnterHandler={hoverHandler}
            />

            {details && <ChartsRow title={details.version} item={details} timeSlice={""} />}
        </>
    )
}

export default ProjectPanel;