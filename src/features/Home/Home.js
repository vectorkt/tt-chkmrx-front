import React, { useContext, useEffect, useState } from "react";
import Input from "../../components/Elements/Input/Input";
import Loading from "../../components/Elements/Loading/Loading";
import { getAuth, getLogs } from "../../utils/api/api";
import HomePanel from "./HomePanel/HomePanel";
import { isListDifferent } from "./utils/homeUtils";
import Cookies from 'universal-cookie';
import { LoginContext } from "../../App";
import SignIn from "../../components/SignIn/SignIn";



const Home = () => {


    const { loginState, setLoginState } = useContext(LoginContext);

    const [errorMsg, setErrorMsg] = useState();
    // const [isLogged, setIsLogged] = useState(false);
    const [latestLogs, setLatestLogs] = useState(null);
    const [filteredLogs, setFilteredLogs] = useState(null);
    const [searchValue, setSearchValue] = useState('');


    const setAuthCookie = (token) => {

        const cookies = new Cookies();
        cookies.set('auth', token, { path: '/', sameSite: "strict" },);
    }

    const logInSubmitHandler = async (event, email, password) => {

        event.preventDefault();

        console.log("login state before:"+loginState)

        const response = await getAuth(email, password);

        console.log(response)

        if (response.success) {
            //set token here
            console.log(JSON.stringify(loginState))
            console.log("login state before:"+loginState.isLogged)
            setAuthCookie(response.accessToken)
            // setIsLogged(true);                   
            setLoginState({...loginState,isLogged:true});
        }
        else {
            console.log("wrong")
            setErrorMsg("Something went wrong...")
        }
    }

    const fetchLogs = async () => {
        if (loginState.isLogged) {
            const response = await getLogs();
            setLatestLogs(response);
            setFilteredLogs(response);
        }
    }



    useEffect(() => {
        fetchLogs()
    }, [loginState.isLogged])



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

        if (loginState.isLogged && latestLogs) {
            updateFilteredLogs()
        }
    }
        , [searchValue])


    return (
        <>
            {loginState.isLogged ?
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
                
                <SignIn errorMsg={errorMsg} submitHandler={logInSubmitHandler} />}
        </>
    )
}

export default Home;