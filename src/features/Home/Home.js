import React, { useEffect, useState } from "react";
import Input from "../../components/Elements/Input/Input";
import Loading from "../../components/Elements/Loading/Loading";
import SignUp from "../../components/SignUp/SignUp";
import { getAuth, getLogs } from "../../utils/api/api";
import HomePanel from "./HomePanel/HomePanel";

const Home = () => {

    const [errorMsg, setErrorMsg] = useState();
    const [isLogged, setIsLogged] = useState(true);
    const [latestLogs, setLatestLogs] = useState(null);
    const [filteredLogs, setFilteredLogs] = useState(null);
    const [searchValue, setSearchValue] = useState('');

    const logInSubmitHandler = async (event, email, password) => {

        event.preventDefault();
        console.log("form called");
        const response = await getAuth(email, password);

        console.log(response)

        if (response.success) {
            //set token here
            setIsLogged(true);
        }
        else {
            console.log("wrong")
            setErrorMsg("Something went wrong...")
        }
    }

    const searchHandler = (value) => {

        setSearchValue(value)
    }

    useEffect(() => {
        (async () => {
            if (isLogged) {
                const response = await getLogs();
                setLatestLogs(response);
                setFilteredLogs(response);
            }
        })()
    }, [isLogged])


    const isListDifferent = () => {
        const projects = latestLogs.map(l => l.project);

        const filteredProjects = filteredLogs
            .map(l => l.project)
            .filter(p => p.toLowerCase().includes(searchValue.toLowerCase()));

        const isListDifferent = JSON.stringify(projects) !== JSON.stringify(filteredProjects);

        return isListDifferent;

    }

    const updateFilteredLogs = () => {   

        if (isListDifferent()) {

            const filtered = latestLogs.filter(
                (item) => {
                    return item.project.toLowerCase().includes(searchValue.toLowerCase())
                })

            setFilteredLogs(filtered);
        }
    }

    useEffect(() => {

        if (isLogged && latestLogs) {
            updateFilteredLogs()
        }
    }
        , [searchValue])


    return (
        <>
            {isLogged ?
                (
                    latestLogs ?

                        <>
                            <div className={"d-flex justify-content-center align-items-center mb-4"}>
                                <Input
                                    value={searchValue}
                                    handler={searchHandler}
                                    placeholder={"Find a project.."}
                                    className={"w-50"}
                                />
                            </div>
                            <HomePanel
                                // searchValue={searchValue}
                                // searchHandler={searchHandler}
                                // latestLogs={getFilteredLogs(latestLogs, searchValue)}
                                {...{ filteredLogs }}
                            />
                        </>

                        :
                        <Loading size={"10rem"} />
                )
                :
                <SignUp errorMsg={errorMsg} submitHandler={logInSubmitHandler} />}
        </>
    )
}

export default Home;