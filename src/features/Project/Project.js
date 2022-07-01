import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MixedChart from "../../components/Elements/MixedChart/MixedChart";
import PieChart from "../../components/Elements/PieChart/PieChart";
import Table from "../../components/Elements/Table/Table";
import VerticalBarChart from "../../components/Elements/VerticalBarChart/VerticalBarChart";
import { getLogs } from "../../utils/api/api";


const Project = () => {

    let params = useParams()
    const [isLogged, setIsLogged] = useState(true);
    const [logs, setLogs] = useState()
    const [details, setDetails] = useState(null)


    const getTableHeaders = () => {

        return [
            "Version",
            "Scan Coverage",
            "Scan Coverage LOC",
            "Total Files",
            "Good Files",
            "Partially Good Files",
            "Bad Files",
        ];

    }

    const getTableBody = (list) => {

        let result = list.map(item =>
            [
                item.version,
                item.scanCoverage,
                item.scanCoverageLOC,
                item.totalFiles,
                item.goodFiles,
                item.partiallyGoodFiles,
                item.badFiles,
            ]
        )

        return result;

    }

    const getTableData = (list) => {
        return list.map(item => JSON.stringify(item))

    }

    const getTableHeaders2 = (list) => {

        let result = [list[0].language, ...list.map(a => a.version)];
        return result;

    }



    const getTableBody2 = (list) => {
        console.log("called")
        let scanCoverage = ["Scan Coverage", ...list.map(a => a.scanCoverage + "%")];
        let totalFiles = ["Total Files", ...list.map(a => a.totalFiles)];
        let goodFiles = ["Good Files", ...list.map(a => a.goodFiles)];
        let partiallyGoodFiles = ["Partially Good Files", ...list.map(a => a.partiallyGoodFiles)];
        let badFiles = ["Bad Files", ...list.map(a => a.badFiles)];
        let body = [
            scanCoverage,
            totalFiles,
            goodFiles,
            partiallyGoodFiles,
            badFiles,

        ];
        console.log(scanCoverage)

        return body;
    }


    const getTimeSlices = (list) => {

        return list.map(a => a.version);
    }

    const getCoverageData = (list) => {

        let data = [
            list.map(a => a.scanCoverage),
            list.map(a => a.scanCoverageLOC),
        ]

        console.log("data")
        console.log(data)
        return data;
    }

    const getFileData = (list) => {

        let data = [
            list.map(a => a.partiallyGoodFiles),
            list.map(a => a.badFiles),
        ]

        console.log("data")
        console.log(data)
        return data;
    }


    const rowHandler = (event) => {
        var target = event.target;
        var parent = target.parentElement;
        alert(parent.getAttribute('data'));
    }

    const hoverHandler = (event) => {

        const target = event.target;
        const parent = target.parentElement;
        
        const obj = JSON.parse(parent.getAttribute('data'))
        
        if(details){
            const isDifferentObject = JSON.stringify(details) !== JSON.stringify(obj);
            if(isDifferentObject){
                setDetails(obj)
            }
        }
        else{
            setDetails(obj)
        }
       
        

        
    }


    useEffect(() => {
        (async () => {

            if (isLogged && params.project) {

                const response = await getLogs(params.project);

                setLogs(response)


            }
        })()
    }, [isLogged, params])

    const labels = ['Partially Good Files', 'Bad Files',]
    const types = ["bar", "bar"];
    const data1 = [1, 2, 3, 4, 5, 6, 7];
    const data2 = data1.map(item => item * 2)
    const data3 = data1.map(item => item * 3)
    const data = [data1, data2];


    return (
        <>
            {isLogged ?
                (
                    logs ?
                        (<>
                        
                        <h1 class="display-6">{logs[0].project}: {logs[0].language}</h1>
                            

                            {/* <p>{JSON.stringify(logs)}</p> */}
                            
                            

                            <div className={"d-flex justify-content-center align-items-center mb-4"}>
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
                                rowHandler={rowHandler}
                                header={getTableHeaders()}
                                body=
                                {getTableBody(logs)}
                                data=
                                {getTableData(logs)}
                                hoverEnterHandler={hoverHandler}
                            />
                            {details &&
                                <>
                                    <div className={"card mb-4 p-3 d-flex flex-row align-items-center"}>
                                        <h1 class="display-6">{details.version}</h1>

                                        <PieChart className={"w-25"} title={"Scan Coverage %"}
                                            labels={['Scanned', 'Not Scanned']}
                                            dataset={[details.scanCoverage, 100 - details.scanCoverage]} />

                                        <VerticalBarChart className={"w-50"} title={"Problematic Files"}
                                            labels={["Partially Good Files", "Bad Files"]}
                                            data={[[details.partiallyGoodFiles], [details.badFiles]]}
                                            timeSlices={[""]} />

                                    </div>
                                </>

                            }


                        </>
                        )
                        :
                        <p>Loading</p>

                )
                :
                <p>Redirect</p>
                // <SignUp errorMsg={errorMsg} submitHandler={logInSubmitHandler} />
            }
        </>

    )

}


export default Project;