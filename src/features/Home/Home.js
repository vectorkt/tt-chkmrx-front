import React, { useEffect, useState } from "react";
import Loading from "../../components/Elements/Loading/Loading";
import SignUp from "../../components/SignUp/SignUp";
import { getAuth, getLogs } from "../../utils/api/api";
import HomePanel from "./HomePanel/HomePanel";

const Home = () => {

    const [errorMsg, setErrorMsg] = useState();
    const [isLogged, setIsLogged] = useState(true);
    const [latestLogs, setLatestLogs] = useState(null);
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
        console.log(value)
        setSearchValue(value)
    }

    const getFilteredLogs = (latestLogs, searchValue) => {
        return latestLogs.filter(
            (item) => {
                return item.project.toLowerCase().includes(searchValue.toLowerCase())
            })
    }


    useEffect(() => {
        (async () => {
            if (isLogged) {
                const response = await getLogs();
                //setLatestLogs(response);
            }
        })()
    }, [isLogged])


    return (
        <>
            {isLogged ?
                (
                    latestLogs ?
                        <HomePanel
                            searchValue={searchValue}
                            searchHandler={searchHandler}
                            latestLogs={getFilteredLogs(latestLogs, searchValue)} />
                        :
                        <Loading size={"10rem"} />
                )
                :
                <SignUp errorMsg={errorMsg} submitHandler={logInSubmitHandler} />}
        </>
    )
}

export default Home;