import React, { useEffect, useState } from "react";
import Input from "../../components/Elements/Input/Input";
import Loading from "../../components/Elements/Loading/Loading";
import SignUp from "../../components/SignUp/SignUp";
import { getAuth, getLogs } from "../../utils/api/api";
import HomePanel from "./HomePanel/HomePanel";
import { isListDifferent } from "./utils/homeUtils";
import Cookies from 'universal-cookie';


const Home = () => {

    const [errorMsg, setErrorMsg] = useState();
    const [isLogged, setIsLogged] = useState(false);
    const [latestLogs, setLatestLogs] = useState(null);
    const [filteredLogs, setFilteredLogs] = useState(null);
    const [searchValue, setSearchValue] = useState('');


    const setAuthCookie = (token) => {

        const cookies = new Cookies();
        cookies.set('auth', token, { path: '/', sameSite: "strict" },);
    }

    const logInSubmitHandler = async (event, email, password) => {

        event.preventDefault();
        console.log("form called");
        const response = await getAuth(email, password);

        console.log(response)

        if (response.success) {
            //set token here
            setAuthCookie(response.accessToken)
            setIsLogged(true);
        }
        else {
            console.log("wrong")
            setErrorMsg("Something went wrong...")
        }
    }

    const fetchLogs = async () => {
        if (isLogged) {
            const response = await getLogs();
            setLatestLogs(response);
            setFilteredLogs(response);
        }
    }



    useEffect(() => {
        fetchLogs()
    }, [isLogged])



    const updateFilteredLogs = () => {

        if (isListDifferent(searchValue, latestLogs, filteredLogs)) {

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
                                    handler={(value) => setSearchValue(value)}
                                    placeholder={"Find a project.."}
                                    className={"w-50"}
                                />
                            </div>
                            <HomePanel {...{ filteredLogs }}
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