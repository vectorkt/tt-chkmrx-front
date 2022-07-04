
import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getTitles } from "../../utils/api/api";
import Navbar from "../Elements/Navbar/Navbar";
import { LoginContext } from "../../App";


const MainLayout = () => {

    const [titles, setTitles] = useState(null);
    const { loginState, setLoginState } = useContext(LoginContext)

    const fetchTitles = async () => {
        const data = await getTitles();
        setTitles(data);
    }


    useEffect(() => {
        if (loginState.isLogged) {
            fetchTitles()
        }
        else {
            setTitles(null)
        }

    }, [loginState.isLogged])


    return (
        <>
            <Navbar isLoggedIn={loginState.isLogged} titles={titles} />

            <div className="container-md d-flex flex-column justify-content-center mt-4">                

                <Outlet />

            </div>
        </>
    )
}

export default MainLayout;