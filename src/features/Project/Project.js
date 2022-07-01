import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MixedChart from "../../components/Elements/MixedChart/MixedChart";
import Table from "../../components/Elements/Table/Table";
import { getLogs } from "../../utils/api/api";



const Project = () => {

    let params = useParams()
    const [isLogged, setIsLogged] = useState(true);
    const [logs, setLogs] = useState()

    const getTableHeaders = () => {

        return [
            "Version",
            "Scan Coverage",
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


    useEffect(() => {
        (async () => {

            if (isLogged && params.project) {

                const response = await getLogs(params.project);

                setLogs(response)


            }
        })()
    }, [isLogged])

    const labels = ['Partially Good Files', 'Bad Files', ]
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
                            <p>{logs[0].project}: {logs[0].language} </p>

                            <p>{JSON.stringify(logs)}</p>

                            <MixedChart className={"w-50"}
                                labels={['Scan Coverage %', 'Scan Coverage LOC %']}
                                types={["line", "line"]}
                                timeSlices={getTimeSlices(logs)}
                                data={getCoverageData(logs)} />

                            <MixedChart className={"w-50"}
                            labels={['Partially Good Files', 'Bad Files', ]}
                            timeSlices={getTimeSlices(logs)} 
                            types={["bar", "bar"]}
                            data={getFileData(logs)} />
                            

                            <Table

                                rowHandler={rowHandler}
                                header={getTableHeaders()}
                                body=
                                {getTableBody(logs)}
                                data=
                                {getTableData(logs)}
                            />

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