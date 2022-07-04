import React, { useContext, useEffect, useState } from "react";
import Input from "../../components/Elements/Input/Input";
import Loading from "../../components/Elements/Loading/Loading";
import { getLogs } from "../../utils/api/api";
import HomePanel from "./HomePanel/HomePanel";
import { isListDifferent } from "./utils/homeUtils";
import { LoginContext } from "../../App";
import SignIn from "../../components/SignIn/SignIn";
import { getAuthCookie, getLoginCookie } from "../../utils/cookies/cookies";


/**
 * The home feature, dispalying either the sign in or latest reports.
 * If the user is logged in, it fetches and stores the list of reports.
 * The search input filters out the list of reports to the one desired by the user.
 */
const Home = () => {

    const { loginState, setLoginState } = useContext(LoginContext);
    const [latestLogs, setLatestLogs] = useState(null);
    const [filteredLogs, setFilteredLogs] = useState(null);
    const [searchValue, setSearchValue] = useState('');


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
                                    autoFocus={true}
                                    value={searchValue}
                                    handler={(value) => setSearchValue(value)}
                                    placeholder={"Find a project.."}
                                    className={"w-50"}
                                />
                            </div>

                            <HomePanel {...{ filteredLogs }} />

                        </>

                        :

                        <Loading size={"10rem"} />
                )

                :
                
                <SignIn />}
        </>
    )
}

export default Home;