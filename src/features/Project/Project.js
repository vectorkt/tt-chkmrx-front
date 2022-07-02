import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { getLogs } from "../../utils/api/api";
import { generateTextFile } from "./utils/projectUtils";
import ProjectPanel from "./ProjectPanel/ProjectPanel";
import Loading from "../../components/Elements/Loading/Loading";
import { LoginContext } from "../../App";

const Project = () => {

    let params = useParams()
    const { loginState, setLoginState } = useContext(LoginContext)
    const [logs, setLogs] = useState()
    const [details, setDetails] = useState(null)

    const rowClickHandler = (event) => {
        const target = event.target;
        const parent = target.parentElement;
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


    const fetchLogs = async () => {

        if (loginState.isLogged && params.project) {

            const response = await getLogs(params.project);

            setLogs(response)
            setDetails(null)
        }
    }

    useEffect(() => {
        fetchLogs()
    }, [loginState.isLogged, params])


    return (
        <>
            {loginState.isLogged ?
                (
                    logs ?
                        <ProjectPanel {...{ logs, details, rowClickHandler, hoverHandler }} />
                        :
                        <Loading size={"10rem"} />

                )
                :
                <Navigate replace to="/home" />
                // <Navigate replace to="/home" />
                // <Redirect to="/" />
                // <SignUp errorMsg={errorMsg} submitHandler={logInSubmitHandler} />
            }
        </>

    )

}


export default Project;