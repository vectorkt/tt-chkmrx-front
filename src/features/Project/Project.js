import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MixedChart from "../../components/Elements/MixedChart/MixedChart";
import Table from "../../components/Elements/Table/Table";
import { getLogs } from "../../utils/api/api";
import ChartsRow from "../../components/Elements/ChartsRow/ChartsRow";
import { generateTextFile, getCoverageData, getFileData, getTableBody, getTableData, getTableHeaders, getTimeSlices } from "./utils/projectUtils";

const Project = () => {

    let params = useParams()
    const [isLogged, setIsLogged] = useState(true);
    const [logs, setLogs] = useState()
    const [details, setDetails] = useState(null)




    const rowClickHandler = (event) => {
        var target = event.target;
        var parent = target.parentElement;

        generateTextFile(parent.getAttribute('data'));

    }

    const hoverHandler = (event) => {

        const target = event.target;
        const parent = target.parentElement;

        const obj = JSON.parse(parent.getAttribute('data'))

        if (details) {
            const isDifferentObject = JSON.stringify(details) !== JSON.stringify(obj);
            if (isDifferentObject) {
                setDetails(obj)
            }
        }
        else {
            setDetails(obj)
        }




    }


    useEffect(() => {
        (async () => {

            if (isLogged && params.project) {

                const response = await getLogs(params.project);

                setLogs(response)
                setDetails(null)


            }
        })()
    }, [isLogged, params])


    return (
        <>
            {isLogged ?
                (
                    logs ?
                        (<>

                            <h1 className={"display-6"}>{logs[0].project}: {logs[0].language}</h1>


                            {/* <p>{JSON.stringify(logs)}</p> */}



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